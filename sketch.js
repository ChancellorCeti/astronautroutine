var bath,brush,drink,eat,gym,iss,move,sleep;
var astronaut,bgg;
function preload(){
  bg = loadImage("iss.png");
  bath= loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}



function setup() {
  createCanvas(800,400);
  bgg = createSprite(400, 200, 50, 50);
  bgg.addImage("bgimg",bg);
  bgg.scale=0.2;
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  
}

function draw() {
  background(255,255,255);  
  text("Instructions",200,100);
  text("Up arrow to brush, down arrow to gym, left arrow to eat, right arrow for bath, m key for moving",250,150);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=350;
    astronaut.velocityY=2;
    astronaut.velocityX=1;
  }
  
  
  
  
  
  
  
  createEdgeSprites();
  drawSprites();
}