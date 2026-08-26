import {
  PencilRuler,
  Home,
  Hammer,
  Sofa,
  FileCheck,
  Box,
  ClipboardList,
  Map,
} from 'lucide-react';

export type Project = {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Interior';
  location: string;
  year: string;
  image: string;
  description: string;
 gallery: {
    src: string;
    orientation?: "portrait";
  }[];
  client: string;
  area: string;
  status: string;
  scope: string[];
  orientation?: "portrait";
  subtitle?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: typeof PencilRuler;
  details: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Award = {
  year: string;
  title: string;
  organization: string;
};

/**
 * Single source of truth for portfolio imagery.
 * Uses Pexels stock architecture/interior photography.
 */
export const projects: Project[] = [
  {
    id: 'p1',
    name: 'The Palm Haus',
    category: 'Residential',
    location: 'Karachi, Pakistan',
    year: '2024',
    image: '/farm-house/farmhouse1.webp',
    description: 'A 24,000+ sq. ft. luxury farmhouse conceived as a private retreat on the outskirts of Karachi, offering an immersive escape from the urban concrete landscape. The architectural concept blends contemporary modernism with a refined aesthetic, creating a sophisticated yet tranquil environment for vacation living and everyday leisure. The residence is designed around an extensive range of recreational and hospitality-oriented amenities, including an artificial lake, a full-size Olympic swimming pool, and a dramatic cantilevered pool at first-floor level overlooking the Bahria Town skyline. With approximately 08 bedrooms, complemented by private drawing and dining spaces, the farmhouse delivers an elevated standard of comfort, privacy, and luxury within a carefully landscaped setting.',
        subtitle:   'Experience the luxury living in the Farm House',
    gallery: [
      {src:'/farm-house/farmhouse1.webp'},
      {src:'/farm-house/farmhouse2.webp'},
      {src: '/farm-house/farmhouse3.webp'},
      {src: '/farm-house/farmhouse4.webp'},
           {src:'/farm-house/farmhouse5.webp'},
      {src:'/farm-house/farmhouse6.webp'},
      {src: '/farm-house/farmhouse7.webp'},
      {src: '/farm-house/farmhouse8.webp'},
{src:'/farm-house/farmhouse9.webp'},
{src:'/farm-house/farmhouse10.webp'},
                  {src:'/farm-house/farmhouse11.webp'},
{src: '/farm-house/farmhouse12.webp'}
    ],
    client: 'Private',
    area: '12 Acres',
    status: 'Completed',
    scope: ['Architectural Design', 'Interior Design', 'Landscape Integration','Project Management'],
  },
  {
    id: 'p2',
    name: 'Bungalow',
    category: 'Residential',
    location: 'DHA, Karachi',
    year: '2024',
    image: '/modern-banglo/banglo1.webp',
description: 'A contemporary private residence designed for a small family on a 500-square-yard plot in DHA Phase VII, Karachi. The architectural concept focuses on creating a refined, functional home that balances family living with moments of privacy and visual drama. A defining feature of the residence is the entrance waterfall, conceived as a continuous architectural element cascading from the ground floor down to the basement. Positioned as a focal point along the arrival sequence, it creates a distinctive sensory experience both when entering and departing the residence. A sculptural cantilevered crown further accentuates the building’s contemporary character and adds a strong architectural identity to the façade. The design language is distinctly modern, combining natural stone, wood, and contemporary finishes to establish a warm yet sophisticated material palette. The residence accommodates six bedrooms, complemented by an additional guest bedroom at basement level, ensuring flexibility for both family and guest living. Our scope encompassed Architecture, Interior Design, and Project Management, delivering a cohesive design vision from concept through execution.',
    orientation: 'portrait',
    gallery: [
          { src: '/modern-banglo/banglo1.webp' },
  { src: '/modern-banglo/banglo2.webp'},
  { src: '/modern-banglo/banglo3.webp' },
  { src: '/modern-banglo/banglo4.webp' },
  { src: '/modern-banglo/banglo5.webp' },
  { src: '/modern-banglo/banglo6.webp' },
  { src: '/modern-banglo/banglo7.webp' },
  { src: '/modern-banglo/banglo8.webp' },
  { src: '/modern-banglo/banglo9.webp', orientation: 'portrait' },
  { src: '/modern-banglo/banglo10.webp', orientation: 'portrait' },
  { src: '/modern-banglo/banglo11.webp' },
  { src: '/modern-banglo/banglo12.webp' },
  { src: '/modern-banglo/banglo13.webp',orientation: 'portrait' },
  { src: '/modern-banglo/banglo14.webp',  orientation: 'portrait'},
  { src: '/modern-banglo/banglo15.webp' },
    { src: '/modern-banglo/banglo16.webp' },
    { src: '/modern-banglo/banglo17.webp' },
    { src: '/modern-banglo/banglo18.webp' },
    { src: '/modern-banglo/banglo19.webp' },
    { src: '/modern-banglo/banglo20.webp' },

    ],
    client: 'Private',
    area: '500 sq.yds.',
    status: 'Completed',
    scope: ['Architecture', 'Interior Design', 'Project Management'],
  },
    {
    id: 'p3',
    name: 'Apartment',
    category: 'Interior',
    location: 'Karachi',
    year: '2024',
    image: '/interior/1.webp',
    description: 'A thoughtfully curated 1,400 sq. ft. three-bedroom apartment with drawing and dining spaces, complemented by a private rooftop retreat. Originally purchased in builder condition, the residence was transformed through a bespoke interior design approach tailored to the family’s lifestyle, spatial requirements, and personal preferences. The interiors follow a contemporary, Scandinavian-inspired design language, defined by clean modern lines, warm tonal layering, and natural textures. A restrained material palette and carefully considered detailing create a sense of minimalism without compromising on character or sophistication. Each space was designed to feel calm, functional, and refined, with custom elements and subtle contrasts adding depth to the otherwise understated aesthetic. The result is an elegant family residence that balances everyday practicality with a distinctly personal sense of warmth and luxury.',
            gallery: [
                    // { src: '/interior/1.webp' },

                    { src: '/interior/2.webp' },
                    { src: '/interior/3.webp' },
                     { src: '/interior/4.webp'},
                     { src: '/interior/5.webp'},
        ],
    client: 'Private',
    area: '500 sq.yds.',
    status: 'Completed',
    scope: ['Interior Design'],
  },
  {
    id: 'p4',
    name: 'Hotel',
    category: 'Commercial',
    location: 'Saddar, Karachi',
    year: '2024',
    image: '/commercial/1.webp',
    description: 'A G+5 hospitality project located in Saddar, Karachi, developed on a narrow and elongated 320-square-yard plot with a limited 30-foot frontage. The primary architectural challenge was to create a distinctive hotel identity within a constrained footprint while integrating a terrace, strong street presence, and a contemporary façade. The elevation was conceived through a massing-based approach, defined by a bold interplay of solid and void. This composition creates depth, rhythm, and visual prominence while establishing a strong modern identity within the surrounding commercial context. Durable architectural coatings further reinforce the building’s contemporary character. The interiors follow a minimal and functional hospitality-driven approach, creating a consistent, calm, and uncluttered environment for guests. The design prioritizes efficiency, comfort, and visual continuity across the hotel while maintaining a refined contemporary character.',
        gallery: [
                    { src: '/commercial/1.webp' },

          { src: '/commercial/1night.webp' },
                    { src: '/commercial/2.webp',orientation: 'portrait' },
                    { src: '/commercial/2night.webp',orientation: 'portrait' },
                     { src: '/commercial/10.webp',orientation: 'portrait'},
                     { src: '/commercial/11night.webp',orientation: 'portrait'},
 { src: '/commercial/3.webp'},
                    { src: '/commercial/3night.webp'},
{ src: '/commercial/4.webp'},
                    { src: '/commercial/4night.webp'},
                     { src: '/commercial/5.webp'},
{ src: '/commercial/5night.webp'},
        ],
    client: 'Private',
    area: '500 sq.yds.',
    status: 'Completed',
    scope: ['Architectural Design', 'Interior Design', 'Project Management'],
  },
 
  
];

export const services: Service[] = [
  {
    id: 's1',
    title: 'Architectural Consultation',
    description: 'Strategic advisory on feasibility, site potential, and design direction before a single line is drawn.',
    icon: PencilRuler,
    details: ['Site feasibility analysis', 'Programmatic studies', 'Budget benchmarking', 'Design direction workshops'],
  },
  {
    id: 's2',
    title: 'Architectural Design',
    description: 'End-to-end architectural design from concept through construction documents, engineered for precision.',
    icon: Box,
    details: ['Concept design', 'Schematic design', 'Design development', 'Construction documents'],
  },
  {
    id: 's3',
    title: 'Custom Home Design',
    description: 'Bespoke residences crafted around your lifestyle, site, and vision — never repeated, always singular.',
    icon: Home,
    details: ['Site-responsive design', 'Lifestyle programming', 'Custom material palettes', 'Landscape integration'],
  },
  {
    id: 's4',
    title: 'Building & Renovation',
    description: 'Ground-up construction and renovation with rigorous quality control and craft execution.',
    icon: Hammer,
    details: ['Construction administration', 'Quality control', 'Heritage renovation', 'Structural retrofit'],
  },
  {
    id: 's5',
    title: 'Interior Design',
    description: 'Complete interior environments where materiality, light, and proportion compose a unified whole.',
    icon: Sofa,
    details: ['Space planning', 'Material specification', 'Custom millwork', 'Lighting design'],
  },
  {
    id: 's6',
    title: 'Planning & Zoning',
    description: 'Navigating approvals, permits, and zoning compliance so your project clears regulation cleanly.',
    icon: FileCheck,
    details: ['Zoning analysis', 'Permit applications', 'Entitlement strategy', 'Agency coordination'],
  },
  {
    id: 's7',
    title: '3D Visualization',
    description: 'Photoreal rendering and realtime visualization that lets you inhabit a space before it exists.',
    icon: Box,
    details: ['Photoreal rendering', 'Realtime walkthroughs', 'VR experiences', 'Animation'],
  },
  {
    id: 's8',
    title: 'Project Management',
    description: 'Full-lifecycle delivery — schedule, budget, and coordination held to the highest standard.',
    icon: ClipboardList,
    details: ['Schedule management', 'Budget control', 'Consultant coordination', 'Risk mitigation'],
  },
  {
    id: 's9',
    title: 'Site Master Planning',
    description: 'Large-scale land planning that organizes circulation, density, and program across entire sites.',
    icon: Map,
    details: ['Land use studies', 'Circulation planning', 'Density models', 'Phasing strategy'],
  },
];

export const stats = [
  { value: '10+', label: 'Years of Practice' },
  { value: '60+', label: 'Projects Delivered' },
  { value: '6+', label: 'Countries' },
  {value: '40+', label: 'CLIENTS SERVED'},
    {value: '100K+', label: 'SQ. FT. DESIGNED'},
];



export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with deep listening — understanding your site, your program, your ambition. This phase defines the brief and the constraints that will shape every decision that follows.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'From the brief, we develop a clear architectural concept — a single organizing idea that gives the project its logic and its character. We test it against budget, code, and site.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'The concept is developed into a complete design — plans, sections, elevations, material palettes, and structural systems, all resolved to a level of detail that leaves nothing to chance.',
  },
  {
    number: '04',
    title: 'Documentation',
    description: 'We produce a complete construction document set — precise, coordinated, and buildable. Every junction, every dimension, every specification is documented.',
  },
  {
    number: '05',
    title: 'Construction',
    description: 'During construction we administer the contract, review shop drawings, inspect workmanship, and protect the design intent — ensuring what gets built is what was designed.',
  },
  {
    number: '06',
    title: 'Handover',
    description: 'We deliver a building that meets every requirement — functional, aesthetic, regulatory. Then we walk you through it, every space, every system, every detail.',
  },
];

