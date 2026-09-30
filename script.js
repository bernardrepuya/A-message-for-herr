function showPage(pageId) {

  const pages =
    document.querySelectorAll(".page");


  pages.forEach(function(page) {

    page.classList.remove("active");

  });


  const selectedPage =
    document.getElementById(pageId);


  if (selectedPage) {

    selectedPage.classList.add("active");

  }


  window.scrollTo(0, 0);
}


/* =========================
   FOUR-LEAF CLOVERS 🍀
========================= */

function createClover() {

  const clover =
    document.createElement("div");


  clover.className =
    "clover";


  clover.innerHTML =
    "🍀";


  clover.style.left =
    Math.random() * 100 + "vw";


  clover.style.fontSize =
    18 + Math.random() * 20 + "px";


  clover.style.animationDuration =
    5 + Math.random() * 5 + "s";


  document.body.appendChild(clover);


  setTimeout(function() {

    clover.remove();

  }, 10000);
}


setInterval(function() {

  createClover();

}, 2000);


/* =========================
   FLOATING HEARTS 💚
========================= */

function createHeart() {

  const heart =
    document.createElement("div");


  heart.className =
    "heart";


  heart.innerHTML =
    "💚";


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    15 + Math.random() * 20 + "px";


  heart.style.animationDuration =
    4 + Math.random() * 3 + "s";


  document.body.appendChild(heart);


  setTimeout(function() {

    heart.remove();

  }, 8000);
}


setInterval(function() {

  createHeart();

}, 3000);
