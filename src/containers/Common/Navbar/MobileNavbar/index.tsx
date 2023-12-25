import { useMenu } from "./logic";
import { MobileSidebarProps } from "./types";

import Button from "@/components/Button";

export default function MobileNavbar({
  className,
  children,
}: MobileSidebarProps): JSX.Element {
  const { onClickMenu, isMenuOpen } = useMenu();

  return (
    <>
      {isMenuOpen ? (
        <div
          style={{
            position: "fixed",
            top: "3.625rem",
            zIndex: "1",
            width: "100%",
            height: "calc(100% - 3.625rem)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            transition: "background-color 300ms",
          }}
        ></div>
      ) : null}
      <div className={className}>
        {/* <LogoLinkHome href="/">{i18n.texts.common.logo}</LogoLinkHome> */}
        <Button onClick={onClickMenu} />
        <nav>{children}</nav>
      </div>
    </>
  );
}
