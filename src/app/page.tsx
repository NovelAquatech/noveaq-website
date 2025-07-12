import { getPageBySlug } from "../lib/api";
import Navbar from "./_components/navbar";

export default function Index() {
  const homePageContent = getPageBySlug("home-page.json");
  // Parse the JSON string to an object
  const heroPost = homePageContent.content;

  return (
    <main>
      <Navbar />
    </main>
  );
}
