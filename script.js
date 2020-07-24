function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  drawFireNation();

   noFill();
  strokeWeight(2);
  stroke('blue');
  circle(width/5, height/5, 100);
  circle(70, 113, 25);
  circle(77, 86, 25);
  circle(95, 65, 25); 
}

function drawFireNation() {
  noFill();
  strokeWeight(5);
  stroke(color(161, 0, 0));

  triangle(200, 275, 220, 275, 210, 220);
  triangle(280, 275, 300, 275, 290, 210);
  triangle(220, 220, 280, 220, 250, 160)
  arc(250, 260, 86, 80, 0, PI, OPEN);
  ellipse(250, 250, 60, 60);
}