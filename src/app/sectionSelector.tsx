"use client";
import React from "react";


const SectionSelector = ({ sections }: { sections: SectionsItem[] }) => {
  const handleSectionClick = (section: SectionsItem) => {
    const sectionElement = document.getElementById(section.id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="border-b border-gray-200">
    <div className="container mx-auto flex justify-left bg-white ">
      <div className="flex space-x-2 md:space-x-8 mt-4 mb-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section)}
            className={`px-8 py-3 text-lg font-semibold rounded-lg focus:outline-none transition-colors border-b-2 bg-white text-gray-700 border-transparent hover:bg-blue-50`}
            style={{ minWidth: 120 }}
          >
            {section.name}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SectionSelector;
