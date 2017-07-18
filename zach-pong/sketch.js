var x = 100
var y = 100
var a = 480
var b = 100
var xcord = 10
var yregulate = 10

function setup(){
    createCanvas(600, 500)
    background(225)
}

function draw(){
    background(225);
    if (keyIsDown(DOWN_ARROW)){
        b+=10
        if (b>495) {
            b = 0
        }else if (b<5) {
            b = 450
        }
    }
    if (keyIsDown(UP_ARROW)) {
        b-=10
    }
        if (b>495) {
            b = 0
        }else if (b<5) {
            b = 450
        }

    
    rect(a, b, 19, 130);
    
    fill(250, 0, 0)
    ellipse(x, y, 15, 15);
    x = xcord + x
    if (x >  || x < 0) {
        xcord = -xcord
    }
    y = ycord + y

   if (y > 425 || y < 50){
        ycord = -ycord
    }
    
    }