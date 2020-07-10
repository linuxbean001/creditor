const http = require('http');
// const mongoose = require('mongoose');
const port = 3300;
const app = require('./app');

// mongoose.connect("mongodb://localhost:27017/cre", { useNewUrlParser: true })
// .then(() => {
//     console.log('conected to data base');

// }).catch( err =>{
//     console.log('error', err);
//     process.exit();
// });


const server =http.createServer(app);
server.listen(port, () => {
    console.log('connacted.....',port);
});