const themeToggle = document.getElementById("themeToggle");
const body = document.body;

let isDarkMode = false;

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  updateTheme();
});

function updateTheme() {
  if (isDarkMode) {
    body.classList.add("bg-dark", "text-light");
  } else {
    body.classList.remove("bg-dark", "text-light");
  }
}
