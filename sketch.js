const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg

var engine,world;

function setup() {
  createCanvas(800,400);


  engine = Engine.create();
  world = engine.world;

  box1=new box(500,300,30,30);
  box2=new box(530,300,30,30);
  box3=new box(560,300,30,30);
  box4=new box(590,300,30,30);
  box5=new box(620,300,30,30);

  box6=new box(515,270,30,30);
  box7=new box(545,270,30,30);
  box8=new box(575,270,30,30);
  box9=new box(590,270,30,30);

  box10=new box(530,240,30,30);
  box11=new box(560,240,30,30);
  box12=new box(590,240,30,30);

  box13=new box(545,210,30,30);
  box14=new box(575 ,210,30,30);

  box15=new box(560,180,30,30);


 ball =new Ball(100,300,15);

  spring=new Projectile(ball.body,{x:100,y:200});

 platform = new Platform(560,330,300,30)

  

  Engine.run(engine)
}

function draw() {
  if(bg)
  background(bg);
  Engine.update(engine);
  


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  
  box12.display();
  box13.display();
  box14.display();
  box15.display();

   getTime()

  ball.display();
  spring.display();
  platform.display();
  
  

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
spring.fly();
}

function keyPressed(){
  if(keyCode === 32){
      spring.attach(ball.body);
  }

  Matter.Body.setPosition(ball.body, {x: 100 , y: 300});
}

async function getTime()
{
   var reply = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata") 
   var replyjson = await reply.json()
   var hour = replyjson.datetime.slice(11,13)
   if(hour > 07 && hour <= 19)
   {
    bg = loadImage("bg1.png")
   }
   else
   {
    bg = loadImage("bg2.jpg")
   }

}