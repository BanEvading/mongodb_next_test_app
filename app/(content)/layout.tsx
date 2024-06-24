import Image from "next/image";
import Link from "next/link";
import Navbar from "../ui/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="px-8 pt-4">{children}</div>
    </div>
  );
}
