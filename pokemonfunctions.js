var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randLetter(){
var letter = Math.round(Math.random()*25);
console.log(letters[letter]);
}

function randWord(){
var word = Math.round(Math.random()*25);
for (i=0; i<word; i++){
    randLetter();
    
    
}
}
randWord();
 
 function randSentence(){
     
 }