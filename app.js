//js of property html page
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-section');
const totalSlides = slides.length;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

showSlide(currentSlide); // Initial slide displays

// extra for text area 
document.getElementById('searchButton').addEventListener('click', function () {
    let query = document.getElementById('search').value;
    if (query !== "") {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a property name or location.");
    }
});

//extra property view animation
document.getElementById('toggleButton').addEventListener('click', function () {
    const moreDetails = document.getElementById('moreDetails');
    const button = document.getElementById('toggleButton');

    // Toggle the visibility of the additional details
    moreDetails.classList.toggle('show');

    // Change button text based on the visibility of the section
    if (moreDetails.classList.contains('show')) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Show More';
    }
});

// admin
// Function to handle search action
function searchListing() {
    let searchTerm = document.getElementById('search').value;
    if (searchTerm.trim() !== "") {
        alert("Searching listings for: " + searchTerm);
        // Add search functionality here
    } else {
        alert("Please enter a search term.");
    }
}
