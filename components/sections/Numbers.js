import { numbers } from '@/data/content';
export default function Numbers() {
  return (<section className="mx-auto max-w-md px-5 py-10 md:max-w-3xl"><dl className="reveal grid grid-cols-2 rounded-[2rem] border-4 border-sun/70 bg-card p-6 shadow-[0_20px_40px_-20px_rgba(200,71,43,.3)]">{numbers.map(([n, l], i) => (
    <div key={l} className={`px-2 py-5 ${i % 2 ? 'border-l border-ink/10 pl-6' : ''} ${i > 1 ? 'border-t border-ink/10' : ''}`}><dt className="text-5xl font-bold text-rust">{n}</dt><dd className="mt-2 max-w-[9rem] text-[11px] tracking-[.15em] text-mute">{l}</dd></div>))}</dl></section>);
}
