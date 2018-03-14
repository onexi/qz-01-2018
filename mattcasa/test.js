// test = function(data, carName, model, doors, color) {
//     // ---------------------------------------------------------------
//     // Find the price of the car whose name, model, and doors are provided
//     // as arguments to this function.
//     // Return the price.
//     // ---------------------------------------------------------------
  
//     var carPrice = 0;
  
//     data.carName[0].model);
  
//     return carPrice;
//   };


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
            {"model":"series 3", "doors":4, "color":[ 
                                                        {"id":"red", "price": 35000 },
                                                        {"id":"silver", "price": 40000 }]
            }
        ]
    }
};



test = function(data) {
    var honda = data.cars.Honda = []
    // console.log(data);
    honda[0] = {};
    honda[0].model = "Civic";
    honda[0].doors = 4;
    honda[0].price = 18840;

    console.log(honda);
}


var q6 = test(carData);



// if (carData.cars.BMW[0].model = "series 3") console.log(true)
// var q6 = test(carData, 'BMW', 'series 3', 4 , 'red');
// console.log(q6);

