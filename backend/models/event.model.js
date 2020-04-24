const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventImage: { type: String, default: "/Towson_logo.jpg" }, //TODO type:Image was undefined - could use string if we base36 encode the image, and store that in db?
    eventDescription: { type: String },
    guests: [{ type: Schema.Types.ObjectId, ref: "user" }],
});
const event = mongoose.model("event", eventSchema);
module.exports = event;
