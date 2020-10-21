var PLAY=1;
var END=0;
var gameState=1;
var sword,swordImage;
var fruit1,fruit2,fruit3,fruit4;
var monstor,monstorImage,monstor2Image;
var score,gameOverImg;
var knifeSwooshSound,gameOverSound

function preload(){
  swordImage = loadImage("sword.png");
   fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
   monstorImage = loadImage("alien1.png");
   monstor2Image = loadImage("alien2.png");
   gameOverImg = loadImage("gameover.png");
    knifeSwooshSound = loadSound(" knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
}
function setup()
{
  createCanvas(400, 400);
  
   // creating sword to cut fruits
     sword = createSprite(200,220,20,50);
      sword.addImage(swordImage); 
      sword.scale = 0.7;
  
   fruitGroup = new Group();
   enimiesGroup = new Group();
  score = 1
}

function draw()
{
  background("cyan");
  
  if(gameState===PLAY)
    {           
      enimies();
      Fruits();
      sword.y = World.mouseY
      sword.x = World.mouseX
       if(fruitGroup.isTouching(sword)) 
       {
          fruitGroup.destroyEach();
             score = score+1
         knifeSwooshSound.play();
       }  
      if(enimiesGroup.isTouching(sword))
        {
         
          gameState = END;
          
          gameOverSound.play();
        }
    } 
    
  
  if(gameState===END)
    {
    
   
     sword.addImage(gameOverImg);
      
      enimiesGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enimiesGroup.setVelocityXEach(0);
      sword.x=200;
        sword.y=200;
      
    }
  
  
 
  drawSprites();
  text("Score: "+ score, 300,50);
}

function Fruits()
{
 
if(World.frameCount%80==-0)
  {
    fruit = createSprite(400,200,20,20)
    fruit.scale = 0.2;
    r=Math.round(random(1,4));
    if(r==1)
    {
      fruit.addImage(fruit1);
    } else if(r==2){
      fruit.addImage(fruit2);
    } else if(r==3){
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX = -(7+(score/4));
    fruit.setLifetime = 100;
    fruitGroup.add(fruit);
  }
}

function enimies()
{


var rand; 
  if(World.frameCount%200===0) 
{ 
  var monstor = createSprite(0,Math.round(random(20, 370)), 10, 10); 
monstor.velocityX=(8+(score/10))
monstor.lifetime = 150;
monstor.scale = 0.9; 

 rand= Math.round(random(1,2))
    switch(rand)
 { 
     case 1: 
     monstor.addImage(monstorImage) ;
     break 
     case 2: 
     monstor.addImage(monstor2Image)
     break; 
 }   
 enimiesGroup.add(monstor);
} 
}

  
  
  







