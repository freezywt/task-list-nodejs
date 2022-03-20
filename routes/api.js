const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const posts = require('../model/posts');

const router = express.Router();

const options = {
    origin: "https://localhost:3000"
}

router.use(cors(options));

router.get('/all', (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post('/new', bodyParser.json(), (req, res) => {
  const { title, description } = req.body;

  posts.newPost(title, description);

  res.send('Post added');
});

module.exports = router;
