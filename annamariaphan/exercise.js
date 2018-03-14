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
  //   QUESTION 00 - DONE
  //   Is "counter" a global variable?
  //   Return true or false.
  // ----------------------------------------
  var counter = 0;
  return true;
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01 - DONE
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Hi!';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02 - DONE
  //   Return an array of objects
  // ----------------------------------------
  return [1,2,3,4];
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03 - DONE
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  return {name: "amy", age: 35};
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04 - DONE
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  return {firstName,lastName}
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05 - DONE
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  return someObject.age = 21;
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function(data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  //   QUESTION 06 - use color
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------

  var carPrice = 0;
  // TODO your code here;
  return carData.carName.color[0].price;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  //   QUESTION 07 
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {};
  // TODO your code here

  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  //   QUESTION 08 
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  // TODO your code here
  carData.push('Honda', 'Civic', 4, 18840);
  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

quiz.question_09 = function(input) {
  // ---------------------------------------------------------------
  //   QUESTION 09 
  // We are provided ski racer results from the olympics.
  // The input is an array of skier objects with name and time properties.
  // Using forEach, return an object whose keys are skier names and values
  // are associated skier times. You can assume each skier as a unique name.
  //
  // Example input: [{ name: 'Bob', time: 45.00 }]
  // Example output: { 'Bob': 45.00 }
  // ---------------------------------------------------------------

  var obj = {};
  skierData.forEach(function(item,i,list) {
    // TODO your code here
    // add name as key, time as value
  });
  return obj;
};

quiz.question_10 = function(input) {
  // ---------------------------------------------------------------
  //   QUESTION 10 
  // The input is an array of skier objects with name and time properties.
  // However, we are only interested in names of skiers with a time less than 48.5.
  // Using filter, map, and the provided input, return an array of skier names whose
  // times are under 48.5.
  //
  // Example input: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // Example output: ['Bob']
  // ---------------------------------------------------------------

  var res = input
    var filtered = skierdata.filter(function(element) {
      // TODO your code here
      var comparison = element.time <= 48.5;
      return comparison;
    })
    .map(function(/* TODO args */) {
      // TODO your code here
    });
  return res;
};

quiz.question_11 = function(input) {
  // ---------------------------------------------------------------
  //   QUESTION 11 
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  var res = skierData.reduce(
    function(previous,current) {
      // TODO your code here
      return previous + current;
    },
    0 /* TODO set correct starting value */,
  );
  return res;
};

quiz.question_12 = function(input) {
  // ---------------------------------------------------------------
  //   QUESTION 12 
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function(a,b) {
    // TODO your code here
    skierData.sort(function(a,b){return b-a});
  };
  return input.sort(compare);
};

module.exports = quiz;
