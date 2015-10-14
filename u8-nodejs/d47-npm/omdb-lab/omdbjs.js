var request = require('request');

module.exports = function(movieTitle){
  request('http://www.omdbapi.com/?t='+movieTitle,
        function(error, response, body){
          if(!error && response.statusCode == 200){
            var movieData = JSON.parse(body);
            console.log(movieData.Title +
            "\nReleased: "+ movieData.Year +
            "\nDirected by: "+ movieData.Director +
            "\n"+ movieData.Plot
          );
          }
        });
}
