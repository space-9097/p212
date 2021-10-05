var ball, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var left,right
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball= Matter.Bodies.circle(100,275,20,ball_options)
	World.add(world,ball)
    ground=new Ground(400,680,800,40)
	left=new Ground(500,620,10,80)
	right=new Ground(650,620,10,80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show()
  left.show()
  right.show()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.position,{x:0.05,y:-0.05})
	}
}

