var weatherJSON;
//let bluesky; 
//let blacksky;
function preload() {
    weatherJSON = loadJSON('http://api.openweathermap.org/data/2.5/forecast?units=metric&zip=11237&APPID=417941f8eb6ef816314244950431636b');
  //  bluesky = loadImage('blue-sky.jpg');
  //  blacksky  = loadImage('black-sky.jpg');
}


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(1); // defines speed of things globally via frame rate
    canvas.parent("drawingCanvas");
    
}



var weatherIndex = 0
function draw() {
    background('yellow');
    //createP("Hey"); we are not using this here because it creates things OUTSIDE of canvas
    fill('black');

    weatherIndex += 1;

    if (weatherIndex > weatherJSON.list.length-1){
        weatherIndex = 0;
    }
        var weatherInfo = weatherJSON.list[weatherIndex];
        var h = weatherInfo.main.humidity;

        for (var i = 0; i < weatherJSON.list.length; i++) {
            //console.log("Index is "+ i);
            var weatherInfo = weatherJSON.list[i];
            var temperature = weatherInfo.main.temp;
            var description = weatherInfo.weather[0].description; //defines that it uses description words
            textSize(10);
            text(description, random(windowHeight,0), i*100);
            fill('blue');
        }
       
      
        if (h < 60) {
            //fill('green');
            //circle (100,100, 50);
            textSize(32);
            text('      safe to fly', 400, 300);
            //console.log("Humidity is low");
        } else {
           // fill('red');
            //circle(100,100,50);
            textSize(32);
            text('not safe to fly', 400, 300);
          
           //console.log("Humidity is high");
    
    }

    




}

    