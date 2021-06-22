
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup , bananaGroup;
var score;
var ground;

var survivalTime =0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
monkey = createSprite(100,325,50,50);
  monkey.addAnimation("running",monkey_running);
 monkey.scale=0.2;
  
  ground = createSprite(50,400,600,25);
  ground.velocityX = -4;
  
  
  
}


function draw() {
background("white");
  if(ground.x<200){
    ground.x = ground.width/2; 
     }
  if(keyDown("space")){
     monkey.velocityY = -10;
     }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground); 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime :" +survivalTime,100,50);  
 
  obstacleGroup();
  bananaGroup();
  
  drawSprites();
}
function obstacleGroup(){
  if(frameCount % 60 === 0){
     var obstacle = createSprite(500,340,50,50);
    obstacle.velocityX = -6 ;
    
   obstacle.addImage(obstacleImage);  
    obstacle.scale = 0.2
    
    
     }
}
function bananaGroup(){
   if(frameCount % 80 === 0){
     var banana = createSprite(350,150,50,50);
     banana.addImage(bananaImage)
     banana.scale = 0.1;
    banana.velocityX = -6 ;
}
}






