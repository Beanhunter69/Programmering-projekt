let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);
    ball1 = new Ball(100, 100, 5);
}

function draw() {
  background(150);
  draw()
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