const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  picPath: String,
  picName: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
