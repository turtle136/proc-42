
var spaceCraft,iss,issA;
var spaceBG,issImg,spaceCraftImg;
var spaceCraft_up,spaceCraftImg3,spaceCraftImg4;

function preload(){
  spaceBG = loadImage("Images/spacebg.jpg");
  issImg = loadImage("Images/iss.png");
  spaceCraftImg = loadAnimation("Images/spacecraft1.png");
  spaceCraft_up = loadAnimation("Images/spacecraft2.png");
  spaceCraftImg3 = loadAnimation("Images/spacecraft3.png");
  spaceCraftImg4 = loadAnimation("Images/spacecraft4.png");
  

}

function setup() {
  createCanvas(1000,600);

  spaceCraft=createSprite(550, 400, 50, 50);
  spaceCraft.addAnimation("space", spaceCraftImg);
  spaceCraft.addAnimation("up going", spaceCraft_up);
  spaceCraft.addAnimation("space", spaceCraftImg3);
  spaceCraft.addAnimation("space", spaceCraftImg4);
  spaceCraft.scale = 0.12;
  //spaceCraft.setCollider("rectangle",0,0,spaceCraft.width,spaceCraft.height);
  //spaceCraft.debug = true;

  iss=createSprite(500, 250, 250, 50);
  iss.addImage("iss is cool",issImg);
  issA = createSprite(430,275,20,20);
  issA.visible = false;
  //issA.setCollider("rectangle",0,0,issA.width,issA.height);
  //issA.debug = true;
}

function draw() {
  background(spaceBG); 
  imageMode(CENTER);
  if(issA.isTouching(spaceCraft)){
    fill("blue");
    textSize(30);
    text("IT HAS DOCKED",120,250);
        spaceCraft.y = 312;
        spaceCraft.x = 432;

  }
  //console.log(spaceCraft.position.y);

    if(keyIsDown(UP_ARROW)){
      spaceCraft.y -=1;
      spaceCraft.changeAnimation("it's going up",spaceCraft_up);
    }
    if(keyIsDown(DOWN_ARROW)){
      spaceCraft.y +=1;
      spaceCraft.changeAnimation("it's going down",spaceCraftImg);
    }
    if(keyIsDown(RIGHT_ARROW)){
      spaceCraft.x +=1;
      spaceCraft.changeAnimation("it's going right",spaceCraftImg3);
    }
    if(keyIsDown(LEFT_ARROW)){
      spaceCraft.x -=1;
      spaceCraft.changeAnimation("it's going left",spaceCraftImg4);
    }

  drawSprites();
}

