let numberRings = 20;
let maxDiameter = 100;
let angle = 0;

function setup() {
  createCanvas(720, 480);
  noStroke();
  colorMode(HSB, width, height, height);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  let r = mouseX;
  let g = mouseY;
  let b = mouseX + mouseY * .5;
  // background(r, g, b);
  translate(mouseX, mouseY);

  for (var i = 0; i < numberRings; i++) {
    var currentDiameter = maxDiameter * (numberRings - i) / 10;
    fill(b * i * .4, g + i * .2, r * i * .1);
    rotate(angle);
    shearX(mouseY * -.1);
    shearY(mouseX * .3);
    ellipse(0, 0, currentDiameter, currentDiameter);
  }

  angle = angle + 1;
}