"use client";
import { from, useMediaQuery } from "@/styles/media";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { NavbarProps } from "./types";
import { useMemo } from "react";

export default function Navbar({ className }: NavbarProps): JSX.Element {
  const isTablet = !useMediaQuery(from.laptop);

  const navbar = useMemo(
    () => (
      <>
        {/* {!isTablet ? <LogoLinkHome /> : <></>} */}
        <div>Hello</div>
      </>
    ),
    [isTablet]
  );

  return (
    <>
      {isTablet ? (
        <MobileNavbar className={className}>{navbar}</MobileNavbar>
      ) : (
        <DesktopNavbar className={className}>{navbar}</DesktopNavbar>
      )}
    </>
  );
}
