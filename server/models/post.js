const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  description: String,
  username: String,
  imagePath: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
