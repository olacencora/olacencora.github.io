// jak sie zaladuje caly dom to wtedy wykonuja sie funkcje

document.addEventListener("DOMContentLoaded", function() {
  const Game = require("./game.js");
  const game = new Game();

  game.showFurry();
  game.showCoin();
  game.startGame();

  document.addEventListener("keydown", function(event) {
    game.turnFurry(event);
  });

  console.log("Hello world!");
});
