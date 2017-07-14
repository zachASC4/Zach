function BasketballPlayer(name, team, height, position, number, netWorth, pastTeams){
this.name = name;
this.team = team;
this.height = height;
this.position = position;
this.number = number;
this.netWorth = netWorth;
this.pastTeams = pastTeams;

}

var shaq = new BasketballPlayer("Shaquille O'neal", "Celtics","7'1\"","Center", "36", 100000000, true, ["Magic","Lakers","Heat","Suns","Cavaliers"]);
console.log(shaq);

var bron = new BasketballPlayer("LeBron James","Cavaliers", "6'8\"", 100000000000, true, ["Heat"]);
bron.pastTeams.push(bron.team);
bron.team = "Warriors";
console.log(bron);
