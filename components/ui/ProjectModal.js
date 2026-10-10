"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectModal({ p, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const close = () => ref.current.close();

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
      aria-label={`Folder: ${p.title}`}
      className="m-auto h-svh w-full max-w-2xl overflow-hidden bg-bg p-0 text-ink backdrop:bg-black/60 backdrop:backdrop-blur-sm md:h-[92svh] md:rounded-3xl"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <p className="text-[11px] font-bold uppercase tracking-[.18em] text-rust">
            Folder {p.no} · {p.images.length} images
          </p>
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Close folder"
            className="grid h-10 w-10 place-items-center rounded-full bg-sand text-xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-3xl font-bold">{p.title}</h2>
          <p className="mt-1 text-sm text-mute">
            {p.kind} · {p.industry} · {p.year}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/80">{p.desc}</p>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-sand p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rust">
                Tools
              </p>
              <p className="mt-1 font-bold">{p.tools.join(" · ")}</p>
            </div>
          </div>

          <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-rust">
            Deliverables
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {p.deliver.map((d) => (
              <li key={d} className="pill">
                {d}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-rust">
            Inside this folder · {p.images.length} images
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {p.images.map((s, i) => (
              <div
                key={s}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-ink/20 bg-sand"
              >
                <Image
                  src={s}
                  alt={`${p.title} – image ${i + 1} of ${p.images.length}`}
                  fill
                  sizes="(min-width:640px) 320px, 90vw"
                  className="object-cover"
                />
                <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold">
                  {i + 1}/{p.images.length}
                </span>
              </div>
            ))}
          </div>

          <a href="#contact" onClick={close} className="btn-r mt-6 w-full">
            Start a similar project
          </a>
        </div>
      </div>
    </dialog>
  );
}
