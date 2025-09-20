import React, { useState } from "react";
import { faqData } from "../data/faqData";   // 👈 import the data

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-4 rounded-lg border shadow-sm transition-colors ${
        isOpen ? "bg-gray-50 dark:bg-gray-800"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-4 text-left transition-colors duration-200"
      >
        {/* Question text only */}
        <span
          className={`${
            isOpen
              ?  "text-[#6334B9] font-bold" // brand purple when open
              : "text-gray-700 dark:text-gray-300 hover:text-[#6334B9] font-medium"
          }`}
        >
          {question}
        </span>

        {/* Expand/Collapse icon */}
        {isOpen ? (
          <span className="text-[#6334B9]">−</span>
        ) : (
          <span className="text-[#6334B9]">+</span>
        )}
      </button>

      {/* Answer */}
      {isOpen && <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">{answer}</div>}
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div>
        {faqData.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
