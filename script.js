document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img, .projects img");
    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            img.style.filter = "grayscale(0%)";
        });
        img.addEventListener("mouseout", function () {
            img.style.filter = "grayscale(100%)";
        });
    });
});

