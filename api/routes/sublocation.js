const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const SubLocation = require('../models/sublocations');
const Location = require('../models/locations');

router.get('/', (req, res, next) => {
    SubLocation.find()
        .select('subLocationName subLocationPictureURL firstAppearance location')
        .populate({
            path: 'location',
            select:'locationName -_id'
        })
        .exec()
        .then(docs => {
            const response = {
                info: {count:docs.length},
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
    Location.findById(req.body.locationID).then(location => {
        if (!location) {
            return res.status(500).json({
                message: 'Location not found'
            });
        }
        const subLocation = new SubLocation({
            _id: new mongoose.Types.ObjectId(),
            subLocationName: req.body.subLocationName,
            subLocationPictureURL: req.body.subLocationPictureURL,
            firstAppearance: req.body.firstAppearance,
            location: req.body.locationID
        });
        return subLocation.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Handling POST',
                    createdSubLocation: subLocation
                });
            })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


router.get('/:sublocationID', (req, res, next) => {
    const sublocationID = req.params.sublocationID;
    Crew.findById(sublocationID).exec().then(doc => {
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