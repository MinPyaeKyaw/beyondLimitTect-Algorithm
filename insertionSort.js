let string = "Clean Architecture";

const sort = (str) => {
  let stringArr = [];
  let result = "";

  // converting string into array
  for (let i = 0; i < str.length; i++) {
    stringArr[stringArr.length] = str[i];
  }

  // insertion sort
  for (let i = 0; i < stringArr.length; i++) {
    for (let l = 0; l < stringArr.length; l++) {
      if (stringArr[i] < stringArr[l]) {
        let tempStringArr = stringArr[i];
        stringArr[i] = stringArr[l];
        stringArr[l] = tempStringArr;
      }
    }
  }

  // building result string
  for (let i = 0; i < stringArr.length; i++) {
    result = result + stringArr[i];
  }

  return result;
};

console.log(sort(string));
