document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang web đã tải xong!");
});
let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

function moveSlide(step) {
    index += step;
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    updateSlide();
}

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => moveSlide(1), 3000);

function performSearch() {
    let query = document.getElementById("searchInput").value;
    if (query) {
        alert("Bạn đã tìm kiếm: " + query);
        
        // window.location.href = `search.html?q=${query}`;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const submenu = document.querySelector(".submenu");

    dropdown.addEventListener("mouseenter", function () {
        submenu.style.opacity = "1";
        submenu.style.visibility = "visible";
    });

    dropdown.addEventListener("mouseleave", function () {
        submenu.style.opacity = "0";
        submenu.style.visibility = "hidden";
    });
});

