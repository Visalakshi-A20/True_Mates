const express = require('express');
const router = express.Router();
const multer = require('multer');
const Post = require('../models').Post;
const { isLoggedIn } = require('../middleware/auth');

const upload = multer({ dest: 'uploads/' });

// Route for creating a new post
router.post('/create', isLoggedIn, upload.array('photos', 5), async (req, res) => {
    try {
        const { description } = req.body;
        const photoFiles = req.files;

        if (!description || !photoFiles || photoFiles.length === 0) {
            return res.status(400).json({ error: 'Description and at least one photo are required' });
        }

        // Extract photo URLs
        const photoUrls = photoFiles.map(file => file.path);

        // Create new post in the database
        const newPost = await Post.create({
            description,
            photoUrls,
            userId: req.user.id
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route for editing post description
router.put('/:postId/edit', isLoggedIn, async (req, res) => {
    try {
        const { postId } = req.params;
        const { description } = req.body;

        // Find the post by ID
        const post = await Post.findByPk(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Update the post description
        post.description = description;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error('Error editing post description:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
