const express = require('express');
const multer = require('multer');
const { uploadPost, getPosts } = require('../controllers/postController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.post('/', upload.single('postImage'), uploadPost); // ← Route for uploading post
router.get('/', getPosts); // ← Route for fetching posts

module.exports = router;
