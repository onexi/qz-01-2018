var quiz = require('./exercise.js');

// ----------------------------------------
//   BASICS
// ----------------------------------------
console.log('************** Q0 **************');
var q0 = quiz.question_00();
console.log(q0);

console.log('************** Q1 **************');
var q1 = quiz.question_01();
console.log(q1);

console.log('************** Q2 **************');
var q2 = quiz.question_02();
console.log(q2);

console.log('************** Q3 **************');
var q3 = quiz.question_03();
console.log(q3);

console.log('************** Q4 **************');
var q4 = quiz.question_04();
var y = q4.getNumber();
console.log(q4.doDouble(y));
console.log(q4);

console.log('************** Q5 **************');
var someobj = {'name': 'fred'};
var q5 = quiz.question_05(someobj);
console.log(q5);

// ----------------------------------------
//   OBJECTS
// ----------------------------------------

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
        "Ford": [
            {"model":"Taurus", "doors":4, "price": 21000},
            {"model":"Escort", "doors":4,  "price": 22000},
            {"model":"Expedition", "doors":4,  "price": 64447},
            {"model":"Fusion", "doors":4,  "price": 24000},
            {"model":"Fiesta ", "doors":4,  "price": 13995},
            {"model":"EcoSport ", "doors":4,  "price": 20995},
            {"model":"Edge ", "doors":4,  "price": 30215},
            {"model":"Explorer ", "doors":4,  "price": 32985}
        ],

        "BMW": [
            {"model":"series 3", "doors":4,
                "color":[
                {"id":"red", "price": 35000 },
                {"id":"silver", "price": 40000 }]
            }
        ]
    }
};

console.log('************** Q6 **************');
var q6 = quiz.question_06(carData, 'BMW', 'series 3', 4 , 'red');
console.log(q6);

console.log('************** Q7 **************');
var q7 = quiz.question_07(carData);
console.log(q7);

console.log('************** Q8 **************');
var q8 = quiz.question_08(carData);
console.log(q8);

// ----------------------------------------
//   ARRAY AND FUNCTIONS
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

console.log('************** Q9 **************');
var q9 = quiz.question_09(skierData);
console.log(q9);

console.log('************** Q10 **************');
var q10 = quiz.question_10(skierData);
console.log(q10);

console.log('************** Q11 **************');
var q11 = quiz.question_11(['Henrik', 'Andre', 'Victor', 'Manfred']);
console.log(q11);

console.log('************** Q12 **************');
var q12 = quiz.question_12(skierData);
console.log(q12);
