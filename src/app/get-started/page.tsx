import Navbar from "../_components/navbar/navbar";
import { getPageBySlug } from "@/lib/api";
import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";
import { GetStarted } from "@/types/get-started";
import ContactForm from "../_components/contact/contactForm";

export default function ContactPage() {
  const getStarted: GetStarted = getPageBySlug("get-started.json");

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/get-started" />
      {getStarted.sections.map((section) => {
        if (section._block === "tutorial") {
          return (
            <section
              key={section.title}
              className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-b"
            >
              <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
                  {section.title}
                </h2>

                {/* Video block */}

                <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-6 ">
                  {section.tutorial}
                </div>
              </div>
            </section>
          );
        }

        // Contact form section
        if (section._block === "contact-form") {
          return (
            <section
              key={section.id}
              id={section.id}
              className="py-16 bg-blue-900 text-white"
            >
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">{section.headline}</h2>
                <p className="mb-8 text-lg">{section.subheadline}</p>

                <ContactForm fields={section.form?.fields || []} />
              </div>
            </section>
          );
        }

        return null;
      })}

      <PartnersCarousel />
      <FooterSection />
    </main>
  );
}
