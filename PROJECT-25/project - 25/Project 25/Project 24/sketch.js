const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin2, dustbin3;
var ground;
var paper;
var backgroundImg;
var edges;

function preload(){
	backgroundImg = loadImage("path.png");

}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(600,height,1400,20)

	
	dustbin2 = new Dustbin(640,620,80);
	dustbin3 = new Dustbin(669,620,80);

	paper = new Paper(320,670,20);
	

	Engine.run(engine);

	
}


function draw() {
	background(backgroundImg);
	Engine.update(engine);
  
	edges = createEdgeSprites;

 
 dustbin2.display();
 dustbin3.display();
 ground.display();
 paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	   
	}
   }
   

