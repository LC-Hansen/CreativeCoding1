var x = 10;
var y = 10;
var x2 = 30;
var y2 = 30;
var x3 = 20;
var y3 = 20;
var x4 = 360;
var x5 = 300;
var speed;
var speed2;
var speed3;
var speed4;
var speed5;
var color;
var size = 15;



function setup() {
  createCanvas(400,400);
  speed = Math.floor(Math.random() * 10) + 1;
  speed2 = Math.floor(Math.random() * 10) + 1;
  speed3 = Math.floor(Math.random() * 10) + 1;
  speed4 = Math.floor(Math.random() * 10) + 1;
  speed5 = Math.floor(Math.random() * 10) + 1;
  color = Math.floor(Math.random() * 10) + 1;

}

function draw() {
  background(223, 243, 255);
  fill (250, 240, 230);
  ellipse (195,120,150,200);
  fill (255,255,255);
  ellipse (155,140,38,32);
  fill (255,255,255);
  ellipse (235,140,38,32);
  fill (223, 243, 255);
  circle (155,140,30);
  fill (223, 243, 255);
  circle (235,140,30);
  line (195,200,170,200);
  fill (0,0,0);
  circle (155,140,10);
  fill (0,0,0);
  circle (235,140,10);
  fill (255, 255, 224);
  rect (130,20,130,30);
  rect (120,40,120,30);
  rect (250,55,15,40);
  triangle (120,40,120,25,135,40);
  triangle (135,40,138,25,145,40);
  triangle (130,20,130,15,135,40);
  fill (255,255,255);
  point (157,137);
  fill (148, 0, 211);
  textSize (size);
  text ("Title: I hope my head isn't truly shaped like that", 45, 245);
  text ("Or: But that haircut though", 100, 260);
  if (size >= 20)
  {
    size *= -1;
  }
  else if (size <= 15)
    {
      size *= 1;
    }
    size += 1;
  textSize (12)
  text ("By: Landon Hansen", 260,300);
  fill (255,255,255);

  //first snowball
  circle (x,y,14);
  if(y >= 393 || y <= 7)
  {
    speed *= -1;
  }
  y += speed;


  //new snowball
  circle (x2,y2,14);
  if(y2 >= 393 || y2 <= 7)
  {
    speed2 *= -1;
  }
  y2 += speed2;

  // horizontal rectangles
  fill (177,70,135);
  rect (x4,160,40,20);
  if(x4 >= 360 || x4 <= 0)
  {
    speed3 *= -1;
  }
  x4 += speed3;


  fill (212,250,113);
  rect (x5, 175, 60,10);
  if(x5 >= 340 || x5 <= 0)
  {
    speed4 *= -1;
  }
  x5 += speed4;

  // magenta ball
  fill (242,16,213);
  circle (x3,y3,20);
  if (x3 && y3 >= 380 || x3 && y3 <= 15)
  {
    speed5 *= -1;
  }
  x3 += speed5;
  y3 += speed5;

}
