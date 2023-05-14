class Player {
  constructor(x, y, playerNumber) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 120;
    this.speed = 5;
    this.playerNumber = playerNumber;
    this.score = 0;
  }

  view() {
    switch (state["player" + this.playerNumber + "State"]) {
      case "up":
        this.y = constrain(this.y - this.speed, 0, windowHeight - this.height);
        break;
      case "down":
        this.y = constrain(this.y + this.speed, 0, windowHeight - this.height);
        break;
      case "noMove":
        break;
      case "idle":
        break;
    }
    rect(this.x, this.y, this.width, this.height);
  }
  hide(){
    
  }
}
