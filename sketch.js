
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,angle = 0;
var collision,collision2;
var imageTop,imageBack,imageDown;
var ring;
var backImg;
var cracker,fireanimation,fire,stairs,stairsImg;
var bricks=[],cracker=[];

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;

  fireAnimation = loadAnimation("images/fire3.png","images/fire2.png","images/fire1.png");
  ball = new Ball(200,500,20); 
  imageBack = new Brick(-100,250,500,500)
  imageDown = new Brick(2100,620,5000,300);
  imageTop = new Brick(2100,80,5000,220);
  ring = new Ring(920,440);
  fire = createSprite(1700,370);
  fire.addAnimation("img",fireAnimation);
  fire.scale = 0.5;
  

  // for(var j = 100;j<5000;j += 100){
  //   bricks.push(new Block)
  // }

  for(var i = 500;i <600;i = i+100){
    bricks.push(new Block(i,350));
  }
  for(var i = 500;i <700;i = i+100){
    bricks.push(new Block(i,400));
  }
  for(var i = 500;i <800;i = i+100){
    bricks.push(new Block(i,450));
  }
  
  for(var i = 850;i<5000;i += 500){
  cracker.push(new Obstacle(i,random(200,400),50,60));
  }


  Engine.run(engine);
}

function draw() {
  background(255);


  collision =  Matter.SAT.collides(ball.body,imageDown.body);

  if(keyDown(RIGHT_ARROW)){
    Matter.Body.translate(ball.body,{x:+10,y:0});
    angle += 20;
  }
  if(keyDown(LEFT_ARROW)){
    Matter.Body.translate(ball.body,{x:-10,y:0});
    angle -= 20;
  }

  camera.x = ball.body.position.x;

  Engine.update(engine);


  imageDown.display();
  imageBack.display();
  imageTop.display();

  ring.display();
  ball.display();
  ring.display2();

  for(var j = 0;j < bricks.length;j++){
    bricks[j].display();
  }
  for(var j = 0;j < cracker.length;j++){
    cracker[j].display();
  }
  drawSprites();
  
  fill("black")
  text(mouseX + "  " + mouseY,ball.x + 200,ball.y - 200);

}


 


function keyPressed(){
  
  if(keyCode === UP_ARROW){
  //if(collision.collided){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-0.055});
  //}
  }
}