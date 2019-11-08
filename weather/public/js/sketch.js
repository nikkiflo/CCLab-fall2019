var weatherJson
var weatherCode
var rain = []
var clouds = []
var snowflakes = []
var ground
var sun

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    fetch('https://api.openweathermap.org/data/2.5/weather?units=imperial&q=new%20york&appid=9ec36d4b5ead7355c23feb5e87f6432d')
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            weatherJson = json
            weatherCode = json.weather[0].id
            console.log("weatherCode: " + weatherCode)
        })
        .catch(function(error) {
            console.log(error)
        })
        
    initializeElements()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function initializeElements() {
    sun = new Sun()

    ground = new Ground()

    for (i = 0; i < 100; i++) {
        rain[i] = new Rain(random(50, windowWidth), random(0, -3000), ground.height)
    }

    for (var i = 0; i < 10; i++) {
        clouds[i] = new Cloud(ground.height) 
    }
}

function mouseClicked() {
    weatherCode += 100
    
    if (weatherCode > 800) {
        weatherCode = 200;
    }
}

function draw() {
    if (weatherCode >= 200 && weatherCode <= 299) {
        background(frameCount % 10 == 0 ? 'white' : 'black')
    } else {
        background(211, 211, 211)
    }
    
    ground.display()

    switch (weatherCode) {
        case 800:
        case 801:
        case 802:
        case 803:
        case 804:
            // clouds
            for (const cloud of clouds) {
                cloud.move()
                cloud.display()
              }
            break

        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 613:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            // snow
            for (var i = 0; i < random(5); i++) {
                snowflakes.push(new Snow())
            }

            for (const flake of snowflakes) {
                flake.update(frameCount / 60)
                flake.display()
            }
            break

        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            // rain
            for (const drop of rain) {
                drop.dropRain()
                drop.splash()
            }
            break
            
        default:
            sun.display()
            break
    }
}

class Sun {

    display() {
        fill('brown')
        stroke('brown')
        push()
        translate(200, 180)
        scale(3)
        rotate(radians(frameCount / 2))
        ellipse(0, 0, 60, 60)
        line(0, -60, 0, -40)
        line(0, 40, 0, 60)
        line(-45, -45, -30, -30)
        line(45, -45, 30, -30)
        line(-60, 0, -40, 0)
        line(40, 0, 60, 0)
        line(-45, 45, -30, 30)
        line(45, 45, 30, 30)
        pop()
        noFill()
    }
}

class Ground {
    
    constructor() {
        this.height = windowHeight / 8
    }

    display() {
        noStroke()
        fill(120, 120, 120)
        rect(0, windowHeight - this.height, windowWidth, this.height)
    }
}

class Snow {
    
    constructor() {
        this.x = 0
        this.y = random(-50, 0)
        this.initialAngle = random(0, 2 * PI)
        this.size = random(2, 5)
        this.radius = sqrt(random(pow(width / 2, 2)))
    }
    
    update(time) {
        const w = 0.6
        const angle = w * time + this.initialAngle
        this.x = width / 2 + this.radius * sin(angle)
        this.y += pow(this.size, 0.5)

        if (this.y > windowHeight) {
            const index = snowflakes.indexOf(this)
            snowflakes.splice(index, 1)
        }
    }

    display() {
        noStroke()
        fill('white')
        ellipse(this.x, this.y, this.size)
    }
}  

class Cloud {

    constructor(groundHeight) {
        this.x = random(0, windowWidth)
        this.y = random(0, windowHeight - groundHeight)
        this.cloudRadius = 50
    }
    
    display() {
        stroke(255)
        strokeWeight(1)
        fill(255)
        ellipse(this.x, this.y, this.cloudRadius, this.cloudRadius)
        ellipse(this.x+20, this.y+20, this.cloudRadius, this.cloudRadius)
        ellipse(this.x+50, this.y+20, this.cloudRadius, this.cloudRadius)
        ellipse(this.x+50, this.y-20, this.cloudRadius, this.cloudRadius)
        ellipse(this.x+30, this.y-20, this.cloudRadius, this.cloudRadius)
        ellipse(this.x+60, this.y, this.cloudRadius, this.cloudRadius)
    }
    
    move() {
        this.x = this.x += 1 
        this.y = this.y + random(-1, 1)
        
        if(this.x >= width){
            this.x = 0
        }
    }
  }

class Rain {

    constructor(x, y, groundHeight) {
        this.x = x
        this.y = y
        this.groundHeight = groundHeight
        this.length = 15
        this.r = 0
        this.opacity = 200
    }

    dropRain() {
        noStroke()
        fill(255)
        ellipse(this.x, this.y, 3, this.length)
        this.y = this.y + 6
        if (this.y > windowHeight - this.groundHeight) {
          this.length = this.length - 5
        }
        if (this.length < 0) {
          this.length = 0
        }
    }

    splash() {
        strokeWeight(2)
        stroke(245, this.opacity)
        noFill()
        if (this.y > windowHeight - this.groundHeight) {
          ellipse(this.x, windowHeight - this.groundHeight + 10, this.r * 2, this.r / 2)
          this.r++
          this.opacity = this.opacity - 10
    
          //keep the rain dropping
          if (this.opacity < 0) {
            this.y = random(0, -200)
            this.length = 15
            this.r = 0
            this.opacity = 200
          }
        }
      }
}
