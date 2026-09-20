function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    const isOpen = icon.classList.contains("open");
    icon.setAttribute("aria-expanded", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
    menu.inert = !isOpen;
}

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menu.inert = true;
    icon.focus();
});
