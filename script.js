function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  drawFireNation();
}

function drawFireNation() {
  noFill();
  strokeWeight(5);
  stroke(color(161, 0, 0));

  triangle(200, 275, 220, 275, 210, 220);
  triangle(280, 275, 300, 275, 290, 210);
  triangle(230, 220, 100, 220, 200, 300)
  ellipse(250, 250, 60, 60);
}