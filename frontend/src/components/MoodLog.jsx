import { useState } from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  {
    name: "Happy",
    normal: "/Happy.png",
    checked: "/HappyCheck.png",
  },
  {
    name: "Sad",
    normal: "/Sad.png",
    checked: "/SadCheck.png",
  },
  {
    name: "Angry",
    normal: "/Angry.png",
    checked: "/AngryCheck.png",
  },
  {
    name: "Anxious",
    normal: "/Anxious.png",
    checked: "/AnxiousCheck.png",
  },
  {
    name: "Irritated",
    normal: "/Irritated.png",
    checked: "/IrritatedCheck.png",
  },
];

const API_URL = import.meta.env.VITE_API_URL;

export default function MoodLog() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleViewAffirmations = async () => {
    if (selected === null) return;
    const coreEmotion = moods[selected].name;
    // Optionally, fetch affirmations here or just navigate
    navigate(`/affirmations?emotion=${encodeURIComponent(coreEmotion)}`);
  };

  return (
    <div>
      <h2 className="font-playfair text-2xl font-bold mb-2 text-[#3E807F] text-center md:text-4xl md:mb-8">
        How are you feeling today?
      </h2>
      <p className="mx-auto max-w-xl text-center font-light text-[#3e807f] font-poppins mb-8">
        Take a moment to check in with yourself. Choose how you’re feeling today
        from the emotions below. Once selected, you can explore uplifting
        affirmations and gentle reminders tailored to your mood.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {moods.map((mood, idx) => (
          <div
            key={mood.name}
            className={`p-4 rounded-lg cursor-pointer hover:scale-105 transition bg-transparent ${
              selected === idx ? "ring-2 ring-[#3E807F]" : ""
            }`}
            onClick={() => setSelected(idx)}
            aria-label={mood.name}
          >
            <img
              src={selected === idx ? mood.checked : mood.normal}
              alt={mood.name}
              className="w-24 h-24"
              style={{
                filter: selected === idx ? "none" : "grayscale(0) opacity(1)",
                transition: "filter 0.2s, opacity 0.2s",
              }}
            />
            <div className="mt-2 text-[#3e807f] font-poppins text-base font-medium text-center">
              {mood.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-[#3e807f] hover:bg-[#2d5f5d] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-150"
          onClick={handleViewAffirmations}
          disabled={selected === null}
        >
          View Affirmations
        </button>
      </div>
    </div>
  );
}
