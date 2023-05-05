let x_rect = 100;
let ball1;
let state = {
  currentplayer: 1,
  player1state: "idle",
  player2state: "idle",
};
let player1, player2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball(windowWidth/2, windowHeight/2, 5);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
}

function draw() {
  background(150);
  //rect(10, player1.x, 20, 120);
  ball1.show();
  player1.view();
  player2.view();
}
function keyPressed() {
  if (key === "w") {
    state.player1State = "up";
  } else if (key === "s") {
    state.player1State = "down";
  } else if (keyCode === UP_ARROW) {
    state.player2State = "up";
  } else if (keyCode === DOWN_ARROW) {
    state.player2State = "down";
  } 
}

function keyReleased() {
  if (key === "w" || key === "s") {
    state.player1State = "idle";
  } else if (keyIsDown("w")) {
    state.player1State = "up";
  } else if (keyIsDown("s")) {
    state.player1State = "down";
  } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW){
    state.player2State = "idle"; 
  } else if (keyIsDown(UP_ARROW)) {
    state.player2State = "up"; 
  } else if (keyIsDown(DOWN_ARROW)){
    state.player2State = "down"; 
  }
}
// function keyReleased() {
//   if (!keycode === "w") {
//     state.player1State = "idle";
//   } else if (keycode === "s") {
//     state.player1State = "down";
//   } else if (keycode === "w") {
//     state.player1State = "up";
//   }
// }
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

  checkWin() {
    if (this.x < 0) {
      print("player 2 wins");
    } else if (this.x > windowWidth) {
      print("player 1 wins");
    }
  }
}

class Player {
  constructor(x, y, playerNumber) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 120;
    this.speed = 5;
    this.playerNumber = playerNumber;
  }

  view() {
    switch (state["player" + this.playerNumber + "State"]) {
      case "up":
        this.y = constrain(this.y - this.speed, 0, windowHeight - this.height);
        break;
      case "down":
        this.y = constrain(this.y + this.speed, 0, windowHeight - this.height);
        break;
      case "idle":
        break;
    }
    rect(this.x, this.y, this.width, this.height);
  }
}
// /*
// function view() {
//   switch (state.currentState) {
//     case "up":
//       x_rect= x_rect - 5;
//       break;
//     case "down":
//       x_rect= x_rect + speed;
//       break;
//     case "stop":
//       break;
//   }
