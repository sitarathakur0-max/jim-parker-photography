import weddingHeroImg from '../assets/images/wedding_editorial_hero_1789906368571.jpg';
import intimateWeddingImg from '../assets/images/intimate_wedding_moment_1789906386051.jpg';
import editorialPortraitImg from '../assets/images/editorial_portrait_1789906398380.jpg';
import editorialCoupleImg from '../assets/images/editorial_couple_story_1789906411403.jpg';
import weddingCandidImg from '../assets/images/wedding_candid_scene_1789906425233.jpg';
import { PortfolioItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Jim Parker Photography',
  tagline: 'Cinematic Wedding & Editorial Photography',
  location: 'Heimatstrasse 7, 8003 Zürich',
  city: 'Zürich',
  country: 'Switzerland',
  postalCode: '8003',
  street: 'Heimatstrasse 7',
  phone: '+41 78 405 51 46',
  phoneClean: '+41784055146',
  rating: '5.0',
  reviewCount: 16,
  ratingSource: 'Google Reviews',
  email: 'inquiry@jimparker-photography.ch',
  coordinates: { lat: 47.3739, lng: 8.5173 },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Heimatstrasse+7+8003+Z%C3%BCrich',
};

export const IMAGES = {
  heroWedding: weddingHeroImg,
  intimateWedding: intimateWeddingImg,
  editorialPortrait: editorialPortraitImg,
  coupleStory: editorialCoupleImg,
  weddingCandid: weddingCandidImg,
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'The Courtyard Procession',
    category: 'wedding',
    categoryLabel: 'Wedding Photography',
    image: weddingHeroImg,
    aspect: 'landscape',
    caption: 'Quiet stroll through historical stone architecture, capturing authentic movement and unposed intimacy.',
    location: 'Zürich',
  },
  {
    id: 'work-2',
    title: 'Intimate Vows & Whispers',
    category: 'wedding',
    categoryLabel: 'Wedding Photography',
    image: intimateWeddingImg,
    aspect: 'portrait',
    caption: 'Documentary close-up during the marriage ceremony, honoring the depth of genuine human connection.',
    location: 'Zürich',
  },
  {
    id: 'work-3',
    title: 'Monochrome Solitude',
    category: 'portrait',
    categoryLabel: 'Editorial Portrait',
    image: editorialPortraitImg,
    aspect: 'portrait',
    caption: 'Natural chiaroscuro lighting and quiet composure, highlighting organic skin texture and contemplative gaze.',
    location: 'Studio Heimatstrasse, Zürich',
  },
  {
    id: 'work-4',
    title: 'Architectural Dialogue',
    category: 'couple',
    categoryLabel: 'Couples & Stories',
    image: editorialCoupleImg,
    aspect: 'landscape',
    caption: 'Spontaneous laughter framed against classic colonnades, blending editorial fashion aesthetic with candid warmth.',
    location: 'Zürich',
  },
  {
    id: 'work-5',
    title: 'Morning Preparations',
    category: 'wedding',
    categoryLabel: 'Wedding Photography',
    image: weddingCandidImg,
    aspect: 'landscape',
    caption: 'Soft natural daylight filtering through sheer window drapes before the ceremony begins.',
    location: 'Zürich',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    subtitle: 'Documentary & Cinematic Storytelling',
    description:
      'A thorough, unhurried documentary approach to your wedding day. From quiet morning preparations to heartfelt ceremonies and late-night celebrations, the coverage focuses on unscripted emotion, genuine human interactions, and the subtle atmosphere of your gathering.',
    highlights: [
      'Discreet, observant documentary coverage that never interrupts the natural flow of your day',
      'Civil weddings, church ceremonies, intimate elopements, and multi-day celebrations',
      'Emphasis on real emotion, unscripted glances, and authentic atmosphere',
      'Coverage throughout Zürich, surrounding cantons, and international destination weddings',
    ],
    deliverables: [
      'Comprehensive pre-wedding consultation and timeline planning',
      'Individually graded high-resolution digital negatives ready for print',
      'Private, password-protected online client gallery for effortless viewing and downloading',
      'Full personal printing rights and high-speed cloud backup',
    ],
    image: weddingHeroImg,
  },
  {
    id: 'editorial-portraits',
    title: 'Editorial & Creative Portraits',
    subtitle: 'Atmospheric, Timeless Character Studies',
    description:
      'Artistic portraiture crafted with intentional lighting, thoughtful composition, and space for genuine expression. Sessions can take place at the Heimatstrasse studio or in atmospheric outdoor and architectural locations around Zürich.',
    highlights: [
      'Subtle lighting tailored to individuality rather than rigid poses',
      'Suitable for artists, creatives, performers, and personal documentation',
      'Deep exploration of monochrome contrast and organic texture',
    ],
    deliverables: [
      'Collaborative concept and mood discussion prior to the session',
      'Curated proof gallery with select editorial retouches',
      'High-resolution master files and web-optimized deliverables',
    ],
    image: editorialPortraitImg,
  },
  {
    id: 'couples-intimate',
    title: 'Couples & Engagement Sessions',
    subtitle: 'Unposed, Cinematic Connections',
    description:
      'Intimate sessions designed around movement, honest conversation, and shared stillness. Whether celebrating an engagement, an anniversary, or simply a chapter of life together, these photographs record how your connection feels rather than how it looks staged.',
    highlights: [
      'Dynamic walks through historic Zürich quarters, lakeshores, or natural surroundings',
      'Relaxed, conversational atmosphere with gentle guidance',
      'Natural light photography with editorial framing',
    ],
    deliverables: [
      'Location curation and wardrobe palette guidance',
      'Complete collection of high-resolution digital images',
      'Private online gallery with instant download privileges',
    ],
    image: editorialCoupleImg,
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We begin with an in-depth conversation—in person at Heimatstrasse 7 in Zürich or via phone/video—to understand your aesthetic vision, the rhythm of your day, and what matters most to you.',
  },
  {
    number: '02',
    title: 'Curation & Timeline Flow',
    description:
      'Together we review the lighting conditions, venue architecture, and scheduling nuances. You receive calm guidance on timing to ensure you spend your day present with guests rather than facing a camera.',
  },
  {
    number: '03',
    title: 'The Photography Day',
    description:
      'On the day itself, Jim Parker operates with an observant, unobtrusive presence. Moments unfold naturally without forced pauses or staged poses, preserving genuine emotion.',
  },
  {
    number: '04',
    title: 'Editorial Grading & Delivery',
    description:
      'Each image undergoes meticulous individual curation and color grading to ensure rich blacks, luminous midtones, and archival consistency. Delivered in a private high-resolution gallery.',
  },
];

export const EXPECTATIONS = [
  {
    title: 'Unobtrusive Documentary Presence',
    description:
      'You and your guests will rarely notice the lens. By blending quietly into the background, the photographs capture genuine tears, spontaneous laughter, and subtle gestures that staged photography misses.',
  },
  {
    title: 'Timeless Aesthetic Over Fleeting Trends',
    description:
      'Every frame is edited with deep respect for natural contrast, skin tones, and atmospheric lighting. Avoided are heavy artificial filters that age poorly, ensuring your gallery remains timeless decades later.',
  },
  {
    title: 'Bespoke Preparation & Direct Communication',
    description:
      'As an independent photographer, Jim Parker handles every aspect personally—from your first phone inquiry to the final file export. No outsourced shooters or generic customer desks.',
  },
  {
    title: 'Full Resolution Archival Delivery',
    description:
      'All delivered images are full-resolution digital files with personal printing rights, accompanied by web-optimized copies for easy digital sharing with family and friends.',
  },
];
