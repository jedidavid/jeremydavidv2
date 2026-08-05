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
