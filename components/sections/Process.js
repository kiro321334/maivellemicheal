import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Process() {
  return (<section id="process" className="mx-auto max-w-3xl px-5 py-14"><Heading eyebrow="Methodology" title="How We Work" />
    <ol className="relative mt-8 grid gap-8"><span aria-hidden="true" className="absolute bottom-6 left-[13px] top-6 border-l-2 border-dashed border-forest/60" />
      {steps.map(([t, d], i) => <li key={t} className="reveal relative flex gap-4"><span className="z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest text-xs font-bold text-white ring-4 ring-bg">{i + 1}</span><div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-mute">{d}</p></div></li>)}</ol>
    <p className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-card px-4 py-3 text-xs text-mute"><Icon n="box" size={16} className="text-forest" />Print and web ready files, source files on request.</p></section>);
}
