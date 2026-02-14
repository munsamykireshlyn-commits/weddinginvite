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
/* 🎵 AUDIO + TAP TO BEGIN       */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  const overlay = document.getElementById("start-overlay");
  const btn = document.getElementById("start-btn");

  // If overlay isn't present, fallback to old behavior
  if (!overlay) {
    if (!audio) return;

    audio.volume = 0.25;
    audio.loop = true;

    audio.play().catch(() => {});
    return;
  }

  // Lock scroll until user taps
  document.body.classList.add("locked");

  const startExperience = async () => {
    // Hide overlay + unlock scroll
    overlay.classList.add("hidden");
    document.body.classList.remove("locked");

    // Audio start (gesture-based, should succeed on mobile)
    if (audio) {
      audio.volume = 0.25;
      audio.loop = true;
      try {
        await audio.play();
      } catch (e) {
        // If still blocked, user can tap again—overlay is gone though.
      }
    }

    // Remove overlay after fade
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  };

  // Tap anywhere on overlay
  overlay.addEventListener("click", startExperience, { once: true });

  // Or tap Begin button
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      startExperience();
    }, { once: true });
  }
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
