//var aRequest = "https://api.openweathermap.org/data/2.5/weather?zip=10018,us&APPID=6c89c4ac2ad4820747857fcae7cbb494";
//
//var myJSON;
//var temp;
//
//function preload() {
//    myJSON = loadJSON(aRequest);
//}

let temperature = 0;
let weather = "";
let json;

let snowflakes = [];


function preload() {

  let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=6c89c4ac2ad4820747857fcae7cbb494";
  json = loadJSON(url);
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");    
    temperature = json.main.temp;
    weather = json.weather[0].description;
//    temp = myJSON.coord.temp;
//    createP(temp);
    
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {
   
    background(187, 223, 234);
    strokeWeight(1);

    //weather info text
    textAlign(LEFT, BOTTOM);
    fill(0);
    textSize(30);
    textFont('Roboto');
    text("Hello, Everyone!", 50, 80);
    text("I'm in New York City :)", 50, 125);
    text("It is " + temperature + "°F now.", 50, 170);
    text("I can see " + weather + "!", 50, 215);
    text("I don't want to melt!!!", 50, 280);

    
    //Snowman
    
    //body1
    noStroke();
    fill(255, 255, 255);
    ellipse(710, 450, 320, 320);

    //body2
    noStroke();
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
    
  
    
    //snowflake
    fill(240);
    noStroke();
    let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (var i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
    }
    }

    // snowflake class
    function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 5);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
    let index = snowflakes.indexOf(this);
    snowflakes.splice(index, 1);
    }
    };

    this.display = function() {
    ellipse(this.posX, this.posY, this.size);
    };
    }



