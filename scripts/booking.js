console.log("Is the booking script connected?");


document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("additional-info-popup");
    const popupBtn = document.getElementById("additional-info-popup-btn");
    const closeBtn = document.getElementById("additional-close-popup-btn");

    // Show popup
    popupBtn.addEventListener("click", () => {
        popup.style.display = "flex"; // Show as flex for centering
    });

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none"; // Hide popup
    });

    // Close popup when clicking outside the popup content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none"; // Hide popup
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Select all tabs and content containers
    const tabs = document.querySelectorAll("#web-popup-tabs li");
    const contents = document.querySelectorAll(".tab-web-content");


    // Add click event listener to each tab
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetTab = tab.getAttribute("data-tab");

            // Remove active classes from all tabs and contents
            tabs.forEach((t) => t.classList.remove("active-tab", "font-bold"));
            contents.forEach((content) => content.classList.add("hidden"));

            // Add active class to the clicked tab and its corresponding content
            tab.classList.add("active-tab", "font-bold");
            document
                .getElementById(`${targetTab}-content-popup`)
                .classList.remove("hidden");
        });
    });
});



// // Select elements
// const wtabs = document.querySelectorAll("#wpopup-tabs li"); // Select all tabs
// const wtabContents = document.querySelectorAll(".tab-content"); // Select all tab content containers

// // Add click event listener to each tab
// wtabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         const targetTab = tab.getAttribute("data-tab"); // Get the data-tab attribute of the clicked tab

//         // Remove active-tab class from all tabs
//         wtabs.forEach((t) => t.classList.remove("active-tab", "font-bold"));
//         // Hide all tab contents
//         wtabContents.forEach((content) => content.classList.add("hidden"));

//         // Add active-tab class to the clicked tab
//         tab.classList.add("active-tab", "font-bold");

//         // Show the corresponding tab content
//         const targetContent = document.getElementById(`${targetTab}-content-popup`);
//         if (targetContent) {
//             targetContent.classList.remove("hidden");
//         }
//     });
// });






function updateBookingMainImage(thumbnail) {
    // Find the parent container of the clicked thumbnail
    const parentContainer = thumbnail.closest('.relative');

    // Find the main image within the same container
    const mainImage = parentContainer.querySelector('img#main-image');

    // Update the main image's `src` attribute with the thumbnail's `src`
    if (mainImage) {
        mainImage.src = thumbnail.src;
    }
}



const viewPriceDetailsBtn = document.getElementById("view-price-details-btn");
const priceDetailsPopup = document.getElementById("price-details-popup");
const closePopupBtn = document.getElementById("close-popup-btn");

// Show popup
viewPriceDetailsBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent anchor default behavior
    priceDetailsPopup.classList.remove("hidden");
});

// Hide popup
closePopupBtn.addEventListener("click", () => {
    priceDetailsPopup.classList.add("hidden");
});




// Select elements
const mpopupBtn = document.getElementById("additional-info-popup-mobile-btn");
const mpopup = document.getElementById("mobile-mpopup");
const mcloseBtn = document.getElementById("close-mpopup");
const ptabs = document.querySelectorAll("#popup-mtabs li");
const mtabContents = document.querySelectorAll(".mtab-content");

// Show the popup
mpopupBtn.addEventListener("click", () => {
    mpopup.classList.remove("translate-x-full");
    mpopup.classList.add("translate-x-0");
});

// Close the popup
mcloseBtn.addEventListener("click", () => {
    mpopup.classList.add("translate-x-full");
    mpopup.classList.remove("translate-x-0");
});

// Tab Switching Functionality
ptabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active-tab class from all tabs
        ptabs.forEach((t) => t.classList.remove("active-tab"));
        // Hide all tab contents
        mtabContents.forEach((content) => content.classList.add("hidden"));

        // Add active-tab class to the clicked tab
        tab.classList.add("active-tab");
        // Show the corresponding tab content
        const targetId = `${tab.getAttribute("data-tab")}-mcontent-popup`;
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.remove("hidden");
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const progressCircle = document.getElementById("progressCircle");
//     const progressText = document.getElementById("progressText");
//     const formInputs = document.querySelectorAll(".form-input"); // Add class "form-input" to all inputs
//     const totalInputs = formInputs.length;

//     function updateProgress() {
//         let filledInputs = 0;

//         // Count filled inputs
//         formInputs.forEach(input => {
//             if (input.value.trim() !== "") {
//                 filledInputs++;
//             }
//         });

//         // Calculate percentage
//         let progress = Math.round((filledInputs / totalInputs) * 100);
//         let dashOffset = 100 - progress;

//         // Update circle progress
//         progressCircle.style.strokeDasharray = `${progress}, 100`;
//         progressText.textContent = `${progress}%`;
//     }

//     // Attach event listeners to all inputs
//     formInputs.forEach(input => {
//         input.addEventListener("input", updateProgress);
//     });

//     updateProgress(); // Initial update on page load
// });

document.addEventListener("DOMContentLoaded", function () {
    const progressCircle = document.getElementById("progressCircle");
    const progressText = document.getElementById("progressText");
    const progressWrapper = document.getElementById("progressWrapper");
    const tickImage = document.getElementById("tickImage");
    const formInputs = document.querySelectorAll(".form-input"); // Make sure your form inputs have this class
    const totalInputs = formInputs.length;

    function updateProgress() {
        let filledInputs = 0;

        // Count filled inputs
        formInputs.forEach(input => {
            if (input.value.trim() !== "") {
                filledInputs++;
            }
        });

        // Calculate percentage
        let progress = Math.round((filledInputs / totalInputs) * 100);
        let dashOffset = 100 - progress;

        // Update circle progress
        progressCircle.style.strokeDasharray = `${progress}, 100`;
        // progressText.textContent = `${progress}%`;

        // Toggle visibility
        if (progress === 100) {
            progressWrapper.classList.add("hidden");
            progressText.classList.add("hidden");
            tickImage.classList.remove("hidden");
        } else {
            progressWrapper.classList.remove("hidden");
            progressText.classList.remove("hidden");
            tickImage.classList.add("hidden");
        }
    }

    // Attach event listeners to all inputs
    formInputs.forEach(input => {
        input.addEventListener("input", updateProgress);
    });

    updateProgress(); // Initial update on page load
});



