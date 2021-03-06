class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      query: ''
    };
  }
  
  onVideoListClick(video) {
    this.setState({
      currentVideo: video 
    });
  }

  onSearchKey(event) {
    this.setState({
      query: event.target.value
    }, () => {
      this.props.searchYouTube( { query: this.state.query }, (data) => {
        this.setState({
          videos: data,
          currentVideo: data[0]
        });
      });
    });
    // console.log(this.state.query);
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchKey={this.onSearchKey.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoListClick={this.onVideoListClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.options = {
      query: this.state.query,
    };
    this.props.searchYouTube(this.options, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
