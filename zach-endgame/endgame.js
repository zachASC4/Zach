
var musicURL= "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/artist.get"

$.ajax({
    url: musicURL, 
    type: 'GET', 
    data: {

    }, 
    dataType: 'json',
    success: function(data) { 
        console.dir((data.source)); 
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "thDfQUbobEmshOXqCLQ39jWVJdsAp1tnMUNjsnoeTM4jvZHqlc"); // Enter here your Mashape key
    }
});

$(document).ready(function(){ 
    var guess;
    $('#submit').on("click", function() {
        guess = $('#guess-value').val();
        $("#value").text(guess);
        alert(guess);
    });
    alert(guess);
});

var input = musicURL.concat(guess);

$.ajax({
    url: input, 
    type: 'GET', 
    data: {

    },
    dataType: 'json',
    success: function(data) { 
        console.dir((data.source)); 
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "thDfQUbobEmshOXqCLQ39jWVJdsAp1tnMUNjsnoeTM4jvZHqlc"); // Enter here your Mashape key
    }
});
//
var urbanDictURL="https://mashape-community-urban-dictionary.p.mashape.com/define?";

var value = "#guess-value";

function doIt(value) {
    var output = $.ajax({
        url: urbanDictURL, 
        type: "GET", 
        data: {}, 
        dataType: 'json',
        success: function(data) {
            console.log(data);
            document.getElementById("#btn-default").innerHTML = data.source;
            },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "SNslQZlgULmshN0m7uGgsDDsfSZfp1T0kzdjsnLiNgYx5NxopK"); 
        }
    });
  

}
$( "body" ).append(doIt);