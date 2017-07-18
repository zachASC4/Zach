function setup(){
    createCanvas(1500,1500);
    background(225);
    textSize(16); 
    text("please type the sentence below", 10, 60);
    
    textSize(16); 
    text("Lonzo = Summer League MVP");


  var input, button;  
  input = createInput();
  input.position(20, 65);

  button = createButton("submit");
  button.position(input.x + input.width, 65);

  var currentPoints = 0;
  textSize(16); 
 text("Current Points: " + currentPoints , 10, 500);

}



// var x = 0;
// function draw(){
//     background(225); 
//     ellipse(x++ ,46, 55, 55);
// }