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
    const tabs = document.querySelectorAll("#popup-tabs li");
    const contents = document.querySelectorAll(".tab-content");

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




