var x = 0;
var y = 0;
var space = 20;

function preload(){
}

function setup() {

createCanvas(windowWidth, windowHeight);

background(250);

frameRate(10);

}

function draw() {

strokeWeight(5);
stroke(255,200,200);

for(var x = 0; x < windowWidth; x += space){
if(random() < 0.5){
line(x, y, x + space, y + space);
} else{
line(x, y + space, x + space, y);
}
}
x = x + space;
if(x > windowWidth){
  x = 0;
  y = y + space;
}

if(y > windowHeight + 300){
  
  fill(255,200,200,60);
  noStroke();
  rectMode(RADIUS)
  circle(windowWidth/2, windowHeight/2,100);

  noStroke();
  textAlign(CENTER,CENTER);
  textSize(20);
  fill(255, 200);
  text('restart', windowWidth/2,windowHeight/2);
}
}

function mousePressed() {
  background(250);
  y = 0;
  redraw();
 }
