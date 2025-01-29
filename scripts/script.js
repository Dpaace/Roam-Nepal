// Tab switching logic
console.log("External Script Connected!!!")


// Initialize Flatpickr for Pick-Up Date/Time
// flatpickr("#pickup-date", "#oneway-pickup-date",{
// flatpickr(".date-picker", {
//     enableTime: true,
//     noCalendar: false,
//     time_24hr: false,
//     dateFormat: "Y-m-d H:i K",
//     minuteIncrement: 30,
//     minDate: "today",
//     position: "auto center",
// });

flatpickr(".date-picker", {
    enableTime: true,
    noCalendar: false,
    time_24hr: false,
    dateFormat: "Y-m-d H:i K",
    minuteIncrement: 30,
    minDate: "today",
    position: "auto center",
    disableMobile: true, // Ensures Flatpickr UI is used instead of native pickers
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




// Function to toggle classes dynamically
// function togglePickupClass(pickupElement) {
//     if (pickupElement.classList.contains("col-span-10")) {
//         pickupElement.classList.remove("col-span-10");
//         pickupElement.classList.add("col-span-12");
//     } else {
//         pickupElement.classList.remove("col-span-12");
//         pickupElement.classList.add("col-span-10");
//     }
// }

// addStopButton.addEventListener("click", () => {
//     // Toggle the visibility of the menu
//     stopContainer.classList.toggle("hidden");
//     // Toggle the classes for roundDropoff
//     togglePickupClass(roundPickup);
//     roundSwitch.classList.remove('top-[25%]', 'left-3/4');
//     roundSwitch.classList.add('top-[1%]', 'left-[85%]');
// });


// Get the button and the container
const addStopButton = document.getElementById("add-stop-btn");
const stopContainer1 = document.getElementById("stop-container-1");
const stopContainer2 = document.getElementById("stop-container-2");
const roundPickup = document.getElementById("round-pickup");
const roundSwitch = document.getElementById("round-switch");
const roundStop1 = document.getElementById("round-stop-1");
const roundStop2 = document.getElementById("round-stop-2");
const cross0 = document.getElementById("cross-container-0");
const cross1 = document.getElementById("cross-container-1");
const cross2 = document.getElementById("cross-container-2");



const onewayAddStopButton = document.getElementById("oneway-add-stop-btn");
const onewayStopContainer1 = document.getElementById("oneway-stop-container-1");
const onewayStopContainer2 = document.getElementById("oneway-stop-container-2");
const onewayPickup = document.getElementById("oneway-main-pickup");
const onewaySwitch = document.getElementById("oneway-switch");
const onewayStop1 = document.getElementById("oneway-stop-1");
const onewayStop2 = document.getElementById("oneway-stop-2");
const onewaycross0 = document.getElementById("oneway-cross-container-0");
const onewaycross1 = document.getElementById("oneway-cross-container-1");
const onewaycross2 = document.getElementById("oneway-cross-container-2");


const hourlyAddStopButton = document.getElementById("hourly-add-stop-btn");
const hourlyStopContainer1 = document.getElementById("hourly-stop-container-1");
const hourlyStopContainer2 = document.getElementById("hourly-stop-container-2");
const hourlyPickup = document.getElementById("hourly-main-pickup");
const hourlySwitch = document.getElementById("hourly-switch");
const hourlyStop1 = document.getElementById("hourly-stop-1");
const hourlyStop2 = document.getElementById("hourly-stop-2");
const hourlycross0 = document.getElementById("hourly-cross-container-0");
const hourlycross1 = document.getElementById("hourly-cross-container-1");
const hourlycross2 = document.getElementById("hourly-cross-container-2");


const airportAddStopButton = document.getElementById("airport-add-stop-btn");
const airportStopContainer1 = document.getElementById("airport-stop-container-1");
const airportStopContainer2 = document.getElementById("airport-stop-container-2");
const airportStop1 = document.getElementById("airport-stop-1");
const airportStop2 = document.getElementById("airport-stop-2");
const airportcross0 = document.getElementById("airport-cross-container-0");
const airportcross1 = document.getElementById("airport-cross-container-1");
const airportcross2 = document.getElementById("airport-cross-container-2");
const airportMainPickup = document.getElementById("airport-main-pickup");



function togglePickupClass(pickupElement, swtichElement) {
    if (pickupElement.classList.contains("col-span-10")) {
        pickupElement.classList.remove("col-span-10");
        pickupElement.classList.add("col-span-12");

        // Update roundSwitch classes when col-span-12 is added
        swtichElement.classList.remove('top-[25%]', 'left-[70%]');
        swtichElement.classList.add('top-[1%]', 'left-[85%]');
    } else {
        pickupElement.classList.remove("col-span-12");
        pickupElement.classList.add("col-span-10");

        // Reset roundSwitch classes when col-span-12 is removed
        swtichElement.classList.remove('top-[1%]', 'left-[85%]');
        swtichElement.classList.add('top-[25%]', 'left-[70%]');
    }
}

addStopButton.addEventListener("click", () => {
    // Toggle the visibility of the menu
    stopContainer1.classList.toggle("hidden");
    // Toggle the classes for roundDropoff
    togglePickupClass(roundPickup, roundSwitch);
    roundStop1.style.display = 'none';
    roundStop2.style.display = 'block';
    roundStop2.classList.toggle("hidden");
    cross0.classList.remove("hidden");
});

roundStop2.addEventListener("click", () => {
    stopContainer1.classList.remove("col-span-10");
    stopContainer1.classList.add("col-span-12");
    stopContainer2.classList.toggle("hidden");
    roundStop2.style.display = 'none';
    cross0.classList.add("hidden");
    cross1.classList.toggle("hidden");
    cross2.classList.toggle("hidden");
});

cross0.addEventListener("click", () => {
    togglePickupClass(roundPickup, roundSwitch);
    stopContainer1.classList.toggle("hidden");
    cross0.classList.add("hidden");
    roundStop1.style.display = 'block';
    roundStop2.classList.toggle("hidden");
    roundStop2.style.display = 'none';
});

cross1.addEventListener("click", () => {
    stopContainer1.classList.remove("col-span-12");
    stopContainer1.classList.add("col-span-10");
    stopContainer2.classList.toggle("hidden");
    roundStop2.style.display = 'block';
    cross0.classList.remove("hidden");
    cross1.classList.toggle("hidden");
    cross2.classList.toggle("hidden");
});

cross2.addEventListener("click", () => {
    stopContainer1.classList.remove("col-span-12");
    stopContainer1.classList.add("col-span-10");
    stopContainer2.classList.toggle("hidden");
    roundStop2.style.display = 'block';
    cross0.classList.remove("hidden");
    cross1.classList.toggle("hidden");
    cross2.classList.toggle("hidden");
});



// onewayAddStopButton.addEventListener("click", () => {
//     // Toggle the visibility of the menu
//     onewayStopContainer1.classList.toggle("hidden");
//     // Reuse the togglePickupClass function for onewayPickup and onewaySwitch
//     togglePickupClass(onewayPickup, onewaySwitch);
//     onewayStop1.style.display = 'none';
//     onewayStop2.classList.toggle("hidden");
// });

// onewayStop2.addEventListener("click", () => {
//     onewayStopContainer1.classList.remove("col-span-10");
//     onewayStopContainer1.classList.add("col-span-12");
//     onewayStopContainer2.classList.toggle("hidden");
//     onewayStop2.style.display = 'none';
//     onewaycross1.classList.toggle("hidden");
//     onewaycross2.classList.toggle("hidden");
// });

// onewaycross1.addEventListener("click", () => {
//     onewayStopContainer1.classList.remove("col-span-12");
//     onewayStopContainer1.classList.add("col-span-10");
//     onewayStopContainer2.classList.toggle("hidden");
//     onewayStop2.style.display = 'block';
//     onewaycross1.classList.toggle("hidden");
//     onewaycross2.classList.toggle("hidden");
// });

// onewaycross2.addEventListener("click", () => {
//     onewayStopContainer1.classList.remove("col-span-12");
//     onewayStopContainer1.classList.add("col-span-10");
//     onewayStopContainer2.classList.toggle("hidden");
//     onewayStop2.style.display = 'block';
//     onewaycross1.classList.toggle("hidden");
//     onewaycross2.classList.toggle("hidden");
// });

onewayAddStopButton.addEventListener("click", () => {
    // Toggle the visibility of the first stop container
    onewayStopContainer1.classList.toggle("hidden");
    // Toggle the classes for the pickup element
    togglePickupClass(onewayPickup, onewaySwitch);
    onewayStop1.style.display = 'none';
    onewayStop2.style.display = 'block';
    onewayStop2.classList.toggle("hidden");
    onewaycross0.classList.remove("hidden");
});

onewayStop2.addEventListener("click", () => {
    onewayStopContainer1.classList.remove("col-span-10");
    onewayStopContainer1.classList.add("col-span-12");
    onewayStopContainer2.classList.toggle("hidden");
    onewayStop2.style.display = 'none';
    onewaycross0.classList.add("hidden");
    onewaycross1.classList.toggle("hidden");
    onewaycross2.classList.toggle("hidden");
});

onewaycross0.addEventListener("click", () => {
    togglePickupClass(onewayPickup, onewaySwitch);
    onewayStopContainer1.classList.toggle("hidden");
    onewaycross0.classList.add("hidden");
    onewayStop1.style.display = 'block';
    onewayStop2.classList.toggle("hidden");
    onewayStop2.style.display = 'none';
});

onewaycross1.addEventListener("click", () => {
    onewayStopContainer1.classList.remove("col-span-12");
    onewayStopContainer1.classList.add("col-span-10");
    onewayStopContainer2.classList.toggle("hidden");
    onewayStop2.style.display = 'block';
    onewaycross0.classList.remove("hidden");
    onewaycross1.classList.toggle("hidden");
    onewaycross2.classList.toggle("hidden");
});

onewaycross2.addEventListener("click", () => {
    onewayStopContainer1.classList.remove("col-span-12");
    onewayStopContainer1.classList.add("col-span-10");
    onewayStopContainer2.classList.toggle("hidden");
    onewayStop2.style.display = 'block';
    onewaycross0.classList.remove("hidden");
    onewaycross1.classList.toggle("hidden");
    onewaycross2.classList.toggle("hidden");
});





// hourlyAddStopButton.addEventListener("click", () => {
//     // Toggle the visibility of the first stop container
//     hourlyStopContainer1.classList.toggle("hidden");

//     // Reuse the togglePickupClass function for hourlyPickup and hourlySwitch
//     togglePickupClass(hourlyPickup, hourlySwitch);

//     // Update visibility for the stops
//     hourlyStop1.style.display = 'none';
//     hourlyStop2.classList.toggle("hidden");
// });

// hourlyStop2.addEventListener("click", () => {
//     hourlyStopContainer1.classList.remove("col-span-10");
//     hourlyStopContainer1.classList.add("col-span-12");
//     hourlyStopContainer2.classList.toggle("hidden");

//     // Hide stop2 and show cross controls
//     hourlyStop2.style.display = 'none';
//     hourlycross1.classList.toggle("hidden");
//     hourlycross2.classList.toggle("hidden");
// });

// hourlycross1.addEventListener("click", () => {
//     hourlyStopContainer1.classList.remove("col-span-12");
//     hourlyStopContainer1.classList.add("col-span-10");
//     hourlyStopContainer2.classList.toggle("hidden");

//     // Restore stop2 and hide cross controls
//     hourlyStop2.style.display = 'block';
//     hourlycross1.classList.toggle("hidden");
//     hourlycross2.classList.toggle("hidden");
// });

// hourlycross2.addEventListener("click", () => {
//     hourlyStopContainer1.classList.remove("col-span-12");
//     hourlyStopContainer1.classList.add("col-span-10");
//     hourlyStopContainer2.classList.toggle("hidden");

//     // Restore stop2 and hide cross controls
//     hourlyStop2.style.display = 'block';
//     hourlycross1.classList.toggle("hidden");
//     hourlycross2.classList.toggle("hidden");
// });


hourlyAddStopButton.addEventListener("click", () => {
    // Toggle the visibility of the first stop container
    hourlyStopContainer1.classList.toggle("hidden");
    // Toggle the classes for the pickup element
    togglePickupClass(hourlyPickup, hourlySwitch);
    hourlyStop1.style.display = 'none';
    hourlyStop2.style.display = 'block';
    hourlyStop2.classList.toggle("hidden");
    hourlycross0.classList.remove("hidden");
});

hourlyStop2.addEventListener("click", () => {
    hourlyStopContainer1.classList.remove("col-span-10");
    hourlyStopContainer1.classList.add("col-span-12");
    hourlyStopContainer2.classList.toggle("hidden");
    hourlyStop2.style.display = 'none';
    hourlycross0.classList.add("hidden");
    hourlycross1.classList.toggle("hidden");
    hourlycross2.classList.toggle("hidden");
});

hourlycross0.addEventListener("click", () => {
    togglePickupClass(hourlyPickup, hourlySwitch);
    hourlyStopContainer1.classList.toggle("hidden");
    hourlycross0.classList.add("hidden");
    hourlyStop1.style.display = 'block';
    hourlyStop2.classList.toggle("hidden");
    hourlyStop2.style.display = 'none';
});

hourlycross1.addEventListener("click", () => {
    hourlyStopContainer1.classList.remove("col-span-12");
    hourlyStopContainer1.classList.add("col-span-10");
    hourlyStopContainer2.classList.toggle("hidden");
    hourlyStop2.style.display = 'block';
    hourlycross0.classList.remove("hidden");
    hourlycross1.classList.toggle("hidden");
    hourlycross2.classList.toggle("hidden");
});

hourlycross2.addEventListener("click", () => {
    hourlyStopContainer1.classList.remove("col-span-12");
    hourlyStopContainer1.classList.add("col-span-10");
    hourlyStopContainer2.classList.toggle("hidden");
    hourlyStop2.style.display = 'block';
    hourlycross0.classList.remove("hidden");
    hourlycross1.classList.toggle("hidden");
    hourlycross2.classList.toggle("hidden");
});



// airportAddStopButton.addEventListener("click", () => {
//     // Toggle the visibility of the first stop container
//     airportMainPickup.classList.remove("col-span-10");
//     airportMainPickup.classList.add("col-span-12");
//     airportStopContainer1.classList.toggle("hidden");

//     // Update visibility for the stops
//     airportStop1.style.display = 'none';
//     airportStop2.classList.toggle("hidden");
// });

// airportStop2.addEventListener("click", () => {
//     airportStopContainer1.classList.remove("col-span-10");
//     airportStopContainer1.classList.add("col-span-12");
//     airportStopContainer2.classList.toggle("hidden");

//     // Hide stop2 and show cross controls
//     airportStop2.style.display = 'none';
//     airportcross1.classList.toggle("hidden");
//     airportcross2.classList.toggle("hidden");
// });

// airportcross1.addEventListener("click", () => {
//     airportStopContainer1.classList.remove("col-span-12");
//     airportStopContainer1.classList.add("col-span-10");
//     airportStopContainer2.classList.toggle("hidden");

//     // Restore stop2 and hide cross controls
//     airportStop2.style.display = 'block';
//     airportcross1.classList.toggle("hidden");
//     airportcross2.classList.toggle("hidden");
// });

// airportcross2.addEventListener("click", () => {
//     airportStopContainer1.classList.remove("col-span-12");
//     airportStopContainer1.classList.add("col-span-10");
//     airportStopContainer2.classList.toggle("hidden");

//     // Restore stop2 and hide cross controls
//     airportStop2.style.display = 'block';
//     airportcross1.classList.toggle("hidden");
//     airportcross2.classList.toggle("hidden");
// });


airportAddStopButton.addEventListener("click", () => {
    // Toggle the visibility of the first stop container
    airportStopContainer1.classList.toggle("hidden");
    // Handle pickup element classes if needed
    togglePickupClass(airportMainPickup, airportStop2); // Assumes togglePickupClass works generically
    airportStop1.style.display = 'none';
    airportStop2.style.display = 'block';
    airportStop2.classList.toggle("hidden");
    airportcross0.classList.remove("hidden");
});

airportStop2.addEventListener("click", () => {
    airportStopContainer1.classList.remove("col-span-10");
    airportStopContainer1.classList.add("col-span-12");
    airportStopContainer2.classList.toggle("hidden");
    airportStop2.style.display = 'none';
    airportcross0.classList.add("hidden");
    airportcross1.classList.toggle("hidden");
    airportcross2.classList.toggle("hidden");
});

airportcross0.addEventListener("click", () => {
    togglePickupClass(airportMainPickup, airportStop2); // Assumes togglePickupClass works generically
    airportStopContainer1.classList.toggle("hidden");
    airportcross0.classList.add("hidden");
    airportStop1.style.display = 'block';
    airportStop2.classList.toggle("hidden");
    airportStop2.style.display = 'none';
});

airportcross1.addEventListener("click", () => {
    airportStopContainer1.classList.remove("col-span-12");
    airportStopContainer1.classList.add("col-span-10");
    airportStopContainer2.classList.toggle("hidden");
    airportStop2.style.display = 'block';
    airportcross0.classList.remove("hidden");
    airportcross1.classList.toggle("hidden");
    airportcross2.classList.toggle("hidden");
});

airportcross2.addEventListener("click", () => {
    airportStopContainer1.classList.remove("col-span-12");
    airportStopContainer1.classList.add("col-span-10");
    airportStopContainer2.classList.toggle("hidden");
    airportStop2.style.display = 'block';
    airportcross0.classList.remove("hidden");
    airportcross1.classList.toggle("hidden");
    airportcross2.classList.toggle("hidden");
});





// Set the maximum number of inputs allowed
let maxInputs = 2;

// addStopButton.addEventListener("click", (event) => {
//     // Prevent default button behavior
//     event.preventDefault();

//     stopContainer.classList.remove('hidden')
//     // Check the current number of inputs in the container
//     const existingInputs = stopContainer.querySelectorAll("input").length;

//     // Add an input field only if the current number is less than the allowed maximum
//     if (existingInputs < maxInputs) {
//         const newInput = document.createElement("input");
//         newInput.type = "text";
//         newInput.placeholder = "Enter stop 2";
//         newInput.className = "col-span-12 border border-black rounded px-4 py-2";

//         // Append the new input field to the container
//         stopContainer.appendChild(newInput);
//     }
// });



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


function switchToRoundTrip() {
    const tabs = document.querySelectorAll('#round-trip-tab, #one-way-tab, #hourly-tab, #airport-tab');
    const containers = {
        'round-trip-tab': document.getElementById('form-container-round-trip'),
        'one-way-tab': document.getElementById('form-container-one-way'),
        'hourly-tab': document.getElementById('form-container-hourly'),
        'airport-tab': document.getElementById('form-container-airport'),
    };

    // Update tab styles
    tabs.forEach(tab => tab.classList.remove('text-[#0B3C49]', 'font-semibold', 'border-b-4', 'border-[#0B3C49]'));
    const roundTripTab = document.getElementById('round-trip-tab');
    roundTripTab.classList.add('text-[#0B3C49]', 'font-semibold', 'border-b-4', 'border-[#0B3C49]');

    // Update containers
    Object.keys(containers).forEach(key => {
        if (key === 'round-trip-tab') {
            containers[key].classList.remove('hidden'); // Show "round-trip-tab" container
        } else {
            containers[key].classList.add('hidden'); // Hide other containers
        }
    });
}




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


// const testimonials = [
//     {
//         text: "Absolutely love this app! Booking bus tickets across Nepal has never been easier. Smooth transactions and timely updates make my travel planning a breeze. Highly recommended!",
//         author: "-- Harris Magar, CEO of XYZ",
//     },
//     {
//         text: "This service has been a lifesaver for our family trips. The convenience and ease of booking are unparalleled. The support team is fantastic too!",
//         author: "-- Sarita Sharma, Travel Enthusiast",
//     },
//     {
//         text: "I highly recommend this platform to anyone looking to travel within Nepal. It has never been this easy to plan a trip before!",
//         author: "-- Prakash Thapa, Business Professional",
//     },
// ];


// Testimonials Section

// let currentTestimonialIndex = 0;

// const testimonialText = document.getElementById("testimonial-text");
// const testimonialAuthor = document.getElementById("testimonial-author");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");

// function updateTestimonial(index) {
//     testimonialText.textContent = testimonials[index].text;
//     testimonialAuthor.textContent = testimonials[index].author;
// }

// prevBtn.addEventListener("click", () => {
//     currentTestimonialIndex =
//         (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
//     updateTestimonial(currentTestimonialIndex);
// });

// nextBtn.addEventListener("click", () => {
//     currentTestimonialIndex =
//         (currentTestimonialIndex + 1) % testimonials.length;
//     updateTestimonial(currentTestimonialIndex);
// });

// // Initialize with the first testimonial
// updateTestimonial(currentTestimonialIndex);



let currentTestimonialIndex = 0;

const testimonials = [
    {
        text: "Absolutely love this app! Booking bus tickets across Nepal has never been easier. Smooth transactions and timely updates make my travel planning a breeze. Highly recommended!",
        author: "-- Harris Magar, CEO of XYZ"
    },
    {
        text: "The customer service is exceptional! Whenever I had questions or issues, the team resolved them quickly. A must-have app for frequent travelers!",
        author: "-- Priya Sharma, Travel Enthusiast"
    },
    {
        text: "This app is user-friendly and reliable. The seat selection process is seamless, and I can book tickets within minutes. Highly impressed!",
        author: "-- Ramesh Thapa, Businessman"
    }
];

const testimonialText = document.getElementById("testimonial-text");
const testimonialAuthor = document.getElementById("testimonial-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = testimonials[index].author;
}

function autoScrollTestimonials() {
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial(currentTestimonialIndex);
    }, 5000); // Auto-scroll every 5 seconds
}

// Event Listeners for Navigation Buttons
if (prevBtn && nextBtn) {
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
}

// Initialize with the first testimonial
updateTestimonial(currentTestimonialIndex);

// Auto-scroll only on mobile view
if (window.innerWidth < 1024) {
    autoScrollTestimonials();
}


// For Reels

// const reelsContainer = document.getElementById('reels-container');
// const prevButton = document.getElementById('prev-reel-btn');
// const nextButton = document.getElementById('next-reel-btn');

// // Constants
// const reelWidth = 280 + 16; // Reel width + margin (adjust as needed)
// const visibleReels = 5; // Number of visible reels
// let currentIndex = 0;

// // Get total number of reels
// const totalReels = reelsContainer.children.length;

// // Update reel container's transform position
// function updateReelPosition() {
//     const maxTranslateX = (totalReels - visibleReels) * reelWidth;
//     const translateX = Math.min(currentIndex * reelWidth, maxTranslateX); // Prevent scrolling beyond bounds
//     reelsContainer.style.transform = `translateX(-${translateX}px)`;
// }

// // Next button functionality
// nextButton.addEventListener('click', () => {
//     if (currentIndex < totalReels - visibleReels) {
//         currentIndex++;
//         updateReelPosition();
//     }
// });

// // Previous button functionality
// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateReelPosition();
//     }
// });



