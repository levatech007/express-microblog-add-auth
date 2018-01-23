var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
    User = require('./user');

var PostSchema = new Schema({
  title: String,
  description: String,
  user: {type: Schema.Types.ObjectId, ref:'User'},
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
