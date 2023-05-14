let x_rect = 100;
let ball;
let state = {
  currentplayer: 1,
  player1State: "idle",
  player2State: "idle",
};
let player1, player2, powerups;
let go = false;
let score = 0;
let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(windowWidth / 2, windowHeight / 2);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
  powerups = new Powerups_player(10, 100, 1);
}

function draw() {
  background(150);
  powerups.hide();

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
  textSize(30);
  text(player1.score, 200, 30);
  text(player2.score, 1300, 30);
  if (player1.score === 11) {
    background(0);
    text("Player 1 vinder", 700, windowHeight / 2);
  } else if (player2.score === 11) {
    background(0);
    text("Player 2 vinder", 700, windowHeight / 2);
  }
}
function keyTyped() {
  if (key == " ") {
    go = true;
  }

  if (key == "r") {
    player1.score = 0;
    player2.score = 0;
    ball.resetball();
    go = false;
  }
  return false;
}
function PU() {
  if (key == "p") {
    powerups.show();
  }
}
