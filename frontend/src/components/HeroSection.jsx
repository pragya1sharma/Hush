import React from "react";

export default function Herosection() {
  return (
    <section id="hero-section" className="w-full py-12 md:py-24 bg-[#FBF3E8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-1 md:px-4 lg:px-8 pt-8 pb-8">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left pl-0">
          <h1 className="font-dancing font-extrabold text-[#3e807f] text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight md:leading-[1.15] lg:leading-[1.1]">
            Nourish your mind <br /> with
            <span className="text-[#FFBB97]"> Hush.</span>
          </h1>
          <p className="text-[#FFBB97] text-lg md:text-xl mb-8 font-medium max-w-xl">
            Your space to release mental noise and embrace stillness. Discover
            daily insights through mindful reflection.
          </p>
          <button
            className="bg-[#FFBB97] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#ff9f73] active:scale-98 transition-all duration-150 text-lg mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-[#FFBB97] focus:ring-opacity-50"
            style={{ width: "auto", minWidth: "180px" }}
            onClick={() => {
              const mainSection = document.getElementById("main-section");
              if (mainSection) {
                mainSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore your emotions
          </button>
        </div>
        {/* Left: Image */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 pr-0">
          <img
            src="/Hush HeroImg.png"
            alt="Hush Hero"
            className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
