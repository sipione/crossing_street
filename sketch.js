function setup() {
  createCanvas(500, 400);
  ambiance.loop();
}

function draw() {
  background(road);
  image(actor, actorX, actorY, actorWidth, actorHeight);
  for (let i =0; i<cars.length; i++){
    image(cars[i], carsX[i], carsY[i], carWidth, carHeight)
  }
  actorMoowviment();
  carMoviment();
  again();
  crash();
  scoreBoard();
}
