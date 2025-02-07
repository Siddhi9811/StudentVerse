// server.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Dummy user data for demonstration
const validUsername = 'user';
const validPassword = 'password';

// Serve the login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        req.session.username = username; // Set session variable
        res.redirect('/main'); // Redirect to main page
    } else {
        res.send('Invalid username or password. <a href="/login">Try again</a>');
    }
});

// Serve the main page
app.get('/main', (req, res) => {
    if (!req.session.username) {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }
    res.send(`<h1>Welcome, ${req.session.username}!</h1><p>This is the main webpage.</p><a href="/logout">Logout</a>`);
});

// Handle logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/main');
        }
        res.redirect('/login');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});