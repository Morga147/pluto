# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(function(){
  $('button').click(function(event)){
    var candidateId = event.currentTarget.dataset.id;
  });
  $.ajax({
    url: '/candidates/vote',
    method: 'POST',
    data: {id: candidateId},
    success: function(data, status, xhr) {
      console.log("Very nice!", data)
    },
    error: function(xhr, status, error){
      console.log("Yikes", error)
    }

    });
