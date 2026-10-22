
//--------------VARIABLES goes here------------------//

// Form input fields
const mainForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const topicInput = document.querySelector("#topic");
const commentsInput = document.querySelector("#comments");
const websiteInput = document.querySelector("#website");

// Error messages
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const topicError = document.querySelector("#topic-error");
const commentsError = document.querySelector("#comments-error");
const websiteError = document.querySelector("#website-error");

// Character counter
const commentsCounter = document.querySelector("#comments-character-counter");

// Form confirmation message
const formMessageConfirmation = document.querySelector("#form-message-confirmation");


//--------------FUNCTIONS goes here------------------//

// Show an error message and mark the field as invalid.
function showFieldError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
}

// Clear the error message and reset the field's validation classes.
function clearFieldError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("is-invalid", "is-valid");
}


// Validate the full name.
function validateFullName() {
    const name = nameInput.value.trim();
    const namePattern = /^[\p{L}\p{M} '-]+$/u;

    if (name.length < 2) {
        showFieldError(
            nameInput,
            nameError,
            "Name must be at least 2 characters long."
        );
        return false;
    }

    if (!namePattern.test(name)) {
        showFieldError(
            nameInput,
            nameError,
            "Name can only contain letters, spaces, apostrophes and hyphens."
        );
        return false;
    }

    clearFieldError(nameInput, nameError);
    nameInput.classList.add("is-valid");
    return true;
}


// Validate the email address.
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        showFieldError(emailInput, emailError, "Email is required.");
        return false;
    }

    if (!emailInput.checkValidity()) {
        showFieldError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );
        return false;
    }

    clearFieldError(emailInput, emailError);
    emailInput.classList.add("is-valid");
    return true;
}


// Validate that a topic has been selected.
function validateTopic() {
    const topic = topicInput.value;

    if (topic === "") {
        showFieldError(topicInput, topicError, "Please select a topic.");
        return false;
    }

    clearFieldError(topicInput, topicError);
    topicInput.classList.add("is-valid");
    return true;
}


// Validate that comments contain at least 15 characters.
function validateComments() {
    const comments = commentsInput.value.trim();

    if (comments.length < 15) {
        showFieldError(
            commentsInput,
            commentsError,
            "Comments must be at least 15 characters long."
        );
        return false;
    }

    clearFieldError(commentsInput, commentsError);
    commentsInput.classList.add("is-valid");
    return true;
}


// Live counter for the comments field.
function updateCommentsCounter() {
    const comments = commentsInput.value.trim();
    const characterCount = comments.length;

    commentsCounter.textContent =
        `${characterCount} characters. Minimum 15 characters.`;

    if (characterCount < 15) {
        commentsCounter.classList.add("error");
        commentsCounter.classList.remove("valid");
    } else {
        commentsCounter.classList.add("valid");
        commentsCounter.classList.remove("error");
    }
}


// Validate the website URL if a value has been entered.
function validateWebsite() {
    const website = websiteInput.value.trim();

    // The website field is optional.
    if (website === "") {
        clearFieldError(websiteInput, websiteError);
        return true;
    }

    if (!websiteInput.checkValidity()) {
        showFieldError(
            websiteInput,
            websiteError,
            "Please enter a valid website URL."
        );
        return false;
    }

    clearFieldError(websiteInput, websiteError);
    websiteInput.classList.add("is-valid");
    return true;
}

// Clear form messages if clear button is clicked or if submission is successful.
function resetForm(clearConfirmation = true) {

    // Clear all error messages
    clearFieldError(nameInput, nameError);
    clearFieldError(emailInput, emailError);
    clearFieldError(topicInput, topicError);
    clearFieldError(commentsInput, commentsError);
    clearFieldError(websiteInput, websiteError);

    // Reset validation classes
    nameInput.classList.remove("is-valid", "is-invalid");
    emailInput.classList.remove("is-valid", "is-invalid");
    topicInput.classList.remove("is-valid", "is-invalid");
    commentsInput.classList.remove("is-valid", "is-invalid");
    websiteInput.classList.remove("is-valid", "is-invalid");

    // Reset the character counter to 0
    commentsCounter.textContent =
        "0 characters. Minimum 15 characters.";
    commentsCounter.classList.remove("error", "valid");

    // Clear the confirmation message but only if the clearConfirmation parameter is true (default).
    if (clearConfirmation) {
        formMessageConfirmation.textContent = "";
    }
}


// Main form changes when submit is clicked. Prevent the default form submission and validate all fields.
mainForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Run every validator, even if an earlier field is invalid.
    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isTopicValid = validateTopic();
    const areCommentsValid = validateComments();
    const isWebsiteValid = validateWebsite();

    // Stop if any field is invalid.
    if (
        !isNameValid ||
        !isEmailValid ||
        !isTopicValid ||
        !areCommentsValid ||
        !isWebsiteValid
    ) {
        return;
    }

    // If all fields are valid, show a success message with the submitted name.
    const submittedName = nameInput.value.trim();
    formMessageConfirmation.textContent =
        `Thanks for your feedback, ${submittedName}!`;

    // Remove the success message after 4 seconds
    setTimeout(function () {
        formMessageConfirmation.textContent = "";
    }, 4000);


    // Reset all form fields and validation states
    mainForm.reset();
    // adding false parameter to prevent clearing the confirmation message immediately after submission
    resetForm(false);

    console.log("Form is submitted!");
});


// Update the comments counter whenever the user types.
commentsInput.addEventListener("input", updateCommentsCounter);

// Reset the form when the clear button is clicked. This will also clear the confirmation message.
const clearButton = document.querySelector('button[type="reset"]');
clearButton.addEventListener("click", function () {
    resetForm();
    console.log("Form is cleared by the clear button!");
});