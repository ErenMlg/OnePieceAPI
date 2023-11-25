const express = require("express");

const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: "fruits were fetched"
    });
}); 

router.get('/:fruitID', (req,res,next) => {
    res.status(200).json({
        message : 'Fruit Details',
        fruitID : req.params.fruitID
    });
}); 

module.exports = router;