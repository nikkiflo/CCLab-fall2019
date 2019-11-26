var dotlocs = [];
var xspeed = 1;


//dot class
function Dots(xpos,ypos,hellos) {
 this.x = xpos
 this.y = ypos
 this.hello = hellos
 this.moving = false;
 this.update = function() {
  if (this.moving == false) {
    this.moving = true
  }
}
}

Dots.prototype.display = function() {
 //this.display = function() {
  if (this.moving) {
    this.x += xspeed
  }
  ellipse(this.x, this.y, 20, 20)


 }
//}
function setup() {
//   These lines set up the basic background and color
  createCanvas(600,600)
  background(155)
  fill('red')
  


 for (var i=0; i < 5;i++) {
    for (var j=0; j < 5;j++) {

    var dotObject = {}
    var x = 50 + i*50
    var y = 50 +j*50;
    var hello = "Hello I am a j " + j;
    dotlocs.push(new Dots(x,y,hello))
  }
}



}


// don't work and draw() we are not ready yet!
function draw() {
    background(155)
  for (var myDot of dotlocs) {
    var d = int(dist(myDot.x, myDot.y, mouseX, mouseY));
          if (d < 10) {
            fill('blue')
            cursor(HAND);
            console.log(myDot.hello)
            myDot.update()
          } else {
            fill('red')
            cursor(ARROW);
          }
          myDot.display()
            //ellipse(myDot.x, myDot.y, mouseX, mouseY)
  }
}