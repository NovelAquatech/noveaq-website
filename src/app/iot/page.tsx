import { getPageBySlug } from "../../lib/api";
import Navbar from "../_components/navbar/navbar";
import FooterSection from "../_components/footer/footer";

import React from "react";
import SectionSelector from "../_components/sectionSelector";
import FAQSection from "./faq-section";
import {
  IotPage,
  SectionsItem,
  FeaturesItem,
  CasesItem,
  StepsItem,
  DemosItem,
  TestimonialsItem,
  PlansItem,
  HelpLinksItem,
} from "@/types/iot-page";

export default function Index() {
  const homePageContent: IotPage = getPageBySlug("iot-page.json");
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
      <Navbar currentHref="/iot" />
      <HeroSection section={heroSection} />
      <SectionSelector
        sections={homePageContent.sections.filter(
          (section) => section.id !== "hero"
        )}
      />
      {otherSections.map((section) => {
        if (section._block === "functions")
          return <FunctionsSection key={section.id} section={section} />;
        if (section._block === "use-cases")
          return <UseCasesSection key={section.id} section={section} />;
        if (section._block === "key-features")
          return <KeyFeaturesSection key={section.id} section={section} />;
        if (section._block === "how-it-works")
          return <HowItWorksSection key={section.id} section={section} />;
        if (section._block === "live-demo")
          return <LiveDemoSection key={section.id} section={section} />;
        if (section._block === "testimonials")
          return <TestimonialsSection key={section.id} section={section} />;
        if (section._block === "pricing")
          return <PricingSection key={section.id} section={section} />;
        if (section._block === "faq")
          return <FAQSection key={section.id} section={section} />;
        // if (section._block === "contact")
        //   return <ContactSection key={section.id} section={section} />;
        return null;
      })}
      <FooterSection />
    </main>
  );
}

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
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-50 transition-colors text-lg mb-8 md:mb-0"
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {functionsSection.features?.map(
            (feature: FeaturesItem, index: number) => (
              <div key={index} className="flex flex-col items-center">
                {feature.image && (
                  <div
                    className={`flex justify-center rounded-xl py-2 w-[320px] ${
                      feature.bgColor ? feature.bgColor : "bg-blue-100"
                    }`}
                  >
                    <img
                      src={feature.image}
                      alt={feature.imageAlt || feature.title}
                      className="h-40 w-50 rounded-xl"
                    />
                  </div>
                )}
                <div className="bg-white p-6 rounded-b-xl shadow hover:shadow-lg transition-shadow w-[275px]">
                  <h3 className="text-md font-semibold mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
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

const UseCasesSection = ({
  section: useCasesSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gray-50"
      id={useCasesSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          {useCasesSection.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 text-center">
          {useCasesSection.subtitle}
        </p>

        {/* Image Section */}
        {useCasesSection.image && (
          <div className="mb-12 flex justify-center">
            <img
              src={useCasesSection.image}
              alt={useCasesSection.imageAlt || "Real-world use cases"}
              className="rounded-3xl shadow-lg max-w-4xl w-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCasesSection.cases?.map((useCase: CasesItem, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-7xl text-center mb-6">{useCase.emoji}</div>
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const KeyFeaturesSection = ({
  section: keyFeaturesSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-16 md:px-24 py-16 md:py-32 gap-10 relative mx-auto"
      id={keyFeaturesSection.id}
      style={
        keyFeaturesSection.image
          ? {
              backgroundImage: `url(${keyFeaturesSection.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "700px",
              height: "1000px",
            }
          : undefined
      }
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-center">
        {keyFeaturesSection.title}
      </h2>

      <div className="container mx-auto rounded-xl p-8 justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-[1000px] ">
          {keyFeaturesSection.features
            ?.slice(0, 2)
            .map((feature: FeaturesItem, index: number) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-blue-50 rounded-lg p-6 shadow "
              >
                <div className="text-4xl flex-shrink-0">{feature.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1000px] ">
          {keyFeaturesSection.features
            ?.slice(2, 5)
            .map((feature: FeaturesItem, index: number) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-blue-50 rounded-lg p-6 shadow "
              >
                <div className="text-4xl flex-shrink-0">{feature.emoji}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = ({
  section: howItWorksSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gray-50"
      id={howItWorksSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-20 text-center">
          {howItWorksSection.title}
        </h2>
        <div className="flex flex-col xl:flex-row items-center justify-center">
          {howItWorksSection.steps?.map((step: StepsItem, index: number) => (
            <div key={index} className="flex items-center">
              <div className="text-center flex-shrink-0 w-64 mb-8 xl:mb-0">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm px-2">{step.description}</p>
              </div>
              {index < (howItWorksSection.steps?.length || 0) - 1 && (
                <div className="hidden xl:flex items-center mx-4">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveDemoSection = ({
  section: liveDemoSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
      id={liveDemoSection.id}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {liveDemoSection.title}
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90">
          {liveDemoSection.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveDemoSection.demos?.map((demo: DemosItem, index: number) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{demo.title}</h3>
              <a
                href={demo.link}
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Launch Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({
  section: testimonialsSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gray-100"
      id={testimonialsSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-20 text-center">
          {testimonialsSection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsSection.testimonials?.map(
            (testimonial: TestimonialsItem, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{testimonial.emoji}</div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({
  section: pricingSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-white"
      id={pricingSection.id}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          {pricingSection.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-20 text-center">
          {pricingSection.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingSection.plans?.map((plan: PlansItem, index: number) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-center mb-6">
                {plan.name}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Devices:</span>
                  <span>{plan.devices}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Dashboards:</span>
                  <span>{plan.dashboards}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Alerts:</span>
                  <span>{plan.alerts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Export:</span>
                  <span>{plan.export}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Support:</span>
                  <span>{plan.support}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center space-x-4">
          <a
            href={pricingSection.ctaLink}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {pricingSection.ctaText}
          </a>
          <a
            href={pricingSection.compareLink}
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            {pricingSection.compareText}
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({
  section: contactSection,
}: {
  section: SectionsItem;
}) => {
  return (
    <section
      className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gray-800 text-white"
      id={contactSection.id}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {contactSection.title}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Have a question or want to schedule a free consultation?
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📩</span>
                <span>{contactSection.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <span>{contactSection.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧭</span>
                <span>{contactSection.address}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">
              {contactSection.helpTitle}
            </h3>
            <div className="space-y-3">
              {contactSection.helpLinks?.map(
                (link: HelpLinksItem, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block text-blue-300 hover:text-blue-100 transition-colors"
                  >
                    → {link.title}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
