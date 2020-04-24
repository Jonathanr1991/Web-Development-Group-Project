const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  postText: { type: String },
  postImgPath: { type: String },
  time: { type: Date, default: Date.now() },
  numberOfLikes: { type: Number, default: '0' },
  flag: { type: Boolean, default: false },
  comments: [
    {
      postedBy: { type: Schema.Types.ObjectId, ref: 'user' },
      text: { type: String },
      time: { type: Date, default: Date.now() },
      likes: { type: Number, default: '0' },
    },
  ],
});

const post = mongoose.model("post", postSchema);

module.exports = post;
