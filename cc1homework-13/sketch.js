var x = 30;
var y = 200;
var diameter = 70;
var yellowX = 335;
var yellowY = 90;
var mousex = -20;
var mousey = -20;
var speedX = 3;
var speedY= 7;

var bounceX = [];
var bounceY = [];
var diameterValues = [];
var speedForX = [];
var speedForY = [];

function setup()
{
  createCanvas(400,400);
  var x2 = 30;
  var y2 = 30;
  var diameter2 = 70;
  var speedX2 = 4;
  var speedY2= 6;
  for(var i = 0; i < 4; i++)
  {
    bounceX[i] = x2;
    bounceY[i] = y2;
    diameterValues[i] = diameter2;
    speedForX[i] = speedX2;
    speedForY[i] = speedY2;
    x2 += 10;
    y2 += 7;
    diameter2 += 5;
    speedX2 += 3;
    speedY2 += 8;
  }
}

function draw(){
  background(25,120,200);
  character();
  bounceCircle();
  winner();
  barrier();
  endGates();
}

function mouseClicked(){
  mousex = mouseX;
  mousey = mouseY;
}

function character(){
  fill(200,0,155);
  circle(x, y, 20);
  //below are basic WASD controls
  if (keyIsDown(87)){
      y -= 5;
    }
  else if(keyIsDown(83)){
      y += 5;
    }
  else if(keyIsDown (65)){
      x -= 5;
    }
  else if(keyIsDown (68)){
      x += 5;
    }
  //above is basic WASD controls
  ellipse(mousex, mousey, 40, 40);
}

function bounceCircle(){
  fill(100,200,57);
  for(var i = 0; i < bounceX.length; i++)
  {
    circle(bounceX[i],bounceY[i],diameterValues[i]);
    if (bounceX[i] >= width-diameterValues[i]/2 || bounceX[i] <= diameterValues[i]/2)
    {
      speedForX[i] *= -1;
    }
    else if(bounceY[i] >= height-diameterValues[i]/2 || bounceY[i] <= diameterValues[i]/2)
    {
      speedForY[i] *= -1;
    }
    bounceX[i] += speedForX[i];
    bounceY[i] += speedForY[i];
  }
}

function winner(){
  if (x >= 400){
    text("You Win!", 180, 200);
  }
  else {
    text("Get to the Exit!", 180, 200);
  }
  fill(0);
  text("Exit", 380,205);
}
function barrier(){
  fill(230,210,120);
  rect(yellowX,yellowY, 300,90);
  if (yellowY >= 400){
    yellowY *= -1;
  }
  yellowY++;
}
function endGates(){
  fill(255,0,0);
  rect(390,0, 390,190);
  rect(390,210, 390,190);
  rect(0,190, 20,20);
}
