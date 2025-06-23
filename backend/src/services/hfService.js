const HUGGINGFACE_API_KEY = process.env.HF_API_KEY;

const candidate_labels = [
  "Scarcity",
  "Impatience",
  "Miserliness",
  "Perception",
  "Letting Go",
  "Envy",
];

async function classifyThought(thought) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-mnli",
    {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: thought,
        parameters: { candidate_labels },
      }),
    }
  );
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Hugging Face API error:", errorText);
    throw new Error("Hugging Face API error");
  }
  return response.json();
}

module.exports = { classifyThought, candidate_labels };
