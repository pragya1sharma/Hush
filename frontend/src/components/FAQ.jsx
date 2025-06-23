import React, { useState } from "react";

const faqs = [
  {
    question: "What is Hush and how does it work?",
    answer:
      "Hush is your space to release mental noise and embrace stillness. It helps you reflect and discover daily insights through mindful prompts.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes, your reflections and data are private and secure. We do not share your information with third parties.",
  },
  {
    question: "How can I get started with Hush?",
    answer:
      "Simply click on 'Explore your emotions' and follow the prompts to begin your mindful journey.",
  },
  // Add more questions as needed
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section
      id="faqs"
      className="w-full py-12 md:py-20 bg-[#FBF3E8] px-2 md:px-8 lg:px-32"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-2xl font-bold mb-2 text-[#FFBB97] text-center md:text-4xl md:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {displayedFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#BEE3DF] bg-white shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                style={{
                  color: "#3e807f",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span
                  className={`ml-4 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-[#2d5f5d] bg-[#F5FDFB]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {!showAll && faqs.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-[#3e807f] hover:bg-[#2d5f5d] text-white font-semibold px-6 py-2 rounded-full transition-colors duration-150"
              onClick={() => setShowAll(true)}
            >
              Load More Questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
