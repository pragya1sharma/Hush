import React, { useEffect, useState } from "react";

function getCoreEmotion() {
  const params = new URLSearchParams(window.location.search);
  return params.get("emotion") || "Happy";
}

const API_URL = import.meta.env.VITE_API_URL;

export default function Affirmations() {
  const coreEmotion = getCoreEmotion();
  const [affirmations, setAffirmations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAffirmations() {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/affirmations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ coreEmotion }),
      });
      const data = await res.json();
      setAffirmations(data.affirmations || []);
      setLoading(false);
    }
    fetchAffirmations();
  }, [coreEmotion]);

  return (
    <div className="min-h-screen bg-[#FBF3E8] flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <div className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-xl border border-[#e8d5c4] flex flex-col items-center">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#3e807f] mb-4 text-center">
          Your daily dose of calm, courage, and confidence
        </h2>
        {loading ? (
          <div className="text-[#3e807f] text-lg">
            Generating affirmations...
          </div>
        ) : (
          <ul className="text-[#2d5f5d] font-poppins text-lg w-full text-center">
            {affirmations.map((a, i) => (
              <li
                key={i}
                className="mb-3 list-none flex items-start justify-center"
              >
                <span className="mr-2 text-[#FFBB97] text-xl">&#9733;</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
