var searchYouTube = ({ query, max = 5, key = window.YOUTUBE_API_KEY }, callback) => {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    // contentType: 'application/json',
    data: {
      q: query,
      maxResults: max,
      key: key,
      part: 'snippet',
      type: 'video'
    },
    success: function (data) {
      console.log('SUCCESS!', data);
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to GET', data);
    },
  });
};

window.searchYouTube = searchYouTube;
