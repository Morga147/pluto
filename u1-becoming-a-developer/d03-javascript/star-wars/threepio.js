function threePio() {
  window.alert('Hello, I am C-3PO, human-cyborg relations.');
  name();
}

function name() {
  var input = prompt('And your name is?');
  if (input.toLowerCase() === 'obi-wan kenobi') {
    alert('Oh, marvelous! Simply marvelous! Say hello to R2-D2; he has been looking all over for you.');
  } else {
      var yesOrNo = prompt('It is a pleasure to meet you, ' + input + '. I am terribly sorry for prying, but do you by chance go by the alias Obi-Wan Kenobi? [yes/no]');
      if (yesOrNo.toLowerCase() === 'yes' || yesOrNo.toLowerCase() === 'y') {
        alert('Oh, marvelous! Simply marvelous! Say hello to R2-D2; he has been looking all over for you.');
      } else if (yesOrNo.toLowerCase() === 'no' || yesOrNo.toLowerCase() === 'n') {
        alert('I have enjoyed speaking with you, ' + input + ', but please excuse me, I have to help my friend find someone named Obi-Wan Kenobi.');
        alert('Well R2, I suppose we will just have to keep looking.  R2-D2: (Agreeable droid noises).');
      } else {
        alert('I am sorry, I did not hear you correctly. I only respond to [yes] or [no].');
        alert(yesOrNo);
        alert('Well R2, I suppose we will just have to keep looking. R2-D2: (Agreeable droid noises).');
      }
  }
}
