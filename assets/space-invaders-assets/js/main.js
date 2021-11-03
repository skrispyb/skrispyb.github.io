//**************************************************************
//**************************************************************
//      Term Class Project
//**************************************************************
//**************************************************************
//      Root Scope Variable Declarations
//**************************************************************
const ctx = gameCanvas.getContext("2d");
let ufoMover;
let ufoRandimizer;
let bulletFire;
let bulletNum = 50;
let gameOver = true;
let droneArray = [];
let currentBullets = [];
let SCORE = 0;
let highScore = 0;

//**************************************************************
//**************************************************************
//      Object Declarations
//**************************************************************
//**************************************************************
class Tank {
  constructor() {
    this.tankX = 20;
    this.tankY = 760;
    this.tankWidth = 40;
    this.tankStep = 10;
    // fixed bullet with the tank
    this.bulletWidth = 3;
    this.bulletStep = -10;
  }

  drawTank() {
    ctx.beginPath();
    ctx.rect(this.tankX, this.tankY, 40, 20);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // permanent atached bullet
    ctx.beginPath();
    ctx.rect(this.tankX + 20, this.tankY, 3, 6);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  moveLeft() {
    if (this.tankStep > 0) {
      this.tankStep *= -1;
    }
    this.tankX += this.tankStep;
    if (this.tankX < 0) {
      this.tankX = 0;
    }
  }

  moveRight() {
    if (this.tankStep < 0) {
      this.tankStep *= -1;
    }
    this.tankX += this.tankStep;
    if (this.tankX > 360) {
      this.tankX = 360;
    }
  }
}

class UFO {
  constructor() {
    this.ufoX = 30;
    this.ufoY = 40;
    this.ufoWidth = 30;
    this.ufoStep = 10;
    this.removeUFO = false;
    this.alive = true;
  }

  drawUFO() {
    ctx.beginPath();
    ctx.ellipse(this.ufoX, this.ufoY, this.ufoWidth, 10, 0, 0, 2 * Math.PI); // (x, y, width, height)
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  moveUFO() {
    if (this.ufoX < 440) {
      this.ufoX += this.ufoStep;
    } else {
      this.removeUFO = true;
      clearInterval(ufoMover);
    }
  }

  ufoTimer() {
    if (!this.removeUFO) {
      this.moveUFO();
      redraw();
    }
  }

  ufoRandimize = () => {
    if (this.removeUFO) {
      let randomNumber = Math.random();
      if (randomNumber < 0.25) {
        this.alive = true;
        this.ufoX = 30;
        this.removeUFO = false;
        ufoMover = setInterval(this.ufoTimer.bind(this), 150);
      }
    }
  };
}

class Drone {
  constructor(x = 30, y = 100) {
    this.droneX = x;
    this.droneY = y;
    this.droneWidth = 25;
    this.droneStep = 5;
    this.alive = true;
  }

  drawDrones() {
    ctx.beginPath();
    ctx.rect(this.droneX, this.droneY, this.droneWidth, 20);
    ctx.fillStyle = "darkolivegreen";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  droneTimer() {
    this.droneX += this.droneStep;
    if (droneArray[0].droneX === 75 || droneArray[0].droneX === 0) {
      this.droneStep *= -1;
      this.droneY += 10;
      if (this.droneY > 760) {
        displayAlert.innerHTML = `<b>Game over!</b>`;
        endGameFunc();
        return;
      }
    }
    redraw();
  }
}

class Bullet {
  constructor(x, y) {
    this.bulletX = x + 20;
    this.bulletY = y;
    this.bulletStep = -10;
    this.alive = true;
  }

  drawBullet() {
    ctx.beginPath();
    ctx.rect(this.bulletX, this.bulletY, 3, 6);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  bulletShoot() {
    this.bulletY += this.bulletStep;

    // bullet collides with drone or UFO
    for (let i = 0; i < droneArray.length; i++) {
      let currentDrone = droneArray[i];
      if (currentDrone.alive && this.alive) {
        if (
          this.bulletX >= currentDrone.droneX &&
          this.bulletX <= currentDrone.droneX + 25 &&
          this.bulletY >= currentDrone.droneY &&
          this.bulletY <= currentDrone.droneY + 20
        ) {
          SCORE += 10;
          currentDrone.alive = false;
          this.alive = false;
        }
      }
    }

    if (ufo.alive && this.alive) {
      if (
        this.bulletX >= ufo.ufoX - 30 &&
        this.bulletX <= ufo.ufoX + 30 &&
        this.bulletY >= ufo.ufoY - 5 &&
        this.bulletY <= ufo.ufoY + 5
      ) {
        SCORE += 100;
        ufo.alive = false;
        this.alive = false;
      }
    }

    if (this.bulletY < 0) {
      this.alive = false;
    }
    if (this.alive) {
      redraw();
    }
  }
}

//**************************************************************
//**************************************************************
//      Functions Declarations
//**************************************************************
//**************************************************************
//  Redraw
const redraw = () => {
  ctx.clearRect(0, 0, 400, 800);
  tank.drawTank();
  if (ufo.alive) {
    ufo.drawUFO();
  }
  currentBullets.forEach((bullet) => {
    if (bullet.alive) {
      bullet.drawBullet();
    } else {
    }
  });

  for (let i = 0; i < droneArray.length; i++) {
    if (droneArray[i].alive) {
      droneArray[i].drawDrones();
    }
  }
  scoreOutput.innerHTML = `Score: ${SCORE}<br>High Score: ${highScore}`;
};

// Reset the Game
const reset = () => {
  tank.tankX = 20;
  ufo.ufoX = 30;
  ufo.removeUFO = false;
  setDrones();
};

// End the Game
const endGameFunc = () => {
  startGame.disabled = false;
  if (SCORE > highScore) {
    highScore = SCORE;
    displayAlert.innerHTML = `<b>Congratulations! You got a High score.</b>`;
  } else {
    displayAlert.innerHTML = `<b>Better luck next time!</b>`;
  }
  scoreOutput.innerHTML = `Current Score: ${SCORE}<br>High Score: ${highScore}`;
  ufo.RemoveUFO = true;
  clearInterval(ufoMover);
  clearInterval(ufoRandimizer);
  for (let i = 0; i < currentBullets.length; i++) {
    currentBullets[i].alive = false;
  }

  for (let i = 0; i < droneArray.length; i++) {
    clearInterval(droneArray[i].intervalName);
  }
  ctx.clearRect(0, 0, 400, 800);
  reset();
  gameOver = true;
};

const setDrones = () => {
  droneArray = [];
  for (let i = 100; i < 400; i += 50) {
    for (let j = 35; j < 350; j += 50) {
      droneArray.push(new Drone(j, i));
    }
  }
};

const setBullet = () => {
  bullet.BulletX = tank.tankX;
};

//**************************************************************
//**************************************************************
//      Event Listeners
//**************************************************************
//**************************************************************

//**************************************************************
//      Move Tank Right
//**************************************************************
moveRight.addEventListener("click", () => {
  tank.moveRight();
  redraw();
});

//**************************************************************
//      Move Tank Left
//**************************************************************
moveLeft.addEventListener("click", () => {
  tank.moveLeft();
  redraw();
});

//**************************************************************
//      Document Event Listener - Keydown Events
//**************************************************************
document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 39:
      tank.moveRight();
      redraw();
      break;
    case 37:
      tank.moveLeft();
      redraw();
      break;
    case 32:
      if (bulletNum > 1) {
        bulletNum--;
        bulletOutput.innerHTML = `Bullets remaining: ${bulletNum}`;
        let bullet = new Bullet(tank.tankX, tank.tankY);
        bulletFire = setInterval(bullet.bulletShoot.bind(bullet), 10);
        currentBullets.push(bullet);
        redraw();
      } else {
        bulletOutput.innerHTML = `Game Over!<br>You have no bullets left!`;
        endGameFunc();
      }
      break;
  }
});

//**************************************************************
//      Start the Game Event Listener
//**************************************************************
startGame.addEventListener("click", () => {
  startGame.disabled = true;
  bulletNum = 50;
  bulletOutput.innerHTML = `Bullets remaining: ${bulletNum}`;
  SCORE = 0;
  displayAlert.innerHTML = `<b>Good luck!</b>`;
  if (gameOver) {
    gameOver = false;
    tank.drawTank();
    ufo.drawUFO();

    // Draw Drones
    for (let i = 0; i < droneArray.length; i++) {
      droneArray[i].drawDrones();
      droneArray[i].intervalName = setInterval(
        droneArray[i].droneTimer.bind(droneArray[i]),
        150
      );
    }
    ufoMover = setInterval(ufo.ufoTimer.bind(ufo), 150);
    ufoRandimizer = setInterval(ufo.ufoRandimize.bind(ufo), 3000);
  }
});

//**************************************************************
//      End the Game Event Listener
//**************************************************************
endGame.addEventListener("click", () => {
  endGameFunc();
});

//**************************************************************
//      Instantiate Objects
//**************************************************************
const tank = new Tank();
const ufo = new UFO();
setDrones();
