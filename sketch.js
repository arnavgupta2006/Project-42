//Calculating time using predefined fun from p5.js
hr = hour();
mn = minute();
sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
let hr = hour();
text('Current hour:\n' + hr, 5, 50);
let mn = minute();
text('Current minute: \n' + mn, 5, 50);
let sc = second();
text('Current second: \n' + sc, 5, 50);
angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
  scAngle = map(sc, 0, 60, 0,360);
  mnAngle = map(mn, 60, 0, 0,360);
  hrAngle = map(hr, 1, 0, 0,360);
  
  push();
  rotate(scAngle);
  rotate(mnAngle);
  rotate(hrAngle);
  stroke(255,0,0);
  starokeWeight(7);
  line(0,0,100,0);
  pop();
  
  translate(0,0);
  drawSprites();
}

