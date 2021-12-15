function setup()
{
    canvas = createCanvas(640, 480);
    canvas.center();
    canvas.position(150, 140);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 40, 460, 400);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 40, 460, 20)

    rect(50, 420, 460, 20)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 40, 20, 400)

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(60, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(500, 40, 20, 400);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(510, 50, 80);

    circle(510, 420, 80);
    circle(60, 420, 80);
}