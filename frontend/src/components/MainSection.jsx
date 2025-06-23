import MoodLog from "./MoodLog";
import SimpleSection from "./SimpleSection";

export default function MainSection() {
  return (
    <div
      id="main-section"
      className="bg-gradient-to-br from-[#e0f7fa] to-[#cce6e6] rounded-[50px] py-32 px-2 md:px-8 lg:px-16 shadow-2xl min-h-[900px] md:min-h-[1100px] flex flex-col justify-between"
    >
      {/* <h2 className="text-[#3E807F] font-playfair text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-sm mt-4">
        Your Daily Mood & Thought Space
      </h2>
      <p className="text-[#2d5f5d] font-poppins text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto opacity-90">
        Reflect on your feelings and thoughts. Track your mood, explore the SIMPLE
        framework, and gain gentle insights for a mindful day.
      </p> */}
      <MoodLog />
      <div className="mt-20 mb-8">
        <SimpleSection />
      </div>
    </div>
  );
}
