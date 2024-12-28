// Wait for the DOM to fully load
window.onload = function() {
    // Get the form and error message elements
    const signupForm = document.querySelector('form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const repeatPasswordField = document.getElementById('repeat-password');
    const passwordMismatchError = document.getElementById('password-mismatch-error');
    const generalError = document.getElementById('general-error');
    const termsCheckbox = document.querySelector('input[name="terms"]');
    const ageCheckbox = document.querySelector('input[name="age"]');

    // Hide error messages initially
    passwordMismatchError.style.display = 'none';
    generalError.style.display = 'none';

    // Add an event listener to handle form submission
    signupForm.addEventListener('submit', function(event) {
        // Clear any previous error messages
        passwordMismatchError.style.display = 'none';
        generalError.style.display = 'none';

        let isValid = true;

        // Validate username: should not be empty
        const username = usernameField.value.trim();
        if (username === '') {
            generalError.style.display = 'block';
            isValid = false;
        }

        // Validate password: should not be empty
        const password = passwordField.value.trim();
        if (password === '') {
            generalError.style.display = 'block';
            isValid = false;
        }

        // Validate repeat password: should match password
        const repeatPassword = repeatPasswordField.value.trim();
        if (password !== repeatPassword) {
            passwordMismatchError.style.display = 'block';
            isValid = false;
        }

        // Validate terms checkbox
        if (!termsCheckbox.checked) {
            generalError.style.display = 'block';
            isValid = false;
        }

        // Validate age confirmation checkbox
        if (!ageCheckbox.checked) {
            generalError.style.display = 'block';
            isValid = false;
        }

        // If the form is not valid, prevent form submission
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });
};