const rectWidth = width / 20;

function setup() {
  size(640, 260);
  noStroke();
  background(0);
  textSize(24);
  text("click on the letter keys to light up the sky", 70, height / 2);
}

function draw() {}

function keyPressed() {
  var keyIndex = -1;
  if (key >= "A" && key <= "Z") {
    keyIndex = key - "A";
  } else if (key >= "a" && key <= "z") {
    keyIndex = key - "a";
  }
  if (keyIndex == -1) {
    background(0);
    text("it's dark again", 100, height / 2);
  } else {
    fill(151, 214, 255);
    var x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height);
  }
}
