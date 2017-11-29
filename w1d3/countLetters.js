/*
-@parameters - string
-@return - object

*/

function countLetters(string){
  var result = {};
  var noSpace = string.split(" ").join("");
  for (var i in noSpace){
    var char = noSpace[i];
    if(result[char] === undefined){
      result[char] = 0;
    }
    result[char] += 1;
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));