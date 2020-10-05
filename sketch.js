var wall;
var speed,weight;
var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  //createSprite(400,200,50,50);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2)
  bullet.velocityX=speed;
  thickness=random(22,83)
 speed=random(223,321)
 weight=random(30,52)
}

function draw() {
  background(0)

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10);
    {
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
 else{
  return false;
}
  
}