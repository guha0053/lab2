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


// Vaildate if the input for full name is over 2 letters long.
function validateFullName() {
    const name = nameInput.value.trim();

    if (name.length < 2) {
        nameError.textContent = "Name must be at least 2 characters long.";
        return false;
    }

    nameError.textContent = "";
    return true;
};
// Validate if there is an email filled in and the built in CheckValiday for type email function.
function validateEmail() {
    const email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    }

    if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
};
// Validate if a topic is selected from the dropdown menu.
function validateTopic() {
    const topic = topicInput.value;

    if (topic === "") {
        topicError.textContent = "Please select a topic.";
        return false;
    }

    topicError.textContent = "";
    return true;
};
// Validate if the comments input is over 15 letters long.
function validateComments() {
    const comments = commentsInput.value.trim();

    if (comments.length < 15) {
        commentsError.textContent =
            "Comments must be at least 15 characters long.";
        return false;
    }

    commentsError.textContent = "";
    return true;
};
// Live counter of the characters in the comments input field.
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
};


// This is the main sumbit trigger function. It prevents that the page is reloaded and trigger form validation messages.
mainForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFullName();
    validateEmail();
    validateTopic();
    validateComments();
    console.log("Form is submitted!");
});

commentsInput.addEventListener("input", updateCommentsCounter);