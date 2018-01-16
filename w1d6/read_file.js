var fs = require("fs");
var filePath = process.argv[2];
console.log("Going to write into existing file");
fs.writeFile(filePath, 'Simply Easy Learning!',  function(err) {
  if (err) {
    return console.error(err);
  }
   
  console.log("Data written successfully!");
});
             
fs.readFile(filePath, function(err, data){
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});