const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")))

app.use((req, res, next) => {
    // res.status(200).send('Welcome to the egeage api');
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "*"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.get('/api', function (req, res) {
    res.send("Hello world!");
});

const registerRoute = require('./api/routes/register')
app.use('/register', registerRoute)

const loginRoute = require('./api/routes/login')
app.use('/login', loginRoute)

const orderRoute = require('./api/routes/order')
app.use('/order', orderRoute)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

mongoose
    .connect(
        `mongodb+srv://"username""password"@cluster0-c2ivw.mongodb.net/cre?retryWrites=true&w=majority
    `,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log('connect database')
    })
    .catch(err => {
        console.log('error')
        console.log(err)
    })

module.exports = app;