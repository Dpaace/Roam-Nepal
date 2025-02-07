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

// For Update Phone Number
const passwordPopup = document.getElementById("password-popup");
const phoneConfirmationPopup = document.getElementById("phone-confirmation-popup");
const changePhoneBtn = document.getElementById("change-phone-btn");
const submitPasswordBtn = document.getElementById("submit-password");
const cancelPasswordBtn = document.getElementById("cancel-password");
const confirmPhoneChangesBtn = document.getElementById("confirm-phone-changes");
const cancelPhoneChangesBtn = document.getElementById("cancel-phone-changes");

// Password Visibility
const phonePasswordField = document.getElementById("phone-password-confirmation");
const togglePhonePasswordVisibilityBtn = document.getElementById("toggle-phone-password-visibility");
const phonePasswordVisibilityIcon = document.getElementById("phone-password-visibility-icon");

togglePhonePasswordVisibilityBtn.addEventListener("click", () => {
    const isPasswordVisible = phonePasswordField.type === "text";
    phonePasswordField.type = isPasswordVisible ? "password" : "text";
    phonePasswordVisibilityIcon.src = isPasswordVisible
        ? "https://img.icons8.com/ios/50/closed-eye.png" // Closed eye
        : "images/svg/password_visible.svg"; // Open eye
});

// Open Password Popup
changePhoneBtn.addEventListener("click", () => {
    passwordPopup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

// Close Password Popup
cancelPasswordBtn.addEventListener("click", () => {
    passwordPopup.classList.add("hidden");
    document.body.style.overflow = "auto";
});

// Show Phone Confirmation Popup after Password Confirmation
submitPasswordBtn.addEventListener("click", () => {
    passwordPopup.classList.add("hidden");
    phoneConfirmationPopup.classList.remove("hidden");
});

// Close Phone Confirmation Popup
cancelPhoneChangesBtn.addEventListener("click", () => {
    phoneConfirmationPopup.classList.add("hidden");
    document.body.style.overflow = "auto";
});

// Confirm Phone Changes
confirmPhoneChangesBtn.addEventListener("click", () => {
    phoneConfirmationPopup.classList.add("hidden");
    document.body.style.overflow = "auto";
});




const updatePasswordBtn = document.getElementById("update-password-btn");
const passwordConfirmationPopup = document.getElementById("password-confirmation-popup");
const confirmPasswordChangesBtn = document.getElementById("confirm-password-changes");
const cancelPasswordChangesBtn = document.getElementById("cancel-password-changes");

// Open Password Confirmation Popup
updatePasswordBtn.addEventListener("click", () => {
    passwordConfirmationPopup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

// Close Password Confirmation Popup
cancelPasswordChangesBtn.addEventListener("click", () => {
    passwordConfirmationPopup.classList.add("hidden");
    document.body.style.overflow = "auto";
});

// Confirm Password Changes
confirmPasswordChangesBtn.addEventListener("click", () => {
    passwordConfirmationPopup.classList.add("hidden");
    alert("Password updated successfully!");
    document.body.style.overflow = "auto";
});


function updateFileName(inputId, displayId) {
    const fileInput = document.getElementById(inputId);
    const fileNameDisplay = document.getElementById(displayId);

    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
        fileNameDisplay.textContent = "No file chosen";
    }
}



