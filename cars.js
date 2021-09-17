// cars variables
let carsX = [600, 600, 600,600, 600, 600];
let carsY = [40, 95, 150, 210, 265, 320];
let speeds = [2, 2.5, 3.5, 5, 3, 4];
let carWidth = 50;
let carHeight = 40;

/*
//car_1 variables
let xCar_1 = 300
let yCar_1 = 40
let carWidth_1 = 50
let carHeight_1 = 40
let carSpeed_1 = 2

//car_2 variables
let xCar_2 = 600
let yCar_2 = 95
let carWidth_2 = 50
let carHeight_2 = 40
let carSpeed_2 = 2.5

//car 3 variables
let xCar_3 = 600
let yCar_3 = 150
let carWidth_3 = 50
let carHeight_3 = 40
let carSpeed_3 = 3.5
*/

function carMoviment(){
  for (let i =0; i < cars.length; i++){
    carsX[i] -= speeds[i];
  }
}

function again(){
  for (let i=0; i<cars.length; i++){
    if (carsX[i] < -50){
    carsX[i] = 600
    }
  }
}
