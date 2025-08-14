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

