'use client';
import { site } from '@/lib/site';
import { projectTypes } from '@/data/content';
import Icon from '@/components/ui/Icon';
const inp = 'mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3.5 text-base text-white placeholder:text-white/45 focus:border-sun focus:outline-none';
const lab = 'block text-[11px] font-bold uppercase tracking-[.14em] text-white';
export default function ContactForm() {
  const send = (e) => { e.preventDefault(); const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nBrand/Instagram: ${d.get('brand')}\nProject type: ${d.get('type')}\n\n${d.get('details')}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry – ' + d.get('type'))}&body=${encodeURIComponent(body)}`; };
  return (<form onSubmit={send} className="mt-6 grid gap-5 rounded-3xl bg-white/10 p-5 backdrop-blur">
    <div><label htmlFor="name" className={lab}>Your name</label><input id="name" name="name" required autoComplete="name" placeholder="e.g. Sarah Jenkins" className={inp} /></div>
    <div><label htmlFor="email" className={lab}>Email address</label><input id="email" name="email" required type="email" autoComplete="email" placeholder="sarah@yourbrand.com" className={inp} /></div>
    <div><label htmlFor="brand" className={lab}>Brand name or Instagram</label><input id="brand" name="brand" placeholder="@yourbrand or brand.com" className={inp} /></div>
    <div><label htmlFor="type" className={lab}>Project type</label><select id="type" name="type" className={inp}>{projectTypes.map((o) => <option key={o} className="text-ink">{o}</option>)}</select></div>
    <div><label htmlFor="details" className={lab}>Project details</label><textarea id="details" name="details" rows={3} placeholder="Tell me a bit about what you’re looking to create..." className={inp} /></div>
    <button type="submit" className="btn-r w-full">Send request <Icon n="send" size={16} /></button></form>);
}
