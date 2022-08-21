const el = document.querySelector(
 "button");

function boldText() {
 el.style.fontWeight = "bold";
}

function publish() {
 prompt.innerText =
 "Website Published";
}
el.onclick = boldText;
