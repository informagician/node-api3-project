// code away!
const server = require('./server');

const port = 5001;

server.listen(port, () => {
    console.log('\n* Server Running on http://localhost:5001 *\n')
})