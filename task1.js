
function totalFine(fare) {
// You have to write your code here

  if (typeof fare !== "number" || fare < 1){
    return "Invalid";
  } else {
    return fare + (fare * (20/100)) + 30;
  }
  
}
