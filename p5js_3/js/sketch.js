var image1;


function preload() {
    image1 = loadImage('images/hat.png');
}

function setup(){
    let canvas = createCanvas(1920, 1080);
    canvas.parent("drawingCanvas");
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
   
    background(187, 223, 234);
    strokeWeight(1);
    
    //ground
    noStroke();
    fill(122, 79, 10);
    rect(0, 450, 1920, 416);
    
    //Snowman
    
    //body1
//    stroke(0);
//    strokeWeight(4);
    fill(255, 255, 255);
    ellipse(710, 450, 320, 320);

    //body2
//    stroke(0);
//    strokeWeight(4);
    fill(255, 255, 255);
    ellipse(710, 230, 280, 280);   
    
    //eyes
    noFill();
    stroke(0);
    strokeWeight(5);
    fill (0, 0, 0);
    ellipse(660, 210, 15, 15);//left eye
    ellipse(750, 210, 15, 15);//right eye
    
    //buttons
    noStroke();
    fill (226, 97, 84);
    ellipse(710, 400, 30, 30);
    ellipse(710, 460, 30, 30);
    ellipse(710, 520, 30, 30);
    
    //nose
    fill(255, 115, 0);
    triangle(650, 250, 710, 240, 710, 260);
    
    //mouse
    noFill();
    stroke(0);
    strokeWeight(7);
    bezier(660, 290, 695, 305, 720, 305, 750, 290);
    
    //arms
    strokeWeight(11);
    line(500, 320, 600, 400); //left
    line(500, 370, 550, 360);
    line(550, 360, 550, 300);
    line(820, 400, 920, 320); //right
    line(878, 360, 928, 370);
    line(870, 355, 867, 305);
    
    //hat
    image(image1, 620, 40);
    

    }



