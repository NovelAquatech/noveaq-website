"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is ConstructIQ?",
    answer:
      "ConstructIQ is an integrated management system for managing quality, safety and environmental processes in one place. It brings projects, incidents, non-conformances, audits, documents, plant, actions and reporting into a shared workspace.",
  },
  {
    question: "Which ISO standards does ConstructIQ support?",
    answer:
      "ConstructIQ is designed around the workflows commonly required for ISO 9001 Quality Management, ISO 45001 Occupational Health and Safety, and ISO 14001 Environmental Management.",
  },
  {
    question: "What is the difference between the customer and admin portals?",
    answer:
      "The customer portal is the day-to-day workspace for organisations and project teams. The admin portal is for authorised platform administrators managing the wider ConstructIQ service.",
  },
  {
    question: "Can ConstructIQ be used across multiple projects?",
    answer:
      "Yes. ConstructIQ is designed to give teams a consolidated overview while keeping operational records associated with the relevant projects and sites.",
  },
  {
    question: "How much does ConstructIQ cost?",
    answer:
      "Pricing is currently being finalised. Contact Novel Aquatech to discuss your organisation, project requirements and the most suitable plan.",
  },
];

export default function ConstructIQFAQ() {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(
    new Set([0]),
  );

  function toggleQuestion(index: number) {
    setOpenQuestions((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section id="faq" className="bg-slate-50 px-6 py-20 md:px-24 md:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            A few quick answers about the platform. We’ll add more as
            ConstructIQ continues to grow.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {questions.map((faq, index) => {
            const isOpen = openQuestions.has(index);
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-slate-50 md:px-8"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-slate-600 md:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
