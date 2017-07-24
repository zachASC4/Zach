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
    x = xregulate + x
    ellipse(x, y, 55, 55);
    if (x > 847.5 || x < 252.5) {
        xregulate = -xregulate;
    y = yregulate + y;
    }
   if (y > 750 || y < 50){
        yregulate = -yregulate;
    }
    ellipse(x2, y2, 55, 55);
    x2 = xregulate2 + x2;
    if (x2 > 1012.5 || x2 < 87.5) {
        xregulate2 = -xregulate2;
    y2 = yregulate2 + y2;
    }
   if (y2 > 750 || y2 < 50){
        yregulate2 = -yregulate2;
    }
    ellipse(x3, y3, 55, 55);
    x3 = xregulate3 + x3;
    if (x3 > 957.5 || x3 < 142.5) {
        xregulate3 = -xregulate3;
    y3 = yregulate3 + y3;
    }
   if (y3 > 750 || y3 < 50){
        yregulate3 = -yregulate3;
    }
//     ellipse(x4, y4, 55, 55);
//     x4 = xregulate4 + x4
//     if (x4 > 902.5 || x4 < 197.5) {
//         xregulate4 = -xregulate4;
//     y4 = yregulate4 + y4;
//     }
//    if (y4 > 750 || y4 < 50){
//         yregulate4 = -yregulate4;
//     }

    // ellipse(x5, y5, 55, 55);
    
    //     x5 = xregulate5 + x5
    //     if (x5 > 847.5 || x5 < 252.5) {
    //         xregulate5 = -xregulate5;
    //         y5 = yregulate5 + y5;
    //     }
    //     else if (y5 > 750 || y5 < 50){
    //         yregulate5 = -yregulate5;
    //     }
    
    
}

var x = 90;
var y = 100;
var xregulate = 10;//10
var yregulate = 5;//55
var xTwo = 165;
var xThree = 230;
var xFour = 295;
var xFive = 360;
var xSix = 415;

function draw()
{  
    //first ellispe
    background(51);
    //ellipse(x, y, 55, 55);
    x = xregulate + x
    if(x < 50 || x > 695)
    {
        y = y + yregulate;
        xregulate = -xregulate;
        if(y >= 700)
        {
            y = 700;
            console.log("Game Over!")    
       }  
   }
    // second ellispe
    ellipse(xTwo, y, 55,55)
    xTwo = xregulate + xTwo;

   ellipse(xThree, y, 55,55)
    xThree = xregulate + xThree;
    
   ellipse(xFour, y, 55,55)
    xFour = xregulate + xFour;

   ellipse(xFive, y, 55,55)
    xFive = xregulate + xFive;
