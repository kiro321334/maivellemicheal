import { reviews } from '@/data/content';
export default function Reviews() {
  return (<section className="bg-sage px-5 py-14"><div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-forest">Testimonials</p><h2 className="mt-2 text-3xl font-bold uppercase text-forest md:text-4xl">Kind Words</h2>
    <div className="mt-6 grid gap-4 md:grid-cols-2">{reviews.map(([i, n, r, q, c]) => (
      <figure key={n} className="reveal rounded-3xl bg-card p-6 shadow-sm"><span className="text-xl text-[#f2c14e]" aria-label="5 stars">★★★★★</span><blockquote className="mt-3 text-sm italic leading-relaxed">“{q}”</blockquote>
        <figcaption className="mt-4 flex items-center gap-3 border-t border-ink/10 pt-4"><span style={{ background: c }} className="grid h-10 w-10 place-items-center rounded-full text-xs font-bold" aria-hidden="true">{i}</span><span><b className="block text-sm">{n}</b><span className="text-xs text-mute">{r}</span></span></figcaption></figure>))}</div></div></section>);
}
