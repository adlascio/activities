var args = process.argv.slice(2);
var password = String(args[0]);
function obfuscate (str){
  result = "";
  for (var i = 0; i <= str.length - 1; i++){
    if (str.substring(i, i+1) === "a") {
      result += "4";
    } else if (str.substring(i, i+1) === "e") {
      result += "3";
    } else if (str.substring(i, i+1) === "o") {
      result += "0";
    } else if (str.substring(i, i+1) === "l") {
      result += "1";
    } else {
      result += str.substring(i, i+1);
    }
  }
  return result;
}

console.log(obfuscate(password));