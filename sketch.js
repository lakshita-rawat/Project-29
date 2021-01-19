
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ground2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10,block11, block12;
var block13, block14, block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24;

var object;
var point;
var hexagon;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
		ground=new Ground(400,600,400,30);
		ground2=new Ground(600,200,400,30);
		block1= new Box(250,550,50,70);
		block2= new Box(300,550,50,70);
		block3= new Box(350,550,50,70);
		block4= new Box(400,550,50,70);
		block5= new Box(450,550,50,70);
		block6= new Box(500,550,50,70);
		block7= new Box(550,550,50,70);

		block8= new Box(300,480,50,70);
		block9= new Box(350,480,50,70);
		block10= new Box(400,480,50,70);
		block11= new Box(450,480,50,70);
		block12= new Box(500,480,50,70);

		block13= new Box(350,410,50,70);
		block14= new Box(400,410,50,70);
 		block15= new Box(450,410,50,70);

		block16= new Box(400,340,50,70);

		block17= new Box(500,150,50,70);
		block18= new Box(550,150,50,70);
		block19= new Box(600,150,50,70);
		block20= new Box(650,150,50,70);
		block21= new Box(700,150,50,70);

		block22= new Box(550,80,50,70);
		block23= new Box(600,80,50,70);
		block24= new Box(650,80,50,70);
		
		object= new Rope(point,hexagon);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();

block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();


  drawSprites();
 
}



