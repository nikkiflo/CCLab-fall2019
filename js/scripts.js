let cityData, myJSON, humid;
let button = document.getElementById('getData');
let form = document.getElementById('cityForm');
let blurb = document.getElementById('blurb');
let header = document.getElementById('ttl');
form.style.display = "none";    
header.style.display = "none";

button.addEventListener("click", getData);
form.addEventListener("submit", getData);
blurb.addEventListener("click", showHeader);
header.addEventListener("click", showForm);

let catsDogs = [];
let statOfRain = false;
let count = 1;

var acceleration = 0.0098;
var nDrops = 1000;
var drops = [];


function preload(){

    for (n = 0; n < 11; n++) {
        catsDogs[n] = loadImage('./assets/' + n + '.png');
    }


}


function setup(){

    createCanvas(windowWidth, windowHeight);

    for (i = 0; i < nDrops; i++) {
        drops.push(new Drop());
    }

}


function draw() {

    clear();
    stroke(198,205,209);
    if (statOfRain == true) {
        stroke(166,163,161);

        for (n = 0; n < 11; n++) {
            image(catsDogs[n], random(0, windowWidth), random(-40, 900));
        }
    }
    drops.forEach(function(d) {
      d.drawAndDrop();
    });
    

}


function getData (e) {

    if (count == 1) {
        e.preventDefault();
        cityData = form.city.value;
        let aReq = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityData 
        + '&APPID=f3e77b59b3b1d4d8c6f4cd1dab80df85';
    
        if (cityData !== null && cityData !== undefined) {
    
            fetch(aReq)
                .then(function(response) {
                    return response.json();
                })
                .then(function(resp) {
                    myJSON = resp;
                    console.log(myJSON);
                    humid = myJSON.main.humidity;
                    console.log(humid);
                    if (humid > 70) {
                        statOfRain = true;
                        button.innerHTML = "Rain! Rush to your Portal!";
                    } 
                    else {
                        button.innerHTML = "No Rain today, Sorry.";
                    }
                })
                .catch (function(response){
                    console.log("There was an error");
                });
        }
        
        count = 2; 


    } else {
		window.location.reload();
		count = 1;
    }

}

function showHeader() {
  if (header.style.display === "none") {
    header.style.display = "block";
    blurb.style.display = "none";
  } 
}

function showForm() {
  if (form.style.display === "none") {
    form.style.display = "block";
    header.style.display = "none";
  } 
}



// Background Rainfalling: 
// stole this rain code from CodePen: 
// https://codepen.io/shtrom/pen/NpxJWy

function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 3; 
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}
