// kode køres, når en tast bliver trykket ned
function keyPressed() {
  // W og s er de funktioner som bevæger vores spiller 1 op og ned
  // sætter state til up eller down, alt efter hvilken knap der bliver trykket på
  if (state.player1State == "idle") {
    if (key == "w") {
      state.player1State = "up";
    } else if (key == "s") {
      state.player1State = "down";
    }
  }

  // tjekker om knap til modsat bevægelse er trykket ned, og sætter state til noMove, hvis det er tilfældet
  if (state.player1State == "up") {
    if (key == "s") {
      state.player1State = "noMove";
    }
  }
  if (state.player1State == "down") {
    if (key == "w") {
      state.player1State = "noMove";
    }
  }

  // pil op og ned er de funktioner som bevæger vores spiller 2 op og ned
  // sætter state til up eller down, alt efter hvilken knap der bliver trykket på
  if (state.player2State == "idle") {
    if (keyCode === UP_ARROW) {
      state.player2State = "up";
    } else if (keyCode === DOWN_ARROW) {
      state.player2State = "down";
    }
  }

  // tjekker om knap til modsat bevægelse er trykket ned, og sætter state til noMove, hvis det er tilfældet
  if (state.player2State == "up") {
    if (keyCode === DOWN_ARROW) {
      state.player2State = "noMove";
    }
  }
  if (state.player2State == "down") {
    if (keyCode === UP_ARROW) {
      state.player2State = "noMove";
    }
  }

  // Tjekker tryk af knapper til brug af powerup af spiller 2
  if (key === "-") {
    // tjekker for at betingelser for brug af powerup er opfyldt
    if (player2.usedpower == false) {
      // sætter powerup (debuff) til aktiv for modstander gennem sizeChange()
      player1.activepowerup = true;
      player1.sizeChange();
      // logger brug af powerup
      player2.usedpower = true;
    }
  }

  // Tjekker tryk af knapper til brug af powerup af spiller 1
  if (key === "e") {
    // tjekker for at betingelser for brug af powerup er opfyldt
    if (player1.usedpower == false) {
      // sætter powerup (debuff) til aktiv for modstander gennem sizeChange()
      player2.activepowerup = true;
      player2.sizeChange();
      // logger brug af powerup
      player1.usedpower = true;
    }
  }
}

// tjekker om knapper bliver sluppet
// dette er det som gør at vores player ikke bare fortsætter men går tilbage til idle når man giver slip på knappen
function keyReleased() {
  // sluppet W knap
  if (state.player1State == "up") {
    if (key == "w") {
      state.player1State = "idle";
    }
  }
  // sluppet S knap
  if (state.player1State == "down") {
    if (key == "s") {
      state.player1State = "idle";
    }
  }

  // sluppet knap ved noMove state skifter state til down eller up, alt efter hvilken knap der bliver sluppet
  if (state.player1State == "noMove") {
    if (key == "w") {
      state.player1State = "down";
    }
    if (key == "s") {
      state.player1State = "up";
    }
  }

  // sluppet pil op
  if (state.player2State == "up") {
    if (keyCode === UP_ARROW) {
      state.player2State = "idle";
    }
  }
  // sluppet pil ned
  if (state.player2State == "down") {
    if (keyCode === DOWN_ARROW) {
      state.player2State = "idle";
    }
  }

  // sluppet knap ved noMove state skifter state til down eller up, alt efter hvilken knap der bliver sluppet
  if (state.player2State == "noMove") {
    if (keyCode === UP_ARROW) {
      state.player2State = "down";
    }
    if (keyCode === DOWN_ARROW) {
      state.player2State = "up";
    }
  }
}
// keyTyped gør, at når man klikker på mellemrum så starter den spillet, og r restarter
function keyTyped() {
  if (key == " ") {
    go = true;
  }

  if (key == "r") {
    // nulstiller score, bold og powerup
    player1.score = 0;
    player2.score = 0;
    ball.resetball();
    go = false;
    player1.usedpower = false;
    player2.usedpower = false;
  }
  return false;
}
