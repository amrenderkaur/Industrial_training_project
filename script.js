// Learn More button functionality
function learnMore() {
    alert("Thank you for visiting Pet Care! 🐾");

    window.location.href = "care-tips.html";
}

// Login functionality
function loginUser(event) {

    // Prevent page from refreshing
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("login-message");

    if (email === "" || password === "") {

        message.innerHTML = "Please fill in all fields.";

    } else {

        message.innerHTML = "Login successful! Welcome to Pet Care 🐾";

    }
}

// Contact form functionality
function submitContactForm(event) {

    // Prevent page from refreshing
    event.preventDefault();

    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;
    let message = document.getElementById("contact-message").value;

    let result = document.getElementById("contact-result");

    if (name === "" || email === "" || message === "") {

        result.innerHTML = "Please fill in all the fields.";

    } else {

        result.innerHTML = "Thank you for contacting us! 🐾";

    }
}