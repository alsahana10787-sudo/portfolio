const cursorGlow = document.querySelector(".cursor-glow");

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

const topBtn = document.getElementById("topBtn");

const hobbyMessage =
  document.getElementById("hobbyMessage");



/* MOUSE GLOW */

document.addEventListener("mousemove", function (event) {

  cursorGlow.style.left =
    event.clientX + "px";

  cursorGlow.style.top =
    event.clientY + "px";

});



/* MOBILE MENU */

menuBtn.addEventListener("click", function () {

  navbar.classList.toggle("open");

  if (navbar.classList.contains("open")) {

    menuBtn.textContent = "✕";

  } else {

    menuBtn.textContent = "☰";

  }

});


document.querySelectorAll("nav a").forEach(function (link) {

  link.addEventListener("click", function () {

    navbar.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});



/* COLORFUL CLICK EFFECT */

document.addEventListener("click", function (event) {

  const colors = [

    "#ff4fc3",
    "#9b5cff",
    "#42d9ff",
    "#ffe66d",
    "#62f5a8",
    "#ff8a65"

  ];


  for (let i = 0; i < 14; i++) {

    const particle =
      document.createElement("span");

    particle.className =
      "click-particle";


    const angle =
      (Math.PI * 2 * i) / 14;


    const distance =
      40 + Math.random() * 70;


    const x =
      Math.cos(angle) * distance;


    const y =
      Math.sin(angle) * distance;


    particle.style.left =
      event.clientX + "px";


    particle.style.top =
      event.clientY + "px";


    particle.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    particle.style.boxShadow =
      "0 0 15px " +
      particle.style.background;


    particle.style.setProperty(
      "--x",
      x + "px"
    );


    particle.style.setProperty(
      "--y",
      y + "px"
    );


    document.body.appendChild(particle);


    setTimeout(function () {

      particle.remove();

    }, 750);

  }

});



/* 3D CARD TILT */

const cards =
  document.querySelectorAll(".tilt");


cards.forEach(function (card) {

  card.addEventListener(
    "mousemove",
    function (event) {

      if (window.innerWidth <= 750) {
        return;
      }


      const rect =
        card.getBoundingClientRect();


      const x =
        event.clientX - rect.left;


      const y =
        event.clientY - rect.top;


      const rotateX =
        ((y / rect.height) - 0.5) * -12;


      const rotateY =
        ((x / rect.width) - 0.5) * 12;


      card.style.transform =
        `perspective(800px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-6px)`;

    }
  );


  card.addEventListener(
    "mouseleave",
    function () {

      card.style.transform = "";

    }
  );

});



/* HOBBY INTERACTION */

const hobbyCards =
  document.querySelectorAll(".hobby-card");


hobbyCards.forEach(function (card) {

  card.addEventListener(
    "click",
    function () {

      const hobby =
        card.dataset.hobby;


      if (hobby === "singing") {

        hobbyMessage.textContent =
          "🎤 Singing makes my world more musical!";

      }


      if (hobby === "drawing") {

        hobbyMessage.textContent =
          "✏️ Drawing turns imagination into art!";

      }


      if (hobby === "painting") {

        hobbyMessage.textContent =
          "🎨 Painting brings colors to my imagination!";

      }

    }
  );

});



/* SCROLL TO TOP */

window.addEventListener(
  "scroll",
  function () {

    if (window.scrollY > 400) {

      topBtn.classList.add("show");

    } else {

      topBtn.classList.remove("show");

    }

  }
);


topBtn.addEventListener(
  "click",
  function () {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);



/* CURRENT YEAR */

document.getElementById("year").textContent =
  new Date().getFullYear();