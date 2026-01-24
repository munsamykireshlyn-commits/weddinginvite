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
        cleanup();
      })
      .catch(() => {
        // Autoplay blocked; wait for user gesture
      });
  };

  const cleanup = () => {
    document.removeEventListener("click", unlockAudio);
    document.removeEventListener("touchstart", unlockAudio);
    document.removeEventListener("scroll", unlockAudio);
  };

  // Try once immediately
  unlockAudio();

  // Fallbacks: start on any user interaction
  document.addEventListener("click", unlockAudio);
  document.addEventListener("touchstart", unlockAudio);
  document.addEventListener("scroll", unlockAudio);
});


/* ============================= */
/* 🌿 SUBTLE PARALLAX EFFECT     */
/* ============================= */

const hero = document.querySelector(".hero-img");
let latestScroll = 0;
let ticking = false;

const updateParallax = () => {
  if (!hero) return;

  const offset = latestScroll * 0.010; // ultra-subtle depth
  hero.style.transform = `translate(-50%, -50%) translateY(${offset}px)`;

  ticking = false;
};

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});
