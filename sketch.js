var ball, pad1, pad2, pad3, pad4;

function setup() {
  createCanvas(800,400);
  ball = createSprite(random(20,750), 200, 50, 50);
  pad1 = createSprite(100, 380, 170, 30);
  pad1.shapeColor = "red";
  pad2 = createSprite(300, 380, 170, 30);
  pad2.shapeColor = "blue";
  pad3 = createSprite(500, 380, 170, 30);
  pad3.shapeColor = "green";
  pad4 = createSprite(700, 380, 170, 30);
  pad4.shapeColor = "orange";
}

function draw() {

  background(255,255,255); 
  createEdgeSprites();
  ball.velocityX = 3;
  ball.velocityY = 4;

  ball.bounceOff(pad1);
  ball.bounceOff(pad2);
  ball.bounceOff(pad3);
  ball.bounceOff(pad4);
  
  if(pad1.isTouching(ball) && ball.bounceOff(pad1)){
    ball.shapeColor = "red"
  }

  if(pad2.isTouching(ball) && ball.bounceOff(pad2)){
    ball.shapeColor = "blue"
  }

  if(pad3.isTouching(ball) && ball.bounceOff(pad3)){
    ball.shapeColor = "green"
  }

  if(pad4.isTouching(ball) && ball.bounceOff(pad4)){
    ball.shapeColor = "orange"
  }
  
  drawSprites();
}