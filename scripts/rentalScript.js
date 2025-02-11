console.log("Is the rental script connected?");


function scrollHorizontally(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
}


function scrollVertically(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
}


// function toggleInfo() {
//     const infoDiv = document.getElementById("additional-info");
//     if (infoDiv.classList.contains("hidden")) {
//         infoDiv.classList.remove("hidden");
//     } else {
//         infoDiv.classList.add("hidden");
//     }
// }

function toggleInfo(id) {
    const infoDiv = document.getElementById(id);
    if (infoDiv.classList.contains("hidden")) {
        infoDiv.classList.remove("hidden");
    } else {
        infoDiv.classList.add("hidden");
    }
}


// function updateMainImage(thumbnail) {
//     // Get the src of the clicked thumbnail
//     const newImageSrc = thumbnail.src;

//     // Update the main image src
//     document.getElementById("main-image").src = newImageSrc;
// }

function updateMainImage(thumbnail, cardId) {
    // Get the parent card's main image ID dynamically
    const mainImageId = `main-image-${cardId}`;

    // Update the main image within this card
    document.getElementById(mainImageId).src = thumbnail.src;
}




// Get elements
const openPopupBtn = document.getElementById('open-popup-btn');
const closePopupBtn = document.getElementById('close-popup-btn');
const mapPopup = document.getElementById('map-popup');

// Open popup
openPopupBtn.addEventListener('click', () => {
    mapPopup.classList.remove('hidden');
});

// Close popup
closePopupBtn.addEventListener('click', () => {
    mapPopup.classList.add('hidden');
});

// Close popup when clicking outside the popup
mapPopup.addEventListener('click', (e) => {
    if (e.target === mapPopup) {
        // mapPopup.classList.add('hidden');
    }
});


const nav = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const btmNav = document.getElementById("bottom-nav");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
    // Toggle the visibility of the menu
    menu.classList.toggle("hidden");
    btmNav.classList.toggle("hidden");
    nav.classList.add("fixed");

    // Toggle the icons
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

closeIcon.addEventListener("click", () => {
    nav.classList.remove("fixed");

    menu.classList.toggle("hidden");
    btmNav.classList.toggle("hidden");

    // Toggle the icons
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
})





function initializeRangeSlider(sliderId, tooltipId, prefix = "") {
    const rangeSlider = document.getElementById(sliderId);
    const tooltip = document.getElementById(tooltipId);

    rangeSlider.addEventListener("mousemove", () => {
        const sliderValue = rangeSlider.value;
        const sliderRect = rangeSlider.getBoundingClientRect();
        const sliderWidth = sliderRect.width;
        const sliderOffset =
            ((sliderValue - rangeSlider.min) / (rangeSlider.max - rangeSlider.min)) * sliderWidth;

        // Update tooltip value and position
        tooltip.textContent = prefix ? `${prefix} ${sliderValue}` : sliderValue;
        tooltip.style.left = `${sliderOffset}px`;
        tooltip.classList.remove("hidden");
    });

    rangeSlider.addEventListener("mouseout", () => {
        tooltip.classList.add("hidden");
    });
}

// Initialize both sliders
initializeRangeSlider("pax-range", "tooltip");
initializeRangeSlider("price-range", "price-tooltip", "Rs.");





function initializeTabs(cardId) {
    const tabsContainer = document.querySelector(`#${cardId}-tabs`);
    const tabs = tabsContainer.querySelectorAll('li');
    const tabContents = document.querySelectorAll(`#${cardId} .tab-rent-content`);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active-tab class from all tabs
            tabs.forEach(tab => tab.classList.remove('font-bold', 'active-tab'));

            // Add active-tab class to the clicked tab
            tab.classList.add('font-bold', 'active-tab');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));

            // Show the content of the selected tab
            const selectedTab = tab.getAttribute('data-tab');
            document.getElementById(`${selectedTab}-content-${cardId}`).classList.remove('hidden');
        });
    });
}

// Initialize tabs for each card dynamically
initializeTabs('card1');
initializeTabs('card2');






const navbar = document.getElementById("navbar");
const stickySection = document.getElementById("sticky-section");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Navbar behavior
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = "translateY(-100%)"; // Hide navbar
    } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)"; // Show navbar
    }

    lastScrollTop = currentScroll;

    // Sticky section behavior
    if (currentScroll > navbar.offsetHeight) {
        stickySection.classList.add("sticky");
        document.body.classList.add("sticky-active"); // Add padding to body
    } else {
        stickySection.classList.remove("sticky");
        document.body.classList.remove("sticky-active"); // Remove padding from body
    }
});


const filterBtn = document.getElementById("filter-btn");
const mobileFilterSection = document.getElementById("mobile-filter-section");

// Toggle the filter section
filterBtn.addEventListener("click", () => {
    mobileFilterSection.classList.toggle("active");
});

// Optional: Close the filter section when clicking outside
document.addEventListener("click", (event) => {
    if (
        !mobileFilterSection.contains(event.target) &&
        event.target !== filterBtn &&
        !filterBtn.contains(event.target)
    ) {
        mobileFilterSection.classList.remove("active");
    }
});



// Select elements
const mapSwitchBtn = document.getElementById("map-switch-btn");
const mapPickup = document.getElementById("map-pickup");
const mapDropoff = document.getElementById("map-dropoff");
const mapAddStopBtn = document.getElementById("map-add-stop-btn");
const mapStopContainer1 = document.getElementById("map-stop-container-1");
const mapStopContainer2 = document.getElementById("map-stop-container-2");
const mapCrossContainer1 = document.getElementById("map-cross-container-0");
const mapCrossContainer2 = document.getElementById("map-cross-container-1");

// Switch Button Functionality
mapSwitchBtn.addEventListener("click", () => {
    const pickupValue = mapPickup.value;
    mapPickup.value = mapDropoff.value;
    mapDropoff.value = pickupValue;
});

// Add Stop Button Functionality
mapAddStopBtn.addEventListener("click", () => {
    if (mapStopContainer1.classList.contains("hidden")) {
        mapStopContainer1.classList.remove("hidden");
    } else if (mapStopContainer2.classList.contains("hidden")) {
        mapStopContainer2.classList.remove("hidden");
        mapAddStopBtn.classList.add("hidden");
    } else {
        console.log("You can only add up to 2 stops.");
    }
});

// Remove Stop Buttons Functionality
mapCrossContainer1.addEventListener("click", () => {
    mapStopContainer1.classList.add("hidden");
    document.getElementById("map-stop-1").value = "";
    mapAddStopBtn.classList.remove("hidden");
});

mapCrossContainer2.addEventListener("click", () => {
    mapStopContainer2.classList.add("hidden");
    document.getElementById("map-stop-2").value = "";
    mapAddStopBtn.classList.remove("hidden");
});



const changeDetailsLink = document.getElementById("change-details");
const popupOverlay = document.getElementById("popup-overlay");
const closeChangeDetailsPopupBtn = document.getElementById("close-popup");

// Show the modal and disable background scroll
changeDetailsLink.addEventListener("click", function (e) {
    e.preventDefault();
    popupOverlay.classList.remove("hidden");
    document.body.classList.add("disable-scroll");
});

// Hide the modal and re-enable background scroll
closeChangeDetailsPopupBtn.addEventListener("click", function () {
    popupOverlay.classList.add("hidden");
    document.body.classList.remove("disable-scroll");
});







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