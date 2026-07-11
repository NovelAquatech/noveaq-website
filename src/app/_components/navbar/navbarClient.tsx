'use client';
import React, { useState } from 'react';
import { NavigationItem } from '../../../types/menu';

interface NavItemCurrent extends NavigationItem {
  current?: boolean;
}

interface NavbarClientProps {
  navigation: NavItemCurrent[];
  logo: string;
}

export default function NavbarClient({
  logo,
  navigation,
}: NavbarClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 bg-blue-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-blue-300 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={mobileMenuOpen ? 'hidden size-6' : 'block size-6'}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={mobileMenuOpen ? 'block size-6' : 'hidden size-6'}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.title}
                      href={item.link}
                      className={
                        (item.current
                          ? 'bg-blue-300'
                          : 'text-gray-800 hover:bg-blue-200') +
                        ' rounded-md px-3 py-2 text-sm font-semibold'
                      }
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div
            className="absolute left-0 right-0 top-full z-50 border-t border-blue-200 bg-blue-100 shadow-xl sm:hidden"
            id="mobile-menu"
          >
            <div className="space-y-1 px-3 pt-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className={
                    (item.current
                      ? 'bg-blue-200 text-black'
                      : 'text-gray-800 hover:bg-blue-200 hover:text-black') +
                    ' block rounded-md px-3 py-2 text-base font-semibold'
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
