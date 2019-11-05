function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.parent("p5-canvas");
  myCanvas.position(0, 0);
  myCanvas.style("z-index", "-1");
}

function draw() {
  background(0);

  // Box 1
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(width / 2, width / 2, width / 2);
  pop();

  //orbit radius
  let radius = width * 1.5;

  //drag to move the world.
  orbitControl();
  normalMaterial();
  translate(50, 50, 0);
  for (let i = 0; i <= 80; i++) {
    for (let j = 0; j <= 80; j++) {
      push();
      let a = (j / 50) * PI;
      let b = (i / 50) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        fill(random(255), 50, 255);
        cone(random(50), random(50));
        // sphere(random(30), 80, 50);
      } else {
        fill(255, 100, random(255));
        // sphere(random(30), 50, 50);
        cone(random(50), random(50));
      }
      pop();
    }
  }
}
