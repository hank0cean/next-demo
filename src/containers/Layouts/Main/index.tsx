import Navbar from "@/containers/Common/Navbar";
import { MainLayoutProps } from "./types";

export default function MainLayout({ className, children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
