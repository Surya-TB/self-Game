var platform
var platformG
var rockG
var PLAY=1
var END=0
var gameState=PLAY
var hearts=3

function preload(){
  backgroundimg=loadImage("assets/bg.jpg")
boyRunning = loadImage('assets/boyrunning.gif')
rockimg = loadImage('assets/rock.png')
roadimg = loadImage('assets/road.png')
fireimg = loadImage('assets/fire.png')
andesiteimg = loadImage('assets/andesite.png')
heart1img = loadImage('assets/heart1.png')
heart2img = loadImage('assets/heart2.png')
heart3img = loadImage('assets/heart3.png')
//boximg = loadImage("assets/box.png")
platformimg = loadImage('assets/platform.png')
}


function setup(){
createCanvas(1200,800)
//background image
bg = createSprite(590,385,1,1);
bg.addImage(backgroundimg);
bg.scale = 1.3

player = createSprite(140,620,40,40)
player.addImage("boy",boyRunning)
player.scale=0.2
//player.debug=true
player.setCollider("rectangle",70,30,650,850)

road=createSprite(340,780,400,100)
road.addImage(roadimg)
road.velocityX=-4

heart1 = createSprite(400,100,20,20)
heart1.addImage(heart1img)
heart1.scale=0.2

heart2 = createSprite(800,100,20,20)
heart2.addImage(heart2img)
heart2.scale=0.2

heart3 = createSprite(600,100,20,20)
heart3.addImage(heart3img)
heart3.scale=0.2

//box = createSprite(990,70,200,200)
//box.addImage(boximg)
//box.scale=0.8
rockG= new Group()
platformG=new Group()

//platform.velocity=-4
}

function draw() {
  background("black");
if (gameState==PLAY){
  if (road.x<600){
    road.x=road.width/2
    
      }
      player.velocityY=player.velocityY+0.5
player.collide(road)

if(keyDown("space")){
player.velocityY=-17
}
if (player.x<140){
  player.x=140
}
sponePlatform();
spone();
player.collide(platformG)

if(player.isTouching(rockG)){
hearts=hearts-1
console.log(hearts)
}
if(hearts==3){
  heart1.visivble==true
  heart2.visivble==true
  heart3.visivble==true
}
else if(hearts==2){
heart1.visivble==false
heart2.visivble==true
heart3.visivble==true
}
else if(hearts==1){
  heart1.visivble==false
  heart2.visivble==false
  heart3.visivble==true
}
else if(hearts==0){
  //gameState=END
}
}


if(gameState==END){

}

  










 drawSprites()

 
}

function spone(){
  if(frameCount%150==0){
    rock = createSprite(1000,690,40,40)
    var r=Math.round(random(1,3))
    rockG.add(rock)
    if(r==1){
      rock.addImage(rockimg)
      rock.scale=0.5
      rock.velocityX=-7
    }
    else if(r==2){
      rock.addImage(fireimg)
      rock.scale=0.7
      rock.velocityX=-5
    }
    else if(r==3){
      rock.addImage(andesiteimg)
      rock.scale=0.2
      rock.velocityX=-8
    }

     

   // fire = createSprite(500,660,20,20)
   // fire.addImage(fireimg)
    //fire.scale=0.3
    //fire.velocityX=-3

    //andesite = createSprite(900,660,20,20)
    //andesite.addImage(andesiteimg)
   // andesite.scale=0.3
   // andesite.velocityX=-3
  }
  

}
  function sponePlatform(){
    if(frameCount%200==0){
    console.log("hi")  
var p = Math.round(random(400,500))
platform = createSprite(800,p,50,50)
platform.addImage(platformimg)
platform.scale=0.7
platform.velocityX=-5
platformG.add(platform)
    }
    
  } 
