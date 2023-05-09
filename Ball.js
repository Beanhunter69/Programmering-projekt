class Ball {
  constructor(x, y) {
    this.ballx = x;
    this.bally = y;
    this.r = 30;
    this.speed = 5;
  }
  view() {
    ellipse(this.ballx, windowHeight / 2, this.r);
    // make the ball move
    this.ballx = this.ballx + this.speed;
    // make the ball bounce
    if (this.ballx > windowWidth - this.r / 2 || this.ballx < this.r / 2) {
      this.speed = this.speed * -1;
    }
    // make the ball bounce off the player
    if (
      this.ballx < player1.x + this.r &&
      this.bally > player1.y &&
      this.bally < player1.y + player1.height
    ) {
      this.speed = this.speed * -1;
    }
    if (
      this.ballx > player2.x - this.r / 2 &&
      this.bally > player2.y &&
      this.bally < player2.y + player2.height
    ) {
      this.speed = this.speed * -1;
    }
  }
}
