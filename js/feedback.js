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

// Prevent that the page is reloaded and trigger form submission message
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form is submitted!");
});