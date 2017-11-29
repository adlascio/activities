function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var rolled = [];

for (var i = 1; i <= process.argv[2]; i++) {
rolled.push(" " + getRandomInt(1,7));
}

console.log("Rolled " + process.argv[2] + " dice:" + rolled);