import { getAuthState, getPageBySlug } from "@/lib/api";
import NavbarClient from "./navbarClient";
import { get } from "http";
import { Components } from "../../../types/components";
import { Menu } from "../../../types/menu";

// Server component: fetches data, passes to client component
export default function Navbar({ currentHref }: { currentHref: string }) {
  const components: Components = getPageBySlug("components.json");
  const anonymousProfileImage = components.anonymousProfileImage;

  const navFile: Menu = getPageBySlug("menu.json");
  const authState = getAuthState();

  const navigationItems = navFile.navigation
    .filter(
      (x: any) =>
        (authState.isLoggedIn && x.authType == "authenticated") ||
        (!authState.isLoggedIn && x.authType == "anonymous") ||
        x.authType == "all"
    ).map((item) => ({
      ...item,
      current: item.link === currentHref,
    }));
  const bookingLink = navFile.novelBookAMeetingLink;

  return (
    <NavbarClient
      logo={components.logo}
      navigation={navigationItems}
      bookingLink={bookingLink}
      authState={authState}
      anonymousProfileImage={anonymousProfileImage}
    />
  );
}
