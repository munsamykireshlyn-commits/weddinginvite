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

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  if (!audio) return;

  audio.volume = 0.25;
  audio.loop = true;

  let hasPlayed = false;

  const unlockAudio = () => {
    if (hasPlayed) return;

    audio.play()
      .then(() => {
        hasPlayed = true;
        console.log("Nadaswaram started 🎵");
      })
      .catch(err => {
        console.log("Audio blocked, retrying on next gesture");
      });

    // Remove listeners once triggered
    if (hasPlayed) {
      document.removeEventListener("click", unlockAudio);
      document.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("scroll", unlockAudio);
    }
  };

  // Try once immediately
  unlockAudio();

  // Fallbacks: start on any user interaction
  document.addEventListener("click", unlockAudio);
  document.addEventListener("touchstart", unlockAudio);
  document.addEventListener("scroll", unlockAudio);
});
