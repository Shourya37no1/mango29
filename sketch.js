
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,ground1,boy,boy_img,tree1,stone1,slingshot1;
function preload()
{
	boy_img=loadImage("sprites/boy.png");
}


function setup() {
	createCanvas(800, 700);
	boy= createSprite(200,650,50,30);
	boy.addImage(boy_img);
boy.scale=0.08;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
boy = Bodies.rectangle(200,650,50,30, {isStatic:false});
World.add(world,boy);
tree1=new Tree(600,400,200,50);
	mango1=new mango(500,300,30);
	mango2=new mango(560,140,30);
	mango3=new mango(600,150,30);
	mango4=new mango(630,230,30);
	mango5=new mango(600,200,30);
	mango6=new mango(600,300,30);
	mango7=new mango(690,230,30);
	mango8=new mango(660,200,30);
	stone1=new stone(200,600,30);
	
	slingshot1 = new SlingShot(stone1.body,{x:200, y:50});
ground1=new Ground(400,height,800,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  
  

stone.display();
ground1.display();
  drawSprites();
 
}
 
function keyPressed (){
	if(keyCode===32){
		Matter.body.setPosition(stone1,{x:235,y:420})
		slingshot.attach(stone1.body);
	}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition)
	if(distance<-lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lMango.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
