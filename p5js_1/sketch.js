var dotlocs = [];

function setup() {
//   These lines set up the basic background and color
  createCanvas(600,600)
  background(155)
  fill('red')
  


 for (var i=0; i < 5;i++) {
    for (var j=0; j < 5;j++) {
    	// if (i == 2) {
    	// 	fill('green')
    	// } else {
    	fill('red')
    	// }
    var dotObject = {}
    dotObject.x = 50 + i*50
    dotObject.y = 50 +j*50;
    dotObject.hello = "Hello I am a j " + j;
    dotlocs.push(dotObject)
    //ellipse(50 + i*50,50 +j*50,20,20);
  }
}



}


// don't work and draw() we are not ready yet!
function draw() {
    background(155)

  // put drawing code here
  for (var i=0; i < dotlocs.length; i++) {
          var d = int(dist(dotlocs[i].x, dotlocs[i].y, mouseX, mouseY));
        //  if (dotlocs[i].x -10 < mouseX && dotlocs[i].x + 10 > mouseX && dotlocs[i].y - 10 < mouseY && dotlocs[i].y + 10 > mouseY) {
          if (d < 10) {
            fill('blue')
            cursor(HAND);
            console.log(dotlocs[i].hello)
          } else {
            fill('red')
            cursor(ARROW);
          }
            ellipse(dotlocs[i].x,dotlocs[i].y,20,20)
  }
}