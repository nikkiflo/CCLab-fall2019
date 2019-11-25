var t;

function setup() {
  createCanvas(400, 400);
  background(0);
  t = 0;
}

function draw() {
  
  background(0, 5);

  var x = width * noise(t+100);
  var y = height * noise(t*100);
  var a = width * noise(t*100);
  var c = width * noise(t+100);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 100, 100);
  ellipse(a, c, 100, 100);
  
  t = t + 0.01;
}