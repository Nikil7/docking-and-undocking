var issImg,iss,spaceImg,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4;
var spacecraft;
var hasDocked;

function preload(){
   issImg = loadImage("./assets/iss.png");
   spaceImg = loadImage("./assets/spacebg.jpg");
   spacecraftImg1 = loadImage("./assets/spacecraft1.png");
   spacecraftImg2 = loadImage("./assets/spacecraft2.png");
   spacecraftImg3 = loadImage("./assets/spacecraft3.png");
   spacecraftImg4 = loadImage("./assets/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400,200,100,100);
  iss.addImage(issImg);
  iss.scale = 0.7;

  spacecraft = createSprite(410,345,100,100);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale = 0.2;
  spacecraft.setCollider("circle",0,0,500);
  spacecraft.debug = true;

  
  
}

function draw() {
  
  background(spaceImg);
  
  if(spacecraft.isTouching(iss)){
    textSize(25);
    fill("white")
    text("Docking Successful!",300,390);
  }

  drawSprites();
  
  
  
  

  spacecraft.velocityX = 0;
  spacecraft.velocityY = 0;

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraftImg3);
    spacecraft.velocityX  = -1;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftImg4);
    spacecraft.velocityX  = 1;
  }

  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraftImg2);
    spacecraft.velocityY  = -1;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftImg2);
    spacecraft.velocityY  = 1;
  }

  

}