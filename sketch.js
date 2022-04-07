
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball;
var groundObj;
var leftwall;
var rightwall;

var button;

//Dustbin...
var rSide;
var lSide;


function setup() {
	createCanvas(800, 700);

		engine = Engine.create();
		world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.95,
		friction:0,
		//this is commented because ball is not bouncing with this - density:1.2...
	}

	button = createImg("button.png");
	button.position(370,150);
	button.size(50,50);
	button.mouseClicked(PTmotion);

	//Create the Bodies Here...
	groundObj = new Ground(width/2,690, width,10);
	leftwall = new Ground(795,560, 10,250);
	rightwall = new Ground(5,560, 10,250);

	//Creating Crumpled paper ball...
	ball = Bodies.circle(50,350,20,ball_options);
	World.add(world,ball);

	//Creating Dustbin...
	rSide = new Ground(600,650, 5,70);
	lSide = new Ground(450,650, 5,70);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	

}


function draw() {
	background(0);
	
	textSize(20)
	text("←Click here", 425,182)
  fill("white");
  groundObj.show();
  leftwall.show();
  rightwall.show();

  rSide.show();
  lSide.show();
  

  fill("black");
  strokeWeight(5);
  stroke("white");
  ellipse(ball.position.x, ball.position.y, 20,20);


  drawSprites();

}

function PTmotion(){

	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:-0.01})
  }