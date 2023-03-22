let x_rect = 100;
let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball(100, 100, 5);
}

function draw() {
  background(150);
  rect(10, x_rect, 20, 120);
  if (keyCode == 87) {
    x_rect--;
  }
  if (keyCode == 83) {
    x_rect++;
  }
  draw();
}

class Ball {
  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.speed = v;
    this.radius = 50;
  }

  draw() {
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
