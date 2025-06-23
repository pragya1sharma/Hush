import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function Report() {
  const location = useLocation();
  const thought = location.state?.thought || "";

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReport() {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/report/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ thought }),
      });
      const data = await res.json();
      setReport(data);
      setLoading(false);
    }
    if (thought) fetchReport();
  }, [thought]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBF3E8] px-4 py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#3e807f] mb-6"></div>
        <div className="text-[#3e807f] font-semibold text-lg">
          Analyzing your thought...
        </div>
      </div>
    );
  if (!report)
    return (
      <div className="text-center mt-10 text-red-500">No report available.</div>
    );

  return (
    <div className="min-h-screen bg-[#FBF3E8] flex flex-col">
      {/* Removed Navbar here to avoid duplicate navbar */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-2xl border border-[#e8d5c4] flex flex-col items-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#3e807f] mb-4 text-center">
            Thought Report
          </h2>
          <div className="w-full mb-6">
            <div className="font-poppins text-[#3e807f] text-base mb-2 font-semibold">
              Your Thought Dump:
            </div>
            <div className="bg-[#F5FDFB] rounded-xl p-4 text-[#2d5f5d] font-poppins text-base shadow-sm border border-[#BEE3DF]">
              {report.userThought}
            </div>
          </div>
          <div className="w-full mb-6">
            <div className="font-poppins text-[#3e807f] text-base mb-2 font-semibold">
              AI Analysis:
            </div>
            <div className="bg-[#FFBB97]/60 rounded-xl p-4 text-[#3e807f] font-poppins text-base shadow-sm border border-[#FFBB97]">
              {report.summary}
            </div>
          </div>
          <div className="w-full mb-6">
            <div className="font-poppins text-[#3e807f] text-base mb-2 font-semibold">
              SIMPLE Framework Analysis:
            </div>
            <div className="flex flex-wrap gap-4">
              {report.categories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex flex-col items-center bg-white rounded-xl border shadow p-4 min-w-[140px] max-w-[180px]"
                  style={{ borderColor: "#BEE3DF" }}
                >
                  <span className="font-bold text-[#3e807f] mb-1">
                    {cat.label}
                  </span>
                  <span className="text-lg font-playfair text-[#3e807f]">
                    {cat.percent}%
                  </span>
                  <span className="text-xs text-[#2d5f5d] text-center mt-1">
                    {cat.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Core Emotion Section */}
          <div className="w-full mb-6">
            <div className="font-poppins text-[#3e807f] text-base mb-2 font-semibold">
              Core Emotion Identified:
            </div>
            <div className="bg-[#BEE3DF] rounded-xl p-4 text-[#3e807f] font-poppins text-lg shadow-sm border border-[#A7D7C5] text-center">
              {report.coreEmotion}
            </div>
          </div>
          <button
            className="mt-4 bg-[#FFBB97] hover:bg-[#ff9f73] text-[#3E807F] font-bold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBB97] focus:ring-opacity-50"
            onClick={() =>
              navigate(`/affirmations?emotion=${report.coreEmotion}`)
            }
          >
            View Affirmations
          </button>
        </div>
      </main>
    </div>
  );
}
