//import { cursorTo } from "readline";


var weatherJSON;
let clearSky;

//preload the json file before everything happens
function preload(){

    weatherJSON = loadJSON("https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=417941f8eb6ef816314244950431636b");
   
}

//created the drawingCanvas <div> in index.html
function setup(){
frameRate(5);
var canvas = createCanvas(windowWidth, windowHeight);
canvas.parent("drawingCanvas");
//clearSky = loadImage('public/clearsky');


//weatherJSON = loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=07029,us&APPID=f3e77b59b3b1d4d8c6f4cd1dab80df85");
console.log(weatherJSON);
console.log(weatherJSON.cod);
console.log(weatherJSON.cnt);
console.log("This is an array: " + weatherJSON.list[2]); //get the third object in the array
console.log(weatherJSON.list[0].clouds.all);
}

function windowResize(){
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){
    background('black');
    fill('blue');

    for(var i = 0; i < weatherJSON.list.length; i++){


        var weatherInfo = weatherJSON.list[i];
   
        var description = weatherInfo.weather[0].description;
        var rain = weatherInfo.weather[0].Rain;

        if (description == 'clear sky', rain < 0.2)
        {
            push();
            fill(0,255,0);
            textSize(66);
            text(description, i*50, random(0, windowHeight));
            fill(0,0,255);
            testSize(66);
            text('rain', random(0,windowWidth), i*20);
    
            //text(description, random(0,windowWidth), i*10);
            pop();
           
        }

        if (description == 'light rain')
        {
            push();
            fill(0,0,255);
            textSize(66);
            text(description, i*20, i*60);
            pop();

        }
        else{
            text(description, random(0,windowWidth), i*20);

    

    }


}
}