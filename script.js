const target = new Date("2026-10-25T10:30:00+05:30").getTime();
const ids = ["days", "hours", "minutes", "seconds"];
function updateCountdown() {
  const diff = target - Date.now();
  if (diff <= 0) {
    document.querySelector(".countdown-panel h3").innerHTML = "Today is the day. <em>Make it count.</em>";
    ids.forEach(id => document.getElementById(id).textContent = "00");
    return;
  }
  const values = [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff / (1000 * 60 * 60)) % 24),
    Math.floor((diff / (1000 * 60)) % 60),
    Math.floor((diff / 1000) % 60)
  ];
  ids.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, "0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
