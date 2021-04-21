var fixedRect, movingRect,potatoRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(500,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  potatoRect = createSprite(300,200,50,60);
  potatoRect.shapeColor = "green";
  potatoRect.debug = true;

  movingRect.velocityX = -5;
  potatoRect.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  


  bounceOff(movingRect,potatoRect);
  
  drawSprites();
}
