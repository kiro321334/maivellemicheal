export default function Heading({ eyebrow, title, className = '', right }) {
  return (<div className={`reveal flex items-end justify-between gap-4 ${className}`}><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="h2">{title}</h2></div>{right}</div>);
}
