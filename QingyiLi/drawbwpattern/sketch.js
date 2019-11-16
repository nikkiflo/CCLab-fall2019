// var colorList = ['#FEB7E2', //pink
//                  '#1D80F9', //blue
//                  '#C1C4D2', //grey
//                  '#EAD2F1', //purple
//                  '#FDC920', //yellow
//                  '#113683'];//darkblue
var colorList = [0,
                 20, 
                 50,
                 100, 
                 180, 
                 245];

let a = false;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(200);
  frameRate(10);
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];

}

function draw(){

  var x = mouseX;
  var y = mouseY;
  var r = random() * 50;

  noStroke;
  ellipse(x, y, r,r);
  ellipse(x, width-y,r);
  ellipse(height-x,y,r);
  ellipse(height-x,width-y,r);
  // strokeWeight(1);

  rect(0,0,x,y);
  rect(width-x,height-y,width,height);
  
  
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  fill(color(colorHex));
  stroke(color(colorHex));
  
}

function mousePressed(){
  noLoop();
}




