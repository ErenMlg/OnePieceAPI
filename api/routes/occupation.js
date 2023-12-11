const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Occupation = require('../models/occupations');

router.get('/', (req, res, next) => {
    Occupation.find()
        .select('occupationName occupationDescription occupationPictureURL')
        .exec()
        .then(docs => {
            const response = {
                info: {
                    count: docs.length
                },
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
    const occupation = new Occupation({
        _id: new mongoose.Types.ObjectId(),
        occupationName: req.body.occupationName,
        occupationDescription: req.body.occupationDescription,
        occupationPictureURL: req.body.occupationPictureURL
    });
    occupation.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST',
            createdOccupation: occupation
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}
);


router.get('/:occupationID', (req, res, next) => {
    const occupationID = req.params.occupationID;
    Crew.findById(occupationID).exec().then(doc => {
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({ message: "No valid entry found for provided ID" });
        }
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    }
    );
}
);

module.exports = router;