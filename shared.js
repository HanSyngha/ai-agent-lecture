// Slide deck runtime — keyboard nav, kinetic background, notes toggle.
(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const progress = document.querySelector(".progress span");
  const notes = document.querySelector(".notes");
  let index = 0;
  let notesVisible = false;

  // Auto-number slides
  slides.forEach((s, i) => {
    s.dataset.num = String(i + 1).padStart(2, "0");
    const fnum = s.querySelector("footer .num");
    if (fnum) fnum.textContent = String(i + 1).padStart(2, "0");
  });

  function render() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.classList.toggle("past", i < index);
    });
    if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    if (notes) {
      notes.innerHTML = `<b>Slide ${index + 1} / ${slides.length}</b><br>${slides[index].dataset.notes || ""}`;
    }
    history.replaceState(null, "", `#${index + 1}`);
  }

  function go(next) {
    index = Math.max(0, Math.min(slides.length - 1, next));
    render();
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      go(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      go(index - 1);
    }
    if (event.key.toLowerCase() === "n" && notes) {
      notesVisible = !notesVisible;
      notes.classList.toggle("visible", notesVisible);
    }
    if (event.key.toLowerCase() === "p") window.print();
    if (event.key === "Home") go(0);
    if (event.key === "End") go(slides.length - 1);
  });

  document.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
    document.documentElement.style.setProperty("--my", `${event.clientY}px`);
  });

  let touchStartX = 0;
  document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 60) go(index + (delta < 0 ? 1 : -1));
  }, { passive: true });

  const initial = Number(location.hash.replace("#", ""));
  if (Number.isInteger(initial) && initial > 0) {
    index = Math.min(initial - 1, slides.length - 1);
  }

  // Kinetic background (subtle particle network)
  const canvas = document.getElementById("kinetic-bg");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let width = 0, height = 0;
    const particles = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    }

    for (let i = 0; i < 56; i += 1) {
      particles.push({
        x: Math.random() * 1600,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 0.8 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        hue: Math.floor(Math.random() * 3),
      });
    }

    const COLORS = [
      "rgba(223,251,82,0.56)",
      "rgba(56,242,184,0.42)",
      "rgba(255,107,53,0.36)",
    ];

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p, i) => {
        p.x += p.vx + Math.sin(t * 0.0006 + p.phase) * 0.08;
        p.y += p.vy + Math.cos(t * 0.0005 + p.phase) * 0.07;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
        ctx.beginPath();
        ctx.fillStyle = COLORS[p.hue];
        ctx.arc(p.x, p.y, p.r + Math.sin(t * 0.002 + i) * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(245,241,232,${(1 - d / 130) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    requestAnimationFrame(draw);
  }

  render();
})();
