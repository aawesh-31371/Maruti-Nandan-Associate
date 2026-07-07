/* Default data for the application */

const civilImage = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80';
const electricalImage = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80';
const telecomImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80';
const waterImage = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80';

export const defaultProjects = [
  {
    id: '1',
    title: 'Telecommunications Turnkey Rollout & Maintenance',
    description: 'Turnkey rollout and maintenance support for telecommunications infrastructure, including engineering coordination, material planning, site execution, quality assurance, and safety-led delivery for operators and infrastructure providers.',
    category: 'Infrastructure',
    location: 'Across India',
    budget: 'As per project scope',
    completionDate: '2021-03-09',
    status: 'Completed',
    client: 'Bharti Infratel Ltd. / Indus Tower Ltd.',
    timeline: 'Ongoing support since 2021',
    materials: ['Telecom materials', 'Electrical accessories', 'Civil foundations', 'Safety equipment'],
    highlights: ['Turnkey rollout', 'Network maintenance', 'Quality assurance', 'Safety supervision'],
    coverImage: telecomImage,
    gallery: [telecomImage, civilImage],
  },
  {
    id: '2',
    title: 'State Water and Sanitation Mission Works',
    description: 'Water infrastructure execution including laying and welding of different diameter HDPE pipes, door-to-door GI fittings with accessories, boundary wall construction, and staff quarter works for SWSM-related projects.',
    category: 'Infrastructure',
    location: 'Uttar Pradesh',
    budget: 'As per work order',
    completionDate: '2021-06-19',
    status: 'Completed',
    client: 'State Water and Sanitation Mission',
    timeline: 'Project-based execution',
    materials: ['HDPE pipes', 'GI fittings', 'RCC', 'Masonry materials'],
    highlights: ['HDPE pipe laying', 'Pipe welding', 'Door-to-door GI fitting', 'Boundary wall construction'],
    coverImage: waterImage,
    gallery: [waterImage, civilImage],
  },
  {
    id: '3',
    title: 'Electrical Distribution Installation Works',
    description: 'Electrical site works covering STP and PCC pole installation, T-off fittings, disk and pin insulators, sub-station double pole installation, XLPE cable laying, transformer installation, stay sets, fuse sets, and chemical earthing.',
    category: 'Industrial',
    location: 'Uttar Pradesh',
    budget: 'As per project scope',
    completionDate: '2021-06-14',
    status: 'Completed',
    client: 'Electrical and infrastructure clients',
    timeline: 'Site-specific schedule',
    materials: ['PCC poles', 'XLPE cable', 'Transformers', 'GI pipe', 'MS earthing rods'],
    highlights: ['Pole installation', 'Transformer installation', 'XLPE cable laying', 'Chemical earthing'],
    coverImage: electricalImage,
    gallery: [electricalImage, telecomImage],
  },
  {
    id: '4',
    title: 'Civil RCC and Structural Site Works',
    description: 'Civil construction activities including bar bending, cutting and shuttering of piles and pile caps, pier shafts and pier caps, RCC road construction with pavement quality concrete, deck slab casting, staging, and allied site execution.',
    category: 'Commercial',
    location: 'Uttar Pradesh',
    budget: 'As per project scope',
    completionDate: '2021-04-19',
    status: 'Completed',
    client: 'Neelkantha Construction and infrastructure vendors',
    timeline: 'Project-based execution',
    materials: ['RCC', 'PQC', 'Reinforcement steel', 'Shuttering material'],
    highlights: ['Pile and pile cap work', 'Pier shaft and pier cap work', 'RCC road construction', 'Deck slab casting'],
    coverImage: civilImage,
    gallery: [civilImage, waterImage],
  },
  {
    id: '5',
    title: 'Project Management and Site Supervision',
    description: 'End-to-end site management covering project planning, crew supervision, time and material estimates, work-in-progress monitoring, daily audits, quality checks, safety awareness, and liaison with government and non-government agencies.',
    category: 'Infrastructure',
    location: 'Ghazipur, Uttar Pradesh',
    budget: 'As per engagement',
    completionDate: '2021-03-09',
    status: 'Ongoing',
    client: 'Infrastructure, telecom, civil, water, and energy clients',
    timeline: 'Continuous engagement',
    materials: ['Planning systems', 'Quality checklists', 'Safety resources', 'PPE'],
    highlights: ['Crew supervision', 'Daily site audit', 'Quality assurance', 'Government liaison'],
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      civilImage,
    ],
  },
  {
    id: '6',
    title: 'Energy, Civil and Utility Infrastructure Support',
    description: 'Integrated engineering, materials, and services support for energy, civil, water, and telecommunications sectors with a focus on cost-competitive execution, dependable delivery, and continuous improvement.',
    category: 'Infrastructure',
    location: 'India',
    budget: 'As per client requirement',
    completionDate: '2022-05-20',
    status: 'Ongoing',
    client: 'GPT Infra Projects Ltd., NCC Ltd., VSA Projects Ltd.',
    timeline: 'Client-specific delivery cycles',
    materials: ['Civil materials', 'Electrical materials', 'Water infrastructure materials', 'Telecom materials'],
    highlights: ['Turnkey solutions', 'Multi-sector delivery', 'Onshore execution', 'Long-term client relationships'],
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      electricalImage,
    ],
  },
];

export const defaultMessages = [];

export const companyInfo = {
  name: 'Maruti Nandan Associate',
  tagline: 'Turnkey Infrastructure Solutions',
  phone: ['+91 8175082179'],
  email: 'Marutinandanassociate@outlook.com',
  address: '165/1 Koylaghat, Miyapura, Ghazipur, Uttar Pradesh 233001',
  whatsapp: '+918175082179',
  gstin: '09BYBPR4696B1Z5',
  pan: 'BYBPR4696B',
  legalName: 'Er. Kuber Nath Rai',
  constitution: 'Proprietorship',
  epfCode: 'UPVNS2389465000',
  esiCode: '28000550860000999',
  labourCertificate: 'UPCLA66000014',
  workingHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },
  stats: {
    years: 5,
    projects: 50,
    clients: 5,
    engineers: 50,
  },
};

export const services = [
  {
    id: 1,
    title: 'Telecommunications Infrastructure',
    shortDescription: 'Turnkey telecom rollout',
    description:
      'Engineering, materials, rollout, and maintenance solutions for telecom operators, equipment manufacturers, and infrastructure providers.',
    icon: 'FaBuilding',
    image: telecomImage,
  },
  {
    id: 2,
    title: 'Water Infrastructure',
    shortDescription: 'Pipe and sanitation works',
    description:
      'HDPE pipe laying and welding, GI fitting, and water project support for sanitation and utility infrastructure.',
    icon: 'FaProjectDiagram',
    image: waterImage,
  },
  {
    id: 3,
    title: 'Civil Construction',
    shortDescription: 'RCC and site execution',
    description:
      'Pile, pile cap, pier shaft, pier cap, RCC road, deck slab, boundary wall, and staff quarter construction works.',
    icon: 'FaTools',
    image: civilImage,
  },
  {
    id: 4,
    title: 'Energy & Electrical Works',
    shortDescription: 'Electrical installation support',
    description:
      'Installation of poles, insulators, sub-station double poles, XLPE cables, transformers, stay sets, fuse sets, and chemical earthing.',
    icon: 'FaIndustry',
    image: electricalImage,
  },
  {
    id: 5,
    title: 'Project Management',
    shortDescription: 'Planning and supervision',
    description:
      'Project planning, crew supervision, time and material estimates, quality assurance, WIP monitoring, audits, and reporting.',
    icon: 'FaProjectDiagram',
  },
  {
    id: 6,
    title: 'Safety & Quality Assurance',
    shortDescription: 'Safe, compliant delivery',
    description:
      'Health and safety implementation, hazard identification, risk control, PPE, training, site awareness, and quality checks.',
    icon: 'FaDraftingCompass',
  },
  {
    id: 7,
    title: 'Government Liaison',
    shortDescription: 'Agency coordination',
    description:
      'Coordination and liaison with government and non-government agencies to keep site execution and approvals moving smoothly.',
    icon: 'FaRoad',
  },
  {
    id: 8,
    title: 'Turnkey Maintenance',
    shortDescription: 'Reliable support',
    description:
      'Optimised full turnkey rollout and maintenance services delivered with dependable teams and continuous improvement practices.',
    icon: 'FaBuilding',
  },
];

export const teamMembers = [
  {
    name: 'Er Kuber Nath Rai',
    role: 'Proprietor & Promoter',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Promoter of the firm with more than 5 years of experience in engineering and management.',
  },
  {
    name: 'Er Kumar Shubham Singh',
    role: 'Promoter & Mentor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Promoter and mentor with around 5 years of experience in engineering services.',
  },
  {
    name: 'Mr. Deependra Kumar Rai',
    role: 'Site Planning & Installation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Key team asset with more than 4 years of experience in site planning and installation activities.',
  },
  {
    name: 'Mr. Abhishek Singh',
    role: 'Management & Safety',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'Management services professional with more than 3 years of experience, focused on safety, health, and environment.',
  },
];

export const testimonials = [
  {
    name: 'Bharti Infratel Ltd.',
    role: 'Telecommunications Infrastructure Client',
    text: 'Maruti Nandan Associate provides dependable project support with strong attention to site coordination, quality, and safety requirements.',
    rating: 5,
  },
  {
    name: 'Indus Tower Ltd.',
    role: 'Telecommunications Infrastructure Client',
    text: 'Their team brings useful field experience across telecom rollout and maintenance activities, with a practical approach to execution.',
    rating: 5,
  },
  {
    name: 'GPT Infra Projects Ltd.',
    role: 'Infrastructure Client',
    text: 'The firm has supported infrastructure works with disciplined planning, site supervision, and timely coordination.',
    rating: 5,
  },
  {
    name: 'NCC Ltd.',
    role: 'Civil Infrastructure Client',
    text: 'Maruti Nandan Associate is focused on quality workmanship, safety awareness, and consistent site monitoring.',
    rating: 5,
  },
];

export const timeline = [
  { year: '2019', title: 'Early Field Experience', description: 'Mr. Kuber Nath Rai worked with Neelkantha Construction from 26 March 2019 to 19 April 2021, gaining water works and quality-side site experience.' },
  { year: '2021', title: 'Firm Established', description: 'Maruti Nandan Associate was registered as a proprietorship with GSTIN 09BYBPR4696B1Z5 on 09 March 2021.' },
  { year: '2021', title: 'EPF Registration', description: 'Employees Provident Fund code UPVNS2389465000 was allotted on 14 June 2021.' },
  { year: '2021', title: 'ESI Registration', description: 'Employees State Insurance code 28000550860000999 was allotted for the establishment.' },
  { year: '2021', title: 'Labour Registration', description: 'Contract Labour registration certificate UPCLA66000014 was issued on 19 June 2021 for works contract activity.' },
  { year: '2022', title: 'Company Profile', description: 'The firm presented its multi-sector capability across telecommunications, water, civil, and energy services.' },
];

export const galleryCategories = ['All', 'Telecommunications', 'Water', 'Civil', 'Electrical', 'Infrastructure'];
