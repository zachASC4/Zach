var userURL = "https://randomuser.me/api/";
var countryURL = "https://restcountries.eu/rest/v2/alpha/NL";

$.ajax({
  url: userURL,
  success: (function(data) {
    var dataResults = data.results[0];  
    var firstName = dataResults.name.first;
    var lastName = dataResults.name.last;
    var photo = dataResults.picture.small;
    var state = dataResults.location.state;
    var countryAbbreviation = data.alpha2Code;
    var country = data.name;
    console.log(data);
     $("body").append("<h1>" + firstName + lastName + photo + state + countryAbbreviation + "," + country + "</h1>");

  }
 $.ajax({
    url: countryURL,
    success: function(data){

    }
 })
});