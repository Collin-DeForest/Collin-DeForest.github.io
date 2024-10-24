
let red,blue,green,black,Offwhite,yellow,pink, lightGray,PureWhite,darkGray, transparent;

let NeonRed, NeonBlue, NeonGreen, NeonPurple, NeonYellow, NeonOrange,NeonFuschia;

let angle = 0.01;
let scaleFactor = 1;
let time = 0;

function setup() {
  // Creates a canvas 600 pixels wide
  // and 400 pixels high.
  createCanvas(553, 551);
  black = color(0,0,0);
  red = color(178,0,0);
  Offwhite = color(235,225,215);
  yellow = color(220,174,1);
  lightGray = color(195,195, 203);
  PureWhite = color(255,255,255);
  darkGray = color(120,120,120);
  transparent = color(0,0,0,0);
  //epilepsy warning
  NeonRed = color(210,39,48);
  NeonBlue = color(77, 77, 255);
  NeonGreen = color(68,214,44);
  NeonPurple = color(199,36,177);
  NeonYellow = color(224,231,34);
  NeonOrange = color(255,173,0);
  NeonFuschia = color(219,62,177);
  background(black);
    colorState = {
    shape1: black,
    shape2: lightGray,
    shape3: yellow,
    shape4: Offwhite,
    shape5: Offwhite,
    shape6: lightGray,
    shape7: red,
    shape8: darkGray
  };
}
function draw() {
  if (keyIsPressed && keyCode === UP_ARROW) {
    let TheTime = millis();
    // If more than 100ms have passed, update colors
    if (TheTime - time > 1) {
      colorState.shape1 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape2 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape3 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape4 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape5 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape6 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape7 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      colorState.shape8 = random([NeonRed, NeonGreen, NeonBlue, NeonPurple, NeonYellow, NeonOrange, NeonFuschia]);
      angle += 0.85;
      scaleFactor *= .99;
      time = TheTime; // Update the time so it doesn't continuously change colors rapidly
    }
    translate(width / 2, height / 2);
    rotate(angle);
    scale(scaleFactor);
  }
  noStroke();

  // Draw white square
  whiteSquare(PureWhite);

  // Draw shapes using the updated colors from colorState
  shape1(colorState.shape1);
  shape2(colorState.shape2);
  shape3(colorState.shape3);
  shape4(colorState.shape4);
  shape5(colorState.shape5);
  shape6(colorState.shape6);
  shape7(colorState.shape7);
  shape8(colorState.shape8);
}
function whiteSquare(color){
  fill(color);
  beginShape();
  square(67,65,418);
  endShape();
}
function shape1(color){
  fill(color);
  beginShape();
  quad(75,214,234,214,234,311,75,311);
  quad(234,75,216,75,75,214,234,214);
  triangle(234,311,234,470,75,311);
  endShape();
}
function shape2(color){
  fill(color);
  beginShape();
  triangle(75,214,216,75,75,75);
  endShape();
}
function shape3(color){
  fill(color);
  beginShape();
  triangle(75,311,154,389,75,470);
  endShape();
}
function shape4(color){
  fill(color);
  beginShape();
  triangle(154,389,75,470,233,470);
  endShape();
}
function shape5(color){
  fill(color);
  beginShape();
  quad(234,75,282,75,377,168,234,310);
  endShape();
}
function shape6(color){
  fill(color);
  beginShape();
  triangle(234,309,234,470,399,470);
  endShape();
}
function shape7(color){
  fill(color);
  beginShape();
  quad(234,309,472,75,475,470,399,470);
  endShape();
}
function shape8(color){
  fill(color);
  beginShape();
  triangle(283,75,472,75,377,169);
  endShape();
}
function keyReleased() {
  background(black);
  colorState = {
    shape1: black,
    shape2: lightGray,
    shape3: yellow,
    shape4: Offwhite,
    shape5: Offwhite,
    shape6: lightGray,
    shape7: red,
    shape8: darkGray
  };
  angle = 0
  scaleFactor = 1
}