// impport pliku
const Coin = require("./coin.js");
const Furry = require("./furry.js");

// tworzymy klase
function Game() {
  // tablica od 0-99
  this.board = document.querySelectorAll("#board div");
  // do zmiennej przypisujemy obiekt
  this.furry = new Furry(0, 0);
  this.coin = new Coin();
  this.score = 0;
  this.index = function(x, y) {
    return x + y * 10;
  };
  this.showFurry = function() {
    //usuwamy furrego ktory zapelnia cala plansze
    this.hideVisibleFurry();
    //wyswietlamy furrego
    if (this.board[this.index(this.furry.x, this.furry.y)] != null) {
      this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    }
  };
  this.showCoin = function() {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
  };
  this.startGame = function() {
    let self = this;
    this.idSetInterval = setInterval(function() {
      self.moveFurry();
    }, 250);
  };
  this.moveFurry = function() {
    if (this.furry.direction === "right") {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === "left") {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === "up") {
      this.furry.y = this.furry.y + 1;
    } else if (this.furry.direction === "down") {
      this.furry.y = this.furry.y - 1;
    }
    this.showFurry();
    this.checkCoinCollision();
    this.gameOver();
  };
  this.hideVisibleFurry = function() {
    let visibleFurry = document.querySelector(".furry");
    if (visibleFurry != null) {
      visibleFurry.classList.remove("furry");
    }
  };
  this.turnFurry = function(event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "down";
        console.log("d");
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "up";
        console.log("gora");
        break;
      default:
        break;
    }
  };
  this.checkCoinCollision = function() {
    if (
      this.index(this.furry.x, this.furry.y) ===
      this.index(this.coin.x, this.coin.y)
    ) {
      console.log("kolizja");
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove("coin");
      this.score += 1;
      document.querySelector("strong").innerText = this.score.toFixed(2);
      this.coin = new Coin();
      this.showCoin();
    }
  };
  this.gameOver = function() {
    if (
      this.furry.x < 0 ||
      this.furry.y < 0 ||
      this.furry.x > 9 ||
      this.furry.y > 9
    ) {
      clearInterval(this.idSetInterval);
      this.hideVisibleFurry();
      alert("game over!");
    }
  };
}

module.exports = Game;
