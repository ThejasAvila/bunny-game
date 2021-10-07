var bunny , carrot,obs1,obs2,obs3,edges;
function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  bunny = createSprite(40,550,40,40);
  carrot = createSprite(550,40,40,40);
  obs1 = createSprite(500,120,100,20) ; 
  obs2 = createSprite(280 ,220,100,20) ;
  obs3 = createSprite(80,320,100,20);
  bunny.shapeColor="pink";
  carrot.shapeColor="#fc4e03";
  obs1.shapeColor="#11022e";
  obs2.shapeColor="#11022e";
  obs3.shapeColor="#11022e";
  obs1.velocityX = 5;
  obs2.velocityX = 5;
  obs3.velocityX = 5;
  edges = createEdgeSprites();
}

function draw() {
  background("green");  
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  carrot.bounceOff(edges[0]);
  carrot.bounceOff(edges[1]);
  carrot.bounceOff(edges[2]);
  carrot.bounceOff(edges[3]);
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);

  if(keyDown("up")){
    bunny.y=bunny.y -3;
  }
  
  if(keyDown("down")){
    bunny.y=bunny.y +3;
  }

  if(keyDown("right")){
    bunny.x=bunny.x +3;
  }

  if(keyDown("left")){
    bunny.x=bunny.x -3;
  }

  if(bunny.isTouching(carrot)){
    text("HURRAY!!YOU WON",200,200)
  }
 
  if(bunny.isTouching(obs1)){
    obs1.velocityX=0
    text("YOU LOSE...BETTER LUCH NEXT TIME!!",200,200)
  }

  if(bunny.isTouching(obs2)){
    obs2.velocityX=0
    text("YOU LOSE...BETTER LUCH NEXT TIME!!",200,200)
  }

  if(bunny.isTouching(obs3)){
    obs3.velocityX=0
    text("YOU LOSE...BETTER LUCH NEXT TIME!!",200,200)
  }

    drawSprites();
}
