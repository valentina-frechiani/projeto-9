var box;

function setup() {
  createCanvas(400,400);
  box=createSprite (200,300,30,30);
  
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW))  {
    box.position.x += 10;
    background("pink")
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 10
    background("purple")
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 10
    background("yellow")
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 10
    background("green")

    
  }

  drawSprites();

}




