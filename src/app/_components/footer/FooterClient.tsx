'use client';

import React, { useState } from 'react';
import { Footer } from '@/types/footer';
import MeetingPopup from '../MeetingDialog';

export default function FooterClient({
  footerContent,
}: {
  footerContent: Footer;
}) {
  const { sectionOne, sectionTwo } = footerContent;
  const [meetingOpen, setMeetingOpen] = useState(false);

  const columnOne = sectionOne.find((col) => col._block === 'columnOne');
  const columnTwo = sectionOne.find((col) => col._block === 'columnTwo');
  const columnThree = sectionOne.find((col) => col._block === 'columnThree');

  return (
    <>
      <footer className="bg-blue-100 text-gray-600 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column One */}
          <div className="pl-8 md:pl-0">
            {columnOne?.logo && (
              <img
                src={`/${columnOne.logo}`}
                alt="Logo"
                className="w-40 mb-4"
              />
            )}
            <p className="text-sm w-3/4">{columnOne?.description}</p>
          </div>

          {/* Column Two */}
          <div className="pl-8 md:pl-0">
            <h3 className="text-lg font-bold mb-4">{columnTwo?.title}</h3>
            <ul className="space-y-2 text-sm">
              {columnTwo?.services?.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>{service.emoji}</span>
                  <span className="font-semibold">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column Three */}
          <div className="pl-8 md:pl-0">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm mb-6">
              {columnThree?.infoBlock?.map((info, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span>{info.emoji}</span>
                  <span className="font-semibold">{info.title}</span>
                </li>
              ))}

              <button
                onClick={() => setMeetingOpen(true)}
                className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600"
              >
                Book a Meeting
              </button>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              {columnThree?.socialLinks?.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/${social.icon}`}
                    alt="Social icon"
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-500 border-0 dark:bg-gray-700 w-[90%] mx-auto" />
        <div className="mt-4 border-t pt-4 text-xs text-center text-gray-600">
          {sectionTwo?.copyright}
        </div>
      </footer>
      <MeetingPopup open={meetingOpen} onClose={() => setMeetingOpen(false)} />
    </>
  );
}
