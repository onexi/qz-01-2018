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

  //it has var, so it is a local variable that can only be used in this function 
  var counter = 0;
  return false;
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return "Hi!";
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  var arr = [{name:"Prateek",class:"1.001"}];
  return arr;
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  var arr = [{name:"Prateek", age: 27},{name:"Joe", age:28}, {name:"Matt", age:30}]
  return arr;
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  var test = function(){console.log("hello world");}
  var obj = {prop1: test, prop2:test}
  
  return obj;
};

//QUESTION: does age need to be a string? B/c of the quotes..

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------

  var someObject = {age:28};

  return someObject;
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

  var carPrice = 0;
  // TODO your code here
  var carModelsArray = data.cars[carName];
  var rightCar  = []
  var carModel = carModelsArray.forEach((currObj, index, all) => {
      if(currObj.model == model && currObj.doors == doors){
        rightCar.push(currObj);
      }
  });
  // var carColor = rightCar.color.filter((colorObj, index, all) => {
  //     return colorObj.id == color;
  // })

  //short way
  var car = data.cars["BMW"][0].color[0].price;
  carPrice = car;
  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  //go through the data and keep tabs of the max price, for every car that exceeds it , reset
  var maxPricedCar = {};
  // TODO your code here

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  // TODO your code here
  
  data.cars["Honda"] = [
    {"model":"Civic", "doors":4, "price": 18840},
  ];

  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

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
  input.forEach(function(curr, index, all) {
    // TODO your code here
    // add name as key, time as value
    obj.name = curr.name;
    obj.time = curr.time;
  });
  return obj;
};

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
    .filter(function(currObj, index, all) {
      // TODO your code here
      return currObj.time < 48.5;


    })
    .map(function(currObj,index,all) {
      // TODO your code here
      return currObj.name
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
    function(preVal,currVal, index, all) {
      // TODO your code here
      return preVal + "," + " " + currVal;
    },
    "" /* TODO set correct starting value */,
  );
  return res;
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------


  var times = input.map((skier, index, all)=> {
    return skier.time;
  });
  var compare = function(a,b){
      var move = 0;
      if(a <b){
          move = 1;
      }
      if(a == b){
          move = 0;
      }
      if(a > b){
          move = -1;
      }
      return move;
  }
  console.log(times.sort(compare));

  var sortedArray = [];
  times.forEach((currTime, index, all)=>{
    for(var i = 0; i<input.length; i++){
      if(currTime == input[i].time){
        sortedArray.push(input[i]);
      }
    }
  });

  return sortedArray;
};

module.exports = quiz;
