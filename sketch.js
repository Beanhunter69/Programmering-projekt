let x_rect = 100;
let ball;
let state = {
  currentplayer: 1,
  player1State: "idle",
  player2State: "idle",
};
let player1, player2, powerups1, powerups2;
let go = false;
let score = 0;
let Powerups = true;
let Powerups2 = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(windowWidth / 2, windowHeight / 2);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
  // powerups1 = new Powerups_player(player1.x, player1.y, 1);
  //powerups2 = new  Powerups_player(player2.x, player2.y, 2);
}

function draw() {
  background(150);

  player1.view();
  ball.hit(player1, player2);

  player2.view();
  ball.hit(player1, player2);

  let oob = ball.outOfBounds();
  if (oob) {
    // the ball stays at spawn till go = true
    go = false;

    if (oob == "right") {
      player1.score++;
      Powerups = true;
      Powerups2 = true;
    } else {
      player2.score++;
      Powerups = true;
      Powerups2 = true;
    }
  }
  if (go) ball.update();
  ball.show();
  textSize(30);
  text(player1.score, windowWidth / 6, 30);
  text(player2.score, (windowWidth / 6) * 5, 30);
  if (player1.score === 11) {
    background(0);
    text("Player 1 vinder", 700, windowHeight / 2);
  } else if (player2.score === 11) {
    background(0);
    text("Player 2 vinder", 700, windowHeight / 2);
  }

  if (!player1.usedpower) {
    text("Player 1 has a powerup use left", windowWidth / 6, windowHeight - 20);
  }
  if (!player2.usedpower) {
    text(
      "Player 2 has a powerup use left",
      (windowWidth / 6) * 4,
      windowHeight - 20
    );
  }
}
