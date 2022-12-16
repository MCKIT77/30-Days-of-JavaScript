// Get a reference to the form element.
const loginForm = document.getElementById('login-form');

// Listen for the form's submit event.
loginForm.addEventListener('submit', async (event) => {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the user's login credentials from the form.
    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;

    // Send a login request to the server.
    const response = await fetch('https://example.com/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // If the login was successful, redirect the user to the home page.
    if (response.ok) {
        window.location.href = 'https://example.com/home';
    }
});