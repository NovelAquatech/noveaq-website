import { getPageBySlug } from "@/lib/api";
import { Partners } from "@/types/partners";
import Carousel from "./carousel";

export default function PartnersCarousel() {
  const partnerContent: Partners = getPageBySlug("partners.json");

  return (
    <div className="w-4/5 mx-auto text-center py-8">
      <h2 className="text-2xl font-bold mb-6">{partnerContent.title}</h2>
      <Carousel logos={partnerContent.logos} />
    </div>
  );
}
