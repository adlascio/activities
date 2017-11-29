/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

function joinList(concepts){
  var result = "";
    for (var i = 0; i <= concepts.length - 1; i++) {
      if (i === concepts.length - 1) {
        result += concepts[i];
      } else {
        result += concepts[i] + ", ";
      }
    }
  return result;
 }


var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var conceptList2 = ["one", "two"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);
var concepts2 = joinList(conceptList2);

// Write your code here...

console.log("Today I learned about " + concepts + ".");
console.log(concepts2);