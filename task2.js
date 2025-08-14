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
