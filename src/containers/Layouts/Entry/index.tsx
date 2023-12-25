import { useRef } from "react";
import { EntryLayoutProps } from "./types";

export default function EntryLayout({
  className,
  children,
  actions,
}: EntryLayoutProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  // const actionElements = actions?.length
  //   ? actions.map((action, index) => (
  //       <Action key={index} label={action.label} href={action.href} />
  //     ))
  //   : null;

  return (
    <div ref={containerRef} className={className}>
      <main>{children}</main>
    </div>
  );
}
