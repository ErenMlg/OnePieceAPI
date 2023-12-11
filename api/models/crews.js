const mongoose = require('mongoose');

const crewSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    crewName: {type: String, required: true},
    crewTotalBounty: {type: Number, required: false},
    crewMainShip: {type: String},
    crewFlagURL: {type: String, required: true}
});

module.exports = mongoose.model('Crew', crewSchema);
