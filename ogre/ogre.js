var HP = 100;
var gold = 0;
var numberDefeated = 0;
function updateStats(){
    $("#stats").text("HP: " + HP + " // Gold " + gold + " // Slain: " + numberDefeated);
}

function spawnOgre(){
    $("#ogres").prepend(
        "<img src = ' '"
    );
}

function attack(){
    if (HP > 0){
        if (Math.random() * 100 > gold){
            gold = gold + 10;
            numberDefeated++;
            $("#ogres").prepend(
                "<p style='color:blue'> You Won! + 10 gold. </p>"
            );
        }
        else{
            gold --;
            HP--;
            $("#ogres").prepend(
                "<p> style= 'color:red'> You Lost! -1 gold </p>"
            );
        }
        updateStats();
        spawnOgre();
    }
        
        else{
        //game over
            $("#ogres").prepend(
                "<h1> GAME OVER </h1>"
            );
        } 
    }


function setup(){
$("body").append(
"<h1> Welcome to Ogre Fighter v.1.0</h1>"
);

$("body").append(
    "<div> <h3> STATS </h3> <p id = 'stats'> </p> </div>"
)

$("body").append(
    "<button onclick = 'attack()'> Attack the Ogre! </button>"
)

$("body").append(
    "<div id='ogres'></div>"
);

updateStats();

}
setup();

//Setup HTMl ELEMENT
//Add title to HTML -- requires some setup
//Add a random ogreimage to start of body tag, requires setup
//When player clicks an 'attack' button requires setup

//If player has HP
//if player defeats ogre
//add paragraph tag saying "you win"
//+gold to player
//number of defeated ogres
//else add paragraph tag saying "you lost"
// -gold
// -HP
//updateStats
//add random org image
//else
//add paragraph tag saying 'Game Over' 

$(document).ready(setup);