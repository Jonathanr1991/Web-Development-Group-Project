const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    sender: {type: Schema.Types.ObjectId, ref: 'user'},
    receiver: { type: Schema.Types.ObjectId, ref: 'user' },
    message:{ type: String, required: true },
    read: {type: Boolean },
    whenSent: {type: Date}
});
const message = mongoose.model('message', eventSchema );
module.exports = message