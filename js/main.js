// Toggle menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const iconPath = document.getElementById("icon-path");

let menuOpen = false;

menuToggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle("hidden");

    // Ubah ikon
    iconPath.setAttribute(
        "d",
        menuOpen
            ? "M6 18L18 6M6 6l12 12" // X icon
            : "M4 6h16M4 12h16M4 18h16" // Hamburger
    );
});

// Modal Viewer
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modalImg.src = src;
    modal.classList.remove("hidden");
}

function closeModal(e) {
    if (e.target.id === "imageModal" || e.target.tagName === "BUTTON") {
        document.getElementById("imageModal").classList.add("hidden");
    }
}

// Smooth Scroll
const links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Active Link
links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((otherLink) => {
            otherLink.classList.remove("text-indigo-600");
            otherLink.classList.remove("underline");
        });
        link.classList.add("text-indigo-600");
        link.classList.add("underline");
    });
});

// Testimonial Slider
const slider = document.getElementById("testimonial-slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const totalSlides = slider.children.length;
let currentSlide = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

// FAQ
function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("svg");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}

// Scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('#about, #services, #price-list, #testimonials, #gallery, #faq, #contact', {
    origin: 'bottom',
});

ScrollReveal().reveal('#home', {
    origin: 'top',
});
