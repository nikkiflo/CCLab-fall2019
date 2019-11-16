var myColor = ['#0336FF',//0. blue
               '#FFDE03', //1. yellow
               '#FF0266', //2. red
               ]

var mic;

let img;
function preload() {
  img = loadImage('dancer.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  mic = new p5.AudioIn();
  mic.start();

}


function draw() {

  background(myColor[0]);

  var myVolume = mic.getLevel();
  
    fill(myColor[1]);
    noStroke();
         var rx = random() * width;
         var ry = random() * height;
         var rr = random() * myVolume*100;
    circle(rx,ry,rr);
    fill(myColor[1]);
          var rsx = random() * width;
          var rsy = random() * height;
          var rsr = random() * 20;
    square(rsx,rsy,rsr);

    fill(myColor[2]);
    var rax = random() * width;
    var ray = random() * height;
    var rar = random() * 40;
    square(rax,ray,rar);
    
    fill(myColor[2]);
    var rbx = random() * width;
    var rby = random() * height;
    var rbr = random() * 40;
    triangle(rbx, rby, rbx+rbr, rby+rbr, rbx+rbr, rby)

    strokeWeight(myVolume*1000);
    print(myVolume);
    stroke(255);
    noFill();
    circle(width/2, height/2, mouseX, mouseY)
    

  //text
    textAlign(CENTER);
    textSize(20);
    textStyle(BOLD);
  
 
    r = random(255);
    g = random(255);
    b = random(255);

    rcolor = color(r,g,b);

    fill(rcolor);
    noStroke();
    textFont('Courier');
    
    text("Free Dance Party",width/2,height/1.7);
  

  var mySize = map(myVolume,0,1,10,height/2);
  
  image(img, width/2-25, height/2-25-(mySize*5),50+mySize,50+mySize);
    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}


