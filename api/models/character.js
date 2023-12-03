const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    characterName: {type: String, required: true },
    characterStatus: {type: String, required: true },
    characterOrigin: {type: String, required: true },
    characterCrew: {type: String, required: false },
    characterOccupation: {type: String, required: true },
    characterBounty: {type: Number, required: false },
    characterDevilFruit: {type: String, required: false },
    characterAbilities: {type: String, required: true },
    characterPictureURL: {type: String, required: true}
});

module.exports = mongoose.model('Character', characterSchema);
