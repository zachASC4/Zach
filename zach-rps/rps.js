function init(){
    var name = input.value();
    initials.html(name);
    input.value('');
}

var randName;
var randURL= "https://randomuser.me/api/"

$.ajax({
  url: randURL,
  dataType: 'json',
  success: function(data) {
    randName= data.results[0].name.first;
    console.log(randName);
    $("body").append("<h1>You are playing against: " + randName + "</h1>");
  }
});

var scissors = "scissors";
var rock = "rock";
var paper = "paper"; 
var playerScissors = "scissors";
var playerRock = "rock"; 
var playerPaper = "paper";
var playerChoice;
var cpuChoice;

function checkCase(){
    // var choices = [rock, paper, scissors]
    // var randNumb = Math.round(Math.random()*choices.length-1);
    // cpuChoice = choices[randNumb];
    // console.log(cpuChoice);
    cpuChoice = rock;

    if (playerChoice == playerRock && cpuChoice == paper){
        $("body").append("<h1> class= 'col-12'" + randName +  " won" + "</h1>");
    }
    else if (playerChoice == playerRock && cpuChoice == scissors){
        $("body").append("<h1 class='col-12 text-center' > You won </h1>")
    }
    else if (playerChoice == playerRock && cpuChoice == rock){
        $("body").append("<h1 class='col-12'> It was a tie! </h1>")
    }   
    else if (playerChoice == playerPaper && cpuChoice == scissors){
        $("body").append("<h1 class='col-12'>" + randName +  " won" + "</h1>");
    }
    else if (playerChoice == playerPaper && cpuChoice == rock){
        $("body").append("<h1 class='col-12'> You won </h1>")
    }
    else if (playerChoice == playerPaper && cpuChoice == paper){
        $("body").append("<h1 class='col-12'>  It was a tie! </h1>")
    }
    else if (playerChoice == playerScissors && cpuChoice == paper){
    $("body").append("<h1 class='col-12'>  You won </h1>")
    }
    else if (playerChoice == playerScissors && cpuChoice == rock){
    $("body").append("<h1 class='col-12'>" + randName +  " won" + "</h1>")
    }
    else if (playerChoice == playerScissors && cpuChoice == scissors){
    $("body").append("<h1 class='col-12'>  It was a tie! </h1>")
}
}
function rockChoice(){
playerChoice = "rock";
checkCase();
}
function paperChoice(){
playerChoice = "paper";
checkCase();
}
function scissorsChoice(){
playerChoice = "scissors";
checkCase();
}

function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}
