import { services } from '@/data/content';
import Icon from '@/components/ui/Icon';
import Heading from '@/components/ui/Heading';
export default function Services() {
  return (<section id="services" className="mx-auto max-w-5xl px-5 py-12"><Heading eyebrow="Services" title="What I Design" />
    <div className="mt-6 grid gap-4 md:grid-cols-2">{services.map(([t, d, tags, c, ic]) => (
      <article key={t} className="reveal overflow-hidden rounded-3xl bg-card shadow-sm"><div style={{ background: c }} className="h-2" />
        <div className="p-6"><div className="flex items-center justify-between"><h3 className="text-lg font-bold">{t}</h3><Icon n={ic} size={20} className="text-rust" /></div>
          <p className="mt-3 text-base leading-relaxed text-mute">{d}</p><ul className="mt-4 flex flex-wrap gap-2 border-t border-ink/10 pt-4">{tags.map((x) => <li key={x} className="rounded-md bg-sand px-3 py-1.5 text-xs font-bold">{x}</li>)}</ul></div></article>))}</div>
    <p className="mt-5 rounded-2xl bg-sage px-5 py-4 text-center text-sm font-bold text-forest">✦ Experienced with beauty & aesthetic brands.</p>
    <a href="#contact" className="btn-c mt-4 w-full md:mx-auto md:flex md:max-w-xs">Request a quote</a></section>);
}
