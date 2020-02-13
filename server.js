require('dotenv').config()

const express = require('express');

const server = express();
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')

server.use(express.json());
server.use(logger);
server.use('/api/user', userRouter);
server.use('/api/post',postRouter);

server.get('/',(req,res) => {
  res.send('its working!')
})


//custom middleware

function logger (req,res,next) {
  console.log(`Received a ${req.method} Request from ${req.originalUrl} at ${new Date()}`)

  next();
}

module.exports = server;