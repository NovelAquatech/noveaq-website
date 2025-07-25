import { getPageBySlug } from "../../lib/api";
import Navbar from "../_components/navbar/navbar";

import React from "react";
import SectionSelector from "../_components/sectionSelector";

import {
  SoftwarePage,
  SectionsItem,
  CtasItem,
  IndustriesItem,
  PointsItem,
} from "@/types/software-page";
import FooterSection from "../_components/footer/footer";

export default function Index() {
  const homePageContent: SoftwarePage = getPageBySlug("software-page.json");
  // console.log("Home Page Content:", homePageContent);
  const heroSection = homePageContent.sections.find(
    (section) => section.id === "hero"
  );
  const otherSections = homePageContent.sections.filter(
    (section) => section.id !== "hero"
  );
  if (!heroSection || !otherSections) return null;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/software-engineering" />
      <HeroSection section={heroSection} />
      {otherSections.map((section) => {
        if (section._block === "intro")
          return <IntroSection key={section.id} section={section} />;
        if (section._block === "industries")
          return <IndustriesSection key={section.id} section={section} />;
        if (section._block === "why-choose")
          return <WhyChooseSection key={section.id} section={section} />;
        if (section._block === "partners")
          return <PartnersSection key={section.id} section={section} />;
        if (section._block === "call-to-action")
          return <CallToActionSection key={section.id} section={section} />;
        return null;
      })}
      <FooterSection/>
    </main>
  );
}

const HeroSection = ({ section: heroSection }: { section: SectionsItem }) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 
             bg-cover 
             bg-blend-overlay h-screen"
      style={{
        backgroundImage: `url(${heroSection.image})`,
      }}
      id={heroSection.id}
    >
      <div className="container mx-auto flex flex-col z-10 items-start h-20">
        <h1 className="text-4xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg w-1/2">
          {heroSection.title}
        </h1>
        <h2 className="text-white text-2xl md:text-2xl font-regular mb-6 leading-tight drop-shadow-lg mt-6  ">
          {heroSection.subtitle}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {heroSection.ctas?.map((cta: CtasItem, index: number) => {
            const isExpertise = cta.text === "Explore Our Expertise";
            const baseClasses =
              "inline-flex items-center px-6 py-3 font-semibold rounded-lg shadow transition-colors text-lg mb-8 md:mb-0";

            const extraClasses = isExpertise
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-blue-600 hover:bg-blue-50";
            return (
              <a
                key={index}
                href={cta.link}
                className={`${baseClasses} ${extraClasses}`}
              >
                {cta.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const IntroSection = ({ section }: { section: SectionsItem }) => {
  return (
    <section className="px-6 md:px-24 py-16 md:py-32 gap-10" id={section.id}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
          {section.title}
        </h2>
        <p
          className="text-lg md:text-xl mb-12"
          dangerouslySetInnerHTML={{ __html: section.description ?? "" }}
        ></p>
      </div>
    </section>
  );
};

const IndustriesSection = ({
  section: industriesSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10"
      id={industriesSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
          {industriesSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesSection.industries?.map(
            (industry: IndustriesItem, index: number) => (
              <div
                key={index}
                className="flex justify-evenly mb-4 bg-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition-shadow "
              >
                <div className="text-7xl">{industry.emoji}</div>
                <div className="text-sm md:text-base text-gray-600 ml-2 flex flex-col justify-content-center align-items-center">
                  <h3 className="text-md font-semibold mb-4 text-left">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-left w-60">
                    {industry.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = ({
  section: whyChooseSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10"
      id={whyChooseSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
          {whyChooseSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-0 w-1/2 mx-auto">
          {whyChooseSection.points?.map((point: PointsItem, index: number) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold "><span>{point.emoji}</span>{point.title}</h3>
              <p className="text-gray-600">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = ({
  section: partnersSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10"
      id={partnersSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
          {partnersSection.title}
        </h2>
        <p className="text-lg md:text-xl mb-12">
          {partnersSection.description}
        </p>
      </div>
    </section>
  );
};

const CallToActionSection = ({
  section: callToActionSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      id={callToActionSection.id}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          {callToActionSection.title}
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          {callToActionSection.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 justify-center mx-auto">
          {callToActionSection.ctas?.map((cta: CtasItem, index: number) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm "
            >
              <h3 className="text-xl font-semibold mb-4">{cta.title}</h3>
              <a
                href={cta.link}
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Click Here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
