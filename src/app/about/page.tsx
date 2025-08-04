import Navbar from "../_components/navbar/navbar";


import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";

export default function LaboratoryEquipmentPage() {
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/laboratory-equipment" />
About Us
      <PartnersCarousel />
      <FooterSection />
    </main>
  );
}

