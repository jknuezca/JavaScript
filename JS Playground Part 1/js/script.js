var car = {
  make: 'Mclaren',
  model: 'Speedtail',
  year: 2008,
  color: 'Blue',
  speed: '250mph',
  wheels: 4
};
car['capacity'] = 4;
car['flag'] = 'used'; //stolen or used
console.log(car);
// console.log(car.make);

// https://codepen.io/kmcmurtrey/pen/wBNRdG
var carr = {
  make: "Ford",
  model: "Explorer",
  year: 2008,
  color: "red",
  fuel: "gas",
  mpg: 18
}
/* - - - - - - - - - - - - - - - - - - - */
var house = {
  housePrice: 70000,
  bedroom: 3,
  livingRoom: '15 sq meters',
  kitchen: '10 sq meters',
  comfortRoom: '8 sq meters',
  garden: '10 sq meters',
  electricity: true, //true or false based on availability
  water: true //true or false based on availability
}
house['inhabitants'] = ['Person1', 'Person2', 'Person3', 'Person4'];
console.log(house);

/* - - - - - - - - - - - - - - - - - - - */
// Create a function that returns an empty array.

arr = [];   // set array=[]
//function
const empt = arr => arr.length = 0;
var arr = [1, 2, 3, 4, 5];
empt(arr); // arr=[]
console.log(empt(arr));

/* - - - - - - - - - - - - - - - - - - - */
// Create a function that returns an empty object.

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isObjectEmpty(0));

/* - - - - - - - - - - - - - - - - - - - */
//Create a function that takes a string and returns it as a value with the key bla in an object.
var employees = []
employees[0] = { name: "Kenneth", age: 25, birthDate: "March 10, 1996" }

var names = employees.map(function (i) { return i.name; });
console.log(names);

/* - - - - - - - - - - - - - - - - - - - */
// name Blubber
var myName = 'Blubber';
var newStr = myName.replace('Blubber', 'Kenneth');

console.log("Original string: " + myName);
console.log("New string: " + newStr);

/* - - - - - - - - - - - - - - - - - - - */
// takes a string and a number
var newString = 'Hello, World!';
const iteration = 5;

function getArrayFrom(newString) {
  const arr = [];

  if (newString) {
    for (var i = 0; i < iteration; ++i)
      arr.push(newString);
  }
  return arr;
}
console.log(getArrayFrom(newString));

/* - - - - - - - - - - - - - - - - - - - */
// Additional JavaScript
let n1 = 2; let n2 = 0;

var r = function (n1, n2) {
  if (n2 == 0) {
    return n1;
  } else{
    return (n2, n2 - 1);
  } 
}

console.log("num1: " + n1 + " num2: " + n2 + " result: " + (r(n1, n2) * n1));


