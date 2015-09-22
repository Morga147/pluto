// $(function(){
//   city = $(".pure-input-rounded");
//
//   $(".pure-button").click(function(event){
//     event.preventDefault();
//
//     $.get("http://api.openweathermap.org/data/2.5/find?q="+city+"&units",
//           function(data){
//             farenheit = (data.list[0].main.temp);
//             $("#forecast").text("In " + city.val() + " it's " + farenheit +
//               " degrees Farenheit.");
//             });
//   });
// });


$(function(){
  $(".pure-button").click(function(event){

     event.preventDefault();

     var city = $(".pure-input-rounded").val();
     var farenheit = event.currentTarget.dataset.temp;

$.ajax({
			url: "http://api.openweathermap.org/data/2.5/find?q="+city+"&units=imperial",
			method: 'GET',
			data: { temp: farenheit },
			success: function(data, status, xhr) {
				var x = data.list[0].main.temp;
        $("#forecast").text("In " + city + " it's " + x +
                            " degrees Farenheit.")
			},
			error: function(xhr, status, error) {
				console.log("Yikes!", error);
			}
		});
  });
});
