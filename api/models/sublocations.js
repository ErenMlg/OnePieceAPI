const mongoose = require('mongoose');

const subLocationSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    subLocationName: {type: String, required: true},
    subLocationPictureURL: {type: String, required: true},
    firstAppearance: {type: String, required: true},
    location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true}
});

module.exports = mongoose.model('SubLocation', subLocationSchema);
