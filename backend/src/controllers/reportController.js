const Report = require("../models/Report");
const { classifyThought, candidate_labels } = require("../services/hfService");
const { generateAffirmations } = require("../services/hfAffirmationService");
const AffirmationCache = require("../models/AffirmationCache");

const categoryDescriptions = {
  Scarcity:
    "Fear of lack, limitation, or insufficiency in resources, opportunities, or success.",
  Impatience: "Frustration or restlessness when things don’t happen quickly.",
  Miserliness:
    "Reluctance to share, spend, or let go due to fear of losing resources.",
  Perception:
    "Biases, judgments, or fixed ways of viewing oneself, others, or situations.",
  "Letting Go":
    "The ability to release attachments, grudges, or limiting beliefs.",
  Envy: "Jealousy or resentment towards others’ achievements, possessions, or success.",
};

const affirmations = {
  Scarcity: [
    "You have enough. Trust in abundance.",
    "Opportunities are always around you.",
    "You are worthy of success.",
    "Abundance flows to you freely.",
    "You are open to receiving all that you need.",
    "You trust that life supports you.",
  ],
  Impatience: [
    "Patience is a strength. Trust your process.",
    "Progress takes time. You are growing every day.",
    "Let go of the rush and embrace the journey.",
    "You are exactly where you need to be.",
    "Every step forward is meaningful.",
    "You allow things to unfold in their own time.",
  ],
  Miserliness: [
    "Generosity brings joy.",
    "Letting go creates space for new blessings.",
    "You are safe to share and receive.",
    "Giving enriches your life.",
    "You trust there is always enough to go around.",
    "You release the need to hold on tightly.",
  ],
  Perception: [
    "See yourself and others with compassion.",
    "Your perspective can change your world.",
    "Release judgment and embrace understanding.",
    "You are open to new ways of seeing.",
    "You accept yourself as you are.",
    "You choose to see the good in every situation.",
  ],
  "Letting Go": [
    "Release what no longer serves you.",
    "Letting go is an act of self-love.",
    "You are free to move forward.",
    "You trust the process of release.",
    "You make space for new beginnings.",
    "You let go with gratitude and peace.",
  ],
  Envy: [
    "Celebrate others’ success as inspiration.",
    "Your journey is unique and valuable.",
    "Gratitude turns what you have into enough.",
    "You are enough just as you are.",
    "You focus on your own growth.",
    "You wish others well and trust your own path.",
  ],
};

exports.analyzeThought = async (req, res) => {
  try {
    const { thought } = req.body;
    const hfResult = await classifyThought(thought);

    // Map Hugging Face output to your structure
    const categories = hfResult.labels.map((label, idx) => ({
      label,
      percent: Math.round(hfResult.scores[idx] * 100),
      description: categoryDescriptions[label],
    }));

    const coreEmotion = hfResult.labels[0];
    const summary = `Your thought reflects the emotion of ${coreEmotion} most strongly, with other influences present. Reflect on the affirmations below to support your journey.`;

    // Check affirmation cache first
    let affirmations = [];
    const cached = await AffirmationCache.findOne({ coreEmotion });
    if (cached) {
      console.log(`Cache hit for coreEmotion: ${coreEmotion}`);
      affirmations = cached.affirmations;
    } else {
      console.log(`Cache miss for coreEmotion: ${coreEmotion}`);
      try {
        affirmations = await generateAffirmations(coreEmotion);
      } catch (err) {
        console.error("Error generating affirmations:", err);
        // Fallback to default affirmations
        affirmations = affirmations[coreEmotion] || [];
      }
      // Save to cache
      await AffirmationCache.findOneAndUpdate(
        { coreEmotion },
        { affirmations, updatedAt: new Date() },
        { upsert: true }
      );
    }

    res.json({
      userThought: thought,
      summary,
      coreEmotion,
      categories,
      affirmations,
    });
  } catch (err) {
    res.status(500).json({ message: "Analysis failed", error: err.message });
  }
};
