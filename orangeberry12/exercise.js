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
  return 'Hi!';
};

quiz.question_02 = function() {
  // ----------------------------------------
  //   QUESTION 02
  //   Return an array of objects
  // ----------------------------------------
  return [{},{}];
};

quiz.question_03 = function() {
  // ----------------------------------------
  //   QUESTION 03
  //   Return an array of objects.
  //   Each object needs to have
  //   a 'name' and 'age' property
  // ----------------------------------------
  var newArray = [{"name":"Sally", "age":18},{"name":"booboo", "age":12}];
  return newArray;
};

quiz.question_04 = function(foo, bar) {
  // ----------------------------------------
  //   QUESTION 04
  //   Return an object,
  //   each object property value must be a function
  // ----------------------------------------
  var myObj ={};
  myObj["foo"]=(a,b)=>{return a+b};
  myObj["bar"]=()=>{console.log("bar function")};
  return myObj;
};

quiz.question_05 = function(someObject) {
  // ----------------------------------------
  //   QUESTION 05
  //   Add the property 'age' to someObject
  //   Give 'age' any value you like.
  // ----------------------------------------
  //console.log("This is someObject: " + someObject);
  if (someObject === undefined){
    someObject ={}; 
    someObject["age"]=12;
  }
  else{
    someObject["age"]=12;
  }

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
  console.log("carName is: " + carName + " car model: " + model + " car doors: "+doors+ " color: "+color);
  data.cars[carName].forEach((item)=>{
    if (item.model===model){
      if (item.doors === doors){
          item.color.forEach((colorCar)=>{
            if (colorCar.id === color){
              carPrice = colorCar.price;
            }
          })
        }
      }
    });

  return carPrice;
};

quiz.question_07 = function(data) {
  // ---------------------------------------------------------------
  // Find the maximum priced car from the data given in cardata variable
  // Return an object with properties: make, model, doors, price
  // ex: '{ make: 'Tesla', model: 'Model S', doors: 4, price: 80000 }'
  // ---------------------------------------------------------------
  //console.log(data);
  var maxPricedCar = {};
  // TODO your code here

  var currentPrice = 0;

  for (var name in data.cars){
    //console.log(data.cars[name]);
    data.cars[name].forEach((model)=>{
      if(model.price !== undefined){
        //console.log(model.price);
        if (currentPrice<model.price){
          maxPricedCar["make"]=name;
          maxPricedCar["model"]= model.model;
          maxPricedCar["doors"] = model.doors;
          maxPricedCar["price"] = model.price;
        }
      }
      else{
        model.color.forEach((color)=>{
          //console.log(color.price);
          if (currentPrice < color.price){
            maxPricedCar["make"]=name;
            maxPricedCar["model"]= model.model;
            maxPricedCar["doors"] = model.doors;
            maxPricedCar["price"] = color.price;
          }
        });
      }
      
    });
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
  data.cars["Honda"]=[{
    "model":"Civic",
    "doors": 4,
    "price":18840,
  }];
  //console.log(data.cars["Honda"])
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
  input.forEach(function(skier) {
    // TODO your code here
    obj[skier.name]=skier.time;
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
  console.log(input);
  var res = input
    .filter(function(a) {
      return a.time<48.5;
    })
    .map(function(b) {
      return b.name
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
    function(accumulator, current) {
      // TODO your code here
      return accumulator+","+current;
    }
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
    if (a.time>b.time) {return 1}
    else if (a.time<b.time){return -1}
    else {return 0};
  };
  return input.sort(compare);
};

module.exports = quiz;
