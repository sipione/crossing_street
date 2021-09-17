let road;
let actor;
let car_1;
let car_2;
let car_3;
let ambiance;
let bip;
let hit;

function preload(){
  road = loadImage("images/estrada.png");
  actor = loadImage("images/ator-1.png");
  car_1 = loadImage("images/carro-1.png");
  car_2 = loadImage("images/carro-2.png");
  car_3 = loadImage("images/carro-3.png");
  cars = [car_1, car_2, car_3, car_1, car_2, car_3];
  ambiance = loadSound("sounds/trilha.mp3");
  bip =  loadSound("sounds/pontos.wav");
  hit = loadSound("sounds/colidiu.mp3");
}
