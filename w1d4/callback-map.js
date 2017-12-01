var lyrics = [ "Flash", "that", "buttery", "gold", "Jittery", "zeitgeist", "wither", "by", "the", "watering", "hole", "what", "a", "patrol" ];

function map(array, callback) {
  var newArray = [];

  array.forEach(function(element) {
    newArray.push(callback(element));
  });
  return newArray;
}

// Stretch
function getLength(string) {
  return string.length;
}
console.log(map(lyrics, getLength));


map(lyrics, function(element) {
  return element.length;
});

map(lyrics, function(element) {
  return element.toUpperCase();
});

map(lyrics, function(element) {
  return element.split('').reverse().join('');
});

