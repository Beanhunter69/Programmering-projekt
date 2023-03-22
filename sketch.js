let x = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(150);
  rect(10, x, 20, 120);
  if (keyCode == 87) {
    x--;
  }
  if (keyCode == 83) {
    x++;
  }
}
