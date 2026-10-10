import { tools } from '@/data/content';
export default function Tools() {
  return (<section id="tools" className="bg-gradient-to-b from-sun/70 to-peach px-5 py-14"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Mastery</p><h2 className="h2">The Toolkit</h2></div>
    <div className="mx-auto mt-6 grid max-w-3xl gap-4">{tools.map(([k, t, d, c]) => (
      <article key={k} className="reveal flex gap-4 rounded-3xl bg-card p-5 shadow-sm"><span style={{ background: c }} className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl font-bold text-rust">{k}</span>
        <div><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-bold">{t}</h3><span className="rounded bg-peach/70 px-2 py-1 text-[10px] font-bold text-rust">PRIMARY</span></div><p className="mt-2 text-sm leading-relaxed text-mute">{d}</p></div></article>))}</div></section>);
}
