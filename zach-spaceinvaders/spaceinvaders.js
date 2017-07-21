//var img;
//img = loadImage("alien.jpg");
function setup(){
    createCanvas(1100,750);
    background(8);
    
}
var x = 100
var y = 100
var xregulate = 10;
var yregulate = 55;

var x2 = 155
var y2 = 100
var xregulate2 = 10;
var yregulate2 = 55;

var x3 = 210
var y3 = 100
var xregulate3 = 10;
var yregulate3 = 55;

var x4 = 265
var y4 = 100
var xregulate4 = 10;
var yregulate = 55;

var x5 = 320
var y5 = 100
var xregulate5 = 10;
var yregulate5 = 55;



function draw(){
    background(8);
    //image(img,x, y);
    ellipse(x, y, 55, 55);
    x = xregulate + x
    if (x > 1067.5 || x < 32.5) {
        xregulate = -xregulate
    y = yregulate + y
    }
   if (y > 750 || y < 50){
        yregulate = -yregulate
    }
    ellipse(x2, y2, 55, 55);
    x2 = xregulate2 + x2
    if (x2 > 1067.5 || x2 < 32.5) {
        xregulate2 = -xregulate2
    y2 = yregulate2 + y2
    }
   if (y2 > 750 || y2 < 50){
        yregulate2 = -yregulate2
    }
    
}

