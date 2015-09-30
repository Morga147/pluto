var sleepIn = function(day){
  return (day=='Saturday' || day == 'Sunday');
}

var pluralize = function(array){
  if(array.length === 1){
    return array[0];
  }else{
    var lastWord = array.pop();
    return array.join(", ") + ", and " + lastWord;
  }
}

var prettyTime = function(sec){
  var minutes = Math.floor(sec/60);
  var statement = minutes + " minutes";
  var seconds = sec%60;
  if(seconds > 0){
    return statement += " and " + seconds + " seconds";
  }else {
    return statement;
  }
}
