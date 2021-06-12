const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var  world,engine;
var ground1;
var divisionHeight=300;
 var  divisions= [];
 var  plinkos= [];
 var particles= [];


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
 world = engine.world; 

  
ground1 = new Ground(240,760,490,20);


 Engine.run(engine);

    }

function draw() {
  background(5,0,0);  
  
 Engine.update(engine);
 

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  
  for (var j  = 0 ;j< particles.length;j++){
    particles[j].display();
  }
  for (var k  = 0 ;k< divisions.length;k++){
    divisions[k].display();
  } 

//   for (var j  = 0 ;j< plinkos.length;j++){
//     plinkos[j].display();
//   }
//   for (var j = 40 ; j <=innerWidth;j=j+50){
//     plinkos.push(new Plinko(j,75,10,10));
//     }
    
//     for (var j = 15 ;  j<=innerWidth-10;j=j+50){
//       plinkos.push(new Plinko(j,175,10,10));
//     }
    
//     for (var j= 15 ; j <=innerWidth-20;j=j+50){
//     plinkos.push(new Plinko(j,275,10,10));
//       }
            
//      for (var j = 15 ; j <=innerWidth-30;j=j+50){
//       plinkos.push(new Plinko(j,375,10,10));
//          }
  
//   for (var k = 0; k<=innerWidth;k=k + 80){
//    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
//  }


    ground1.display();
  drawSprites();
}

