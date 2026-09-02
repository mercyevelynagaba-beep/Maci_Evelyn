import { BakeryItem, GalleryItem, ClassCourse, Testimonial } from '../types';

export const BAKERY_ITEMS: BakeryItem[] = [
  // Cakes
  {
    id: 'cake-kwanjula-royal',
    name: 'Kwanjula Royal Celebration Cake',
    category: 'cakes',
    priceUGX: 280000,
    priceUSD: 75,
    unit: '2-Tier (Serves ~40-50)',
    description: 'Traditional Ugandan introduction ceremony centerpiece with rich moist fruit & vanilla sponge, decorated with edible gold leaf and traditional cultural motifs.',
    ingredients: ['Madagascan Vanilla', 'Rich Soaked Spiced Fruit', 'Pure Dairy Butter', 'Fondant Icing', 'Edible 24k Gold Accents'],
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    badge: 'Ceremony Favorite',
    isPopular: true,
    serves: '45-55 guests',
    flavorOptions: ['Rich Spiced Fruit & Rum', 'Vanilla Bean Sponge', 'Red Velvet & Cream Cheese', 'Chocolate Fudge']
  },
  {
    id: 'cake-wedding-botanical',
    name: 'Empress 3-Tier Wedding Cake',
    category: 'cakes',
    priceUGX: 520000,
    priceUSD: 140,
    unit: '3-Tier (Serves ~80-100)',
    description: 'Stunning tiered wedding cake draped in smooth Swiss meringue buttercream, handcrafted wafer paper florals, and delicate gold pearl beadings.',
    ingredients: ['Velvet Sponge', 'Belgian White Chocolate Ganache', 'Swiss Meringue Buttercream', 'Organic Raspberry Compote'],
    image: 'https://images.unsplash.com/photo-1522760883749-711db6a32a08?auto=format&fit=crop&w=800&q=80',
    badge: 'Bespoke Design',
    isPopular: true,
    serves: '80-100 guests',
    flavorOptions: ['White Velvet & Lemon Curd', 'Salted Caramel Marble', 'Decadent Dark Chocolate', 'Vanilla Sponge']
  },
  {
    id: 'cake-red-velvet-drip',
    name: 'Ruby Velvet Gold Drip Cake',
    category: 'cakes',
    priceUGX: 120000,
    priceUSD: 32,
    unit: '1.5 kg (Serves ~12-16)',
    description: 'Lush crimson cocoa sponge layers with vanilla bean cream cheese frosting and a gleaming golden caramel drip with macarons.',
    ingredients: ['Dutch Cocoa', 'Buttermilk', 'Cream Cheese', 'Pure Vanilla', 'French Macaron Garnishes'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    badge: 'Top Seller',
    isPopular: true,
    serves: '12-16 guests',
    flavorOptions: ['Red Velvet', 'Dark Chocolate Truffle', 'Strawberry Cloud']
  },
  {
    id: 'cake-birthday-confetti',
    name: 'Joyful Birthday Celebration Cake',
    category: 'cakes',
    priceUGX: 95000,
    priceUSD: 25,
    unit: '1 kg (Serves ~8-10)',
    description: 'Fluffy vanilla or chocolate sponge topped with colorful swirl rosettes, sprinkles, and personalized calligraphy inscription.',
    ingredients: ['Farm Fresh Eggs', 'Unsalted Butter', 'Organic Flour', 'Buttercream Frosting'],
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    serves: '8-10 guests',
    flavorOptions: ['Vanilla', 'Chocolate', 'Oreo Cookies & Cream', 'Caramel']
  },
  {
    id: 'cake-bento-duo',
    name: 'Mini Bento Gift Cakes (Pack of 2)',
    category: 'cakes',
    priceUGX: 55000,
    priceUSD: 15,
    unit: 'Box of 2 Individual Bento Cakes',
    description: 'Trendy 4-inch mini cakes in eco-friendly kraft boxes with wooden forks, candles, and cute custom messages. Perfect for anniversaries and intimate moments.',
    ingredients: ['Soft Chiffon Sponge', 'Whipped Cream', 'Berry Filling'],
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=800&q=80',
    serves: '2-4 guests',
    flavorOptions: ['Nutella Choc', 'Vanilla Berry', 'Matcha Mint']
  },

  // Mandazi (Mandashi)
  {
    id: 'mandazi-classic-cardamom',
    name: 'Spiced East African Golden Mandazi',
    category: 'mandazi',
    priceUGX: 12000,
    priceUSD: 3.2,
    unit: 'Pack of 12 Pieces',
    description: 'Our signature fluffy, triangular golden mandazi infused with freshly ground green cardamom, coconut milk, and a hint of nutmeg. Fried to airy perfection.',
    ingredients: ['Wheat Flour', 'Fresh Coconut Milk', 'Ground Green Cardamom', 'Nutmeg', 'Cane Sugar'],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    badge: 'Bakery Icon',
    isPopular: true,
    serves: '4-6 people',
  },
  {
    id: 'mandazi-ceremony-bucket',
    name: 'Ceremony Cocktail Mandazi Bucket',
    category: 'mandazi',
    priceUGX: 45000,
    priceUSD: 12,
    unit: 'Bucket of 50 Cocktail Bites',
    description: 'Bite-sized, pillowy cocktail mandazi dusted in fine vanilla sugar. The quintessential welcome treat for Kwanjula, church gatherings, and home celebrations.',
    ingredients: ['Coconut Cream', 'Cardamom', 'Cinnamon Dusting', 'Golden Sunflower Oil'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Event Favorite',
    isPopular: true,
    serves: '20-30 guests',
  },
  {
    id: 'mandazi-coconut-mahamri',
    name: 'Soft Swahili Coconut Mahamri',
    category: 'mandazi',
    priceUGX: 15000,
    priceUSD: 4,
    unit: 'Pack of 10 Pieces',
    description: 'Traditional coastal style hollow-center mahamri with delicate coconut aroma, designed to pair wonderfully with African spiced tea or mbaazi.',
    ingredients: ['Pure Coconut Milk', 'Cardamom Pods', 'Yeast', 'Organic Flour'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    serves: '4-5 people',
  },

  // Buns
  {
    id: 'buns-honey-butter-sweet',
    name: 'Evelyn’s Glazed Honey Butter Sweet Buns',
    category: 'buns',
    priceUGX: 18000,
    priceUSD: 4.8,
    unit: 'Pack of 8 Pull-Apart Buns',
    description: 'Ultra-soft, pillowy Japanese milk-bread style sweet buns brushed while oven-hot with pure Ugandan honey and churned butter.',
    ingredients: ['Whole Milk', 'Ugandan Acacia Honey', 'Farm Butter', 'Yeast Dough', 'Egg Wash'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    badge: 'Crowd Pleaser',
    isPopular: true,
    serves: '6-8 people',
  },
  {
    id: 'buns-cinnamon-swirl',
    name: 'Spiced Cinnamon Brown Sugar Buns',
    category: 'buns',
    priceUGX: 24000,
    priceUSD: 6.5,
    unit: 'Pack of 6 Large Buns',
    description: 'Swirled with Ceylon cinnamon, rich dark brown sugar, and smothered in silky cream cheese icing drizzle.',
    ingredients: ['Ceylon Cinnamon', 'Brown Molasses Sugar', 'Cream Cheese Icing', 'Brioche Dough'],
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    serves: '6 people',
  },
  {
    id: 'buns-traditional-tea-buns',
    name: 'Ugandan Golden Tea Buns (Amakasi)',
    category: 'buns',
    priceUGX: 12000,
    priceUSD: 3.2,
    unit: 'Pack of 10 Buns',
    description: 'Crisp, golden exterior with a dense, slightly sweet crumb. The beloved teatime classic along the Kampala-Hoima road corridor.',
    ingredients: ['Wheat Flour', 'Butter', 'Nutmeg', 'Vanilla Extract', 'Brown Sugar'],
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    serves: '5-8 people',
  },

  // Loaves
  {
    id: 'loaf-sweet-milk',
    name: 'Signature Nansana Sweet Milk Loaf',
    category: 'loaves',
    priceUGX: 9000,
    priceUSD: 2.4,
    unit: '800g Family Loaf',
    description: 'Extra tall, cloud-soft sandwich loaf made with rich dairy milk. Slices like silk and stays fresh for days. Perfect for breakfast toast.',
    ingredients: ['Fresh Dairy Milk', 'Unsalted Butter', 'Unbleached Flour', 'Cane Sugar', 'Sea Salt'],
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    badge: 'Daily Essential',
    isPopular: true,
    serves: 'Family (16-18 slices)',
  },
  {
    id: 'loaf-artisan-sourdough',
    name: 'Rustic Hearth Sourdough Country Loaf',
    category: 'loaves',
    priceUGX: 16000,
    priceUSD: 4.3,
    unit: '750g Artisan Batard',
    description: 'Slow-fermented for 36 hours for exceptional depth of flavor and open airy crumb. Baked on stone hearths for a blistered golden crust.',
    ingredients: ['Wild Yeast Starter', 'Stoneground Flour', 'Mineral Water', 'French Grey Salt'],
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef’s Choice',
    serves: '10-12 slices',
  },
  {
    id: 'loaf-golden-brioche',
    name: 'Rich Golden French Brioche Loaf',
    category: 'loaves',
    priceUGX: 20000,
    priceUSD: 5.4,
    unit: '600g Loaf',
    description: 'Enriched with 82% European butter and fresh farm yolks. Golden crumb that literally melts in your mouth.',
    ingredients: ['Grass-fed Farm Butter', 'Free-range Egg Yolks', 'Rich Cream', 'Strong Flour'],
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=800&q=80',
    serves: '8-10 slices',
  },
  {
    id: 'loaf-wholewheat-seed',
    name: 'Multi-Seed 100% Wholewheat Loaf',
    category: 'loaves',
    priceUGX: 13000,
    priceUSD: 3.5,
    unit: '800g Hearth Loaf',
    description: 'Hearty wholemeal bread packed with roasted pumpkin seeds, chia seeds, flax seeds, and sunflower kernels.',
    ingredients: ['100% Stoneground Wholewheat', 'Chia Seeds', 'Flax', 'Sunflower Seeds', 'Malted Barley'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    serves: 'Family (14-16 slices)',
  },

  // Packages
  {
    id: 'package-ceremony-starter',
    name: 'The Nansana Ceremony Pastry Platter',
    category: 'packages',
    priceUGX: 150000,
    priceUSD: 40,
    unit: 'Grand Platter (Serves ~35-45)',
    description: 'Complete party assortment: 40 golden spiced mandazi bites, 20 glazed sweet buns, and 24 assorted frosted mini cupcakes.',
    ingredients: ['Assorted Fresh Bakery Treats'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Value',
    isPopular: true,
    serves: '35-45 guests',
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Kwanjula Golden Heritage Cake',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80',
    caption: 'Custom 3-tier traditional introduction cake with handcrafted edible golden calabash and beaded patterns.',
    tags: ['Kwanjula', 'Ceremony', 'Bespoke Fondant'],
    occasion: 'Traditional Introduction'
  },
  {
    id: 'g-2',
    title: 'Freshly Fried Cardamom Mandazi',
    category: 'mandazi',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
    caption: 'Piping hot East African spiced mandazi cooling on our wooden baker racks in Nansana.',
    tags: ['Fresh Batch', 'Cardamom', 'East African'],
    occasion: 'Daily Breakfast'
  },
  {
    id: 'g-3',
    title: 'Modern Buttercream Cascade Wedding Cake',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1522760883749-711db6a32a08?auto=format&fit=crop&w=900&q=80',
    caption: 'Minimalist luxury wedding cake with fresh blush peonies and edible champagne shimmer.',
    tags: ['Wedding', 'Buttercream', 'Florals'],
    occasion: 'Lake Victoria Wedding'
  },
  {
    id: 'g-4',
    title: 'Weekend Baking Class: Fondant Mastery',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
    caption: 'Students learning professional sharp edges and sugar flower sculpting in our weekend masterclass.',
    tags: ['Academy', 'Hands-on', 'Saturday Workshop'],
    occasion: 'Weekend Class'
  },
  {
    id: 'g-5',
    title: 'Artisan Hearth Sourdough Loaves',
    category: 'loaves',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=900&q=80',
    caption: 'Hand-scored loaves fresh from our stone oven deck, boasting incredible ear crusts.',
    tags: ['Sourdough', 'Artisan Bread', 'Fermented'],
    occasion: 'Daily Bread'
  },
  {
    id: 'g-6',
    title: 'Glazed Honey Butter Sweet Buns',
    category: 'buns',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    caption: 'Golden pillowy sweet buns glazed with local organic honey fresh from our early morning bake.',
    tags: ['Sweet Buns', 'Honey Glaze', 'Soft Crumb'],
    occasion: 'Family Brunch'
  },
  {
    id: 'g-7',
    title: 'Ceremony Cake Tasting & Consultation',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    caption: 'Our lead baker Evelyn mentoring apprentices on temperature control and ganache layering.',
    tags: ['Baking Academy', 'Mentorship', 'Students'],
    occasion: 'Classroom'
  },
  {
    id: 'g-8',
    title: 'Cocktail Mandazi Buffet Pyramids',
    category: 'mandazi',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
    caption: 'Delightful cocktail mandazi pyramids prepared for a 300-guest Kwanjula reception in Wakiso.',
    tags: ['Catering', 'Buffet', 'Functions'],
    occasion: 'Ceremony Catering'
  },
  {
    id: 'g-9',
    title: 'Birthday Drip & Macaron Masterpiece',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    caption: 'Velvety chocolate drip cake loaded with French macarons, strawberries, and custom topper.',
    tags: ['Birthday', 'Drip Cake', 'Macarons'],
    occasion: 'Birthday Party'
  }
];

export const BAKING_CLASSES: ClassCourse[] = [
  {
    id: 'class-saturday-fondant',
    title: 'Mastering Ceremony Cakes & Fondant Artistry',
    day: 'Saturday',
    time: '9:00 AM – 1:00 PM',
    duration: '4 Hours (Hands-on)',
    instructor: 'Chef Evelyn & Guest Pastry Master',
    priceUGX: 120000,
    priceUSD: 32,
    seatsTotal: 10,
    seatsBooked: 7,
    level: 'All Levels',
    description: 'Learn how to bake structurally sound tier cakes, master smooth Swiss buttercream, achieve razor-sharp fondant edges, and sculpt edible gum-paste flowers.',
    curriculum: [
      'Baking high-density sponges suitable for multi-tier stacking',
      'Levelling, crumb coating, and dowel placement for ceremonies',
      'Fondant draping with zero tears and perfect sharp corners',
      'Sugar lace, gold leaf dusting, and transport safety tips',
      'Take home your fully decorated 2-tier display cake!'
    ],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    nextDate: 'This Coming Saturday'
  },
  {
    id: 'class-saturday-mandazi',
    title: 'East African Pastries, Mandazi & Buns Secret Workshop',
    day: 'Saturday',
    time: '2:30 PM – 6:00 PM',
    duration: '3.5 Hours (Hands-on)',
    instructor: 'Chef Evelyn',
    priceUGX: 85000,
    priceUSD: 23,
    seatsTotal: 12,
    seatsBooked: 9,
    level: 'Beginner',
    description: 'The ultimate masterclass for starting your own pastry business or making unforgettable family teatime treats. Master spiced mandazi, mahamri, sweet pull-apart buns, and tea rock buns.',
    curriculum: [
      'Cardamom spice balancing and yeast fermentation secrets',
      'Oil temperature science for non-greasy, pillowy mandazi',
      'Japanese Tangzhong technique for buns that stay soft for 5 days',
      'Commercial costing, packaging, and shelf-life optimization',
      'Take home a giant mixed bakery gift box you made yourself!'
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    nextDate: 'This Coming Saturday'
  },
  {
    id: 'class-sunday-bread',
    title: 'Artisan Bread, Sourdough & Specialty Loaves',
    day: 'Sunday',
    time: '10:00 AM – 2:00 PM',
    duration: '4 Hours (Hands-on)',
    instructor: 'Artisan Baker David',
    priceUGX: 95000,
    priceUSD: 25,
    seatsTotal: 10,
    seatsBooked: 6,
    level: 'Intermediate',
    description: 'Explore the magic of slow fermentation, wild sourdough starters, and classic French brioche. Perfect for home baking enthusiasts and future artisan bakers.',
    curriculum: [
      'Maintaining, feeding, and troubleshooting your sourdough starter',
      'High-hydration dough handling, stretch-and-folds, and shaping',
      'Steam injection techniques in home and commercial ovens',
      'Enriched doughs: Butter brioche and sweet breakfast loaves',
      'Receive a live 5-year sourdough starter culture to take home'
    ],
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    nextDate: 'This Coming Sunday'
  },
  {
    id: 'class-sunday-kids',
    title: 'Junior Bakers Fun Weekend Camp (Ages 7–15)',
    day: 'Sunday',
    time: '2:30 PM – 5:00 PM',
    duration: '2.5 Hours (Playful & Safe)',
    instructor: 'Chef Evelyn & Assistant Coach',
    priceUGX: 60000,
    priceUSD: 16,
    seatsTotal: 12,
    seatsBooked: 8,
    level: 'Kids',
    description: 'Inspiring the next generation of Ugandan culinary masters! Kids measure, mix, bake, and pipe their own cupcakes, mini buns, and pizza breads in a safe, hygienic environment.',
    curriculum: [
      'Kitchen hygiene and safety fun fundamentals',
      'Mixing rainbow cupcake batters from scratch',
      'Piping swirl frostings with fun nozzles and sprinkles',
      'Junior Baker Certificate of Completion + personalized chef apron'
    ],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    nextDate: 'This Coming Sunday'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah & Kenneth Mukasa',
    location: 'Nansana, Wakiso',
    ceremony: '3-Tier Kwanjula Celebration',
    quote: 'Evelyn Bites delivered the absolute centerpiece of our Kwanjula ceremony! The traditional gourd accents and edible gold detailing amazed our elders, and the spiced fruit cake was moist and divine. Everyone on Kampala-Hoima road recommended Evelyn and she exceeded all expectations!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  },
  {
    id: 't-2',
    name: 'Brenda Namutebi',
    location: 'Kampala Central / Makerere',
    ceremony: 'Weekend Baking Class Graduate',
    quote: 'I enrolled in the Saturday Fondant & Ceremony Cake class and it completely transformed my baking confidence. Chef Evelyn is patient, warm, and shares real trade secrets instead of vague advice. I have already booked my first two paid orders!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: 'July 2026'
  },
  {
    id: 't-3',
    name: 'Pastor Samuel Kato',
    location: 'Nansana Municipality',
    ceremony: 'Church Fellowship Breakfast Order',
    quote: 'We order 150 spiced mandazi and sweet buns every month for our community breakfast. They are always oven-hot, fresh, non-greasy, and bursting with cardamom aroma. Plot 8 is truly blessed to have Evelyn Bites!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'August 2026'
  }
];

export const BAKERY_INFO = {
  name: 'Evelyn Bites',
  tagline: 'Artisanal Fresh Bakes, Ceremony Celebrations & Baking Academy',
  address: 'Plot 8, Kampala-Hoima Road',
  municipality: 'Nansana Municipality, Wakiso District',
  region: 'Greater Kampala, Uganda',
  landmark: 'Right along Kampala-Hoima Highway, 200m from Nansana Town Council junction',
  phonePrimary: '+256 701 445 892',
  phoneSecondary: '+256 782 331 940',
  whatsapp: '+256 701 445 892',
  email: 'orders@evelynbites.com',
  workingHours: [
    { days: 'Monday – Friday', hours: '6:30 AM – 8:30 PM' },
    { days: 'Saturday (Classes + Bake)', hours: '7:00 AM – 9:00 PM' },
    { days: 'Sunday (Classes + Orders)', hours: '7:30 AM – 7:30 PM' }
  ],
  deliveryZones: [
    'Nansana Municipality & Environs',
    'Kampala-Hoima Road Corridor (Wakiso, Namungoona, Kasubi)',
    'Kampala Central, Nakasero & Kololo',
    'Ntinda, Kiwatule & Naalya',
    'Entebbe & Greater Wakiso District'
  ]
};
