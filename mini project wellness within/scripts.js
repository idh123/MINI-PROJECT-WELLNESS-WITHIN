// scripts.js

// Function to handle form submission
function handleFormSubmission() {
    // Get form elements
    var nameInput = document.getElementById("Name");
    var mailInput = document.getElementById("mail");
    var passwordInput = document.getElementById("password");

    // Validate form inputs (you can add more validation as needed)
    if (nameInput.value === "" || mailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields before submitting.");
    } else {
        // Display a success message (you can replace this with your desired functionality)
        alert("Form submitted successfully!");
        // Redirect to the next page (replace '1.01registered.html' with your actual next page)
        window.location.href = "1.01registered.html";
    }
}

// Add an event listener to the form
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    handleFormSubmission(); // Call the custom form submission function
});
