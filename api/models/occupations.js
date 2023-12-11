const mongoose = require('mongoose');

const occupationSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    occupationName: {type: String, required: true},
    occupationDescription: {type: String, required: true},
    occupationPictureURL: {type: String, required: true}
});

module.exports = mongoose.model('Occupation', occupationSchema);
