// Select Elements

const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Open Lightbox

images.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.style.display = "flex";

    });

});

// Show Image

function showImage() {

    lightboxImg.src = images[currentIndex].src;

}

// Close Lightbox

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Next Image

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

});

// Previous Image

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

});

// Close on Background Click

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// Keyboard Support

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        else if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

        else if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});

// Filter Images

const filterButtons = document.querySelectorAll(".buttons button");
const galleryItems = document.querySelectorAll(".gallery .image");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "block";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});