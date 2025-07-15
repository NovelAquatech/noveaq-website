import { getPageBySlug } from "../lib/api";
import Navbar from "./_components/navbar/navbar";


import React, { useState } from "react";
import SectionSelector from "./sectionSelector";

export default function Index() {
  const homePageContent: HomePage = getPageBySlug("home-page.json");
  // Parse the JSON string to an object


  const heroSection = homePageContent.sections.find(
    (section) => section.id === "hero"
  );
  const otherSections = homePageContent.sections.filter(
    (section) => section.id !== "hero"
  );
  if (!heroSection || !otherSections) return null;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/functions" />
      <HeroSection section={heroSection} />
      <SectionSelector
        sections={homePageContent.sections.filter(
          (section) => section.id !== "hero"
        )}
      />
      {otherSections.map((section) => {
        if (section._block === "functions")
          return <FunctionsSection key={section.id} section={section} />;
        return null;
      })}
    </main>
  );
};

const HeroSection = ({ section: heroSection }: { section: SectionsItem }) => {
  return (
    <section className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-b from-blue-100 to-blue-300 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 z-10">
          <h1 className="text-6xl md:text-6xl font-bold text-gray-800 mb-2 leading-tight drop-shadow-lg">
            {heroSection.title}
            <br />
          </h1>
          <h2 className="text-gray-600 text-2xl md:text-2xl font-bold mb-6 leading-tight drop-shadow-lg">
            {heroSection.subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 ">
            {heroSection.description}
          </p>
          <a
            href={heroSection.ctaLink}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition-colors text-lg"
          >
            {heroSection.ctaText}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        <div className="flex-1 flex justify-center z-10">
          <img
            src={heroSection.image}
            alt={heroSection.imageAlt}
            className="rounded-xl w-full max-w-2xl object-contain"
          />
        </div>
        {/* Decorative gradient circle */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-200 opacity-30 rounded-full blur-3xl z-0" />
      </div>
    </section>
  );
};


const FunctionsSection = ({
  section: functionsSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-b "
      id="functions"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
          {functionsSection.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-20 text-center">
          {functionsSection.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {functionsSection.features?.map(
            (feature: FeaturesItem, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-7xl text-center mb-6">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
