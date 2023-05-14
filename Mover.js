function keyPressed() {
  // W og s er de funktioner som bevæger vores spiller 1 op og ned
  if (state.player1State == "idle") {
    if (key == "w") {
      state.player1State = "up";
    } else if (key == "s") {
      state.player1State = "down";
    }
  }

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
  if (state.player2State == "idle") {
    if (keyCode === UP_ARROW) {
      state.player2State = "up";
    } else if (keyCode === DOWN_ARROW) {
      state.player2State = "down";
    }
  }

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
  if (key === "1") {
    Powerups = !Powerups; 
  }
  if (key === "d") {
    Powerups2 = !Powerups2;
  }
}

function keyReleased() {
  if (state.player1State == "up") {
    if (key == "w") {
      state.player1State = "idle";
    }
  }

  if (state.player1State == "down") {
    if (key == "s") {
      state.player1State = "idle";
    }
  }

  if (state.player1State == "noMove") {
    if (key == "w") {
      state.player1State = "down";
    }
    if (key == "s") {
      state.player1State = "up";
    }
  }
  if (state.player2State == "up") {
    if (keyCode === UP_ARROW) {
      state.player2State = "idle";
    }
  }

  if (state.player2State == "down") {
    if (keyCode === DOWN_ARROW) {
      state.player2State = "idle";
    }
  }

  if (state.player2State == "noMove") {
    if (keyCode === UP_ARROW) {
      state.player2State = "down";
    }
    if (keyCode === DOWN_ARROW) {
      state.player2State = "up";
    }
  }
}
