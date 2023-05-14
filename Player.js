class Player {
  constructor(x, y, playerNumber) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 120;
    this.speed = 5;
    this.playerNumber = playerNumber;
    this.score = 0;
    this.activepowerup = false;
    this.usedpower = false;
  }
// bevæger og viser vores spiller 
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
    //viser den som en retangle
    rect(this.x, this.y, this.width, this.height);
  }
  // er vores power up som gør vores spiller mindre og langsommere når man bruger den
  sizeChange() {
    if (this.activepowerup) {
      this.speed = 3,5;
      this.height = 60;
      this.width = 10;
    } else {
      this.height = 120;
      this.width = 20;
    }
  }
  // nulstiller power uppen 
  resetPowerup() {
    this.activepowerup = false;

    this.sizeChange();
  }
}
