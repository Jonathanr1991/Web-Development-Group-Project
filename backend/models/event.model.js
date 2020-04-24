const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    eventName: { type: String, required: true },
    eventLocation: { type: String, required: true },
    eventTime: { type: String, required: true },
    eventImageUrl: { type: String, default: "img/event-pics/Towson_logo.jpg" }, //TODO type:Image was undefined - could use string if we base36 encode the image, and store that in db? 
                                                                                //could have images stored in a folder and then just referance the url? not sure if that works?
    eventDescription: { type: String, required: false },
    guests: [{ type: Schema.Types.ObjectId, ref: "user" }],
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}]
});
const event = mongoose.model("event", eventSchema);
module.exports = event;
