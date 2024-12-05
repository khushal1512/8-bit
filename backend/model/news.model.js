const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    source: String,
    publishedAt: Date,
  });
  
const News = mongoose.model('News', newsSchema);

module.exports = {
    News
}