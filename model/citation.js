const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitationSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  author: {
    type: String,
    required: true
  },
  book: {
    type: String,
    required: true
  }
});

const CitationModel = mongoose.model('quote', CitationSchema);
module.exports = CitationModel;
