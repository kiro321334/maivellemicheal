import Image from "next/image";
import { skills } from "@/data/content";
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-md px-5 py-10 md:max-w-3xl">
      <div className="relative mx-auto mt-6 h-36 w-36">
        <span
          aria-hidden="true"
          className="absolute -right-16 -top-4 h-36 w-36 rounded-full bg-sun/50 blur-2xl"
        />
        <span
          aria-hidden="true"
          className="spin absolute inset-0 rounded-full border-2 border-dashed border-rust"
        />
        <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-white">
          <Image
            src="/hero.jpg"
            alt="Portrait of Maivelle Micheal"
            fill
            sizes="144px"
            className="object-cover object-[50%_12%]"
          />
        </div>
      </div>
      <h2 className="reveal text-2xl font-bold uppercase text-center mt-4">
        Hello, I’m Maivelle
      </h2>

      <p className="reveal mt-3 text-base leading-[1.9] text-mute">
        I’m a Graphic Designer with 4 years of experience in social media
        design, advertising, branding and commercial visuals. I create creative,
        engaging designs for different industries, with hands-on experience in
        beauty and aesthetic brands. I combine creativity with clear visual
        communication to build designs that connect with audiences and
        strengthen brands.
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s} className="pill">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
