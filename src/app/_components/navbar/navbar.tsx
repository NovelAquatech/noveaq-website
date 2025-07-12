
import { getAuthState, getPageBySlug } from "@/lib/api";
import NavbarClient from "./navbarClient";
import { get } from "http";

// Server component: fetches data, passes to client component
export default function Navbar() {
  const components = getPageBySlug("components.json");
  const anonymousProfileImage = components.content.anonymousProfileImage;

  const navFile = getPageBySlug("menu.json");
  const navigationItems = navFile.content.navigation.map((item: any) => ({
    name: item.title,
    href: item.link,
  }));
  const authState = getAuthState();
  const navigation = authState.isLoggedIn ? [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ] : navigationItems;
  return <NavbarClient logo={components.content.logo} navigation={navigation} authState={authState} anonymousProfileImage={anonymousProfileImage} />;
}
