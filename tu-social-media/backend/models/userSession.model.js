const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSessionSchema = new Schema({

    userId: {
        type: Number,
        default: -1
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    isSignedOut: {
        type: Boolean,
        default: false
    }
    
    

});

const userSession = mongoose.model('userSession', userSessionSchema );

module.exports = userSession