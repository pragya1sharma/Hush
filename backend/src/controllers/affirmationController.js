const { generateAffirmations } = require("../services/hfAffirmationService");

exports.getAffirmations = async (req, res) => {
  console.log("Affirmation endpoint hit!");
  try {
    const { coreEmotion } = req.body;
    if (!coreEmotion)
      return res.status(400).json({ message: "coreEmotion is required" });
    const affirmations = await generateAffirmations(coreEmotion);
    res.json({ affirmations });
  } catch (err) {
    console.error("Error in getAffirmations:", err);
    res
      .status(500)
      .json({ message: "Affirmation generation failed", error: err.message });
  }
};
