'use client';
import React from 'react';

interface MeetingPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function MeetingPopup({ open, onClose }: MeetingPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-5xl h-[85vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 lg:right-10 text-xl text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        {/* Iframe container */}
        <iframe
          src="https://outlook.office.com/book/NovelAquatech@novelaquatechgmail.onmicrosoft.com/?ismsaljsauthenabled"
          className="w-full h-full rounded-b-lg"
          scrolling="yes"
        />
      </div>
    </div>
  );
}
