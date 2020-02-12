const express = require('express');

const router = express.Router();

const userDb = require('./userDb')

router.post('/', (req, res) => {
  // do your magic!
  userDb.insert()
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  userDb.get().then(users => res.status(200).json(users)).catch(err => {
    res.status(500).end();
  })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  console.log(req.user)
  res.status(200).json(req.user)
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const {id} = req.params;
  userDb.getById(id).then(users => {
    if(Object.keys(users).length > 0) {
      req.user = users;
      //console.log(req.user)
      next();
    } 
  }).catch(err => {
    res.status(400).json({ message: "invalid user id" })
  })
}

function validateUser(req, res, next) {
  // do your magic!
  const body = req.body;
  console.log(body)
  if(Object.keys(body).length === 0){
    res.status(400).json({ message: "missing user data" })
  } else if (!body.name) {
    res.status(400).json({ message: "missing required name field" })
  }
  next();
}

function validatePost(req, res, next) {
  // do your magic!
  const body = req.body;
  console.log(body)
  if(Object.keys(body).length === 0){
    res.status(400).json({ message: "missing post data" })
  } else if (!body.text) {
    res.status(400).json({ message: "missing required text field" })
  }
  next();
}

module.exports = router;
