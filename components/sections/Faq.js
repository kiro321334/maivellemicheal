import { faqs } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export default function Faq() {
  return (<section id="faq" className="mx-auto max-w-3xl px-5 py-14"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><Heading eyebrow="Questions" title="Frequently Asked" />
    <div className="mt-6 grid gap-3">{faqs.map(([q, a], i) => (
      <details key={q} open={i === 0} className="group rounded-2xl border border-transparent bg-card shadow-sm open:border-rust"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-bold">{q}<Icon n="down" size={16} className="shrink-0 text-mute transition group-open:rotate-180 group-open:text-rust" /></summary>
        <p className="px-5 pb-5 text-sm leading-relaxed text-mute">{a}</p></details>))}</div></section>);
}
