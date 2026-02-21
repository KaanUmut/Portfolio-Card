const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggle.textContent = "🌙";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀️";
  }
});