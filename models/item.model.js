const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true, max: 100},
    loan_period: {type: Number, required: false}

});


// Export the model
module.exports = mongoose.model('Item', ItemSchema);