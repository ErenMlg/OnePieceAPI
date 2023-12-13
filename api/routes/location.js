const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Location = require('../models/locations');

router.get('/', (req, res, next) => {
    Location.find()
        .select('locationName locationPictureURL')
        .exec()
        .then(docs => {
            const response = {
                info: {count: docs.length},
                results: docs,
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
    const location = new Location({
        _id: new mongoose.Types.ObjectId(),
        locationName: req.body.locationName,
        locationPictureURL: req.body.locationPictureURL
    });
    location.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST',
            createdLocation: location
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}
);


router.get('/:locationID', (req, res, next) => {
    const locationID = req.params.locationID;
    Crew.findById(locationID).exec().then(doc => {
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