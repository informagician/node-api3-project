const express = require('express');

const postDb = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  postDb.get()
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "something bad happened"})
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!

}

module.exports = router;
