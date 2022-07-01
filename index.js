// require express, cors, mongodb, jwt and dotenv to secure database pass
const express = require('express');
const cors = require('cors');
require('dotenv').config();
// import mongo 
// const jwt = require('jsonwebtoken');



// declare app and port
const app = express();
const port = process.env.PORT || 5000;



// use middleware
app.use(cors());
app.use(express.json());



// connect with mongo database


// Make API : check server root
app.get('/', (req, res) => {
    res.send('Power is Distribuiting Power')
})



// listening port
app.listen(port, () => {
    console.log('Power Distributor Port listen', port);
})