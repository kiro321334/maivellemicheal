import Image from "next/image";
import { heroStats } from "@/data/content";
export default function Hero() {
  return (
    <section className="flex h-svh min-h-[640px] flex-col pt-16">
      <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col md:max-w-3xl">
        <div className="relative min-h-[200px] flex-1 overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Maivelle Micheal, graphic designer for beauty and aesthetic brands"
            fill
            priority
            fetchPriority="high"
            sizes="(min-width:768px) 768px, 100vw"
            className="hero-img object-cover object-[50%_12%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          <span className="fade-up absolute bottom-3 left-5 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] shadow">
            Graphic Designer <span className="text-sun">✦</span>
          </span>
        </div>
        <div className="px-5 pb-4 pt-4">
          <h1 className="fade-up text-[2rem] font-bold leading-[1.1] md:text-5xl">
            Design that makes{" "}
            <u className="decoration-2 underline-offset-4 text-rust">
              brands stand out.
            </u>
          </h1>
          <dl className="fade-up d1 mt-4 grid w-full grid-cols-2 divide-x divide-ink/10 rounded-2xl bg-card py-3 shadow-sm">
            {heroStats.map(([v, l]) => (
              <div
                key={l}
                className="flex min-w-0 flex-col items-center justify-center px-2 text-center"
              >
                <dt className="text-sm font-bold leading-tight sm:text-base">
                  {v}
                </dt>
                <dd className="mt-1 text-[8px] uppercase tracking-[0.12em] text-mute sm:text-[9px] sm:tracking-widest">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
          <div className="fade-up d2 mt-4 grid grid-cols-2 gap-3">
            <a href="#work" className="btn-r glow">
              View my work ↓
            </a>
            <a href="#contact" className="btn-c">
              Work with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
