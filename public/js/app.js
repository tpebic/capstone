document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Example function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        console.log('Form data:', data);

        // You can add AJAX requests here to submit form data to the server
    }

    // Example: Adding event listener to a form
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleFormSubmit);
    }

    // Add any additional JavaScript functionality here
});