let x_rect = 100;
let ball1;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball(100, 100, 5);
  state = new Position();
}

function draw() {
  background(150);
  rect(10, x_rect, 20, 120);
  ball1.show();
  view(state);
  //print(state);
}

class Ball {
  constructor(x, y, v) {
    this.x = x;
    this.y = y;
    this.speed = v;
    this.r = 25;
  }
  show() {
    ellipse(this.x, this.y, this.r, this.r);
  }
}
class Position {
  constructor() {
    this.currentState = "idle";
  }
  transition(event) {
    switch (this.currentState) {
      case "idle":
        if (event == "up") {
          this.currentState = "op";
        } else if (event == "down") {
          this.currentState = "ned";
        }
        break;
      case "up":
        if (event === "stop") {
          this.currentState = "idle";
        }
        break;
      case "down":
        if (event === "stop") {
          this.currentState = "idle";
        }
        break;
    }
  }
}

function view(model) {
  switch (model.currentState) {
    case "op":
      x_rect--;
      break;
    case "ned":
      x_rect++;
      break;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 87:
      state.transition("up");
      break;
    case 83:
      state.transition("down");
      break;
  }
}
function keyReleased() {
  switch (keyCode) {
    case 87:
      print("hello");
      state.transition("stop");
      break;
    case 83:
      state.transition("stop");
      break;
  }
}
