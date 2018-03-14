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
  var arrayOfObjects = [{'foo':'bar'},
                        {'name':'raj'},
                        {'classCode':'1.001'}
                       ];
  return arrayOfObjects;
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  var arrayOfObjects = [{'name':'Raj','age':26},
                        {'name':'sri','age':25},
                        {'name':'kiddo','age':1}
  ]
  return arrayOfObjects;
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  //ToDo: Check if value or both is function
  var function1 = function() {
    return "I am function 1";
  }
  var function2 = function() {
    return "I am function 2";
  }
  var objectTOreturn = {'function1':function1,
                        'function2':function2
                       }
  return objectTOreturn;
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  var ageToAdd = 40;
  someObject.age = ageToAdd;
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
  console.log(data);
  console.log(carName);
  var carPrice = 0;
  // TODO your code here
    var modelsArray = data.cars[carName];
    var filterModel = function(element, i, array) {
      return element.model == model;
    }
    var specificModels = modelsArray.filter(filterModel);
    var filterByDoors = function(element) {
      return element.doors == doors;
    }

    var doorFilteredModels = specificModels.filter(filterByDoors);

    var priceOfColor = null;
    var getPricebyColor = function(element, i, array) {
      if (element.id == color) {
        priceOfColor = element.price;
      }
    }
    console.log(doorFilteredModels);
    console.log(doorFilteredModels[0].color);
    // FIlter by colors if BMW
    if (carName == 'BMW') {
      var price = doorFilteredModels[0].color.forEach(getPricebyColor)
    }

    console.log('PRICE IS '+priceOfColor);
    if (priceOfColor) {
      return priceOfColor
    }
    else {
      console.log('The given color was not found');
    }
    return null; // if it reaches here for return, it's an unhandled case
    // ---------------------------------------------------------------
    // Find the price of the car whose name, model, and doors are provided
    // as arguments to this function.
    // Return the price.
    // ---------------------------------------------------------------
};
/*cleanedBMWObject = function(data) {
  //Pick the BMW element alone
  var bmwCars = data.cars.BMW;
  var newBMWObjects = []
  var addColorToBase = function(element, i, array) {
    element.forEach(addColorPrice)
  }
  bmwCars.forEach(addColorToBase)
}
tempBMWObject = cleanedBMWObject(data); */
quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------
  // ToDO: Come back for this

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
  data.cars.Honda = []
  data.cars.Honda.push({'model':'Civic','doors':4,"price":18840});
  console.log(data);
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
  input.forEach(function(element, index, array) {
    // TODO your code here
    // add name as key, time as value
    obj[element.name] = element.time;
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
    .filter(function(elem, index, array) {
      return elem.time > 48.5;
    })
    .map(function(elem, index, array) {
      return elem.name;
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
   function(accumulator, currValue) {
      
    },
    '' /* TODO set correct starting value */,
  );
  return null;
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

  var compare = function(/* TODO args */) {
    // TODO your code here
  };
  return input.sort(compare);
};

module.exports = quiz;
