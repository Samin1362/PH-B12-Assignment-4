
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
