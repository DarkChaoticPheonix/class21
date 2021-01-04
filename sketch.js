var fixedRect
var movingRect
var rect1,rect2,rect3,rect4

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(200, 100, 50, 80);
 fixedRect.shapeColor = "blue"
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue"

  rect1=createSprite(300,200,30,10);
  rect1.shapeColor = "blue"

  rect2=createSprite(600,200,60,23);
  rect2.shapeColor = "blue"

  rect3=createSprite(550,340,0,100);
  rect3.shapeColor = "blue"

  rect4=createSprite(85,127,44,34);
  rect4.shapeColor = "blue"

  rect1.velocityY=-5;
  
}

function draw() {
  background("black");  
movingRect.y=World.mouseY;
movingRect.x=World.mouseX;
bounceOff(rect1,movingRect);


  drawSprites();
}
