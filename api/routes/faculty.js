const express = require('express');
const router = express.Router();
const Student = require('../model/faculty');

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'This is Faculty GET Request'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        msg: 'This is Faculty POST Request'
    })
})

module.exports = router;