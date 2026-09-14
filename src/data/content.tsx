import {
  PencilRuler,
  Home,
  Hammer,
  Sofa,
  FileCheck,
  Box,
  ClipboardList,
  Map,Video,Ruler,
} from 'lucide-react';

export type Project = {
  id: string;
  slug: string;
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



// type Service = {
//   // ...existing fields
//   credentials?: {
//     summary: string;
//     badges: { label: string; detail: string }[];
//   };
//   portfolioPreview?: {
//     title: string;
//     image: string;
//     location?: string;
//     href?: string;
//   }[];
//   testimonials?: {
//     name: string;
//     quote: string;
//     project: string;
//     rating?: number; // default 5
//   }[];
//   packages?: {
//     name: string;
//     startingPrice: string;
//     description: string;
//     features: string[];
//   }[];
//     serviceArea?: string;
//   areaServed?: string[]
// };
type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  overview: string;
  metaDescription: string;
  howItWorks: {
    title: string;
    description: string;
  }[];
  scopeNote?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  credentials?: {
    summary: string;
    badges: {
      label: string;
      detail: string;
    }[];
  };
  portfolioPreview?: {
    title: string;
    image: string;
    location?: string;
    href?: string;
  }[];
  testimonials?: {
    name: string;
    quote: string;
    project: string;
    rating?: number;
  }[];
  packages?: {
    name: string;
    startingPrice: string;
    description: string;
    features: string[];
  }[];
  serviceArea?: string;
  areaServed?: string[];
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


export const projects: Project[] = [
  {
    id: 'p1',
   slug: 'the-palm-haus',
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
        slug: 'hotel-saddar-karachi',
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
    area: '320 sq.yds.',
    status: 'Completed',
    scope: ['Architectural Design', 'Interior Design', 'Project Management'],
  },
   {
    id: 'p3',
          slug: 'interior-apartment',
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
          slug: 'bungalow',
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
   
 
  
];

export const services: Service[] = [
  
{
  id: 's1',
  slug: 'architectural-design',
  title: 'Architectural Design',
  serviceArea: 'On-Site & Studio Service · Pakistan',   
  areaServed: ['Pakistan'],
  description: 'Bespoke structural blueprints and elevation concepts engineered for Pakistan’s climate and zoning laws.',
  icon: Home, 
  details: ['Zoning & SBCA compliance', 'Space planning & zoning', 'Structural & MEP drawings', '3D elevation design'],
  overview:
    'Great architecture blends form with regional functionality. For our projects in Pakistan, DESCORP creates luxury residential and commercial architecture tailored to the local climate, plot dynamics, and local building authorities. We deliver comprehensive, buildable blueprint sets—including structural, electrical, and plumbing layouts—while conducting regular site visits to ensure the masonry matches our exact vision.',
  metaDescription:
    'Top architectural design services in Karachi, Pakistan. DESCORP delivers luxury house plans, 3D front elevations, and SBCA approved technical blueprints.',
  howItWorks: [
    { title: 'Site Analysis & Zoning', description: 'We conduct physical site surveys and verify local regulatory boundaries (SBCA/LDA/DHA bylaws).' },
    { title: 'Conceptual Schematics', description: 'We present initial space planning layouts, floor plans, and 3D front elevation concepts for your review.' },
    { title: 'Technical Documentation', description: 'We compile comprehensive structural, mechanical, electrical, and plumbing (MEP) working blueprints.' },
    { title: 'Site Inspection Visits', description: 'Our architects visit the site at crucial milestones (foundation, layout, layout marking, slab casting) to verify execution.' },
  ],
  scopeNote:
    'DESCORP provides complete architectural, structural, and engineering design layouts. Official authority submission fees and physical construction labor are managed separately, though we provide complete support to ensure your contractor executes the plans accurately.',
  faqs: [
    { question: 'Do your architectural designs comply with local authorities like SBCA or DHA?', answer: 'Yes, absolutely. All our architectural blueprints and structural layouts are engineered strictly according to the specific zoning bylaws, setbacks, and structural regulations of the relevant local authority.' },
    { question: 'Will the architect visit the site during the initial construction phases?', answer: 'Yes. For all architecture projects in Pakistan, our design team schedules physical site visits during critical milestones—such as layout marking on the ground and slab casting—to cross-check dimensions and design accuracy.' },
  ],
},

{
  id: 's5',
  slug: 'interior-design',
  title: 'Interior Design',
  description: 'Complete interior environments where premium materiality, custom millwork, and lighting compose a unified whole.',
  icon: Sofa,
  details: ['Space planning', 'Material specification', 'Custom millwork & furniture', 'Lighting design'],
  overview:
    'Every space tells a story. We craft high-end interiors that reflect your lifestyle, translated into detailed layouts, curated material palettes, and photorealistic 3D renders. For our Pakistan-based clients, we do not just design digitally; we coordinate with local vendors and oversee the implementation to ensure our vision is flawlessly executed on-site.',
  metaDescription:
    'Premium interior design services in Karachi, Pakistan. DESCORP offers custom millwork, luxury material sourcing, space planning, and turnkey design execution.',
  howItWorks: [
    { title: 'Site Survey & Consultation', description: 'We conduct a detailed physical inspection and measure your space on-site in Karachi.' },
    { title: 'Concept & Mood Boards', description: 'We present physical material samples and design direction layouts at our studio or your site.' },
    { title: 'Detailed 3D Renders', description: 'Photorealistic 3D visualizations and space planning layouts are developed with your feedback.' },
    { title: 'Vendor Coordination', description: 'We provide working drawings and coordinate with local site teams for exact design execution.' },
  ],
  scopeNote:
    'DESCORP provides complete interior design layouts, 3D visualizations, and strict material specifications. While physical procurement and labor installation are billed separately, our team provides necessary quality checks to ensure precise on-site execution.',
  faqs: [
    { question: 'Do you visit the site in person for interior design projects?', answer: 'Yes, absolutely. For all interior design projects in Karachi, our team conducts in-person site visits for initial measurements, layout analysis, and regular execution quality checks.' },
    { question: 'Do you manufacture custom furniture and millwork?', answer: 'We design custom furniture, wardrobes, and kitchen cabinetry, and work with trusted local manufacturing workshops to fabricate these elements according to exact project standards.' },
  ],
},



  
  {
    id: 's4',
    slug: 'building-renovation',
    title: 'Building & Renovation',
    serviceArea: 'Service · Pakistan',   
areaServed: ['Pakistan'],
    description: 'Ground-up construction and renovation with rigorous quality control and craft execution.',
    icon: Hammer,
    details: ['Construction administration', 'Quality control', 'Heritage renovation', 'Structural retrofit'],
    overview: 'A design concept is only truly meaningful if it successfully survives the construction process. For our projects in Karachi, we provide comprehensive, end-to-end management. We directly supervise on-site construction, executing premium grey structure work with rigorous material quality control and delivering high-end interior finishes. By coordinating directly with trusted local vendors and specialized subcontractors, we ensure that every construction detail is flawlessly executed to international standards—all without burdening you with the stress of daily site supervision.',
    metaDescription: 'DESCORP provides complete design-and-build services in Karachi. We directly manage on-site supervision, premium gray structure building, and luxury interior finishing.',
   howItWorks: [
  { 
    title: 'Turnkey Execution Plan', 
    description: 'We develop detailed architectural blueprints alongside a comprehensive material specification matrix for your approval.' 
  },
  { 
    title: 'Gray Structure Mobilization', 
    description: 'Our on-site team breaks ground, directly sourcing high-grade raw materials and managing core structural foundation works.' 
  },
  { 
    title: 'Luxury Finishing Sourcing', 
    description: 'We procure premium interior materials, tiles, lighting, and custom woodwork through our trusted local and imported vendor network.' 
  },
  { 
    title: 'Daily Site Supervision', 
    description: 'Our project managers strictly monitor craftsmanship, enforce structural safety benchmarks, and handle continuous quality checks on the ground.' 
  },
],

    scopeNote:
  'For projects in Karachi, DESCORP directly manages on-site supervision, physical inspections, material quality control, and full construction execution. We handle everything from the initial gray structure build to the final luxury interior finishing.',
faqs: [
  { 
    question: 'Do you physically supervise the construction site in Karachi?', 
    answer: 'Yes, absolutely. Our dedicated project management team handles full-time, on-site physical supervision. We monitor labor, supervise both gray structure and finishing phases daily, and ensure strict alignment with the approved design.' 
  },
  { 
    question: 'Do you provide the material and labor, or do I have to manage it?', 
    answer: 'We provide complete turnkey design-and-build services. DESCORP sources premium construction materials (such as high-grade steel and cement for gray structures) and collaborates with our trusted network of skilled local sub-contractors and specialized artisans, taking the complete execution stress off your shoulders.' 
  },
  {
    question: 'Can you work with an external contractor if I already have one?',
    answer: 'While we prefer executing the project ourselves to ensure the highest finishing quality, we can provide design documentation and periodic on-site quality reviews to coordinate with your preferred licensed contractor in Karachi.'
  }
],
  },
  

 
 
  {
  id: 's8',
  slug: 'project-management',
  title: 'Project Management',
  serviceArea: 'On-Site Service · Pakistan',   
  areaServed: ['Pakistan'],
  description: 'Full-lifecycle on-site delivery — schedule, budget, and labor coordination held to the highest standard.',
  icon: ClipboardList,
  details: ['Schedule management', 'Budget control', 'Contractor coordination', 'Quality assurance & risk mitigation'],
  overview:
    'Bringing a design to life requires flawless execution. For our Pakistan-based projects, DESCORP handles the complete project lifecycle directly on site. We manage timelines, control construction budgets, and coordinate all local sub-contractors and vendors on the ground to guarantee that project execution matches our exact design standards without any delays.',
  metaDescription:
    'Professional on-site project management services in Karachi, Pakistan. DESCORP controls construction budgets, monitors timelines, and coordinates site labor.',
  howItWorks: [
    { title: 'Baseline & Budgeting', description: 'We establish strict project timelines and material budget baselines before breaking ground.' },
    { title: 'On-Site Coordination', description: 'Our managers directly supervise site labor, technical consultants, and material deliveries on the ground.' },
    { title: 'Progress Tracking', description: 'We conduct regular on-site milestones audits and provide transparent progress reports to you.' },
    { title: 'Quality & Risk Control', description: 'Continuous structural quality checks and active risk management to prevent budget or timeline overflows.' },
  ],
  scopeNote:
    'For projects in Pakistan, DESCORP provides full on-the-ground management, day-to-day site coordination, and vendor oversight. Physical labor and raw material costs are billed based on approved project baselines.',
  faqs: [
    { question: 'Will you physically manage and oversee my construction site in Karachi?', answer: 'Yes, absolutely. Our project management service is entirely on-site. We deploy dedicated supervisors to manage day-to-day ground operations, coordinate contractors, and ensure strict quality control.' },
    { question: 'How do you control the construction budget and avoid hidden costs?', answer: 'We lock in a comprehensive material and labor cost matrix during the initial phase. Any potential market price risks are calculated beforehand, and regular budget reviews ensure the project stays within the approved financial baseline.' },
  ],
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

