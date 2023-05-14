class Ball {
  constructor(x, y, speed = 2) {
    this.spawn = createVector(x, y);
    this.speed = speed;
    this.r = 10;
    this.resetball();
  }

  resetball() {
    this.pos = this.spawn.copy();
    let angle = random(-PI / 4, PI / 4);
    this.vel = p5.Vector.fromAngle(angle, this.speed);
    if (random(1) > 0.5) this.vel.x *= -1;
  }

  outOfBounds() {
    if (this.pos.x > width + this.r) {
      this.resetball();
      player1.resetPowerup();
      return "right";
    }

    if (this.pos.x < -this.r) {
      this.resetball();
      player2.resetPowerup();
      return "left";
    }

    return false;
  }

  hit(player1, player2) {
    for (Player of [player1, player2]) {
      let playerX = Player.x;
      let playerY = Player.y;
      let ballX = this.pos.x;
      let ballY = this.pos.y;
      let r = this.r;

      if (playerX - r < ballX && ballX < playerX + Player.width + r) {
        if (playerY - r < ballY && ballY < playerY + Player.height + r) {
          let padCenter = createVector(
            Player.x + Player.width / 2,
            Player.y + Player.height / 2
          );

          Player.resetPowerup();

          this.vel = this.pos.copy().sub(padCenter);
          this.vel.limit(10);

          let a = this.vel.heading();
          if (a > -PI / 2 && a < PI / 2) {
            this.vel = p5.Vector.fromAngle(a / 2, 10);
          } else {
            this.vel.rotate(PI);
            let a = this.vel.heading();
            this.vel = p5.Vector.fromAngle(PI + a / 2, 10);
          }
        }
      }
    }
  }
 

  update() {
    this.pos.add(this.vel);

    // bounce off top and bottom walls
    if (this.pos.y + this.r >= height || this.pos.y - this.r <= 0) {
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
      this.vel.y *= -1;
    }
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
