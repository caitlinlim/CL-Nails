function showAlert() {
    alert("Welcome! We offer the best services for your needs.");
}

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("contactForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const service = document.getElementById("service").selectedOptions[0].text;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const notes = document.getElementById("notes").value;

            const queryString = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&service=${encodeURIComponent(service)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&notes=${encodeURIComponent(notes)}`;

            window.location.href = "confirmation.html" + queryString;
        });
    }

    if (window.location.pathname.includes("confirmation.html")) {
        const params = new URLSearchParams(window.location.search);

        const name = params.get("name") || "N/A";
        const date = params.get("date") || "N/A";
        const time = params.get("time") || "N/A";
        const service = params.get("service") || "N/A";

        document.getElementById("confirm-name").textContent = name;
        document.getElementById("confirm-date").textContent = `${date} at ${time}`;
        document.getElementById("confirm-service").textContent = service;
    }
});

const images = [
    "images/nails1.jpg",
    "images/nails3.jpg",
    "images/nails4.jpg",
    "images/nails5.jpg",
    "images/nails7.jpg",
    "images/nails9.jpg",
    "images/nails11.jpg",
    "images/nails12.jpg",
    "images/nails15.jpg",
    "images/nails16.jpg"
];

let currentIndex = 0;
const galleryImage = document.getElementById('gallery-image');

document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', previousImage);

function updateImage() {
    galleryImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
