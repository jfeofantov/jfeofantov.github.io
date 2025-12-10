export type BoroughPage = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  highlights: string[];
  services: string[];
  quote: {
    text: string;
    author: string;
  };
  serviceFocus: string;
  stat: {
    label: string;
    value: string;
  };
};

export const boroughPages: BoroughPage[] = [
  {
    slug: 'chelsea',
    name: 'Chelsea',
    headline: 'Colour-drenched interiors and precise exterior upkeep for Chelsea homes.',
    intro: 'We coordinate concierge access, protect bespoke finishes, and document every Farrow & Ball formula for townhouse owners.',
    highlights: ['Interior painting with designer palettes', 'Wallpaper removal + installation', 'Balcony and sash window maintenance'],
    services: ['Colour consultations', 'Joinery spraying', 'Exterior restoration', 'Discrete crew scheduling'],
    quote: {
      text: 'Prime Coat ran our Chelsea repaint like a design studio—daily recaps, colour samples, and a gallery-ready finish.',
      author: 'Charlotte W., homeowner'
    },
    serviceFocus: 'Interior + exterior painting',
    stat: { label: 'Chelsea projects delivered', value: '120+' }
  },
  {
    slug: 'kensington',
    name: 'Kensington',
    headline: 'White-glove exterior painting and mould treatment around Kensington Palace Gardens.',
    intro: 'High-level access, conservation guidelines, and anti-mould systems handled end-to-end for listed homes and penthouses.',
    highlights: ['Specialist exterior coatings', 'Mould + damp treatment', 'Stone + ironmongery care'],
    services: ['Listed-building compliance', 'Breathable render systems', 'Sash window restoration', 'Seasonal maintenance'],
    quote: {
      text: 'They handled scaffold, neighbours, and even conservation officers. The exterior looks immaculate.',
      author: 'Edward R., property manager'
    },
    serviceFocus: 'Exterior painting',
    stat: { label: 'Heritage exteriors restored', value: '60+' }
  },
  {
    slug: 'islington',
    name: 'Islington',
    headline: 'Fast rental refreshes and bespoke colour blocking for design-led terraces.',
    intro: 'From wallpaper removal to same-week turnovers, we keep property managers and landlords in Islington on schedule.',
    highlights: ['Wallpaper removal + lining', 'Tenant-safe mould treatment', 'WhatsApp-managed turnovers'],
    services: ['Wallpaper removal', 'Colour blocking + murals', 'Rental turnover programs', 'Punch-list repairs'],
    quote: {
      text: 'Our lettings never miss a target now—Prime Coat refreshes flats in between tenants with zero mess.',
      author: 'Mae T., landlord'
    },
    serviceFocus: 'Wallpaper removal + interiors',
    stat: { label: 'Rental refresh partners', value: '18' }
  },
  {
    slug: 'canary-wharf',
    name: 'Canary Wharf',
    headline: 'Out-of-hours teams for corporate apartments, lobbies, and amenities.',
    intro: 'We liaise with building management, deliver low-odour finishes, and send daily photo reports for offshore owners.',
    highlights: ['Dust-free interior painting', 'Mould-resistant bathrooms', 'Amenity + lobby resprays'],
    services: ['Night-shift crews', 'Amenity space upkeep', 'Low-odour systems', 'Corporate snagging'],
    quote: {
      text: 'They ran a full lobby makeover after hours—tenants never saw a drop cloth and the finish is flawless.',
      author: 'Lena A., asset manager'
    },
    serviceFocus: 'Interior painting',
    stat: { label: 'Corporate units repainted', value: '75' }
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    headline: 'River-facing exteriors sealed against weather with annual maintenance plans.',
    intro: 'Prime Coat manages scaffolding, joinery repairs, and breathable exterior paints for Richmond properties.',
    highlights: ['Exterior painting + repair', 'Mould + damp control', 'Maintenance reporting'],
    services: ['Timber repair + painting', 'Mould remediation', 'Annual maintenance plans', 'Colour-matched masonry'],
    quote: {
      text: 'Our riverfront facade finally stays crisp—Prime Coat documents every coat and schedules seasonal care.',
      author: 'Oliver P., homeowner'
    },
    serviceFocus: 'Exterior painting + mould',
    stat: { label: 'Maintenance memberships', value: '12' }
  }
];

export const getBoroughBySlug = (slug: string) => boroughPages.find((page) => page.slug === slug);
