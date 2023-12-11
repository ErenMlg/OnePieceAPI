const mongoose = require('mongoose');

const devilFruitSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    devilFruitName: {type: String, required: true },
    devilFruitType: {type: String, required: true },
    devilFruitPictureURL: {type: String}
});

module.exports = mongoose.model('DevilFruit', devilFruitSchema);
