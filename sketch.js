var img;
var xPos = [];
var yPos = [];
var sampleRate = 8; // between 1 & 8
var shapePoints = 3; // between 3 & 5?

var frames = 0;

function preload() {
    img = loadImage("spring.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();
    noStroke();
    background(0);
}

function draw() {

    frames = frames + 1;

    if (frames >= sampleRate) {

        frames = 0;

        xPos.push(mouseX);
        yPos.push(mouseY);

        if (xPos.length >= shapePoints) {
            var pixelA = img.get(xPos[xPos.length-1], yPos[yPos.length-1]);
            var pixelB = img.get(xPos[xPos.length-2], yPos[yPos.length-2]);
            var colorA = color(pixelA[0], pixelA[1], pixelA[2]);
            var colorB = color(pixelB[0], pixelB[1], pixelB[2]);
            var inbetweenCol = lerpColor(colorA, colorB, .5);
            fill(inbetweenCol);

        beginShape();
            for(var v=0; v<shapePoints; v++)
            {
                var arrayPos = xPos.length-1 - v;
                vertex(xPos[arrayPos],yPos[arrayPos]);
              }
        endShape(CLOSE);

        }
    }
}

function mousePressed(){
  background(0);
}
