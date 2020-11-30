var fixed;
var moving;

function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="green";
  moving.debug=true;
  moving.velocityY=2;
  fixed= createSprite(400,400,50,50);
  fixed.shapeColor="green";
  fixed.debug=true;
  fixed.velocityY=-2;
}

function draw() {
  background(255,255,255);
  
  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    && fixed.x-moving.x<moving.width/2+fixed.width/2) 
    {
       moving.velocityX=moving.velocityX*(-1);
       fixed.velocityX= fixed.velocityX * (-1);
  }
  if (moving.y-fixed.y<moving.height/2+fixed.height/2 && fixed.y-moving.y<moving.height/2+fixed.height/2) {
    moving.velocityY=moving.velocityY*(-1);
    fixed.velocityY= fixed.velocityY * (-1);
  }
  
  drawSprites();
}