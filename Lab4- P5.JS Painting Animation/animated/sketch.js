
let red,blue,green,black,Offwhite,yellow,pink, lightGray,PureWhite,darkGray;


// timer variable
let startTime;
let timeElapsed

function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(553, 551);
  black = color(0,0,0);
  blue = color(0,0,255);
  red = color(178,0,0);
  green = color(0,255,0);
  Offwhite = color(235,225,215);
  yellow = color(220,174,1);
  pink = color(255,0,255);
  lightGray = color(195,195, 203);
  PureWhite = color(255,255,255);
  darkGray = color(120,120,120);
  startTime = millis();

}
function draw() {
  let duration = 5000;
  timeElapsed = millis() - startTime;
  background(black);
  noStroke();
  whiteSquare();
  shape1();
  shape2();
  shape3();
  shape4();
  shape5();
  shape6();
  shape7();
  shape8();
  if (timeElapsed > duration) {
    startTime = millis();
  }
}
function whiteSquare(){
  fill(PureWhite);
  beginShape();
  square(67,65,418);
  endShape();
}

function shape1(){
  if (timeElapsed > 500){
  fill(black);
  beginShape();
  quad(75,214,234,214,234,311,75,311);
  quad(234,75,216,75,75,214,234,214);
  triangle(234,311,234,470,75,311);
  endShape();
  }
}
function shape2(){
  if (timeElapsed > 1000){
  fill(lightGray);
  beginShape();
  triangle(75,214,216,75,75,75);
  endShape();
  }
}
function shape3(){
  if (timeElapsed > 1500){
  fill(yellow);
  beginShape();
  triangle(75,311,154,389,75,470);
  endShape();
  }
}
function shape4(){
  if (timeElapsed > 2000){
  fill(Offwhite);
  beginShape();
  triangle(154,389,75,470,233,470);
  endShape();
  }
}
function shape5(){
  if (timeElapsed > 2500){
  fill(Offwhite);
  beginShape();
  quad(234,75,282,75,377,168,234,310);
  endShape();
  }
}
function shape6(){
  if (timeElapsed > 3000){
  fill(lightGray);
  beginShape();
  triangle(234,309,234,470,399,470);
  endShape();
  }
}
function shape7(){
  if (timeElapsed > 3500){
  fill(red);
  beginShape();
  quad(234,309,472,75,475,470,399,470);
  endShape();
  }
}
function shape8(){
  if (timeElapsed > 3000){
  fill(darkGray);
  beginShape();
  triangle(283,75,472,75,377,169);
  endShape();
  }
}