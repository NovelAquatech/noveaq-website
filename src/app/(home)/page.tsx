import { HomePage } from "@/types/home-page";
import Navbar from "../_components/navbar/navbar";
import { getPageBySlug } from "@/lib/api";
import SectionSelector from "./sectionSelector";

export default function Index() {
  const homePageContent: HomePage = getPageBySlug("home-page.json");
  const sections = homePageContent.sections;

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Navbar currentHref="/" />
      {sections.map((section: any) => {
        switch (section._block) {
          case "hero":
            return (
              <>
                <HeroSection key={section.id} section={section} />
                <SectionSelector sections={sections} />
              </>
            );
          case "about":
            return <AboutSection key={section.id} section={section} />;
          case "expertise":
            return <ExpertiseSection key={section.id} section={section} />;
          case "why-choose":
            return <WhyChooseSection key={section.id} section={section} />;
          case "projects":
            return <ProjectsSection key={section.id} section={section} />;
          case "contact":
            return <ContactSection key={section.id} section={section} />;
          case "footer":
            return <FooterSection key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function HeroSection({ section }: { section: any }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${section.background.src})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          {section.headline}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow">
          {section.subheadline}
        </p>
        {section.cta && (
          <a
            href={section.cta.href}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded shadow hover:bg-blue-300 transition"
          >
            {section.cta.label}
          </a>
        )}
      </div>
    </section>
  );
}

function AboutSection({ section }: { section: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
        <img
          src={section.image}
          alt="Team"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{section.label}</h2>
          <p className="mb-6 text-lg">{section.mission}</p>
          {section.cta && (
            <a
              href={section.cta.href}
              className="inline-block px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-blue-100 transition"
            >
              {section.cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection({ section }: { section: any }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{section.label}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {section.cards.map((card: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col"
            >
              <div className="mb-4">
                <span className={`icon-${card.icon} text-4xl`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="mb-4">{card.summary}</p>
              <ul className="mb-4 list-disc pl-5">
                {card.highlights.map((hl: any, i: number) => (
                  <li key={i}>{hl.text}</li>
                ))}
              </ul>
              {card.cta && (
                <a
                  href={card.cta.href}
                  className="mt-auto inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-blue-100 transition"
                >
                  {card.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function WhyChooseSection({ section }: { section: any }) {
  return (
    <section className="py-16 bg-blue-300/10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {section.propositions.map((prop: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-lg shadow p-6"
            >
              <span className="text-7xl mb-6">{prop.icon}</span>
              <span className="text-center text-lg font-medium mb-2">
                {prop.caption}
              </span>
              <p className="text-center text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ section }: { section: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold mb-16 text-center">{section.label}</h2>
        <div className="justify-center flex flex-col lg:flex-row gap-6 overflow-x-auto pb-10">
          {section.projects.map((project: any, idx: number) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-md bg-gray-100 rounded-2xl shadow flex flex-col items-center m-auto"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 px-8">{project.title}</h3>
              <p className="mb-6 px-4">{project.summary}</p>
            </div>
          ))}
        </div>
        {section.cta && (
          <div className="text-center mt-8">
            <a
              href={section.cta.href}
              className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-blue-100 transition"
            >
              {section.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function ContactSection({ section }: { section: any }) {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{section.headline}</h2>
        <p className="mb-8 text-lg">{section.subheadline}</p>
        <form className="max-w-xl mx-auto grid gap-4 mt-8">
          {section.form.fields.map((field: any, idx: number) => (
            <div key={idx}>
              <label className="block mb-2 text-left font-medium">
                {field.name}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  className="w-full p-3 rounded"
                  rows={4}
                  name={field.name}
                />
              ) : (
                <input
                  className="w-full p-3 rounded"
                  type={field.type}
                  name={field.name}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-blue-100 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

function FooterSection({ section }: { section: any }) {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {section.columns.map((col: any, idx: number) => (
          <div key={idx}>
            <h4 className="font-bold mb-4">{col.title}</h4>
            <ul>
              {col.links.map((link: any, i: number) => (
                <li key={i} className="mb-2">
                  <a href={link.href} className="hover:underline text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        {section.copyright}
      </div>
    </footer>
  );
}
