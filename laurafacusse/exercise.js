import { SIGKILL } from "constants";

var quiz = {};

// ---------------------------------------------------------------------
// 1.001 QUIZ 2018
//
// All quiz questions are in this file. If you would like to run
// your code there is a separate file, run.js(), which you can use
// and manipulate to your liking. The quiz is open book and open web.
// Feel free to google for answers as you would in the real world.
// Good luck!
// ---------------------------------------------------------------------

// ----------------------------------------
//   SECTION 01 - BASICS
// ----------------------------------------

quiz.question_00 = function() {
  // ----------------------------------------
  //   QUESTION 00
  //   Is "counter" a global variable?
  //   Return true or false.
  // ----------------------------------------
  var counter = 0;
  return 'Error: Question 01 not implemented';
  return false; 
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Error: Question 01 not implemented';
  document.write("Hi!");
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  return 'Error: Question 02 not implemented';
  var names = newArray("abel", "sabrina", "sam", "pushpita", "john");
  var list = [5,8,9,11,20,22];
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  return 'Error: Question 03 not implemented';
  var students = [
    {name: "sam", age: 20},
    {name: "sabrina", age: 18},
    {name: "pushpita", age: 16}
  ];

};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  return 'Error: Question 04 not implemented';
  //pushpita wrote ignore foo and bar
var word = "hello bob";
document.write(word.length);
document.write(word.toUpperCase());
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  return 'Error: Question 05 not implemented';
  function someObject (name, age){
    this.name = name;
    this.age = age;
  }
  var laura = new someObject ("laura", 35); 
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function(data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------
  var carData= {
    "cars": {
        "Nissan": [
            {"model":"Sentra", "doors":4, "price": 17000},
            {"model":"Maxima", "doors":4,  "price": 18000},
            {"model":"GTR", "doors":2,  "price": 210000},
            {"model":"Altima", "doors":2,  "price": 23300},
            {"model":"LEAF", "doors":2,  "price": 29900},
            {"model":"Maxima", "doors":2,  "price": 33270},
            {"model":"Versa", "doors":2,  "price": 12110},
            {"model":"Juke", "doors":2,  "price": 20900}
        ],

 cars.forEach(function(item, index, array){
   if (item === "Sentra")
  return carPrice;
}

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {};
  function callback (data){
    var newData = [];

    
  }
  }

  var maxPricedCar = carData.reduce(function(all,item,array){
    if (item )
  }

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  // TODO your code here

  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------


var skierData = [
  { name: 'Clement', time: 48.58 },
  { name: 'Henrik', time: 47.72 },
  { name: 'Sebastian', time: 48.53 },
  { name: 'Andre', time: 47.93 },
  { name: 'Ted', time: 102.3 },
  { name: 'Manfred', time: 48.4 },
  { name: 'Alexis', time: 48.54 },
  { name: 'Victor', time: 48.34 },
];


quiz.question_09 = function(input) {
  // ---------------------------------------------------------------
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  // ---------------------------------------------------------------

  var obj = {};
  input.forEach(function(/* TODO args */) {
   skierData.forEach(function(item,index,array)};

  console.log(index,item);
  return obj 


  // TODO your code here
    // add name as key, time as value

quiz.question_10 = function(input) {
  // ---------------------------------------------------------------
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  //
  // Example input: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // Example output: ['Bob']
  // ---------------------------------------------------------------

  var res = input
    .filter(function(/* TODO args */) {
      // TODO your code here
    })
    .map(function(/* TODO args */) {
      // TODO your code here
    });
  return res;
};

quiz.question_11 = function(input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  var res = input.reduce(
    function(/* TODO args */) {
      
      // TODO your code here
    },
    0 /* TODO set correct starting value */,
  );
  return res;
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
[{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
 [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function(/* TODO args */) {
    // TODO your code here
  };
  return input.sort(compare);
};

module.exports = quiz;
