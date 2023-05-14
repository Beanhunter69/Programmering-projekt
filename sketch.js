let ball;
// en global værdi som gør at kan bevæge de to spiller hver for sig 
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
  //her definere vi hvad vores classer skal være
  ball = new Ball(windowWidth / 2, windowHeight / 2);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
  alert(
    "Player 1 controls: W and S to move, E to activate powerup. \nPlayer 2 controls: Up and Down to move, - to activate powerup. \nThe powerup applies a debuff to the opponent. \nR can be used to reset the game to reset."
  );
}

function draw() {
  background(100);
// viser spiller
  player1.view();
// tjekker om bold og spiller rammer
  ball.hit(player1, player2);

  player2.view();
  ball.hit(player1, player2);
// hvis bolden rammer en kant så tæller den point
  let oob = ball.outOfBounds();
  if (oob) {
    // bolden forbliver i midten indtil det er rigtig
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
  // her kører den vores update inden i bolden
  if (go) ball.update();
  // viser bolden
  ball.show();
  // viser score
  textSize(30);
  text(player1.score, windowWidth / 6, 30);
  text(player2.score, (windowWidth / 6) * 5, 30);
  // viser hvem der har vundet spillet 
  if (player1.score === 11) {
    background(0);
    text("Player 1 vinder", 700, windowHeight / 2);
  } else if (player2.score === 11) {
    background(0);
    text("Player 2 vinder", 700, windowHeight / 2);
  }
// viser hvor mange power ups man har tilbage
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
