const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const DevilFruit = require('../models/devilFruit');
const Character = require('../models/character');

router.get('/', (req, res, next) => {
    DevilFruit.find()
        .select('devilFruitName devilFruitType devilFruitPictureURL')
        .exec()
        .then(docs => {
            const response = {
                info: docs.length,
                result: docs,
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
        const devilFruit = new DevilFruit({
            _id: new mongoose.Types.ObjectId(),
            devilFruitName: req.body.devilFruitName,
            devilFruitType: req.body.devilFruitType,
            devilFruitPictureURL: req.body.devilFruitPictureURL
        });
        devilFruit.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Handling POST',
                    createdDevilFruit: devilFruit
                });
            }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.get('/:devilFruitID', (req, res, next) => {
    const devilFruitID = req.params.devilFruitID;
    DevilFruit.findById(devilFruitID).exec().then(doc => {
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: "No valid entry found for provided ID" });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

module.exports = router;