const mongoose = require("mongoose");

const affirmationCacheSchema = new mongoose.Schema({
  coreEmotion: { type: String, required: true, unique: true },
  affirmations: [String],
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AffirmationCache", affirmationCacheSchema);
