"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { projects, industries } from "@/data/content";
import Heading from "@/components/ui/Heading";
const ProjectModal = dynamic(() => import("@/components/ui/ProjectModal"), {
  ssr: false,
});
const LIMIT = 6;

export default function Work() {
  const [ind, setInd] = useState("All");
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const list = projects.filter((p) => ind === "All" || p.industry === ind);
  const shown = all ? list : list.slice(0, LIMIT);

  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-12">
      <Heading
        title="Selected Work"
        right={
          <span className="text-sm font-bold text-mute">
            {projects.length} folders
          </span>
        }
      />
      <p className="mt-2 text-sm text-mute">
        Tap any folder to see all the images inside.
      </p>

      <div
        role="tablist"
        aria-label="Filter by industry"
        className="noscroll -mx-5 mt-5 flex gap-2 overflow-x-auto px-5"
      >
        {industries.map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={ind === k}
            className="chip"
            onClick={() => {
              setInd(k);
              setAll(false);
            }}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-6">
        {shown.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(p)}
            aria-label={`Open folder: ${p.title} (${p.images.length} images)`}
            style={{ "--sh": p.shadow }}
            className="group relative rounded-2xl rounded-tl-none bg-card p-3 text-left shadow-[5px_5px_0_var(--sh)] transition hover:-translate-y-1"
          >
            {/* folder tab */}
            <span
              aria-hidden="true"
              style={{ background: p.shadow }}
              className="absolute -top-3 left-0 h-3 w-20 rounded-t-xl"
            />

            <span className="flex items-center justify-between text-[9px] uppercase tracking-wider text-mute">
              <span>Folder {p.no}</span>
              <span className="rounded bg-sun px-1.5 py-0.5 font-bold text-ink">
                {p.images.length} images
              </span>
            </span>

            {/* stacked-photos effect */}
            <span className="relative mt-2 block">
              <span
                aria-hidden="true"
                className="absolute inset-x-2 -bottom-1.5 top-1.5 rounded-md border border-ink/20 bg-sand"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-1 -bottom-0.5 top-0.5 rounded-md border border-ink/20 bg-peach/60"
              />
              <span
                className="relative block overflow-hidden rounded-md border border-ink/30"
                style={{
                  aspectRatio: p.size.startsWith("1080 × 1350") ? "4/5" : "1/1",
                }}
              >
                <Image
                  src={p.cover}
                  alt={`${p.title} – ${p.kind} design folder for ${p.industry}`}
                  fill
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </span>
            </span>
            <span className="mt-2 block text-sm font-bold leading-snug">
              {p.title}
            </span>
            <span className="block text-xs text-mute">
              {p.kind} · {p.industry}
            </span>
          </button>
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-8 text-center text-sm text-mute">
          No folders in this industry yet.
        </p>
      )}

      {list.length > LIMIT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            aria-expanded={all}
            onClick={() => setAll(!all)}
            className="btn-c mx-auto max-w-xs"
          >
            {all
              ? "Show fewer folders"
              : `View more folders (+${list.length - LIMIT})`}
          </button>
        </div>
      )}

      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
