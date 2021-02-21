var fixedRect,movingRect




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80)
  movingRect=createSprite(400,200,80,30)
  console.log(movingRect.x-fixedRect.x)
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
  
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  console.log(movingRect.x-fixedRect.x)
  console.log(fixedRect.width/2 +movingRect.width/2)
  if(movingRect.x-fixedRect.x < fixedRect.width/2 +movingRect.width/2  &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  }
  else
  {
    fixedRect.shapeColor="green"
   movingRect.shapeColor="green"
  }
  drawSprites();
}