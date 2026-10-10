'use client';
import { useRef } from 'react';
import { nav } from '@/data/content';
import { site } from '@/lib/site';
export default function MobileMenu() {
  const ref = useRef(null);
  return (<>
    <button type="button" onClick={() => ref.current.showModal()} aria-label="Open menu" className="grid h-10 w-10 place-items-center text-2xl md:hidden">☰</button>
    <dialog ref={ref} aria-label="Navigation" className="m-0 h-svh max-h-none w-full max-w-none bg-bg p-0 text-ink backdrop:bg-black/40">
      <div className="mx-auto flex h-full max-w-md flex-col px-6 py-5">
        <div className="flex items-center justify-between"><span className="text-xl font-bold">{site.name}</span><button type="button" onClick={() => ref.current.close()} aria-label="Close menu" className="text-3xl">×</button></div>
        <p className="mt-10 text-[11px] font-bold uppercase tracking-[.2em] text-mute">Navigation</p>
        <ul className="mt-4 grid gap-4">{nav.map(([id, l], i) => <li key={id}><a href={`#${id}`} onClick={() => ref.current.close()} className="flex items-baseline justify-between text-4xl font-bold">{l}<span className="text-xs font-normal text-rust">0{i + 1}</span></a></li>)}</ul>
        <div className="mt-auto"><a href="#contact" onClick={() => ref.current.close()} className="btn-r w-full">Work with me</a>
          <p className="mt-3 flex justify-between text-xs text-mute"><span>Based in Studio</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-forest" />Available for Q3</span></p></div>
      </div></dialog></>);
}
