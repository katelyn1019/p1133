var img = "";
function preload() {
    img = loadImage("tiger.jpg");
}

function setup() {
    canvas = createCanvas(800, 400);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 200, 100, 400, 200);
    fill("yellow");
    rect(72, 20, 660, 55);
    fill("black");
    rect(72, 330, 660, 55);
    fill("blue");
    rect(20, 72, 55, 250);
    fill("green");
    circle(50, 50, 50);
    fill("red");
    circle(750, 50, 50);
    fill("green");
    circle(750, 350, 50);
    fill("pink");
    circle(50, 350, 50);
    fill("white");
    rect(720, 72, 55, 250);
}

function take_snapshot(){
    save("download.png");
}