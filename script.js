const images = ["img/collection1.jpg", "img/collection2.jpg", "img/collection3.jpg"];
let currentIndex = 0;

const imageElement = document.getElementById("collection");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
});
