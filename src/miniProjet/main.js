const dayHome = document.getElementById("dayHome");
const heureHome = document.getElementById("heureHome");
const msgHome = document.getElementById("msgHome");
const containerHome = document.getElementById("containerHome");
const containerMsg = document.getElementById("containerMsg");
const convMsgSend1 = document.getElementById("convMsgSend1");
const convMsgSend2 = document.getElementById("convMsgSend2");
const convMsgSend3 = document.getElementById("convMsgSend3");
const msg1 = document.getElementById("msg1");
const msg2Pt = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4Pt = document.getElementById("msg4");
const msg5 = document.getElementById("msg5");
const pt1 = document.getElementById(".1");
const pt2 = document.getElementById(".2");
const pt3 = document.getElementById(".3");
const clickPauseAudio = document.getElementById("clickPauseAudio");
var countClick = 0;
var audio = new Audio("./src/led-zeppelin.mp3");

window.addEventListener("load", function () {
  setTimeout(function () {
    (heureHome.textContent = "00:00"),
      (dayHome.textContent = "Samedi 1 Janvier"),
      msgHome.classList.remove("hide"),
      msgHome.classList.add("vignets");
  }, 2500);
  setTimeout(function () {
    msgHome.classList.remove("vignets"),
      msgHome.classList.add("translateNotif");
  }, 6000);
});

msgHome.addEventListener("click", () => {
  initConv();
});

// msg5.addEventListener("click", () => {
//   audio.pause();
// });

clickPauseAudio.addEventListener("click", () => {
  clickPauseAudio.classList.add("hide");
  audio.pause();
});

// Deroulement de la conversation apres Click sur notif START
const initConv = () => {
  msgHome.classList.remove("translateNotif");
  msgHome.classList.add("translateR");
  setTimeout(function () {
    msgHome.classList.add("hide"),
      containerHome.classList.add("translateT"),
      containerHome.classList.add("hide"),
      audio.play(),
      containerMsg.classList.remove("hide");
    initConf();
  }, 900);
  setTimeout(function () {
    msg1.classList.add("vignetsConv"), msg1.classList.remove("hide");
  }, 2000);
  setTimeout(function () {
    msg2Pt.classList.add("vignetsConv"), msg2Pt.classList.remove("hide");
  }, 6000);
  setTimeout(function () {
    msg2Pt.classList.add("hide"), msg3.classList.remove("hide");
  }, 9500);
  setTimeout(function () {
    msg4Pt.classList.add("vignetsConv"), msg4Pt.classList.remove("hide");
  }, 10500);
  setTimeout(function () {
    msg4Pt.classList.add("hide"), msg5.classList.remove("hide"), smoothScroll();
    // window.scrollTo(0, document.querySelector("#msg5").scrollHeight);
  }, 17000);
  setTimeout(function () {
    clickPauseAudio.classList.add("hide");
  }, 44000);
};
// Deroulement de la conversation apres Click sur notif END

// init Confetti START
const initConf = () => {
  //V1
  var heavenColors = ["#4D13D1", "#ced4d3"];
  var goldColors = ["#e7bd42", "#fcc72d"];
  var silverColors = ["#010101", "#cecece"];
  var happyColors = ["#e71837", "#003eff"];
  var whiteColors = ["#fcfcfc", "#fcfcfc"];
  //V1

  var duration = 3 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;
  var randomColors;

  countClick++;

  if (countClick < 2) {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      randomColors = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomIntInclusive(1, 3);

    if (randomColors == 1) {
      colors = heavenColors;
    } else if (randomColors == 2) {
      colors = goldColors;
    } else if (randomColors == 3) {
      colors = silverColors;
    }

    var count = 400;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 70,
      colors: colors,
    });
    fire(0.2, {
      spread: 60,
      colors: colors,
      startVelocity: 55,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: colors,
      startVelocity: 50,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.2,
      colors: colors,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 65,
      colors: colors,
    });
  }
};
// init Confetti END

function smoothScroll() {
  const href = "#msg5";
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
