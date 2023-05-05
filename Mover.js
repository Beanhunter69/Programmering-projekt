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