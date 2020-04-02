const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true,
    },
    firstName:{ 
        type: String,
        required: true,
    },
    lastName:{ 
        type: String,
        required: true,
    },
    major:{ 
        type: String,
        required: true,
    },
    bio:{ 
        type: String,
        required: false,
    },
    isAdmin: { 
        type: Boolean,
        
    },
    imageURL: String,
    image: {data: Buffer, contentType: String }

});

const user = mongoose.model('user', userSchema );

module.exports = user