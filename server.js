const express = require('express');
const userDb = require('./users/userDb')

const server = express();
server.use(express.json());
server.use(logger);

server.get('/',(req,res) => {
  userDb.get().then(users => res.status(200).json(users))
})

server.get('/:id', validateUserId, (req, res) => {
  
});

// server.get('/:id', (req, res) => {
//   const {id} = req.params;
//   userDb.getById(id).then(users => {
//     if(users.length > 0) {
//       req.user = users
//     } else {
//       res.status(400).json({ message: "invalid user id" })
//     }
//   })
// });

//custom middleware

function logger (req,res,next) {
  console.log(`Received a ${req.method} Request from ${req.originalUrl} at ${new Date()}`)

  next();
}


function validateUserId(req,res,next) {
  const {id} = req.params;
  userDb.getById(id).then(users => {
    if(users.length > 0) {
      req.user = users
    }
  }).catch(err => {
    res.status(400).json({ message: "invalid user id" })
  })
  next();
}

module.exports = server;