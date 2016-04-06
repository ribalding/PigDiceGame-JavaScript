//Bidness
var player1;
var player2;

function Player(turnYN, humanYN){
	this["permanentScore"] = 0;
	this["temporaryScore"] = 0;
	this["turn"] = turnYN;
	this["human"] = humanYN;
}

Player.prototype.passTurn = function(){
	this.temporaryScore = 0;
	if (this.turn === true) {
		alert("Passing turn");
		this.turn = false;
	} else {
		this.turn = true;
	}
}

Player.prototype.dieRoll = function() {
	return (1 + Math.floor(Math.random() * 6));
}

Player.prototype.fullRoll = function() {
	if(this.turn === true){
		var roll = this.dieRoll();
		alert(roll);
		if(roll !== 1){
			this.temporaryScore += roll;
		} else if (roll === 1){
			player1.passTurn();
			player2.passTurn();
		}
	}
}

// Player.prototype.computerTurn = function(){
// 	while(player2.turn === true){
// 		var rollComp = player2.dieRoll();
// 		if(rollComp !== 1){
// 			player2.temporaryScore += roll2;
// 		} else if (rollComp === 1){
// 			player1.passTurn();
// 			player2.passTurn();
// 		} else {
// 		alert("ERRR BRUH");
// 		}
// 		var rollComp = player2.dieRoll();
// 		if(rollComp !== 1){
// 			player2.temporaryScore += roll2;
// 		} else if (rollComp === 1){
// 			player1.passTurn();
// 			player2.passTurn();
// 		} else {
// 		alert("ERRR BRUH");
// 		}
// 		player1.permanentScore += player1.temporaryScore;
// 		$("#player1Total").text(player1.permanentScore);
// 		player2.permanentScore += player2.temporaryScore;
// 		$("#player2Total").text(player2.permanentScore);
// 		player1.passTurn();
// 		player2.passTurn();
// 		if (player1.permanentScore >= 100){
// 			alert("Player 1 Wins");
// 		}
// 		if (player2.permanentScore >= 100){
// 			alert("Player 2 Wins");
// 		}
// 	}
// }


//UI Logic

$(document).ready(function() {
  // ONE PLAYER GAME
	$("#onePlayer").click(function(){
		$(".gameType").hide();
		$(".game").show();
		player1 = new Player(true, true);
		player2 = new Player(false, false);
	});

	//if(player2.turn === true && player2.human === false){
	//	player2.computerTurn();
	//}

	//TWO PLAYER GAME
	$("#twoPlayer").click(function(){
		$(".gameType").hide();
		$(".game").show();
		player1 = new Player(true, true);
		alert(player1.turn);
		player2 = new Player(false, true);
	});



	$("#roll").click(function() {
		player1.fullRoll();
		player2.fullRoll();
		// if(player1.turn === true){
		// 	var roll = player1.dieRoll();
		// 	alert(roll);
		// 	if(roll !== 1){
		// 		player1.temporaryScore += roll;
		// 	} else if (roll === 1){
		// 		player1.passTurn();
		// 		player2.passTurn();
		// 	}
		// } else if (player2.turn === true){
		// 	var roll2 = player2.dieRoll();
		// 	alert(roll2);
		// 	if(roll2 !== 1){
		// 		player2.temporaryScore += roll2;
		// 	} else if (roll2 === 1){
		// 		player1.passTurn();
		// 		player2.passTurn();
		// 	}
		// }
	});

	$("#pass").click(function() {
		player1.permanentScore += player1.temporaryScore;
		$("#player1Total").text(player1.permanentScore);
		player2.permanentScore += player2.temporaryScore;
		$("#player2Total").text(player2.permanentScore);
		player1.passTurn();
		player2.passTurn();
		if (player1.permanentScore >= 100){
			alert("Player 1 Wins");
		}
		if (player2.permanentScore >= 100){
			alert("Player 2 Wins");
		}
	});

	// if permanent score reaches 100, that player wins.


});
