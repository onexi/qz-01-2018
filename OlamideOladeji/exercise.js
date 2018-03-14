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
  return False
  return 'Error: Question 01 not implemented';
};

quiz.question_01 = function() {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  var newString = "Hi!";
  return newString
  return 'Error: Question 01 not implemented';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  var newArray = [{},{},{}];
  return newArray
  return 'Error: Question 02 not implemented';
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  var newArray = [{name: 'Ola', age: 7},{name: 'Olu', age:22},{name: 'Biyi',age:15}];
  return newArray
  return 'Error: Question 03 not implemented';
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  var newObj = {name: foo(), age: bar()};
  return newObj
  return 'Error: Question 04 not implemented';
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  someObject.age = 22;
  //return 'Error: Question 05 not implemented';
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
  var carColor = color;
  var carPrice = 0;
  var condT = data.cars[carName][0].color[0].id;
  carPrice = 
  if (carColor == "red"){
     return carData.cars["BMW"][0].color[0].price
  }
  if (condT == carColor){
    return carData.cars["BMW"][0].color[0].price
 }

  // TODO your code here

  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {};
  // TODO your code here
  //var priceArray = data.cars.forEach(function(value) {
   
    var fordLength = data.cars.Ford.length;
    var fordPrice = [];
    for (i = 0; i < fordLength; i++) {
      maxPricedCar.append(data.cars.Nissan[i].price)
  }
  //var maxFordLength = Math.max(fordPrice);
  
  var fordLength = data.cars.Nissan.length;
    //var fordPrice = [];
    for (i = 0; i < fordLength; i++) {
      maxPricedCar.append(data.cars.Nissan[i].price)
  }
  
  var BMWLength = 2;
    //var fordPrice = [];
    for (i = 0; i < 2; i++) {
      var BMprice = data.cars["BMW"][0].color[i].price
      maxPricedCar.append(BMPrice)
  }
  var maxFordLength = Math.max(maxPricedCar);



  return maxPricedCar;
};

quiz.question_08 = function(data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------
  data.cars["Honda"] = {model:"Civic",doors:4, price:18840}
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
  input.forEach(function(/* TODO args */) {
    // TODO your code here
    // add name as key, time as value
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
    .filter(function(value) {
      if (value[0].time<48.5) {
        return true
      }
      else {
        return false
      }

      // TODO your code here
    })
    .map(function(value,index) {
      if (value[index].time<48.5) {
        return value[index].name
      }

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
    function(accumulator,currentValue) {
      // TODO your code here
      return accumulator + ',' + currentValue
      
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
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function(a,b) {
    // TODO your code here
    if (a.time > b.time) {
      return -1;
    }
    if (a.time < b.time) {
      return 1;
    }
  };
  return input.sort(compare);
};

function compare(a, b) {
  
  // a must be equal to b
  if (a.time == b.time) {
    return 0;
  }
  
}

module.exports = quiz;
