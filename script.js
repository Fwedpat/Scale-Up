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

const serviceItems = [...document.querySelectorAll(".service-item")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const resetServiceContent = (content) => {
  content.style.removeProperty("height");
  content.style.removeProperty("opacity");
  content.style.removeProperty("transform");
};

const animateService = (item, shouldOpen) => {
  const content = item.querySelector(".service-content");

  if (!content) {
    item.open = shouldOpen;
    return;
  }

  content.getAnimations().forEach((animation) => animation.cancel());

  if (prefersReducedMotion.matches || typeof content.animate !== "function") {
    item.open = shouldOpen;
    resetServiceContent(content);
    return;
  }

  if (shouldOpen) {
    item.open = true;
    const targetHeight = content.scrollHeight;
    const animation = content.animate(
      [
        { height: "0px", opacity: 0, transform: "translateY(-0.5rem)" },
        { height: `${targetHeight}px`, opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 360,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );

    animation.addEventListener(
      "finish",
      () => {
        animation.cancel();
        resetServiceContent(content);
      },
      { once: true },
    );
    return;
  }

  const currentHeight = content.getBoundingClientRect().height;
  const animation = content.animate(
    [
      { height: `${currentHeight}px`, opacity: 1, transform: "translateY(0)" },
      { height: "0px", opacity: 0, transform: "translateY(-0.5rem)" },
    ],
    {
      duration: 240,
      easing: "cubic-bezier(0.7, 0, 0.84, 0)",
      fill: "both",
    },
  );

  animation.addEventListener(
    "finish",
    () => {
      item.open = false;
      animation.cancel();
      resetServiceContent(content);
    },
    { once: true },
  );
};

serviceItems.forEach((item) => {
  const summary = item.querySelector("summary");

  summary?.addEventListener("click", (event) => {
    event.preventDefault();
    const shouldOpen = !item.open;

    if (shouldOpen) {
      serviceItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.open) {
          animateService(otherItem, false);
        }
      });
    }

    animateService(item, shouldOpen);
  });
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && heroVideo) {
  heroVideo.pause();
}
