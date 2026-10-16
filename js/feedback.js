//--------------VARIABLES goes here------------------//

// Form input fields
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
function validateTopic() {
    const topic = topicInput.value;

    if (topic === "") {
        topicError.textContent = "Please select a topic.";
        return false;
    }

    topicError.textContent = "";
    return true;
};

// Prevent that the page is reloaded and trigger form submission message
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateFullName();
    validateEmail();
    validateTopic();
    console.log("Form is submitted!");
});