import Navbar from "../_components/navbar/navbar";
import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";
import { getPageBySlug } from "@/lib/api";
import { Project } from "@/types/project";

export default function ProjectPage() {
  const projects: Project = getPageBySlug("project.json");

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Navbar currentHref="/projects" />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 ">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Projects</h2>
          <div className="justify-center flex flex-col lg:flex-row gap-6 overflow-x-auto pb-10">
            {projects.sections.map((project: any, idx: number) => (
              <div
                key={idx}
                className="min-w-[300px] max-w-md bg-gray-100 rounded-2xl shadow flex flex-col items-center m-auto"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-100 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold mb-4 px-8">
                  {project.title}
                </h3>
                <p className="mb-6 px-4">{project.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnersCarousel />
      <FooterSection />
    </div>
  );
}
