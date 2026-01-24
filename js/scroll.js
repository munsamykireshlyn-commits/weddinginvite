/* ============================= */
/* 👁️ SCROLL ANIMATIONS         */
/* ============================= */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
});


/* ============================= */
/* 🎵 NADASWARAM AUDIO           */
/* ============================= */

const audio = document.getElementById("bg-audio");
const toggle = document.getElementById("sound-toggle");

// Safety check in case elements aren't loaded yet
if (audio && toggle) {

  toggle.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.25;
      audio.play().catch(() => {});
      toggle.innerText = "🔊";
      localStorage.setItem("sound", "on");
    } else {
      audio.pause();
      toggle.innerText = "🔇";
      localStorage.setItem("sound", "off");
    }
  });

  // Restore preference
  if (localStorage.getItem("sound") === "on") {
    audio.volume = 0.25;
    audio.play().catch(() => {});
    toggle.innerText = "🔊";
  }

}
