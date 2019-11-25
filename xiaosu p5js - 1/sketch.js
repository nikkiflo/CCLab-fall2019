let animal;



function preload(){
  animal = loadImage("Bernard_de_wetter_wwf_canon_113974-1.jpg");
}

function setup() {
  createCanvas(450, 450, SVG); // Create SVG Canvas
  // strokeWeight(1); // do 0.1 for laser
  // stroke(255, 0, 0); // red is good for laser
  // noFill(); // better not to have a fill for laser
}

function draw() {
  background(220);
  image(animal,0,0);
  bsPixelate();
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}

function bsPixelate()                                        
{
	noStroke();
	for (let y=5; y<450; y+=20)                       
	{                                                        
		for (let x=5; x<450; x+=20)
		{
			xSample = x+int(random(10, 30));
			ySample = y+int(random(10, 30));
            fill(animal.get(xSample, ySample)); 
			rect(x, y, 20, 20);                               
		}
	}
}