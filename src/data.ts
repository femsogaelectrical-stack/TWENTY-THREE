import { MenuItem, Testimonial } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  // Fine Dining Category
  {
    id: "d1",
    name: "Flame-Grilled Tomahawk Steak",
    description: "Premium aged Ribeye, masterfully seared with aromatic rosemary butter, roasted garlic, and wild mushroom truffle sauce.",
    price: "₦38,000",
    category: "dining",
    tag: "Signature"
  },
  {
    id: "d2",
    name: "Pan-Seared Atlantic Croaker",
    description: "Freshly caught local croaker glazed with aromatic ginger and hand-ground spices, served on a bed of sweet plantain mash.",
    price: "₦22,000",
    category: "dining",
    tag: "Chef's Special"
  },
  {
    id: "d3",
    name: "23 Signature Jollof Prestige",
    description: "Smoky firewood-infused basmati Jollof, topped with 24-hour slow-roasted premium goat shoulder and sweet glazed plantains.",
    price: "₦18,500",
    category: "dining",
    tag: "Legendary"
  },
  {
    id: "d4",
    name: "Lobster Thermidor Supreme",
    description: "Cold-water lobster flamed with premium brandy, creamed wild mushroom emulsion, and a bubbly golden Gruyère crust.",
    price: "₦42,000",
    category: "dining",
    tag: "Premium"
  },

  // Crafted Cocktails Category
  {
    id: "c1",
    name: "Ode-Remo Sunset Elixir",
    description: "Oak-barrel aged spiced rum, passionfruit nectar, fresh-squeezed lime, ginger infusion, served under a smoke dome.",
    price: "₦9,500",
    category: "cocktails",
    tag: "Popular"
  },
  {
    id: "c2",
    name: "The Golden 23",
    description: "Bespoke dry gin, wild elderflower liqueur, hand-extracted saffron essence, topped with real 24k edible gold flakes.",
    price: "₦12,500",
    category: "cocktails",
    tag: "Exclusive"
  },
  {
    id: "c3",
    name: "Smoked Espresso Martini",
    description: "Single-origin cold brew, premium vodka, rich coffee liqueur, sweetened with local organic honey, infused with applewood smoke.",
    price: "₦10,000",
    category: "cocktails"
  },
  {
    id: "c4",
    name: "Lagos-Ibadan Drift",
    description: "A strong, masterfully balanced blend of dark rum, orange curaçao, fresh lime, almond orgeat, and a splash of wild hibiscus bitters.",
    price: "₦11,000",
    category: "cocktails",
    tag: "New"
  },

  // Lounge & Prestige Bottles
  {
    id: "l1",
    name: "Executive Cabaret Platter",
    description: "A shared luxury assortment of tender peppered snails, spicy gizzard, crispy barbecue lamb ribs, sweet yam fries, and spicy dip.",
    price: "₦35,000",
    category: "lounge",
    tag: "Shared Feast"
  },
  {
    id: "l2",
    name: "Prestige Dom Pérignon Package",
    description: "Chilled bottle of vintage Dom Pérignon champagne, served VIP-style with ice flairs, signature fresh oysters, and local berries.",
    price: "₦480,000",
    category: "lounge",
    tag: "Ultra VIP"
  },
  {
    id: "l3",
    name: "Imperial Hennessy XO Experience",
    description: "Bespoke Hennessy XO Cognac paired with aged dark chocolate truffles, roasted nuts, and a premium lounge escort experience.",
    price: "₦390,000",
    category: "lounge",
    tag: "VIP Choice"
  },
  {
    id: "l4",
    name: "Spicy Peppered Croaker & Chips",
    description: "Whole croaker fish smothered in hot, aromatic bell pepper chili sauce, charcoal grilled, served with sweet potato wedges.",
    price: "₦26,000",
    category: "lounge"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Adeyemi O.",
    role: "Lounge Regular & Connoisseur",
    rating: 5,
    content: "The Flame-Grilled Tomahawk steak at 23 is a culinary masterpiece. At night, the venue transforms into a sparkling wonderland. Truly the finest lounge bar in Ogun State!",
    avatarPlaceholder: "AO"
  },
  {
    id: "t2",
    name: "Dr. Sophia E.",
    role: "Corporate Advisory Director",
    rating: 5,
    content: "We booked the VIP Private Lounge for an exclusive dinner with international board members. The aesthetic was immaculate, the service extremely polite, and the cocktails are unmatched.",
    avatarPlaceholder: "SE"
  },
  {
    id: "t3",
    name: "Chinedu K.",
    role: "Vibrant Nightlife Blogger",
    rating: 5,
    content: "Absolute 10/10 vibe. Being open 24 hours makes 23 Restaurant and Lounge the perfect road stop and late-night retreat. Excellent acoustics, elite crowds, and delicious grills.",
    avatarPlaceholder: "CK"
  }
];

export const CORE_OFFERINGS = [
  {
    id: "fine-dining",
    title: "Culinary Excellence",
    description: "Savor gourmet masterpieces crafted by world-class chefs, marrying rich local heritage ingredients with contemporary global gourmet presentation.",
    features: ["Aged steaks & fresh catch", "Signature smoked platters", "Elegant candlelit spacing"]
  },
  {
    id: "crafted-cocktails",
    title: "Artisanal Cocktails",
    description: "Imbibe masterfully balanced creations infused with local hand-pressed botanicals, exotic premium distillates, and gorgeous smoky presentations.",
    features: ["Gold-dusted signature drinks", "Aged vintage spirits", "Aromatic dry ice infusion"]
  },
  {
    id: "vip-lounge",
    title: "VIP Lounge & Events",
    description: "Experience the pinnacle of high-end nightlife with dedicated bottle service, exclusive private suites, and curated world-class sound acoustics.",
    features: ["Private VIP host escorts", "24/7 dedicated lounge access", "Custom spatial styling for events"]
  }
];
