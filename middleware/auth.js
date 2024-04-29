
// authentication middleware
const isLoggedIn = (req, res, next) => {
    // Check if user is authenticated
    if (req.isAuthenticated()) {
        // User is authenticated, proceed to the next middleware/route handler
        return next();
    } else {
        // User is not authenticated, return a 401 Unauthorized response
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = { isLoggedIn };
