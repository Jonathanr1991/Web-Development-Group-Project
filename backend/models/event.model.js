const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventImageUrl: { type: String, default: "img/event-pics/Towson_logo.jpg" },
    eventDescription: { type: String, required: false },
    guests: [{ type: Schema.Types.ObjectId, ref: "user" }],
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}]
});
const event = mongoose.model("event", eventSchema);
module.exports = event;
