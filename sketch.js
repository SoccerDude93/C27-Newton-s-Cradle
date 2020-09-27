const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;
var bobDiameter = bob.radius; 

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(800,400);

  bobObject1 = new Bob (100, 250, 20);
  bobObject2 = new Bob (150, 250, 20);
  bobObject3 = new Bob (200, 250, 20);
  bobObject4 = new Bob (250, 250, 20);
  bobObject5 = new Bob (300, 250, 20);

  roofObject = new Roof (100, 100, 10, 20);

  rope1=new Rope (bobObject1.body, roofObject.body,-bobDiameter*2, 0);
  rope2=new Rope (bobObject2.body, roofObject.body,-bobDiameter*2, 0);
  rope3=new Rope (bobObject3.body, roofObject.body,-bobDiameter*2, 0);
  rope4=new Rope (bobObject4.body, roofObject.body,-bobDiameter*2, 0);
  rope5=new Rope (bobObject5.body, roofObject.body,-bobDiameter*2, 0);
}

function draw() {
  background(255,255,255);
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}