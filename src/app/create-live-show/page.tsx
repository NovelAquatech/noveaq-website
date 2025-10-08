import { getPageBySlug } from "@/lib/api";
import MeetingPopup from "../_components/MeetingDialog";
import Navbar from "../_components/navbar/navbar";
import { Menu } from "@/types/menu";

export default function CreateLiveShowPage() {
  
  const navPage: Menu = getPageBySlug("menu.json");
  const correctPassword = navPage.liveShow.password;
  const liveShowLink = navPage.liveShow.link;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/create-live-show" />
      <MeetingPopup open={true} correctPassword={correctPassword} link={liveShowLink} />
    </main>
  );
}
