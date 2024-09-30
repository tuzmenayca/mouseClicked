// To use an image as a button, replace the createButton() function with createImage() and attach the same functionality to the image as you would to the button. 

// You must include the dom library in this sketch.

// This is adapted from the button example in the p5 dom library. https://p5js.org/reference/#/p5/createButton


var button;

function setup() {
  createCanvas(500, 500);
  background(0);
  button = createImg('ButYellow.png');
  button.position(0,0);
  button.mousePressed(changeBG);
}

function changeBG() {
  var val = random(255);
  background(val);
}