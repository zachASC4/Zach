function pokeObject(name, type, hp, atk, def, legend){
this.name = name;
this.type = type;
this.hp = hp;
this.atk = atk;
this.def = def;
this.legend = legend
}

var Salamence = new pokeObject("Salamence","Dragon and Flying", 95, 135, 80, false);
var Regirock = new pokeObject("Regirock","Rock", 80, 100, 200, true);
var Regice = new pokeObject("Regice","Rock", 80, 50, 100, true);
var Registeel = new pokeObject ("Registeel","Steel", 80, 75, 150, true);
var Rayquaza = new pokeObject("Rayquaza","Dragon and Flying", 105, 150, 90, true);
var Torterra = new pokeObject("Torterra","Grass and Ground", 95 , 109 , 105, false);

var pokeRoster = [Salamence, Regirock, Regice, Registeel, Rayquaza, Torterra];
function printRoster(){
    for(var i=0; i<pokeRoster.length; i++){
    console.log(pokeRoster[i]);
}
}
printRoster();

function pokeAttacked(){
    for(var i=0; i<pokeRoster.length; i++){
        pokeRoster[i].hp = pokeRoster[i].hp - 10;
        console.log(pokeRoster[i]);
    }

}
pokeAttacked();




