// routes/viewposts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const { isLoggedIn } = require('../middleware/auth');

// Route for viewing paginated posts
router.get('/viewposts', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const offset = (page - 1) * limit;

        const posts = await Post.findAll({
            offset,
            limit,
            order: [['createdAt', 'DESC']]
        });

        const totalCount = await Post.count();

        const totalPages = Math.ceil(totalCount / limit);

        res.status(200).json({ posts, totalPages });
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
