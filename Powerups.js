class Powerups_player extends Player {
  constructor(x, y, playerNumber) {
    super(x, y, playerNumber);
    this.speed1 = 3,5;
  }
  view() {
    switch (state["player" + this.playerNumber + "State"]) {
      case "up":
        this.y = constrain(this.y - this.speed1, 0, windowHeight - this.height/2);
        break;
      case "down":
        this.y = constrain(this.y + this.speed1, 0, windowHeight - this.height/2);
        break;
      case "noMove":
        break;
      case "idle":
        break;
    }
    rect(this.x, this.y, this.width / 2, this.height / 2);
  }
  hide() {}
}
