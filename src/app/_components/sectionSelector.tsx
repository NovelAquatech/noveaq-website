'use client';
import { SectionsItem } from '@/types/home-page';
import React, { useState } from 'react';
import MeetingPopup from './MeetingDialog';

const SectionSelector = ({ sections }: { sections: any }) => {
  const [meetingOpen, setMeetingOpen] = useState(false);

  const handleSectionClick = (section: SectionsItem) => {
    const sectionElement = document.getElementById(section.id);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="container mx-auto bg-white">
          <div className="flex space-x-2 md:space-x-8 mt-4 mb-4 overflow-x-auto scrollbar-hide">
            {sections
              .filter((s: any) => s.id !== 'hero' && s.id !== 'footer')
              .map((section: any) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section)}
                  className={`px-8 py-3 text-lg font-semibold rounded-lg focus:outline-none transition-colors border-b-2 bg-white text-gray-700 border-transparent hover:bg-blue-50 flex-shrink-0`}
                  style={{ minWidth: 120 }}
                >
                  {section.label}
                </button>
              ))}

            <button
              onClick={() => setMeetingOpen(true)}
              className="mt-2 min-w-[140px] rounded-md bg-blue-500 px-3 py-2 text-base font-semibold text-white hover:bg-blue-600"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      </div>

      <MeetingPopup open={meetingOpen} onClose={() => setMeetingOpen(false)} />
    </>
  );
};

export default SectionSelector;
