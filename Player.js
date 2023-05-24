// skaber klassen Player
class Player {
  // laver konstruktor med værdier til position, størrelse, hastighed. spillerens nummer og sproing af brug og debuff til powerup
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
  // Beregner position og bevæger vores spiller gennem viewmodel
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
    //viser den som en retangle på canvas
    rect(this.x, this.y, this.width, this.height);
  }

  // sizeChange() ændre størrelsen på spilleren og hastigheden hvis powerup er aktiv
  sizeChange() {
    if (this.activepowerup) {
      this.speed = 3.5;
      this.height = 60;
      this.width = 10;
    } else {
      this.speed = 5;
      this.height = 120;
      this.width = 20;
    }
  }
  // nulstiller power uppen og opdaterer playerstats
  resetPowerup() {
    this.activepowerup = false;
    this.sizeChange();
  }
}
