function setup() {
  createCanvas(500, 400);
  frameRate(60);
}

function draw() {
  colorMode(HSL)
  strokeWeight(0); //change to 1
  for (i = 0; i < 3; i++) {
    fill(random(0, 360), 100, 50, 0.1);
    ellipse(random(0, 500), random(0, 400), random(5, 90));
  }
}