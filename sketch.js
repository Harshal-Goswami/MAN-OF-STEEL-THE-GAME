var SUPERMAN , SUPERMANImg;
var ZOD , ZODImg;
var SPACESHIP1 , SPACESHIP1Img;
var SPACESHIP2 , SPACESHIP2Img;

function preload()
{
 SUPERMANImg = loadImage("IMAGES/SUPERMAN.png");
 ZODImg = loadImage("IMAGES/ZOD.png");
 SPACESHIP1Img = loadImage("IMAGES/SPACE-SHIP.png");
 SPACESHIP2Img = loadImage("IMAGES/SPACE-SHIP.png");
}

function setup() {
 createCanvas(500, 500);
 SUPERMAN = createSprite(340,90 ,10,10);
 SUPERMAN.addImage(SUPERMANImg);
 SUPERMAN.scale = 0.1;

 ZOD = createSprite(65,330 ,10,10);
 ZOD.addImage(ZODImg);
 ZOD.scale = 0.1;
}


function draw() {
  background('red');
  if (keyDown(RIGHT_ARROW)) {
    SUPERMAN.velocityX=2;
    SUPERMAN.velocityY=0;
 }
  if (keyDown(LEFT_ARROW)) {
    SUPERMAN.velocityX=-2;
    SUPERMAN.velocityY=0;
 }
    if (keyDown(UP_ARROW)) {
    SUPERMAN.velocityX=0;
    SUPERMAN.velocityY=-2; 
 }
    if (keyDown(DOWN_ARROW)) {
    SUPERMAN.velocityX=0;
    SUPERMAN.velocityY=2;
 }
  
  drawSprites();
}
