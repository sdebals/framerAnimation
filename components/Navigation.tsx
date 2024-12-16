"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="fixed bg-white w-full z-10 shadow-lg	 ">
        <div className="max-w-[1200px] mx-auto my-6 flex gap-4 font-bold text-black ">
          <Link href="/scroll" className={`${pathname === "/scroll" ? "text-lime-600" : ""}`}>
            Scroll
          </Link>
          <Link href="/text" className={`${pathname === "/text" ? "text-lime-600" : ""}`}>
            Text
          </Link>
          <Link href="/svg" className={`${pathname === "/svg" ? "text-lime-600" : ""}`}>
            SVG
          </Link>
          <Link href="/toggle" className={`${pathname === "/toggle" ? "text-lime-600" : ""}`}>
            Toggle
          </Link>
          <Link href="/keyframes" className={`${pathname === "/keyframes" ? "text-lime-600" : ""}`}>
            Keyframes
          </Link>
          <Link href="/staggered" className={`${pathname === "/staggered" ? "text-lime-600" : ""}`}>
            Staggered
          </Link>
          <Link href="/sequence" className={`${pathname === "/sequence" ? "text-lime-600" : ""}`}>
            Sequence
          </Link>
          <Link href="/animateactions" className={`${pathname === "/animateactions" ? "text-lime-600" : ""}`}>
            Animate Actions
          </Link>
          <Link href="/superorganism" className={`${pathname === "/superorganism" ? "text-lime-600" : ""}`}>
            Superorganism
          </Link>
          <Link href="/lenis" className={`${pathname === "/lenis" ? "text-lime-600" : ""}`}>
            Lenis
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
