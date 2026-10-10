const d = {
  check: 'M20 6L9 17l-5-5', close: 'M6 6l12 12M18 6L6 18', arrow: 'M5 12h14M13 6l6 6-6 6', down: 'M6 9l6 6 6-6', up: 'M6 15l6-6 6 6', send: 'M3 11l18-8-8 18-2-8z', chat: 'M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z', mail: 'M3 5h18v14H3z|M3 7l9 7 9-7',
  book: 'M3 5h7a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H3z|M21 5h-7a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h7z', mega: 'M3 11v3l12 5V6z|M15 9a3 3 0 0 1 0 6|M6 14l1 5h2', badge: 'M12 3l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z|M9 12l2 2 4-4',
  img: 'M3 5h18v14H3z|M3 16l5-5 4 4 3-3 6 6', box: 'M3 6h18v4H3z|M5 10v9h14v-9|M10 14h4', folder: 'M3 6h6l2 2h10v11H3z',
};
export default function Icon({ n, size = 20, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{d[n].split('|').map((p, i) => <path key={i} d={p} />)}</svg>;
}
