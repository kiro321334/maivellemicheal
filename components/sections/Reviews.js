import fs from "node:fs";
import path from "node:path";
import ReviewsCarousel from "../ui/ReviewsCarousel";

// Reads every image in /public/reviews (1.jpg, 2.png, 3.webp, ...) and sorts them by number.
function getReviewImages() {
  const dir = path.join(process.cwd(), "public", "reviews");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort((a, b) => parseInt(a, 10) - parseInt(b, 10) || a.localeCompare(b))
      .map((f) => `/reviews/${encodeURIComponent(f)}`);
  } catch {
    return [];
  }
}

export default function Reviews() {
  const images = getReviewImages();
  if (!images.length) return null;

  return (
    <section className="bg-sage px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-forest">
          Testimonials
        </p>
        <h2 className="mt-2 text-3xl font-bold uppercase text-forest md:text-4xl">
          Kind Words
        </h2>
        <ReviewsCarousel images={images} />
      </div>
    </section>
  );
}