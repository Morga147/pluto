assassin();
function assassin() {
  var name;
  do{
    name = prompt("Freeze! Who are you?");
    if (name === "han solo"){
      alert("You are mine at last, Solo!");
    } else {
      alert("You must die! (zap zap kaboom)");

    }
  } while (name != "Han Solo");

}
