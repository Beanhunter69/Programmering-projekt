let x_rect = 100;
let ball1;
let state;
let player1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball(100, 100, 5);
  state1 = new Position();
  player1 = new Player(10, 100);
  player2 = new Player(windowWidth - (10 + 20), 100);
}

function draw() {
  background(150);
  //rect(10, player1.x, 20, 120);
  ball1.show();
  player1.view();
  player2.view();
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

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 120;
    this.speed = 5;
  }

  view() {
    switch (state.currentState) {
      case "up":
        this.y = constrain(this.y - this.speed, 0, windowHeight - this.height);
        rect(this.x, this.y, this.width, this.height);
        break;
      case "down":
        this.y = constrain(this.y + this.speed, 0, windowHeight - this.height);
        rect(this.x, this.y, this.width, this.height);
        break;
      case "idle":
        rect(this.x, this.y, this.width, this.height);
        break;
    }
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
          this.currentState = "up";
        } else if (event == "down") {
          this.currentState = "down";
        }
        break;
      case "up":
        if (event == "stop") {
          this.currentState = "idle";
        }
        break;
      case "down":
        if (event == "stop") {
          this.currentState = "idle";
        }
        break;
    }
  }
}
/*
function view() {
  switch (state.currentState) {
    case "up":
      x_rect= x_rect - 5;
      break;
    case "down":
      x_rect= x_rect + speed;
      break;
    case "stop":
      break;
  }
}
*/

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
      print(state.currentState);
      state.transition("stop");
      print(state.currentState);
      break;
    case 83:
      state.transition("stop");
      break;
  }
}
