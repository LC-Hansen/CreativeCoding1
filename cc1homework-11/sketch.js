var x = 30;
var y = 200;
diameter = 70;
var yellowX = 335;
var yellowY = 90;
var bounceX = 330;
var bounceY = 330;
var speedX = 3;
var speedY= 7;
var mousex = -20;
var mousey = -20;



function setup(){
  createCanvas(400,400);

}
function draw(){
  background(25,120,200);
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
  fill(100,200,57);
  circle(bounceX,bounceY,diameter);
  if (bounceX >= width-diameter/2 || bounceX <= diameter/2){
    speedX *= -1;
  }
  else if(bounceY >= height-diameter/2 || bounceY <= diameter/2){
    speedY *= -1;
  }
  bounceX+= speedX;
  bounceY+= speedY;
  if (x >= 400){
    text("You Win!", 180, 200);
  }
  else {
    text("Get to the Exit!", 180, 200);
  }
  fill(230,210,120);
  rect(yellowX,yellowY, 300,90);
  if (yellowY >= 400){
    yellowY *= -1;
  }
  yellowY++;
  fill(255,0,0);
  rect(390,0, 390,190);
  rect(390,210, 390,190);
  rect(0,190, 20,20);
  ellipse(mousex, mousey, 40, 40);
  fill(0);
  text("Exit", 380,205);
}
function mouseClicked(){
  mousex = mouseX;
  mousey = mouseY;
}
