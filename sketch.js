var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstacles, obstaclesImg1,obstaclesImg2,
obstaclesImg3, obstaclesImg4,obstaclesImg5,obstaclesImg6

var Score=0

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstaclesImg1=loadImage( "obstacle1.png")
  obstaclesImg2=loadImage( "obstacle2.png")
  obstaclesImg3=loadImage( "obstacle3.png")
  obstaclesImg4=loadImage( "obstacle4.png")
  obstaclesImg5=loadImage( "obstacle5.png")
  obstaclesImg6=loadImage( "obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(255);

  text("Score:"+Score,520,50)
  Score=Score+Math.round(frameCount/100)



  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  spawnObstacles()
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.8;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles(){
  if (frameCount %90===0){
    obstacles=createSprite(600,155,20,20)
    obstacles.velocityX=-3
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1:obstacles.addImage(obstaclesImg1)
      break;
      case 2:obstacles.addImage(obstaclesImg2)
      break;
      case 3:obstacles.addImage(obstaclesImg3)
      break;
      case 4:obstacles.addImage(obstaclesImg4)
      break;
      case 5:obstacles.addImage(obstaclesImg5)
      break;
      case 6:obstacles.addImage(obstaclesImg6)
      break;
      default:break;
    
    }
obstacles.scale=0.6
obstacles.lifetime=200
  }
}



