let imgs = [];
let clicks = 0;

function preload() {
    for (let i = 0; i < 9; i++) {
        imgs[i] = loadImage("assets/cat_" + i + ".png");
    }
}

function setup() {
    createCanvas(displayWidth, displayHeight);

    //display a random image in the array
    let firstImg = random(imgs);
    image(firstImg, 0, 0)
}

function draw() {

    //if the number of clicks exceeds the length of the array, reset to 0
    if (clicks >= imgs.length - 1) {
        clicks = 0;
    }

    //when the mouse is pressed, cycle through the images in the array
    //blend two images together, and display them
    if (mouseIsPressed) {
        let mountains = imgs[clicks];
        let bricks = imgs[clicks + 1];
        mountains.blend(bricks, 0, 0, displayWidth, displayHeight, 0, 0, displayWidth, displayHeight, DIFFERENCE);
        image(mountains, 0, 0);
        image(bricks, 0, 0);
        clicks++;
    }

}