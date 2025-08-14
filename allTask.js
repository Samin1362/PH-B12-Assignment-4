//Task 1
function totalFine(fare) {
// You have to write your code here

  if (typeof fare !== "number" || fare < 1){
    return "Invalid";
  } else {
    return fare + (fare * (20/100)) + 30;
  }
  
}

//Task 2
function onlyCharacter( str ) {
// You have to write your code here

  if (typeof str !== "string"){
    return "Invalid";
  }

  const splited = str.split(" ");
  let newStr = "";

  for (const element of splited){
    newStr += element.toUpperCase();
  }

  return newStr;

}

//Task 3
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

//Task 4
function isSame(arr1, arr2) {
  // You have to write your code here

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true;
}

//Task 5
function resultReport( marks ) {
// You have to write your code here

  if (!Array.isArray(marks)){
    return "Invalid"
  }

  let finalScore = 0;
  let pass = 0;
  let fail = 0;

  for (const mark of marks){
    finalScore += mark;
    if (mark >= 40){
      pass++;
    } else {
      fail++;
    }
  }
  
  finalScore = finalScore/marks.length;

  if (marks.length === 0){
    finalScore = 0;
  }

  return {"finalScore": Math.round(finalScore), "pass": pass, "fail": fail};

}