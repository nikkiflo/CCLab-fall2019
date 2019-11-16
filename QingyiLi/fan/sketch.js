var a = 0;
let c1 = color(225,100,100,100);
let c2 = color(200,255,200,100);

function setup() {
  createCanvas(windowHeight,windowHeight);
  frameRate(50)
  angleMode(DEGREES);
  background(245);
}

function draw() {
  a = a+1;
  
  translate(width/2,height/2);
  
  let r = width/4;

  push();
  stroke(225,100,100,100);
  line(sin(a)*r,cos(a)*r,r * -1,0); 
  
  rotate(120);
  line(sin(a)*r,cos(a)*r,r * -1,0); 
  
  rotate(120);
  line(sin(a)*r,cos(a)*r,r * -1,0);
  pop();

  
  push();
  stroke(200,255,200,100);
  
  rotate(60);
  line(sin(a)*r,cos(a)*r,-r,0); 

  rotate(120);
  line(sin(a)*r,cos(a)*r,-r,0); 
  
  rotate(120);
  line(sin(a)*r,cos(a)*r,-r,0); 
  pop();
  

  push();
  scale(-1,1);

  stroke(225,100,100,100);

  rotate(60);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  
  rotate(120);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  
  rotate(120);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  pop();

  push();
  scale(1,-1);

  stroke(255);

  rotate(60);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  
  rotate(120);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  
  rotate(120);
  line(cos(a)*2*r,sin(a)*2*r,cos(a)*r,sin(a)*r); 
  pop();
}
