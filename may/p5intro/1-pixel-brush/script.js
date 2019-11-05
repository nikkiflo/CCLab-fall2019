var x1 = 100;
var y1 = 100;

function setup() {
  var canvas = createCanvas(1000, 1000);
  background(254, 216, 177);
}

function draw() {}

function keyPressed() {
  if (key === "w") {
    y1 -= 50;
    var colorOne = color(random(230), 50, 255);
    fill(colorOne);
    noStroke();
    rect(x1, y1, 50, 50);
  } else if (key === "s") {
    y1 += 50;
    var colorTwo = color(240, random(210), 255);
    fill(colorTwo);
    noStroke();
    rect(x1, y1, 50, 50);
  } else if (key === "a") {
    x1 -= 50;
    var colorThree = color(random(100), 80, 255);
    fill(colorThree);
    noStroke();
    rect(x1, y1, 50, 50);
  } else if (key === "d") {
    var colorFour = color(255, 90, random(255));
    fill(colorFour);
    noStroke();
    rect(x1, y1, 50, 50);
    x1 += 50;
  }
}
