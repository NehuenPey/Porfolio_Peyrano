// Scroll line
const scrollLine = document.getElementById("scrollLine");
window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollLine.style.width = pct + "%";
});

// Reveal
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting)
        setTimeout(() => e.target.classList.add("visible"), i * 70);
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((r) => obs.observe(r));

// Form
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".form-submit");
  btn.textContent = "✓ Mensaje enviado";
  setTimeout(() => (btn.textContent = "Enviar mensaje →"), 3000);
}
