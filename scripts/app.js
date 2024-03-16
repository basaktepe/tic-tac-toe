const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPLayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const gameBoardElement = document.getElementById("game-board");
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const playerConfigFormElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelButtonElement = document.getElementById("cancel-config-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

const startNewGameButtonElement = document.getElementById("start-newgame-btn");
const activeGameElement = document.getElementById("active-game");

const gameOverElement = document.getElementById("game-over");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelButtonElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

playerConfigFormElement.addEventListener("submit", savePlayerConfig);

startNewGameButtonElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
