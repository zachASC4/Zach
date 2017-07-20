function setup() {
    background("black");
    createCanvas(600, 450); 
}
var hp1 = 100;
var hp2 = 100;

function draw(){
    s = "POKEMON BATTLE";
    v = hp1 + "%";
    x = hp2 + "%";
    fill(100);
    text (s, 300, 10, 500, 500);
    text (v, 550, 125, 450, 450);
    text (x, 250, 300, 255, 255);
    var c = color('green');
    fill(c);
    rect (490,125,50,10);
    rect (190,300,50,10);
}