import { site } from "@/lib/site";
import Icon from "@/components/ui/Icon";

const msg = encodeURIComponent(
  "Hi Maivelle, I'd like to start a design project for my brand."
);
const wa = `${site.whatsapp}?text=${msg}`;

const socials = [
  ["Instagram", site.instagram],
  ["Behance", site.behance],
  ["LinkedIn", site.linkedin],
  ["TikTok", site.tiktok],
  ["Pinterest", site.pinterest],
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t-2 border-dashed border-sun/60 bg-[linear-gradient(160deg,#3b6045,#2d4a37_60%,#27402f)] px-5 pb-10 pt-16 text-white"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-sun">
          Let’s work together
        </p>

        <h2 className="mt-3 text-4xl font-bold uppercase leading-[1.1] md:text-5xl">
          Your brand deserves design people can’t{" "}
          <span className="text-sun">scroll past.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base text-white/85">
          I take on a limited number of projects each quarter. Message me today
          and get a clear plan and quote within 24 hours.
        </p>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-r glow mt-8 w-full py-5 text-base"
        >
          <Icon n="chat" size={20} />
          Start your project on WhatsApp
        </a>

        <a
          href={`mailto:${site.email}`}
          className="btn mt-3 w-full border border-white/25 py-4 hover:bg-white/10"
        >
          <Icon n="mail" size={18} />
          Or email me
        </a>

        <p className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs">
          <i className="blink h-2 w-2 rounded-full bg-[#8fc08f]" />
          Available for new projects
        </p>

        <nav aria-label="Social media" className="mt-8">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-white/60">
            Follow my work
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {socials.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${site.name} on ${label}`}
                  className="inline-block rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-bold transition hover:border-sun hover:bg-white/10 hover:text-sun"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-10 border-t border-white/15 pt-6">
          <p className="font-bold">{site.name}</p>
          <p className="mt-2 text-xs text-white/80">
            © 2026 {site.name} · All Rights Reserved
          </p>
          <a href="#top" className="mt-4 inline-block text-xs text-sun">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}