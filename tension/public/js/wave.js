
var wave1YOrigin
var wave2YOrigin


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");

    wave1YOrigin = windowHeight / 2
    wave2YOrigin = windowHeight / 2
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    const points1 = drawWave(0, wave1YOrigin)
    const points2 = drawWave(0, wave2YOrigin)

    wave1YOrigin -= 0.125
    wave2YOrigin += 0.125

    drawLines(points1, points2)
}

function drawCircle(points1, points2) {
    fill('white')
    noStroke()
    const diameter = abs(points1[0][1] - points2[0][1])
    circle(windowWidth / 2, windowHeight / 2, diameter / 2);
}

function drawLines(points1, points2) {
    strokeWeight(4);

    noFill();
    stroke('black')

    for (var i = 0; i < points1.length; i++) {
        const point1 = points1[i]
        const point2 = points2[i]
        line(point1[0], point1[1], point2[0], point2[1])
    }
}

function drawWave(xOffset, yOrigin) {
    strokeWeight(4);

    noFill();
    stroke('black');

    beginShape();
  
    const waveWidth = 100
    const waveCount = windowWidth / waveWidth
    var isUpsideDown = false

    var points = []
    for (var x = xOffset; x < windowWidth; x += waveWidth) {
        const yPeak = yOrigin + (isUpsideDown ? waveWidth/6 : -waveWidth/6)
        curveVertex(x, yOrigin)
        
        curveVertex(x, yOrigin)
        points.push([x, yOrigin])
        
        curveVertex(x + waveWidth / 3, yPeak)
        points.push([x + waveWidth / 3, yPeak])
        
        curveVertex(x + 2 * waveWidth / 3, yPeak)
        points.push([x + 2 * waveWidth / 3, yPeak])
        
        curveVertex(x + waveWidth, yOrigin)
        points.push([x + waveWidth, yOrigin])
        
        curveVertex(x + waveWidth, yOrigin)
        
        isUpsideDown = !isUpsideDown
    }
    endShape();

    return points
}