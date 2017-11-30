// The second argument/parameter is expected to be a function
function findWaldo(people, found) {
  people.forEach(function(person, i){
    if(person === "Waldo"){
        found(i);
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index", i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//callback

//var collection = array;
//result = collection.forEach(function(item){
//  console.log(item)
//});

