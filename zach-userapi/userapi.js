
var randURL= "https://randomuser.me/api/"

$.ajax({
  url: randURL,

  success: function(data) {
    var firstName = data.results[0].name.first;
    var lastName = data.results[0].name.last;
    var photo = data.results[0].picture.small;
    var state = data.results[0].location.state;

    console.log(firstName);
    $("body").append("<h1> herro dere, im " + firstName + " " + lastName + " and im from " + state + "</h1>");
  }
});