class Powerups_player extends Player {
  constructor(x, y) {
    super(x, y);
  }
  view() {
    rect(this.x, this.y, this.width / 2, this.height / 2);
  }
  hide() {}
}
