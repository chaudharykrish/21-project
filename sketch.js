
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(400,680,400,20);
  right = new Ground(600,670,20,40);
  left = new Ground(650,670,20,40);

	var ballOption = {

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
		  }

	//Create the Bodies Here.

	ball = Bodies.circle(200,600,20,ballOption);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();

  ellipse(ball.position.x,ball.position.y,20)
  

  drawSprites();

 
}


function keypressed(){

if (kyecode == up_arrow){


	
}


}


