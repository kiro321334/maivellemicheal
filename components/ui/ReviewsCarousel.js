"use client";
import { useRef } from "react";
import Icon from "@/components/ui/Icon";

export default function ReviewsCarousel({ images }) {
  const track = useRef(null);

  const go = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("a");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mt-6">
      {/* dir="ltr" keeps scrolling direction consistent on RTL pages */}
      <div
        ref={track}
        dir="ltr"
        className="-mx-5 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <a
            key={src}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open client review ${i + 1}`}
            className="block w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl bg-card p-2 shadow-sm transition duration-300 hover:-translate-y-1 sm:w-[46%] md:w-[320px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Client review ${i + 1}`}
              loading="lazy"
              draggable={false}
              className="block h-auto w-full rounded-2xl"
            />
          </a>
        ))}
      </div>

      <div className="mt-5 hidden justify-center gap-3 sm:flex">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white transition duration-300 hover:-translate-y-0.5"
        >
          <Icon n="down" size={18} className="rotate-90" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white transition duration-300 hover:-translate-y-0.5"
        >
          <Icon n="down" size={18} className="-rotate-90" />
        </button>
      </div>
    </div>
  );
}