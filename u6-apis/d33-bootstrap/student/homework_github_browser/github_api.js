$(function(){
  // debugging as I go. Making sure jquery is working.
  console.log("jQuery Working");
  $(".submit-button").click(function(event){
    // Making sure button-clicking is working
    console.log("button-clicked");
    event.preventDefault();
    var username = $(".username-field").val();

// Part 1
$.ajax({
			url: "https://api.github.com/users/"+username,
			method: 'GET',
			success: function(result, status, xhr) {
				var name = result.name;
        var avatar = result.avatar;
        var repos = result.public_repos;
        var gists = result.public_gists;
        $(".user-info").text("Name: " + name +
                              "\nAvatar: " + avatar +
                              "\nPublic-Repos: " + repos +
                              "\nPublic-Gists: " + gists);
			},
			error: function(xhr, status, error) {
				$(".user-info").text("Yikes!", error);
			}
		});

// Part 2
  $.ajax({
    url: ""
    method:
    success:
    error:
  });
  });
});
