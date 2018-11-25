const express = require('express');
const router = express.Router();

router.post('/api/create/', (req, res, next) => {
    var request = req;
    var response = res;

    response.status(203).json( {
        Message: "Error while inserting record",
        Input: "user_password cannot be null"
    })
});
