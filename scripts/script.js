// Tab switching logic
console.log("External Script Connected!!!")


// Initialize Flatpickr for Pick-Up Date/Time
// flatpickr("#pickup-date", "#oneway-pickup-date",{
flatpickr(".date-picker", {
    enableTime: true,
    noCalendar: false,
    time_24hr: false,
    dateFormat: "Y-m-d H:i K",
    minuteIncrement: 30,
    minDate: "today",
    position: "auto center",
});




// const menuToggle = document.getElementById("menu-toggle");
// const menu = document.getElementById("menu");
// const btmNav = document.getElementById("bottom-nav");

// menuToggle.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//     btmNav.classList.toggle("hidden");

// });

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const btmNav = document.getElementById("bottom-nav");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
    // Toggle the visibility of the menu
    menu.classList.toggle("hidden");
    btmNav.classList.toggle("hidden");

    // Toggle the icons
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});






// Get the button and the container
const addStopButton = document.getElementById("add-stop-btn");
const stopContainer = document.getElementById("stop-container");

// Set the maximum number of inputs allowed
let maxInputs = 1;

addStopButton.addEventListener("click", (event) => {
    // Prevent default button behavior
    event.preventDefault();

    stopContainer.classList.remove('hidden')
    // Check the current number of inputs in the container
    const existingInputs = stopContainer.querySelectorAll("input").length;

    // Add an input field only if the current number is less than the allowed maximum
    if (existingInputs < maxInputs) {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "Enter stop";
        newInput.className = "w-full border border-black rounded px-4 py-2";

        // Append the new input field to the container
        stopContainer.appendChild(newInput);
    }
});



// Tab switching logic
const tabs = document.querySelectorAll('#round-trip-tab, #one-way-tab, #hourly-tab, #airport-tab');
const containers = {
    'round-trip-tab': document.getElementById('form-container-round-trip'),
    'one-way-tab': document.getElementById('form-container-one-way'),
    'hourly-tab': document.getElementById('form-container-hourly'),
    'airport-tab': document.getElementById('form-container-airport'),
};

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        // Update tab styles
        tabs.forEach(t => t.classList.remove('text-[#0B3C49]', 'font-semibold', 'border-b-4', 'border-[#0B3C49]'));
        event.target.classList.add('text-[#0B3C49]', 'font-semibold', 'border-b-4', 'border-[#0B3C49]');

        // Show the corresponding container and hide others
        Object.keys(containers).forEach(key => {
            if (key === event.target.id) {
                containers[key].classList.remove('hidden'); // Show the corresponding container
            } else {
                containers[key].classList.add('hidden'); // Hide other containers
            }
        });
    });
});


// Function to toggle the dropdown
function toggleDropdown(id) {
    const dropdown = document.getElementById(`${id}-options`);
    dropdown.classList.toggle('hidden');
}

// Function to filter options
function filterOptions(id) {
    const input = document.getElementById(id).value.toLowerCase();
    const options = document.querySelectorAll(`#${id}-options li`);
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(input) ? 'block' : 'none';
    });
}

// Function to select an option
function selectOption(id, value) {
    const input = document.getElementById(id);
    input.value = value;
    toggleDropdown(id); // Close dropdown
}


// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    const pickupDropdown = document.getElementById('pickup-options');
    const dropoffDropdown = document.getElementById('dropoff-options');
    if (!event.target.closest('#pickup') && !event.target.closest('#pickup-options')) {
        pickupDropdown.classList.add('hidden');
    }
    if (!event.target.closest('#dropoff') && !event.target.closest('#dropoff-options')) {
        dropoffDropdown.classList.add('hidden');
    }
});

function swapValues(input1Id, input2Id) {
    // Get the input fields by their IDs
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);

    // Swap the values
    const tempValue = input1.value;
    input1.value = input2.value;
    input2.value = tempValue;
}





// to make the continue where you left card horizontally scrollable 
function scrollHorizontally(event) {
    const container = event.currentTarget;
    event.preventDefault();
    container.scrollLeft += event.deltaX;
}

function enableDragToScroll(container) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        container.classList.add('scrolling'); // Optional: Add a class for styling while scrolling
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.classList.remove('scrolling');
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('scrolling');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the multiplier for scroll speed
        container.scrollLeft = scrollLeft - walk;
    });
}

// Initialize drag-to-scroll on your container
document.querySelectorAll('.overflow-x-auto').forEach((container) => {
    enableDragToScroll(container);
});


const scrollableBanner = document.getElementById("scrollable-banner");

let scrollInterval = setInterval(() => {
    const scrollAmount = scrollableBanner.offsetWidth;
    if (scrollableBanner.scrollLeft + scrollAmount >= scrollableBanner.scrollWidth) {
        scrollableBanner.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        scrollableBanner.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}, 3000);


// Pause auto-scroll on hover
scrollableBanner.addEventListener("mouseover", () => clearInterval(scrollInterval));

// Resume auto-scroll when not hovering
scrollableBanner.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(() => {
        const scrollAmount = scrollableBanner.offsetWidth;
        if (scrollableBanner.scrollLeft + scrollAmount >= scrollableBanner.scrollWidth) {
            scrollableBanner.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            scrollableBanner.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }, 5000);
});



// Function to animate numbers
function animateNumbers() {
    const counters = document.querySelectorAll("[data-target]");
    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 100; // Adjust the speed by dividing the target
        let count = 0;

        function updateCounter() {
            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target; // Ensure it ends at the exact target
            }
        }

        updateCounter();
    });
}

// Trigger animation when the reach section becomes visible
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-target]");

    const animateNumbers = () => {
        counters.forEach((counter) => {
            const updateCounter = () => {
                const target = +counter.getAttribute("data-target");
                const current = +counter.innerText;

                const increment = Math.ceil(target / 100); // Adjust the speed

                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCounter, 70); // Adjust the speed delay
                } else {
                    counter.innerText = target; // Ensure it ends at the target
                }
            };

            updateCounter();
        });
    };

    // Observe when the section is in the viewport
    const section = document.querySelector("#our-reach");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.disconnect(); // Run only once
                }
            });
        },
        { threshold: 0.8 } // Trigger when 50% of the section is visible
    );

    observer.observe(section);
});


const testimonials = [
    {
        text: "Absolutely love this app! Booking bus tickets across Nepal has never been easier. Smooth transactions and timely updates make my travel planning a breeze. Highly recommended!",
        author: "-- Harris Magar, CEO of XYZ",
    },
    {
        text: "This service has been a lifesaver for our family trips. The convenience and ease of booking are unparalleled. The support team is fantastic too!",
        author: "-- Sarita Sharma, Travel Enthusiast",
    },
    {
        text: "I highly recommend this platform to anyone looking to travel within Nepal. It has never been this easy to plan a trip before!",
        author: "-- Prakash Thapa, Business Professional",
    },
];


// Testimonials Section

let currentTestimonialIndex = 0;

const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = testimonials[index].author;
}

prevBtn.addEventListener("click", () => {
    currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
});

nextBtn.addEventListener("click", () => {
    currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(currentTestimonialIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentTestimonialIndex);


// For Reels

const reelsContainer = document.getElementById('reels-container');
const prevButton = document.getElementById('prev-reel-btn');
const nextButton = document.getElementById('next-reel-btn');

// Constants
const reelWidth = 280 + 16; // Reel width + margin (adjust as needed)
const visibleReels = 5; // Number of visible reels
let currentIndex = 0;

// Get total number of reels
const totalReels = reelsContainer.children.length;

// Update reel container's transform position
function updateReelPosition() {
    const maxTranslateX = (totalReels - visibleReels) * reelWidth;
    const translateX = Math.min(currentIndex * reelWidth, maxTranslateX); // Prevent scrolling beyond bounds
    reelsContainer.style.transform = `translateX(-${translateX}px)`;
}

// Next button functionality
nextButton.addEventListener('click', () => {
    if (currentIndex < totalReels - visibleReels) {
        currentIndex++;
        updateReelPosition();
    }
});

// Previous button functionality
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateReelPosition();
    }
});


