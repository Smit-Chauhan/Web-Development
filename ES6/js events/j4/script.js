function displayMessage() {
 document.getElementById("message")
  .innerHTML =
  "Release to find out the name";
}

function displayName() {
 document.getElementById("message")
  .innerHTML = "Loisse Bitton Bag";
}

function displayError() {
 document.getElementById("message")
  .innerHTML = "Error";
}
document.getElementById("photo")
 .addEventListener("touchstart",
  displayMessage);
document.getElementById("photo")
 .addEventListener("touchcancel",
  displayError);
document.getElementById("photo")
 .addEventListener("touchend",
  displayName);