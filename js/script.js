//Bidness

var tempScore;
var player1Score;
var player2Score;
function Player(turnYN){
	this["permanent-score"] = 0;
	this["temporary-score"] = 0;
	this["turn = turnYN"];
	this["human"]; // = true or false
}

Player.prototype.passTurn = function(){
	if (this.turn === true) {
		this.turn = false;
	} else {
		this.turn = true;
	}
}

var player1 = new Player(true);
var player2 = new Player(false);
// make a dieroller


//UI Logic

$(document).ready(function() {
// stuff goes here.
	$("#onePlayer").click(function(){
		$(".gameType").hide();
		$(".game").show();
	});
	$("#twoPlayer").click(function(){
		$(".gameType").hide();
		$(".game").show();
	});
	$("#roll").click(function() {
		// do the thing
	});
	$("#pass").click(function() {
		//do the other thing
	});

});
