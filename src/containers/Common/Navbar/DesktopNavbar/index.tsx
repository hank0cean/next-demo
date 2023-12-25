// import { Container } from './styles';
import { DesktopSidebarProps } from "./types";

export default function DesktopSidebar({
  className,
  children,
}: DesktopSidebarProps): JSX.Element {
  return <nav className="bg-gray-899">{children}</nav>;
}
