import Heading from "@/components/ui/Heading";

// Add logos later: put the file in /public/brands/ and set logo: "/brands/lemar.png"
const BRANDS = [
  { name: "DM World", type: "Company", country: "Kuwait" },
  { name: "Lemar Clinic", type: "Clinic", country: "Egypt" },
  { name: "Sanfa Clinic", type: "Clinic", country: "Egypt" },
];

// With only a few brands, repeat them so one group is wider than any screen.
const REPEAT = 4;
const GROUP = Array.from({ length: REPEAT }, () => BRANDS).flat();

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function BrandCard({ brand }) {
  return (
    <li className="flex w-60 shrink-0 items-center gap-3 rounded-2xl border border-line bg-panel2 px-4 py-3 text-left">
      {brand.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 text-sm font-bold text-gold"
        >
          {initials(brand.name)}
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold">
          {brand.name}
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[.14em] text-gold">
          {brand.type} · {brand.country}
        </span>
      </span>
    </li>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="py-14">
      <div className="mx-auto max-w-xl px-5 text-center">
        <Heading
          title="Brands I’ve worked with"
          sub="Trusted by companies and clinics across Egypt and the Gulf."
        />
      </div>

      <div
        dir="ltr"
        className="brands-marquee mt-8 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="brands-track flex w-max">
          {[0, 1].map((g) => (
            <ul
              key={g}
              className="flex shrink-0 gap-4 pr-4"
              aria-hidden={g === 1 ? true : undefined}
            >
              {GROUP.map((b, i) => (
                <BrandCard key={`${g}-${i}`} brand={b} />
              ))}
            </ul>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brands-track { animation: brands-scroll 30s linear infinite; }
        .brands-marquee:hover .brands-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .brands-track { animation: none; }
          .brands-marquee { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
