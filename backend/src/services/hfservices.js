const fetch = require("node-fetch");

const HUGGINGFACE_API_KEY = process.env.HF_API_KEY;

const candidate_labels = [
  "Scarcity",
  "Impatience",
  "Miserliness",
  "Perception",
  "Letting Go",
  "Envy"
];

async function classifyThought(thought) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
    {
      headers: { Authorization: `Bearer ${HUGGINGFACE_API_KEY}` },
      method: "POST",
      body: JSON.stringify({
        inputs: thought,
        parameters: { candidate_labels }
      }),
    }
  );
  if (!response.ok) throw new Error("Hugging Face API error");
  return response.json();
}

module.exports = { classifyThought, candidate_labels };