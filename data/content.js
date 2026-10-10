export const nav = [
  ["work", "Work"],
  ["services", "Services"],
  ["tools", "Tools"],
  ["about", "About"],
  ["contact", "Contact"],
];
export const heroStats = [
  ["4 Years", "EXPERIENCE"],
  ["Ps · Ai", "ADOBE TOOLS"],
];
export const numbers = [
  ["4", "YEARS OF EXPERIENCE"],
  ["85+", "PROJECTS DELIVERED"],
  ["30+", "BRANDS SERVED"],
  ["4", "DESIGN FIELDS"],
];
export const skills = [
  "Social media design",
  "Advertising",
  "Branding",
  "Commercial visuals",
];
export const workFilters = [
  "All",
  "Social Media",
  "Advertising",
  "Branding",
  "Commercial",
];
export const industries = [
  "All",
  "Beauty",
  "Aesthetics",
  "Skincare",
  "Hospitality",
  "Product",
];
const sh = ["#f8e4a0", "#fbd9c6", "#f6d1cf", "#dde8d0"];
const p = (i, id, title, kind, industry, size, slides, desc, deliver) => ({
  id,
  no: String(i + 1).padStart(2, "0"),
  title,
  kind,
  industry,
  size,
  slides,
  desc,
  deliver,
  tools: ["Photoshop", "Illustrator"],
  shadow: sh[i % 4],
  year: "2025",
  cover: `/work/${id}/cover.jpg`,
  images: Array.from({ length: slides }, (_, k) => `/work/${id}/${k + 1}.jpg`),
});
const S = "1080 × 1350",
  Q = "1080 × 1080";
export const projects = [
  p(
    0,
    "lumiere-glow-serum",
    "Lumière Glow Serum",
    "Social Media",
    "Beauty",
    S,
    3,
    "A warm, editorial social campaign for a glow serum: hero product shots, retouched textures and a consistent amber palette.",
    ["Post set", "Story templates", "Retouched product images"],
  ),
  p(
    1,
    "aura-clinic-campaign",
    "Aura Clinic Campaign",
    "Advertising",
    "Aesthetics",
    S,
    3,
    "High-converting ad creatives and a landing-page visual system for an aesthetic clinic’s seasonal offers.",
    ["Social ads", "Digital banners", "Offer visuals"],
  ),
  p(
    2,
    "al-nahil",
    "Al Nahil Branding",
    "Branding",
    "Skincare",
    S,
    6,
    "A complete botanical skincare identity: logo system, color palette, typography and brand guidelines.",
    ["Logo system", "Color palette", "Brand guidelines"],
  ),
  p(
    3,
    "maison-dor-menu",
    "Maison D’or Menu Visuals",
    "Commercial",
    "Hospitality",
    S,
    3,
    "Luxury treatment menu and in-store print collateral with delicate typography and gold accents.",
    ["Treatment menu", "Flyers", "Key visuals"],
  ),
  p(
    4,
    "gig",
    "Gig Campaign",
    "Social Media",
    "Skincare",
    S,
    3,
    "A bright summer sun-protection guide with carousels, tips and product highlights.",
    ["Carousel", "Highlight covers", "Content kit"],
  ),
  p(
    5,
    "elixir-botanical-launch",
    "Élixir Botanical Launch",
    "Commercial",
    "Product",
    Q,
    3,
    "Launch visuals for a botanical elixir: product ads, app mockups and campaign key visuals.",
    ["Product ads", "Key visuals", "Launch kit"],
  ),
];
export const services = [
  [
    "SOCIAL MEDIA DESIGN",
    "Scroll-stopping feeds, cohesive carousels, engaging stories and reusable design systems crafted to elevate online presence.",
    ["Post Sets", "Highlight Covers", "Content Kits"],
    "#f8e4a0",
    "book",
  ],
  [
    "ADVERTISING",
    "High-converting ad creatives engineered to stop the thumb, convey the proposition within 2 seconds, and turn clicks into loyal clients.",
    ["Social Ads", "Digital Banners", "Offer Visuals"],
    "#fbd9c6",
    "mega",
  ],
  [
    "BRANDING",
    "End-to-end visual identities tailored with bespoke typography, signature color palettes, and practical usage rules.",
    ["Logo System", "Color Palette", "Brand Guidelines"],
    "#f6d1cf",
    "badge",
  ],
  [
    "COMMERCIAL VISUALS",
    "Print and digital collateral including luxury treatment menus, marketing flyers, lookbooks, and campaign key visuals.",
    ["Product Ads", "Menus & Flyers", "Key Visuals"],
    "#dde8d0",
    "img",
  ],
];
export const tools = [
  [
    "Ps",
    "ADOBE PHOTOSHOP",
    "Advanced beauty skin retouching, tonal color grading, lighting simulation, and high-impact social media compositing.",
    "#f8e4a0",
  ],
  [
    "Ai",
    "ADOBE ILLUSTRATOR",
    "Precision vector graphics, bespoke logo construction, typographic hierarchy systems, and packaging-ready proofs.",
    "#fbd9c6",
  ],
];
export const steps = [
  [
    "Brief & Clarity",
    "Understanding brand aspirations, target aesthetic audience, tone of voice, visual constraints, and marketing milestones.",
  ],
  [
    "Concept & Moodboard",
    "Curated visual directions, Pantone-inspired color stories, typography pairings, and rough compositional sketches for approval.",
  ],
  [
    "Design & Execution",
    "High-fidelity artboards created in Adobe Photoshop and Illustrator with precise grid alignments, retouching, and typography polish.",
  ],
  [
    "Revisions & Delivery",
    "Iterative fine-tuning based on your feedback followed by organized export of print and web assets in all required formats.",
  ],
];
export const reviews = [
  [
    "SA",
    "Dr. Salma A.",
    "Founder · Radiant Aesthetics Clinic",
    "Maivelle completely revamped our aesthetic clinic’s Instagram feed. Her eye for warm, clean beauty visual language made our bookings jump significantly within the first month.",
    "#f8e4a0",
  ],
  [
    "LM",
    "Layla Mansoor",
    "Marketing Director · Bloom Botanicals",
    "Fast turnaround, exceptionally organized Illustrator source files, and a rare sensitivity to delicate skincare branding. Working with Maivelle is effortlessly seamless.",
    "#fbd9c6",
  ],
];
export const faqs = [
  [
    "What do you need to start a project?",
    "A quick brief outlining your brand goals, existing logo files, raw images or copy (if ready), and any visual references or moodboards you resonate with. If you don’t have all of this ready, we define it together during our onboarding chat!",
  ],
  [
    "How long does a design project take?",
    "Social media sets usually take 3–5 days, while full brand identities take 2–4 weeks depending on scope and feedback speed.",
  ],
  [
    "How many revisions are included?",
    "Every project includes two focused revision rounds. Additional rounds can be added if needed.",
  ],
  [
    "Do you design full brand identities?",
    "Yes. I design logo systems, color palettes, typography, and complete brand guidelines tailored to beauty and aesthetic brands.",
  ],
  [
    "Which file formats do I receive?",
    "Print-ready PDFs, high-resolution PNG/JPG for web and social, and editable source files (AI/PSD) on request.",
  ],
];
export const projectTypes = [
  "Social Media Design",
  "Advertising",
  "Branding",
  "Commercial Visuals",
];
