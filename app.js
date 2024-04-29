// app.js

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const jwt = require('jsonwebtoken');
const secretKey = 'visalakshi_secret_key';

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to parse JSON bodies
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        req.user = null;
        next();
    } else {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    }
}

// Update the route handler to conditionally render different buttons based on authentication status
app.get('/', verifyToken, (req, res) => {
    if (verifyToken) {
        res.render('index', { loggedIn: true, username: req.user.username });
    } else {
        res.render('index', { loggedIn: false });
    }
});

// Mount user routes
app.use('/user', userRoutes);

// Mount authentication routes
app.use('/auth', authRoutes);

// Mount posts routes
app.use('/posts', postsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
