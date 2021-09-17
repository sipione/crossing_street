//actor variables
let actorX = 85;
let actorY= 380;
let actorWidth = 30
let actorHeight = 30
let actorSpeed = 3
let collision = false
let score = 0


function actorMoowviment(){
  if (keyIsDown(UP_ARROW)){
    actorY -= actorSpeed;
  }else if (keyIsDown(DOWN_ARROW) && actorY<380){
    actorY += actorSpeed;
  }
}

function crash(){
  for (i=0; i<cars.length; i++){
    collision = collideRectRect(carsX[i], carsY[i], carWidth, carHeight, actorX, actorY, actorWidth, actorHeight);
    if (collision){
      hit.play();
      actorY = 380
      if (score>0){
        score -= 1
      }
    }
  }
}
function scoreBoard(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(score, width / 5, 27);
  if (actorY < 5){
    bip.play();
    score+=1
    actorY = 380
  }
}
