const Post = require('../models/post');

exports.uploadPost = async (req, res) => {
  const { description, username } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const newPost = new Post({ description, username, imagePath });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload post' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};
