import { site } from "@/lib/site";
import { nav } from "@/data/content";
import MobileMenu from "@/components/ui/MobileMenu";
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-[#fff6f1]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="text-xl font-bold">
          {site.name}
        </a>
        <nav
          aria-label="Main"
          className="hidden gap-8 text-sm font-bold md:flex"
        >
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="hover:text-rust">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
