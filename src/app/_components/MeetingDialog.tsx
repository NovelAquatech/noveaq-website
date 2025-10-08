'use client';
import React, { useState } from 'react';

interface MeetingPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function MeetingPopup({ open, onClose }: MeetingPopupProps) {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(true);
  const correctPassword = 'novelmeeting9876!';

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-5xl h-[85vh] p-6 flex flex-col">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 lg:right-10 text-xl text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>

        {!authenticated ? (
          // Password form
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center flex-grow"
          >
            <label className="mb-4 text-lg font-medium text-gray-700">
              Enter Meeting Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded px-4 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        ) : (
          // Iframe container
          <iframe
            src="https://outlook.office.com/book/NovelAquatech@novelaquatechgmail.onmicrosoft.com/?ismsaljsauthenabled"
            className="w-full h-full rounded-b-lg"
            scrolling="yes"
          />
        )}
      </div>
    </div>
  );
}
