const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const xd = require('underscore');

const Crew = require('../models/crews');
const Character = require("../models/character");

router.get('/', (req,res,next) => {
    Crew.find()
    .select('_id crewName crewTotalBounty crewMainShip crewFlagURL')
    .exec()
    .then(docs => {
        const result = {
            info:{
                count: docs.length
            },
            result: docs
        }
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}); 

router.post('/', (req,res,next) => {
        const crew = new Crew({
            _id: new mongoose.Types.ObjectId(),
            crewName: req.body.crewName,
            crewTotalBounty: req.body.crewTotalBounty,
            crewMainShip: req.body.crewMainShip,
            crewFlagURL: req.body.crewFlagURL
        });
        crew.save()
            .then(result=>{
                console.log(result);
                res.status(201).json({
                    message: 'Handling POST',
                    createdCrew: crew 
                });
            }).catch(err=> {
            console.log(err);
            res.status(500).json({
                error: err.message
            });
        });
});

    
router.get('/:crewID', (req,res,next) => {
    const crewID = req.params.crewID;
    Character.findOne({characterCrew: crewID, characterOccupation:'656dd3e7ee617bd51788ca46'})
        .exec().then(captain => {
            Crew.findById(crewID).exec().then(doc => {
            if(doc){
                const result = {
                    crewID: doc.crewID,
                    crewName: doc.crewName,
                    crewTotalBounty: doc.crewTotalBounty,
                    captainName: captain.characterName,
                    crewMainShip: doc.crewMainShip,
                    crewFlagURL: doc.crewFlagURL
                }
                res.status(200).json(result);
            }else{
                res.status(404).json({message:"No valid entry found for provided ID"});
            }
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
});


module.exports = router;