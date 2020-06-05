const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,Me , ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var me2 = {
        restitution: 1 , 
        friction : 3  ,
        density : 3
    }
    Me = Bodies.rectangle(200,200,100,30,me2)
    World.add(world,Me);
    console.log(ground);

    ball = Bodies.circle(300,300,13)
    World.add(world,ball);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("red")
    rect(ground.position.x,ground.position.y,400,20);
    fill("Blue")
    rect(Me.position.x,Me.position.y,100,30) 
    fill("white")
    ellipse(ball.position.x, ball.position.y,13,13) 
}