let cylinderRadius = 120;
let cylinderWidth = 700;
let textTexture;
let indexWord = 0;
let words = ['XIAOSUYU','CCLAB', 'design', 'technology'];


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
	
  textTexture = createGraphics(2*PI*cylinderRadius,windowHeight*2);
	
	textTexture.background(random(0,100),random(0,200),100);
  textTexture.fill('#FFC547');
	//textTexture.textFont(font1);
  textTexture.textAlign(CENTER);
  textTexture.textSize(50);

}

function draw() {
	background(0);
	noStroke();
	

	var rotation = 2;

	let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	
	
	textTexture.background(random(0,100),random(100,200),0);
  textTexture.textSize(50);
	for(let i = 0; i <=55; i++){
		textTexture.text(words[indexWord], PI*cylinderRadius,i*50);
	}
	
	image(textTexture, -1000,-1000);
	
	translate(-windowWidth, -100);
	for(let i = 0; i <= 10; i++){
		translate(cylinderRadius*2+100, 0);
		push();
		
		rotateZ(radians(45));
		push();
		
		if(i%2==0){
			rotateY(-frameCount * 0.03);	
		}else{
			rotateY(frameCount * 0.03);	
		}
		texture(textTexture);
		cylinder(cylinderRadius, windowHeight*2,24);
		pop();
		pop();
	}	
}

// function changeWord() {
// 	indexWord++;
// 	if(indexWord > 8){
// 		indexWord = 0;
// 	}
  function mousePressed() {
  indexWord++;
  
  if (index == words.length) {
    index = 0;
  }

	//setTimeout(changeWord, 100)
}