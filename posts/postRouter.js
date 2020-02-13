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

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  res.status(200).json(req.posts)
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
  const {id} = req.params
  postDb.getById(id)
  .then(posts => {
    if(Object.keys(posts).length > 0){
      req.posts = posts
      console.log(req.postid)
      next();
    }
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "oooops"})
  })
}

module.exports = router;
