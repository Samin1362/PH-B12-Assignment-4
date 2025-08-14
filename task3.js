function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  player1Total = player1.foul + player1.cardY + player1.cardR;
  player2Total = player2.foul + player2.cardY + player2.cardR;

  if (player1Total === player2Total) {
    return "Tie";
  } else if (player1Total < player2Total) {
    return player1.name;
  } else {
    return player2.name;
  }
}

