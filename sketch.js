let x_rect = 100;
let ball;
let state = {
  currentplayer: 1,
  player1State: "idle",
  player2State: "idle",
};
let player1, player2;
let go = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(windowWidth / 2, windowHeight / 2);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
}

function draw() {
  background(150);
  let oob = ball.outOfBounds();
  if (oob) {
    // the ball stays at spawn till go = true
    go = false;
    if (oob == "right") {
      player1.score++;
    } else {
      player2.score++;
    }
  }
  if (go) ball.update();
  ball.show();
  ball.hit(player1, player2);
  player1.view();
  player2.view();
}
function keyTyped() {
  if (key == " ") {
    go = true;
  }

  if (key == "r") {
    p1.score = 0;
    p2.score = 0;
    ball.resetball();
    go = false;
  }

  // for safety
  return false;
}
