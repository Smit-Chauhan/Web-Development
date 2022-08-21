function showAttribute() {
    const el = document.querySelector(
    "a");
    const imageLink = el.getAttribute(
     "href");
    const p = document.querySelector('p');
    p.innerText = imageLink;
   } 