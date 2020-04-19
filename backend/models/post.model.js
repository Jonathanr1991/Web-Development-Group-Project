const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    userEmail: {  type: String, required: true},
    postText: {type: String},
    postImgPath: {type: String},
    numberOfLikes: { type: int},
    flag: {type:Boolean}
    
    

});

const post = mongoose.model('post', postSchema );

module.exports = post