import Navbar from "../_components/navbar/navbar";
import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";
import { AboutUs } from "@/types/about-us";
import { getPageBySlug } from "@/lib/api";

export default function LaboratoryEquipmentPage() {
  const about: AboutUs = getPageBySlug("about-us.json");

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/about" />
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 mt-10 text-center">
        {about.title}
      </h2>
      {about.sections.map((section) => (
        <div className="container mx-auto my-4 px-6 py-4 rounded-lg bg-blue-100 max-w-[90%] lg:max-w-[90%] ">
          <h4 className="text-2xl md:text-2xl font-medium text-gray-800 mb-14 text-left">
            {section.name}
          </h4>
          <p
            className="mb-8 mt-4 text-gray-600 text-lg md:text-lg"
            dangerouslySetInnerHTML={{ __html: section.description ?? "" }}
          ></p>
        </div>
      ))}

      <PartnersCarousel />
      <FooterSection />
    </main>
  );
}
