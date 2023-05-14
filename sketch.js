//skaber diverse globale variabler
let x_rect = 100;
let ball;
// en global værdi som gør at kan bevæge de to spiller hver for sig 
let state = {
  currentplayer: 1,
  player1State: "idle",
  player2State: "idle",
};
let player1, player2;
let go = false;
let score = 0;

//setup kører ved afvikling af programmet
function setup() {
  //canvas bliver lavet samt bolden og spillerne bliver som objekter
  createCanvas(windowWidth, windowHeight);
  //her definere vi hvad vores classer skal være
  ball = new Ball(windowWidth / 2, windowHeight / 2);
  player1 = new Player(10, 100, 1);
  player2 = new Player(windowWidth - 30, 100, 2);
  //Skaber popup med controls i browser
  alert(
    "Player 1 controls: W and S to move, E to activate powerup. \nPlayer 2 controls: Up and Down to move, - to activate powerup. \nThe powerup applies a debuff to the opponent. \nR can be used to reset the game to reset."
  );
}

//draw kører og opdaterer programmet i takt med fps af browseren
function draw() {
  //Opdaterer spillere på canvas
  background(100);
  player1.view();
  player2.view();
  
// tjekker om bold og spiller rammer
  ball.hit(player1, player2);

  

  //tjekker om bolden rammer en af spillerne
  ball.hit(player1, player2);

  //opbevarer return værdien fra outOfBounds i en variabel
  let oob = ball.outOfBounds();

  //if loop kører, hvis den får return værdi fra outOfBounds
  if (oob) {
    // bolden forbliver i midten indtil start af spillet
    go = false;

    //point bliver tildelt til den spiller der scorer ud fra oob værdien
    if (oob == "right") {
      player1.score++;
    } else {
      player2.score++;
    }
  }

//beregner lokation og bevægelse af bolden ved at køre update inden i ball
  if (go) ball.update();
  // viser bolden på canvas
  ball.show();

  //tegner HUD på canvas og opdaterer med relevante værdier såsom score
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
