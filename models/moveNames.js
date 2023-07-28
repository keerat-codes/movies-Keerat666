const mongoose = require('mongoose');

const moveNamesSchema = new mongoose.Schema({
name : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('moveNames', moveNamesSchema);