function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const invisibleEye = button.querySelector(".invisible-eye");
    const visibleEye = button.querySelector(".visible-eye");

    if (input.type === "password") {
        input.type = "text";
        invisibleEye.classList.add("hidden");
        visibleEye.classList.remove("hidden");
    } else {
        input.type = "password";
        invisibleEye.classList.remove("hidden");
        visibleEye.classList.add("hidden");
    }
}


// // Get elements
// const feedbackPopup = document.getElementById("feedback-popup");
// const openFeedbackBtn = document.getElementById("open-feedback-popup");
// const closeFeedbackBtn = document.getElementById("close-feedback-popup");
// const cancelFeedbackBtn = document.getElementById("cancel-feedback");
// const feedbackDetails = document.getElementById("feedback-details");
// const charCount = document.getElementById("char-count");

// // Open popup
// openFeedbackBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     feedbackPopup.classList.remove("hidden");
// });

// // Close popup
// closeFeedbackBtn.addEventListener("click", () => {
//     feedbackPopup.classList.add("hidden");
// });
// cancelFeedbackBtn.addEventListener("click", () => {
//     feedbackPopup.classList.add("hidden");
// });

// // Character count
// feedbackDetails.addEventListener("input", () => {
//     charCount.textContent = feedbackDetails.value.length;
// });


// Get elements
const feedbackPopup = document.getElementById("feedback-popup");
const openFeedbackBtn = document.getElementById("open-feedback-popup");
const closeFeedbackBtn = document.getElementById("close-feedback-popup");
const cancelFeedbackBtn = document.getElementById("cancel-feedback");
const feedbackDetails = document.getElementById("feedback-details");
const charCount = document.getElementById("char-count");

// Open popup
openFeedbackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    feedbackPopup.classList.remove("hidden");
    document.body.classList.add("disable-scroll"); // Disable background scroll
});

// Close popup
closeFeedbackBtn.addEventListener("click", () => {
    feedbackPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll"); // Enable background scroll
});
cancelFeedbackBtn.addEventListener("click", () => {
    feedbackPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll"); // Enable background scroll
});

// Character count
feedbackDetails.addEventListener("input", () => {
    charCount.textContent = feedbackDetails.value.length;
});
