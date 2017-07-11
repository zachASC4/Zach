var pokemonRoster = ["Blastoise", "Charizard", "Pikachu","Nidoking","Alakazam"];
var firstToFight = pokemonRoster[0];
var secondToFight = pokemonRoster[1];
var thirdToFight = pokemonRoster[2];
var fourthToFight = pokemonRoster[3];
var fifthToFight = pokemonRoster[4];

//pokemonRoster.pop();
//pokemonRoster.push(6);
pokemonRoster.length;

// console.log(pokemonRoster[1]);
// console.log(thirdToFight);
if (pokemonRoster.length >= 5){
    for(var i = 4; i >=0; i--){
        console.log(pokemonRoster[i]);
    }
}
else{
    console.log("You Can’t Play! Not Enough Pokemon")
}
/*
for(var i = 0; i < pokemonRoster.length; i++){
    console.log(pokemonRoster[i]);
    }
*/

