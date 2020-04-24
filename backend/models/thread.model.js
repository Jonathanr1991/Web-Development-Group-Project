const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const threadSchema = new Schema({
    members: [{type: Schema.Types.ObjectId, ref: 'user'}],
    messages : [
        {
            sender: {type: Schema.Types.ObjectId, ref: 'user'},
            text: {type: String},
            timeStamp: {type: Date, defult: Date.now()}
        }
    ]
});
const message = mongoose.model('thread', threadSchema );
module.exports = message