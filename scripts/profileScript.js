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



// For Update Email
// const changeEmailBtn = document.getElementById("change-email-btn");
// const emailPopup = document.getElementById("email-popup");
// const closeEmailPopup = document.getElementById("close-email-popup");
// const cancelEmailPopup = document.getElementById("cancel-email-popup");

// // Open popup
// changeEmailBtn.addEventListener("click", () => {
//     emailPopup.classList.remove("hidden");
//     document.body.classList.add("disable-scroll"); // Disable background scrolling
// });

// // Close popup
// closeEmailPopup.addEventListener("click", () => {
//     emailPopup.classList.add("hidden");
//     document.body.classList.remove("disable-scroll");
// });

// cancelEmailPopup.addEventListener("click", () => {
//     emailPopup.classList.add("hidden");
//     document.body.classList.remove("disable-scroll");
// });

// Get elements
const emailPopup = document.getElementById("email-popup");
const confirmationPopup = document.getElementById("confirmation-popup");
const submitEmailPopup = document.getElementById("submit-email-popup");
const closeEmailPopup = document.getElementById("close-email-popup");
const cancelEmailPopup = document.getElementById("cancel-email-popup");
const closeConfirmationPopup = document.getElementById("close-confirmation-popup");
const cancelConfirmation = document.getElementById("cancel-confirmation");

// Show email popup
document.getElementById("change-email-btn").addEventListener("click", () => {
    emailPopup.classList.remove("hidden");
    document.body.classList.add("disable-scroll");
});

// Close email popup
closeEmailPopup.addEventListener("click", () => {
    emailPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll");
});
cancelEmailPopup.addEventListener("click", () => {
    emailPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll");
});

// Get elements
const confirmationPasswordField = document.getElementById("confirmation-password");
const toggleConfirmationPasswordVisibilityBtn = document.getElementById("toggle-confirmation-password-visibility");
const confirmationPasswordVisibilityIcon = document.getElementById("confirmation-password-visibility-icon");

// Toggle password visibility
toggleConfirmationPasswordVisibilityBtn.addEventListener("click", () => {
    const isPasswordVisible = confirmationPasswordField.type === "text";
    confirmationPasswordField.type = isPasswordVisible ? "password" : "text";
    confirmationPasswordVisibilityIcon.src = isPasswordVisible
        ? "https://img.icons8.com/ios/50/closed-eye.png" // Closed eye icon
        : "images/svg/password_visible.svg"; // Visible eye icon
});


// Show confirmation popup
submitEmailPopup.addEventListener("click", () => {
    emailPopup.classList.add("hidden");
    confirmationPopup.classList.remove("hidden");
});

// Close confirmation popup
closeConfirmationPopup.addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll");
});
cancelConfirmation.addEventListener("click", () => {
    confirmationPopup.classList.add("hidden");
    document.body.classList.remove("disable-scroll");
});



