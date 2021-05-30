const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var divisions = [];
var plinko = [];
var particle = [];
var divisionHeight = 300;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k<=width; k = k+80){
    divisions.push(new Divisions(k, 330, 10,250));
 }
 for (var j = 40; j <=width; j=j+100)
   {
     plinko.push(new Plinko(j,40,10));
   }
   for (var j = 20; j <=width-10; j=j+50)
  {
    plinko.push(new Plinko(j,165,10 ))
  }  
}




function draw() {
  background(0,0,0);
  for (var k = 0; k<divisions.length; k++){
    console.log(divisions);
  divisions[k].display();
  }
  for (var k = 0; k<plinko.length; k++){
    console.log(divisions);
  plinko[k].display();
  }
if(frameCount%60===0)
 {
    particle.push(new Particle(random(width/2-30,width/2+30),10,10 ))
   }  
  for (var k = 0; k<particle.length; k++){
    console.log(divisions);
  particle[k].display();
  
  }
  

  }
 


