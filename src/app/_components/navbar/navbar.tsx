
import { getAuthState, getPageBySlug } from "@/lib/api";
import NavbarClient from "./navbarClient";

// Server component: fetches data, passes to client component
export default function Navbar() {
  const components = getPageBySlug("components.json");
  const anonymousProfileImage = components.content.anonymousProfileImage;
  const authState = getAuthState();
  const navigation = authState.isLoggedIn ? [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ] : [
    { name: "Home", href: "#", current: true },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
    { name: "Login", href: "#", current: false }
  ];
  return <NavbarClient logo={components.content.logo} navigation={navigation} authState={authState} anonymousProfileImage={anonymousProfileImage} />;
}
