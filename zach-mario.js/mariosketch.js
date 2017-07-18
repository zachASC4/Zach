function mouseMoved() {
    ellipse(mouseX, mouseY, 5, 5);
    return false;
}

function setup(){
    createCanvas(1000, 1000);
    mouseMoved();
}