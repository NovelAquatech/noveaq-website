import { ProjectsSection } from "../(home)/page";
import Navbar from "../_components/navbar/navbar";
import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";

export default function ProjectPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Navbar currentHref="/projects" />
      <p>Projects Section</p>
      <PartnersCarousel />
      <FooterSection />
    </div>
  );
}
