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

quiz.question_00 = function () {
  // ----------------------------------------
  //   QUESTION 00
  //   Is "counter" a global variable?
  //   Return true or false.
  // ----------------------------------------
  var counter = 0;
  return false;
};

quiz.question_01 = function () {
  // ----------------------------------------
  //   QUESTION 01
  //   Return a string that says "Hi!"
  // ----------------------------------------
  return 'Hi!';
};

quiz.question_02 = function () {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  var object1 = { name: 'value' };
  var object2 = { name2: 'value2' };
  var array_of_objects = [object1, object2];
  return array_of_objects;
};

quiz.question_03 = function () {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------

  var object1 = { name: 'name1', age: 100 };
  var object2 = { name: 'name2', age: 101 };
  var array_of_objects = [object1, object2];

  return array_of_objects;
};

quiz.question_04 = function (foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  var func = function () {
    return true;
  }
  var object1 = { name: func };
  return object1;
};

quiz.question_05 = function (someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  someObject.age = 100;
  return someObject;
};

// ----------------------------------------
//   SECTION 02 - OBJECTS
// ----------------------------------------

quiz.question_06 = function (data, carName, model, doors, color) {
  // ---------------------------------------------------------------
  // Find the price of the car whose name, model, and doors are provided
  // as arguments to this function.
  // Return the price.
  // ---------------------------------------------------------------

  var carPrice = 0;
  // TODO your code here
  var cars = data.cars;
  var car = cars[carName.toString()];
  for (i = 0; i < car.length; i++) {
    if (car[i].model == model && car[i].doors == doors) {
      var carsColor = car[i].color;
      for (j = 0; j < carsColor.length; j++) {
        if (carsColor[i].id == color) {
          carPrice = carsColor[i].price;
        }
      }
    }
  }
  console.log(carsColor);


  return carPrice;
};

quiz.question_07 = function (data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------

  var maxPricedCar = {};
  var maxP = 0;
  // TODO your code here
  for (i = 0; i < data.cars.Nissan.length; i++) {

    if (data.cars.Nissan[i].price > maxP) {
      maxP = data.cars.Nissan[i].price;
      maxPricedCar = {
        make: 'Nissan',
        model: data.cars.Nissan[i].model,
        doors: data.cars.Nissan[i].doors,
        price: data.cars.Nissan[i].price
      }
    }
  }

  for (i = 0; i < data.cars.Nissan.length; i++) {

    if (data.cars.Ford[i].price > maxP) {
      maxP = data.cars.Ford[i].price;
      maxPricedCar = {
        make: 'Nissan',
        model: data.cars.Ford[i].model,
        doors: data.cars.Ford[i].doors,
        price: data.cars.Ford[i].price
      }
    }
  
}

return maxPricedCar;
};

quiz.question_08 = function (data) {
  // ---------------------------------------------------------------
  // Add a new car object to the given cardata object, "Honda", to the data set with
  // model: "Civic", doors: 4, price: 18840
  // Return the updated data
  // ---------------------------------------------------------------

  // TODO your code here
  var carObj = { model: "Civic", doors: 4, price: 188440 };
  data.cars.Honda = [carObj];
  return data;
};

// ----------------------------------------
//   SECTION 03 - ARRAY FUNCTIONS
// ----------------------------------------

quiz.question_09 = function (input) {
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
  input.forEach(function (ob) {
    // TODO your code here
    // add name as key, time as value
    obj[ob.name] = ob.time;
  });
  return obj;
};

quiz.question_10 = function (input) {
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
    .filter(function (inp) {
      return inp.time < 48.5;
    })
    .map(function (currVal) {
      //return currVal;
    });
  return res;
};

quiz.question_11 = function (input) {
  // ---------------------------------------------------------------
  // The input is now the array of skier names whose times are less than 48.5.
  // We want to convert the array of names into a string of names
  // separated by a comma
  // and a space, preserving order. Complete the reduce function.
  //
  // Example input: ['Bob', 'Sue']
  // Eample output: 'Bob, Sue'
  // ---------------------------------------------------------------

  //var res = input.reduce(
  //function(/* TODO args */) {
  //     // TODO your code here
  //   },
  //   0 /* TODO set correct starting value */,
  // };
  return 0;//res;
};

quiz.question_12 = function (input) {
  // ---------------------------------------------------------------
  // Write a sort callback function to sort the skier objects
  // based on their race time in descending order.
  // Return an array of skier objects.
  //
  // Example input: [{ name: 'Sue', time: 50.0 }, { name: 'Bob', time: 45.0 }]
  // Example output: [{ name: 'Bob', time: 45.0 }, { name: 'Sue', time: 50.0 }]
  // ---------------------------------------------------------------

  var compare = function (a, b) {
    return a.time < b.time;
  };
  return input.sort(compare);
};

module.exports = quiz;
