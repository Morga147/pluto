var cowsay = require('cowsay');

module.exports = function(movieTitle){
  console.log(cowsay.say({text: "I LOVE "+movieTitle}));
}
