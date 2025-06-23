const HUGGINGFACE_API_KEY = process.env.HF_API_KEY;

async function generateAffirmations(coreEmotion) {
  const prompt = `Generate 6 unique, positive affirmations for someone experiencing the emotion/category: ${coreEmotion}. Each affirmation should start with "I am" and be on a new line.`;

  console.log("Calling Hugging Face API for affirmations...");

  const response = await fetch(
    "https://api-inference.huggingface.co/models/meta-llama/Llama-3.1-8B-Instruct",
    {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          temperature: 1.0,
          max_new_tokens: 120,
          top_p: 0.98,
        },
      }),
    }
  );
  if (!response.ok) {
    const errorText = await response.text();
    console.error("Hugging Face API error:", response.status, errorText);
    throw new Error(`Hugging Face API error: ${response.status} ${errorText}`);
  }
  const result = await response.json();
  console.log("Raw model output:", result);
  try {
    const text = result[0]?.generated_text || result.generated_text || "";
    // Split by newlines and filter for lines starting with "I am"
    const affirmations = text
      .split(/[\n\r]+/)
      .map((line) => line.replace(/^\d+\.\s*/, "").trim())
      .filter((line) => line.toLowerCase().startsWith("i am"))
      .slice(0, 6);
    return affirmations;
  } catch (err) {
    console.error("Affirmation parsing error:", err);
    return [];
  }
}

module.exports = { generateAffirmations };
