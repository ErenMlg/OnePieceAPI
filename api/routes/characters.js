const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Character = require('../models/character');
const SubLocation = require('../models/sublocations');
const Occupation = require('../models/occupations');
const Crew = require('../models/crews');

router.get('/', (req, res, next) => {
    Character.find()
        .select('characterName characterStatus characterCrew characterOrigin characterOccupation characterBounty characterDevilFruit characterAbilities characterPictureURL')
        .populate({
            path: 'characterCrew',
            select:'crewName -_id'
        })
        .populate({
            path: 'characterOrigin',
            select:'subLocationName -_id'
        })
        .populate({
            path: 'characterOccupation',
            select:'occupationName -_id'
        })
        .populate({
            path: 'characterDevilFruit',
            select:'devilFruitName -_id'
        })
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
    Occupation.findById(req.body.characterOccupationID)
        .then(occupations => {
            if (!occupations) {
                return res.status(500).json({
                    message: 'Occupation not found'
                });
            }
            SubLocation.findById(req.body.characterOriginID).then(sublocation=>{
                if(!sublocation){
                    return res.status(500).json({
                        message:'Origin not found'
                    });
                }
                const character = new Character({
                    _id: new mongoose.Types.ObjectId(),
                    characterName: req.body.characterName,
                    characterStatus: req.body.characterStatus,
                    characterCrew: req.body.characterCrewID,
                    characterOrigin: req.body.characterOriginID,
                    characterOccupation: req.body.characterOccupationID,
                    characterBounty: req.body.characterBounty,
                    characterDevilFruit: req.body.characterDevilFruitID,
                    characterAbilities: req.body.characterAbilities,
                    characterPictureURL: req.body.characterPictureURL
                });
                return character.save().then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Handling POST',
                        createdCharacter: character
                    });
                });
            })  
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/crewsRecruit/:crewID', (req, res, next) => {
    const crewID = req.params.crewID;
    Character.find({ characterCrew: crewID})        
        .select('characterName characterStatus characterCrew characterOrigin characterOccupation characterBounty characterDevilFruit characterAbilities characterPictureURL')
        .populate({
            path: 'characterCrew',
            select:'crewName -_id'
        })
        .populate({
            path: 'characterOrigin',
            select:'subLocationName -_id'
        })
        .populate({
            path: 'characterOccupation',
            select:'occupationName -_id'
        })
        .populate({
            path: 'characterDevilFruit',
            select:'devilFruitName -_id'
        })
        .exec()
        .then(docs => {
            console.log("From database", docs);
            if (docs) {
                if(docs.length > 1){
                    const response = {
                        info: {
                            count: docs.length
                        },
                        result: docs,
                    }
                    res.status(200).json(response);
                }else{
                    res.status(200).json(docs);
                }
            } else {
                res.status(404).json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/occupationOwners/:occupationID', (req, res, next) => {
    const occupationID = req.params.occupationID;
    Character.find({ characterOccupation: occupationID})        
        .select('characterName characterStatus characterCrew characterOrigin characterOccupation characterBounty characterDevilFruit characterAbilities characterPictureURL')
        .populate({
            path: 'characterCrew',
            select:'crewName -_id'
        })
        .populate({
            path: 'characterOrigin',
            select:'subLocationName -_id'
        })
        .populate({
            path: 'characterOccupation',
            select:'occupationName -_id'
        })
        .populate({
            path: 'characterDevilFruit',
            select:'devilFruitName -_id'
        })
        .exec()
        .then(docs => {
            console.log("From database", docs);
            if (docs) {
                if(docs.length > 1){
                    const response = {
                        info: {
                            count: docs.length
                        },
                        result: docs,
                    }
                    res.status(200).json(response);
                }else{
                    res.status(200).json(docs);
                }
            } else {
                res.status(404).json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:characterID', (req, res, next) => {
    const characterID = req.params.characterID;
    Character.findOne({_id: characterID})        
        .select('characterName characterStatus characterCrew characterOrigin characterOccupation characterBounty characterDevilFruit characterAbilities characterPictureURL')
        .populate({
            path: 'characterCrew',
            select:'crewName -_id'
        })
        .populate({
            path: 'characterOrigin',
            select:'subLocationName -_id'
        })
        .populate({
            path: 'characterOccupation',
            select:'occupationName -_id'
        })
        .populate({
            path: 'characterDevilFruit',
            select:'devilFruitName -_id'
        })
        .exec()
        .then(docs => {
            console.log("From database", docs);
            if (docs) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;