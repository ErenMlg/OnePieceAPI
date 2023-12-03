const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Character = require('../models/character');

router.get('/', (req,res,next) => {
    Character.find()
    .select('characterName characterStatus characterOrigin characterCrew characterOccupation characterBounty characterDevilFruit characterAbilities')
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
        res.status(500).json({error: err});
    });
}); 



router.post('/', (req,res,next) => {
    const character = new Character({
        _id: new mongoose.Types.ObjectId(),
        characterName: req.body.characterName,
        characterStatus: req.body.characterStatus,
        characterOrigin: req.body.characterOrigin,
        characterCrew: req.body.characterCrew,
        characterOccupation: req.body.characterOccupation,
        characterBounty: req.body.characterBounty,
        characterDevilFruit: req.body.characterDevilFruit,
        characterAbilities: req.body.characterAbilities,
        characterPictureURL: req.body.characterPictureURL
    });
    character.save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
            message: 'Handling POST',
            createdCharacter: character 
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
    });

    
router.get('/:characterID', (req,res,next) => {
    const characterID = req.params.characterID;
    Character.findById(characterID)
    .exec()
    .then(doc => {
        console.log("From database",doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message:"No valid entry found for provided ID"});
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

module.exports = router;