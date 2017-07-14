var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');
var money = 1000;
var louisVuittonDuffleBag = [];


while (money > 100){
    console.log("You have $ " + money + " left");
    var answer = prompt("You can buy yeezy's for 400, gucci flip flops for 200, or ray bans for 100");
    if(answer.toLowerCase == "yeezys" && money >= 500){
        money = money - 400;
        louisVuittonDuffleBag.push("yeezys");
        console.log("You have successfully bought this pair of yeezys");
    }
    else if (answer.toLowerCase == "gucci flip flops" && money >= 300){
        money = money - 200;
        louisVuittonDuffleBag.push("Gucci Flip Flops");
        console.log("You have successfully bought this pair of Gucci Flip Flops");
    }
    else if(answer.toLowerCase == "ray bans" && money >= 200){
        money = money -100;
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have successfully bought this pair of Ray Bans");
    }
    else{
        console.log("We can't get you this item");
    }

}
console.log("Leave, you broke b!")
/**
 * Tyshawn has $1000
 * balance = 1000
 * backpack = [] Bobby asks Tyshawn WHat dou you want?
 * type: "Yeezys"
 * if Bobby gets 400
 * TYshawn bal - 400
 * 
 */