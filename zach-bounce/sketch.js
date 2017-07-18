function setup(){
    createCanvas(windowWidth, windowHeight);
    background(225);

}

var x = 50;
var y = 50;
function draw(){
    background(225); 
    ellipse(x++ ,y++, 55, 55);

    if (x > windowWidth - 27.5 || x < windowWidth + 27.5){
        x = -x;
    }
    if (y > windowHeight - 27.5 || y < windowHeight + 27.5){
        y = -y;
    }
}