import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/navbar";

export default function Affirmations() {
  const [text, setText] = useState("");
  const maxChars = 1000;
  const navigate = useNavigate();

  const handleViewReport = () => {
    if (text.length === 0 || text.length > maxChars) return;
    navigate("/report", { state: { thought: text } });
  };

  return (
    <div className="min-h-screen bg-[#FBF3E8] flex flex-col">
      {/* Removed Navbar here to avoid duplicate navbar */}
      {/* Custom Navbar with only Hush logo */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="bg-white/80 rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-2xl border border-[#e8d5c4] flex flex-col items-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#3e807f] mb-4 text-center">
            Thought Space
          </h2>
          <p className="text-[#3e807f] font-poppins text-center mb-6">
            Write down what’s on your mind. Your words are safe here. (Max{" "}
            {maxChars} characters)
          </p>
          <textarea
            className="w-full min-h-[120px] max-h-[400px] resize-y rounded-xl border border-[#BEE3DF] bg-[#F5FDFB] p-4 font-poppins text-[#3e807f] text-base focus:outline-none focus:ring-2 focus:ring-[#FFBB97] transition-all duration-200 shadow-sm"
            placeholder="Start writing your thoughts..."
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= maxChars) {
                setText(e.target.value);
              }
            }}
            rows={6}
            maxLength={maxChars}
            style={{ minHeight: "120px", maxHeight: "400px" }}
          />
          <div className="w-full flex justify-between items-center mt-2 text-sm text-[#3e807f]">
            <span>
              {text.length} / {maxChars} characters
            </span>
            <span className={text.length > maxChars ? "text-red-500" : ""}>
              {text.length > maxChars ? "Character limit exceeded!" : ""}
            </span>
          </div>
          <button
            className="mt-8 bg-[#FFBB97] hover:bg-[#ff9f73] text-[#3E807F] font-bold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBB97] focus:ring-opacity-50"
            disabled={text.length === 0 || text.length > maxChars}
            onClick={handleViewReport}
          >
            View Report
          </button>
        </div>
      </main>
    </div>
  );
}
