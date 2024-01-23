function openPlayerConfig(event) {
  editedPLayer = +event.target.dataset.playerid; // +"1" -> 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  playerConfigFormElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPLayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPLayer - 1].name = enteredPlayerName;
  closePlayerConfig();
  playerConfigFormElement.firstElementChild.lastElementChild.value = "";
}




