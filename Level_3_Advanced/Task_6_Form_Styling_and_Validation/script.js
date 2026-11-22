
// Get form elements
const form = document.getElementById("registrationForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");


// Function to show or hide password
function togglePasswordVisibility(inputId, iconId) {

    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
            icon.title = "Hide password";

        } else {

            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
            icon.title = "Show password";

        }

    });
}


// Enable both eye icons
togglePasswordVisibility("password", "togglePassword");

togglePasswordVisibility("confirmPassword", "toggleConfirmPassword");


// Form validation
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check empty fields
    if (
        fullname.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {

        message.textContent = "Please fill in all fields.";
        message.style.color = "red";

        return;
    }


    // Check password length
    if (password.value.length < 6) {

        message.textContent = "Password must contain at least 6 characters.";
        message.style.color = "red";

        return;
    }


    // Check password matching
    if (password.value !== confirmPassword.value) {

        message.textContent = "Passwords do not match.";
        message.style.color = "red";

        return;
    }


    // Registration successful
    message.textContent = "Registration successful!";
    message.style.color = "green";

});
