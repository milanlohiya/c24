

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbinObj, paperObj, groundObj;

function setup() {
	 
	createCanvas(1600,700)
	engine = Engine.create();
	world = engine.world;

	dustbinObj = new Dustbin1(1200,650);
	paperObj = new Paper(200,450,40);
	groundObj = new Ground(width/2, 670,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);


  Engine.update(engine);
  
 paperObj.display();

groundObj.display();

dustbinObj.display();




  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
	Matter.Body.applyForce(paperObj.Body,paperObj.Body.position,{x:85,y:-85})
}
}


