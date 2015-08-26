$(function() {

  $("#level3").click(function(event){
    event.stopPropagation();
    alert("Clicked on " + $(event.currentTarget).attr.('id'));
  });

  $("#level2").click(function(event){
    alert("Clicked on " + $(event.currentTarget).attr("id"));
  });

  $("body").click(function(event){
    alert("Clicked on " + event);
  });

//Pan's Code: (Actually works)

  // $('body').click(function(event) {
  //   alert('Bubbled up to <body>');
  // });
  //
  // $('div#level1').click(function(event) {
  //   alert('Bubbled on level1')
  // });
  //
  // $('p#level2').click(function(event) {
  //   alert('Bubbled on level2')
  // });
  //
  // $('span#level3').click(function(event) {
  //   highlight(event.currentTarget);
  // });
  //
  // var highlight = function(element) {
  //   $(element).css('background-color', 'yellow');
  //   alert($(element).attr('id'));
  //   $(element).css('background-color', '');
  // }
})();
