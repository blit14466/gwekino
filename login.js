// Wait for the DOM to fully load
window.onload = function() {
    // Get the form and error message elements
    const loginForm = document.querySelector('form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const generalError = document.getElementById('general-error');

    // Hide error messages initially
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    generalError.style.display = 'none';

    // Add an event listener to handle form submission
    loginForm.addEventListener('submit', function(event) {
        // Clear any previous error messages
        usernameError.style.display = 'none';
        passwordError.style.display = 'none';
        generalError.style.display = 'none';

        let isValid = true;

        // Validate username: check for only letters, numbers, and spaces, and a minimum of 6 characters
        const username = usernameField.value.trim();
        const usernameRegex = /^[a-zA-Z0-9 ]{6,}$/; // Alphanumeric and spaces, minimum 6 characters
        if (!usernameRegex.test(username)) {
            usernameError.style.display = 'block'; // Show username error message
            isValid = false;
        }

        // Validate password: check if it has a minimum length of 6 characters
        const password = passwordField.value.trim();
        if (password.length < 6) {
            passwordError.style.display = 'block'; // Show password error message
            isValid = false;
        }

        // If the form is not valid, prevent the form submission
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            generalError.style.display = 'block'; // Show general error message
        }
    });
};