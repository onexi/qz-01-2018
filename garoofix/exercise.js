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
  return false;
  return 'Error: Question 01 not implemented';
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Hi!';
  return 'Error: Question 01 not implemented';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  return ['item1','item2','item3'];
  return 'Error: Question 02 not implemented';
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  return [{
    name: 'dan',
    age: 24
  },{
    name: 'jenn',
    age: 45
  },{
    name: 'frank',
    age: 20
  }];
  return 'Error: Question 03 not implemented';
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  var myobj = {
    getNumber: function(){
      return 5;
    },
    doDouble: function(x){
      return x * 2;
    }
  }
  return myobj;
  return 'Error: Question 04 not implemented';
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  someObject.age = 56;
  return someObject;
  return 'Error: Question 05 not implemented';
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
  var byMake = data.cars[carName];
  var thisCar = byMake.filter(car => (car.model === model)&&(car.doors === doors))[0];
  if('color' in thisCar){
    var thisColor = thisCar.color.filter(c => c.id === color)[0];
    carPrice = thisColor.price;
  }else{
    carPrice = thisCar.price;
  }
  //carPrice = thisCar.price;
  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {}; maxPricedCar.price = 0;
  let makes = Object.keys(data.cars);
  makes.forEach((makeName)=>{
    var make = data.cars[makeName];
    make.forEach((car)=>{
      var carPrice = 0;
      if('color' in car){
        car.color.forEach((color)=>{
          if(color.price > maxPricedCar.price){
            maxPricedCar = car;
            maxPricedCar.color = color.id;
            maxPricedCar.price = color.price;
          }
        });
      }else{
        if(car.price > maxPricedCar.price){
          maxPricedCar = car;
        }
      }
    });
  });
  // TODO your code here

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------
  data.cars.Honda = [];
  var newCar = {
    model: 'Civic',
    doors: 4,
    price: 18840
  }
  data.cars.Honda.push(newCar);
  // TODO your code here

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
  input.forEach(function(racer) {
    obj[racer.name] = racer.time;
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
    .filter(function(racer) {
      return racer.time < 48.5;
    })
    .map(function(picked) {
      return picked.name;
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
    function(previous, current) {
      if(previous===''){
        return previous=current;
      }else{
        return previous+=', '+current;
      }
    },
    ''
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

  var compare = function(a, b) {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    if (a.time === b.time) return 0;
  };
  return input.sort(compare);
};

module.exports = quiz;
