// ============================================================================
//  SITE CONFIG — edit this file to change almost all the website content.
//  Everything Thomas/Les needs to personalise lives here in plain English.
//  (Replace the PLACEHOLDER values marked with  ⬅ EDIT  with the real details.)
// ============================================================================

export const business = {
  name: 'Thomas Fagan Gardening Services',
  shortName: 'Thomas Fagan Gardening',
  tagline: 'Friendly, reliable garden care for your local area',
  // ⬅ EDIT — the area Thomas covers
  serviceArea: 'your local area',
  // ⬅ EDIT — contact details
  phone: '07000 000000',
  phoneHref: 'tel:+447000000000',
  email: 'hello@thomasfagangardening.co.uk',
  // ⬅ EDIT — WhatsApp number in international format, no spaces (used for the wa.me link)
  whatsapp: '447000000000',
  // ⬅ EDIT — social links (leave as null to hide)
  social: {
    facebook: null,
    instagram: null,
  },
  // A short, friendly trust line shown in a few places
  established: 'A local, independent gardener who takes pride in every job.',
}

export const services = [
  {
    icon: 'Scissors',
    title: 'Lawn Mowing & Care',
    summary:
      'Regular mowing, edging and feeding to keep your lawn neat, healthy and green all season.',
    points: ['Weekly or fortnightly visits', 'Neat edges every time', 'Clippings taken away'],
    image: '/images/service-lawn.jpg',
    imageAlt: 'A freshly mown striped green lawn in a sunny garden',
  },
  {
    icon: 'TreeDeciduous',
    title: 'Hedge & Shrub Trimming',
    summary:
      'Crisp, tidy hedges and healthy shrubs, shaped and pruned with care and all waste cleared.',
    points: ['Shaping and reducing', 'Seasonal pruning', 'Tidy finish, no mess left behind'],
    image: '/images/service-hedge.jpg',
    imageAlt: 'A neatly trimmed green hedge alongside a garden path',
  },
  {
    icon: 'Sprout',
    title: 'Planting & Borders',
    summary:
      'Seasonal planting, weeding and bed maintenance to bring colour and life to your borders.',
    points: ['Bedding and seasonal colour', 'Weeding and mulching', 'Advice on what thrives'],
    image: '/images/service-planting.jpg',
    imageAlt: 'Colourful flowers being planted in a well-kept garden border',
  },
  {
    icon: 'Trash2',
    title: 'Garden Clearance & Tidy-ups',
    summary:
      'Overgrown garden? A full clear-up and tidy to get things back under control and looking great.',
    points: ['Overgrowth cleared', 'Leaves and debris removed', 'One-off or seasonal'],
    image: '/images/service-clearance.jpg',
    imageAlt: 'A tidy, well-maintained back garden with lawn and planting',
  },
  {
    icon: 'Leaf',
    title: 'Weeding & Maintenance',
    summary:
      'Keeping paths, patios and beds free of weeds, with regular maintenance visits to suit you.',
    points: ['Paths and patios kept clear', 'Regular upkeep plans', 'Reliable and on time'],
    image: '/images/service-weeding.jpg',
    imageAlt: 'Hands weeding a garden bed with gardening gloves',
  },
  {
    icon: 'Flower2',
    title: 'Pots, Tubs & Planters',
    summary:
      'Seasonal pots and planters arranged and looked after to brighten doorways and patios.',
    points: ['Seasonal displays', 'Watering and care', 'Front-of-house kerb appeal'],
    image: '/images/service-pots.jpg',
    imageAlt: 'Colourful potted plants arranged on a patio',
  },
]

// Gallery — swap these Unsplash placeholders for real photos of Thomas's work.
export const gallery = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'A beautifully maintained garden with a striped lawn and flower borders',
    caption: 'A tidy lawn makes the whole garden shine',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Lush green garden with mature shrubs and planting',
    caption: 'Healthy, well-cared-for planting',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Neatly trimmed hedges lining a garden lawn',
    caption: 'Crisp hedges, neatly shaped',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'A green hedge beside a garden path',
    caption: 'Edges and borders kept sharp',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'A peaceful, well-kept back garden with seating',
    caption: 'A garden you can relax in',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'A wheelbarrow in a garden being tidied up',
    caption: 'Clearance and tidy-ups',
  },
]

// Testimonials — replace with real quotes from Thomas's happy customers.
export const testimonials = [
  {
    quote:
      'Thomas is polite, hard-working and the garden has never looked better. He turns up when he says he will.',
    name: 'A happy neighbour',
    place: 'Local resident',
  },
  {
    quote:
      'Brilliant value and a lovely lad. He cleared our overgrown back garden and we couldn’t believe the difference.',
    name: 'Satisfied customer',
    place: 'Local resident',
  },
  {
    quote:
      'Reliable every fortnight, always leaves everything spotless. Highly recommend supporting this young business.',
    name: 'Regular client',
    place: 'Local resident',
  },
]

export const steps = [
  {
    title: 'Get in touch',
    text: 'Send an enquiry through the website, or call. Tell Thomas what your garden needs.',
  },
  {
    title: 'Free quote',
    text: 'Thomas visits, has a look, and gives you a friendly, no-obligation price.',
  },
  {
    title: 'The work gets done',
    text: 'On the agreed day, the job is done with care — and all the mess is cleared away.',
  },
  {
    title: 'Enjoy your garden',
    text: 'Relax in a tidy garden. Set up regular visits to keep it looking its best.',
  },
]
