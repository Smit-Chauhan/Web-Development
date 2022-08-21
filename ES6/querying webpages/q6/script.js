
function displayInfo() {
    const el = document
     .getElementsByTagName("li");
    const p = document.querySelector("p");
    p.innerText = el.length;
   }
   