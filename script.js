// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple fake "form sent" message
function showFormMessage() {
  const msg = document.getElementById("form-message");
  msg.textContent = "Thank you! This is a demo form – in a real app this would send an email.";
  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
}

// Light/Dark mode toggle (basic)
const themeToggle = document.getElementById("theme-toggle");
let lightMode = false;

themeToggle.addEventListener("click", () => {
  lightMode = !lightMode;
  document.body.classList.toggle("light-mode", lightMode);
  themeToggle.textContent = lightMode ? "☀️" : "🌙";
});
