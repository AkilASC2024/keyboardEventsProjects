let myXPos = 100;
let myYPos = 100;

function setup() {
    createCanvas(500,500);
    // noStroke();

    rectMode(CENTER); // draw rectangles using coordinates as center

    // changing file lol
}

function draw() {
    background(0);
    fill(255,0,0);
    rect(myXPos,myYPos,50);

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }
}