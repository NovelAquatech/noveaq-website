"use client";

import { QuestionsItem, SectionsItem } from "@/types/iot-page";
import React, { useState } from "react";

const FAQSection = ({
  section: faqSection,
}: {
  section: SectionsItem;
}) => {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gray-50"
      id={faqSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          {faqSection.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
          {faqSection.subtitle}
        </p>
        
        <div className="max-w-4xl mx-auto">
          {faqSection.questions?.map(
            (faq: QuestionsItem, index: number) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                      openQuestions.has(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openQuestions.has(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;