import React from "react";
import { useNavigate } from "react-router-dom";

const simpleFramework = [
  {
    letter: "S",
    title: "Scarcity",
    desc: "Fear of lack, limitation, or insufficiency in resources, opportunities, or success.",
    color: "from-[#BEE3DF] to-[#A7D7C5]",
    icon: "💧",
  },
  {
    letter: "I",
    title: "Impatience",
    desc: "Frustration or restlessness when things don’t happen quickly.",
    color: "from-[#A7D7C5] to-[#FFBB97]",
    icon: "⏳",
  },
  {
    letter: "M",
    title: "Miserliness",
    desc: "Reluctance to share, spend, or let go due to fear of losing resources.",
    color: "from-[#FFBB97] to-[#F7E6C4]",
    icon: "💰",
  },
  {
    letter: "P",
    title: "Perception",
    desc: "Biases, judgments, or fixed ways of viewing oneself, others, or situations.",
    color: "from-[#F7E6C4] to-[#E2C2B9]",
    icon: "👁️",
  },
  {
    letter: "L",
    title: "Letting Go",
    desc: "The ability to release attachments, grudges, or limiting beliefs. (To be filled)",
    color: "from-[#E2C2B9] to-[#B6C9F0]",
    icon: "🕊️",
  },
  {
    letter: "E",
    title: "Envy",
    desc: "Jealousy or resentment towards others’ achievements, possessions, or success.",
    color: "from-[#B6C9F0] to-[#BEE3DF]",
    icon: "🌱",
  },
];

export default function SimpleSection() {
  const navigate = useNavigate();

  const handleDumpThoughts = () => {
    navigate("/thought-dump"); // or your actual route for the thought dump page
  };

  return (
    <div className="bg-[#3E807F] rounded-[40px] max-w-5xl mx-auto my-12 px-4 py-10 md:px-12 md:py-16 shadow-lg">
      {/* Explanation Card */}
      <div className="bg-[#FFBB97] rounded-2xl p-6 md:p-8 mb-10 shadow-md text-[#3E807F]">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
          Thought Space — Powered by SIMPLE Framework
        </h2>
        <p className="font-poppins text-base md:text-lg">
          Write down what’s on your mind. Using the scientifically inspired{" "}
          <span className="font-semibold">SIMPLE Framework</span>, we’ll analyze
          your thoughts, categorize your emotions, and generate personalized
          insights with gentle affirmations.
        </p>
      </div>
      {/* SIMPLE Framework Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {simpleFramework.map((item) => (
          <div
            key={item.letter}
            className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 flex flex-col items-center shadow-lg border border-[#e8d5c4] transition-transform hover:scale-105 duration-200`}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <div className="text-2xl font-black mb-1 font-playfair text-[#3E807F] drop-shadow-sm">
              {item.letter}
            </div>
            <div className="font-bold mb-1 font-poppins text-[#2d5f5d] text-lg text-center">
              {item.title}
            </div>
            <div className="text-sm font-poppins text-center text-[#3e807f] opacity-90">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
      {/* Main Action Button */}
      <div className="flex justify-center">
        <button
          className="bg-[#FFBB97] hover:bg-[#ff9f73] text-[#3E807F] font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBB97] focus:ring-opacity-50"
          onClick={handleDumpThoughts}
        >
          Dump your thoughts
        </button>
      </div>
    </div>
  );
}
