var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function compareName (a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  var ageA = a.age;
  var ageB = b.age;

  if (nameA < nameB){
    return -1;
  }

  if (nameA > nameB){
    return 1;
  }

  return ageA - ageB;
});

console.log(students);
