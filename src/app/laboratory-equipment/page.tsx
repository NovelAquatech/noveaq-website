import Image from "next/image";
import Navbar from "../_components/navbar/navbar";

import { ResearchPage } from "@/types/research-page";
import { getPageBySlug } from "@/lib/api";
import Link from "next/link";
import FooterSection from "../_components/footer/footer";

export default function LaboratoryEquipmentPage() {
  const labEquipment: ResearchPage = getPageBySlug("research-page.json");
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/laboratory-equipment" />

      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 mt-10 text-center">
        {labEquipment.title}
      </h2>
      <div className="mx-auto my-4 px-6 py-4 rounded-lg bg-blue-100 max-w-full md:max-w-2xl lg:max-w-[1000px]">
        <p className="mb-8 mt-4 text-gray-600 text-center">
          {labEquipment.description}
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-8">
          {labEquipment.equipments.map((eq, idx) => (
            <div
              key={eq.name}
              className="flex"
              style={{
                justifyContent: idx % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <div className="bg-blue-100 shadow rounded-xl flex max-w-2xl w-full h-56 overflow-hidden">
                {idx % 2 === 1 && (
                  <div className="relative w-56 h-full flex-shrink-0">
                    <Image
                      src={eq.image}
                      alt={eq.imageAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-r-xl"
                      sizes="224px"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center px-8 py-8">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {eq.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{eq.description}</p>
                  <Link
                    href={eq.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors w-fit"
                  >
                    Click Here
                  </Link>
                </div>
                {idx % 2 === 0 && (
                  <div className="relative w-56 h-full flex-shrink-0">
                    <Image
                      src={eq.image}
                      alt={eq.imageAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-r-xl"
                      sizes="224px"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterSection/>
    </main>
  );
}
