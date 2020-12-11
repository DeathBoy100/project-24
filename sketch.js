
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ceiling1 = new ceiling(400,200,500,40)
	bob1 = new bob(200,550,50)
	bob2 = new bob(300,550,50)
	bob3 = new bob(400,550,50)
	bob4 = new bob(500,550,50)
	bob5 = new bob(600,550,50)
	rope1 = new rope(bob1.body,{x:250 , Y:200})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ceiling1.display()
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display()
  
  
}



