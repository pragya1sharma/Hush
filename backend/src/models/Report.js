const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  thought: { type: String, required: true },
  summary: String,
  coreEmotion: String,
  categories: [
    {
      label: String,
      percent: Number,
      description: String,
    },
  ],
  affirmations: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);