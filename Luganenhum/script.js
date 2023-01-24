const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;
var luvinha,luvinhaImg
var mente, menteImg
var machadinho, machadinhoImg
var alma, almaImg
var espaço, espaçoImg
var poder, poderImg
var realidade, realidadeImg
var tempo, tempoImg
var button, button2
var score = 0
var flag = 0





function preload()
{
  
  luvinhaImg = loadImage("imagens/luvinha.png")
    menteImg = loadImage ("imagens/mente.png")
      machadinhoImg = loadImage ("imagens/machadinho.png") 
        almaImg = loadImage("imagens/alma.png")
          espaçoImg = loadImage("imagens/espaço.png")
            poderImg = loadImage("imagens/poder.png")
              realidadeImg = loadImage("imagens/realidade.png")
                tempoImg = loadImage("imagens/tempo.png")
  
}

function setup() 
{
  
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  luvinha = createSprite(random(0,windowWidth),400)
  luvinha.addImage(luvinhaImg)
  luvinha.scale = 0.2
    
button = createImg("imagens/machadinho.png")
button.position(246,31)
    button.size(50,50)
    button.mouseClicked(stormBreaker)

    button2 = createImg("imagens/vento.png")
    button2.position(fruit.position.x +50, fruit.position.y)
    button2.size(60,60)
    button2.mouseClicked(eolo)

  

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
drawSprites()
  

if (fruit!= null) {

  image(menteImg,fruit.position.x,fruit.position.y,70,70);

} 

  
  rope.show();
  Engine.update(engine);
  ground.show();



if ( flag == 1 && WT(fruit, luvinha,50)) {
  
score = score + 1

World.remove(world,fruit)
  fruit = null

}

}



function eolo(){

Matter.Body.applyForce(fruit ,{x:0,y:0},{x:0.1,y:0})

}

function stormBreaker(){

rope.break()

fruit_con.SBinversa()

fruit_con = null

flag =1

}

function WT(body,sprite,x) {

if (body!= null) {

  var b,s
  b = body.position
  s = sprite.position

var distance = dist(b.x,b.y,s.x,s.y);



if (distance <= x) {

  return true
  
} else { return false}



}

}



