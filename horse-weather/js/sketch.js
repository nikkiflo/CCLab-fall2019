

var aRequest = "http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=f3e77b59b3b1d4d8c6f4cd1dab80df85";
var myJSON;
var temp;
let sun, cold;


function preload(){
    myJSON = loadJSON(aRequest);
    console.log("hello");
    console.log(myJSON);
    sun = loadImage('assets/sun.jpg');
    cold = loadImage('assets/snow.jpg');

}

function setup(){
    createCanvas(windowWidth, 600);
    console.log(myJSON.main.temp);
    temp = myJSON.main.temp;
    textSize(32);
    createP(round(temp-273.15));
}

function draw() {
    
      if (temp < 30){
         image(sun, 0, 0, 577, 323) 
      }
      else {
            image(cold, 0, 0, 800, 600) 

    }}