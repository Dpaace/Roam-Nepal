console.log("Is the rental script connected?")
function scrollHorizontally(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY;
}


function scrollVertically(event) {
    event.preventDefault();
    const container = event.currentTarget;
    container.scrollLeft += event.deltaY ;
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


// Tab Switching Logic for booking cards
// const tabs = document.querySelectorAll('#tabs li');
// const tabContents = document.querySelectorAll('.tab-content');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove active-tab class from all tabs
//         tabs.forEach(tab => tab.classList.remove('font-bold', 'active-tab'));

//         // Add active-tab class to the clicked tab
//         tab.classList.add('font-bold', 'active-tab');

//         // Hide all tab contents
//         tabContents.forEach(content => content.classList.add('hidden'));

//         // Show the content of the selected tab
//         const selectedTab = tab.getAttribute('data-tab');
//         document.getElementById(`${selectedTab}-content`).classList.remove('hidden');
//     });
// });

function initializeTabs(cardId) {
    const tabsContainer = document.querySelector(`#${cardId}-tabs`);
    const tabs = tabsContainer.querySelectorAll('li');
    const tabContents = document.querySelectorAll(`#${cardId} .tab-content`);

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
initializeTabs('card2'); // Add more cards as needed


