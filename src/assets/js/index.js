const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const menuOverlay = document.getElementById("menu-overlay");
const menuPanel = document.getElementById("menu-panel");
const menuPanelLinks = menuPanel.querySelectorAll("a");

function openMenu() {
  menuOverlay.classList.remove("invisible", "opacity-0");
  menuOverlay.classList.add("opacity-100");
  menuPanel.classList.remove("translate-x-full");
  menuPanel.classList.add("translate-x-0");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuOverlay.classList.remove("opacity-100");
  menuOverlay.classList.add("opacity-0");
  menuPanel.classList.remove("translate-x-0");
  menuPanel.classList.add("translate-x-full");
  document.body.style.overflow = "";

  menuOverlay.addEventListener(
    "transitionend",
    function hideOverlay() {
      menuOverlay.classList.add("invisible");
      menuOverlay.removeEventListener("transitionend", hideOverlay);
    },
    { once: true }
  );
}

menuBtn.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);
menuPanelLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const themeToggleButtons = document.querySelectorAll(".theme-toggle");
const themeToggleDarkIcons = document.querySelectorAll(".theme-dark-icon");
const themeToggleLightIcons = document.querySelectorAll(".theme-light-icon");

// Change the icons inside the buttons based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcons.forEach((icon) => icon.classList.remove("hidden"));
} else {
  themeToggleDarkIcons.forEach((icon) => icon.classList.remove("hidden"));
}

themeToggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // toggle icons inside buttons
    themeToggleDarkIcons.forEach((icon) => icon.classList.toggle("hidden"));
    themeToggleLightIcons.forEach((icon) => icon.classList.toggle("hidden"));

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});
