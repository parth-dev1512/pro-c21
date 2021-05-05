var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(10, 200, 30, 5);
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height)
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  bullet.velocityX=speed;

}

function draw() {
  background(0); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness*thickness*thickness)

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;


}