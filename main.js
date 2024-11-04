document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Handle Sign-Up Form Submission
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check if the user already exists
            if (localStorage.getItem(email)) {
                alert('User already exists. Please login.');
            } else {
                // Store user information in localStorage
                const user = {
                    username: username,
                    email: email,
                    password: password
                };
                localStorage.setItem(email, JSON.stringify(user));
                alert('Sign-up successful! Please login.');
                window.location.href = 'login.html';
            }
        });
    }

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Retrieve user from localStorage
            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                alert(`Welcome back, ${user.username}!`);
                // Redirect to profile or main page
                window.location.href = 'profile.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }
});
