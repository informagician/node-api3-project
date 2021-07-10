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

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  postDb.remove(req.posts.id)
  .then(posts => {
    res.status(200).json(posts)  
  })
  .catch(posts => {
    res.status(500).json({ errorMessage: "oopsi!"})
  })
});

router.put('/:id', validatePostId, (req, res) => {
  // do your magic!

  postDb.update(req.posts.id, req.body)
  .then(posts => {
    res.status(201).json(posts)
  })
  .catch(err => {
    res.status(500).json({errorMessage:"cant update post"})
  })
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  const {id} = req.params
  postDb.getById(id)
  .then(posts => {
    if(Object.keys(posts).length > 0){
      req.posts = posts
      next();
    }
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "oooops"})
  })
}

module.exports = router;
