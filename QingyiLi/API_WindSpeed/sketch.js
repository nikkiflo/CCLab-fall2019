var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'London';
var apiKey = '&APPID=e9152a7af974b644e2abdb7e964c4d27';
var units = '&units = metric';

var x = 0;

function preload() {
  img = loadImage('drop.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight/2);
  
  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

}

function weatherAsk(){
  
  var url = api + input.value() + apiKey + units;
  loadJSON(url,gotData);
}

function gotData(data){
  weather = data;
}

function draw() {

  
  if (weather){

    var wind = weather.wind.speed * 3;

    background(120,120,255);

    stroke(255);

    strokeWeight(2);
    line(x,0,x,height);
    line(x+10,0,x+10,height);
    strokeWeight(12);
    line(x+25,0,x+25,height);


    x = x + wind;
    if (x > width){
      x = 0;
    }
  }

}