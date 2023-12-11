const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    characterName: {type: String, required: true },
    characterStatus: {type: String, required: true },
    characterCrew: {type: mongoose.Schema.Types.ObjectId, ref:'Crew', require:false},
    characterOrigin: {type: mongoose.Schema.Types.ObjectId, ref: 'SubLocation', required: true },
    characterOccupation: {type: mongoose.Schema.Types.ObjectId, ref: 'Occupation', required: true },
    characterBounty: {type: Number, required: false },
    characterDevilFruit: {type: mongoose.Schema.Types.ObjectId, ref: 'DevilFruit', required: false},
    characterAbilities: {type: String, required: true },
    characterPictureURL: {type: String, required: true}
});

module.exports = mongoose.model('Character', characterSchema);
