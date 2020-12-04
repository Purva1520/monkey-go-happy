var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score


function preload(){
  
monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas=(600,600)
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;  
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)
var survivalTime=0;
  
}


function draw() {
background("white");
  
stroke("white");
textSize(20);
fill("white");
text("score:"+ score,500,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("survivalTime:"+ survivalTime,100,50);


  
  if(ground.x<0){
    ground.x=ground.width/2;
    
  }
  
  if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
   }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  banana();
  

  
 drawSprites(); 
}

function banana(){
  if  (frameCount % 80 === 0){
    var banana = createSprite(380,360,20,20);
    banana.y = Math.round(random(120,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 100;
    
}
    
}
  
function obstacle(){
  if  (frameCount % 300 === 0){
    var obstacle = createSprite(380,360,20,20);
    obstacle.y = Math.round(random(120,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200 ; 
    
}
    
}
  
 




   