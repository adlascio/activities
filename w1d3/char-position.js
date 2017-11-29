/*
-@parameters - string
-@return - object

*/

function charPosition(string){
  var result = {};
    for (var i in string){
      if(string[i] === " "){
        continue;
      }
    char = string[i];
    if(result[char] === undefined){
      result[char] = [];
    }
    result[char].push(i);
  }
  return result;
}

console.log(charPosition("lighthouse in the house"));