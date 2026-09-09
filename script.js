const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = navigation ? navigation.querySelectorAll("a") : [];
const heroVideo = document.querySelector(".hero-video");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

const closeMenu = () => {
  if (!menuToggle || !header) return;
  menuToggle.setAttribute("aria-expanded", "false");
  header.classList.remove("menu-is-open");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  header?.classList.toggle("menu-is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll(".service-item").forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && heroVideo) {
  heroVideo.pause();
}
