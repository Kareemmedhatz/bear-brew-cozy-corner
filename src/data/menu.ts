export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "drinks",
    title: "Signature Drinks",
    emoji: "☕",
    items: [
      { name: "Papa Bear Latte", description: "Double espresso, velvety oat milk, hint of maple", price: "$5.50", tag: "Bestseller" },
      { name: "Mama Bear Mocha", description: "Dark chocolate, espresso, whipped cream cloud", price: "$5.80" },
      { name: "Baby Bear Cocoa", description: "Creamy hot cocoa with marshmallow bears", price: "$4.20", tag: "Kids' fave" },
      { name: "Honey Cinnamon Cold Brew", description: "12-hour brew, raw honey, ceylon cinnamon", price: "$5.00" },
      { name: "Forest Matcha Latte", description: "Ceremonial matcha, almond milk, vanilla", price: "$5.40" },
      { name: "Caramel Cloud Macchiato", description: "Layers of milk foam, espresso & salted caramel", price: "$5.90" },
    ],
  },
  {
    id: "desserts",
    title: "Sweet Treats",
    emoji: "🍰",
    items: [
      { name: "Bear Paw Cookies", description: "Brown butter cookies shaped like little paws", price: "$3.50", tag: "House made" },
      { name: "Honey Comb Cheesecake", description: "Silky cheesecake topped with raw honeycomb", price: "$6.80" },
      { name: "Cocoa Cloud Pancakes", description: "Fluffy pancakes, berries & maple drizzle", price: "$8.20" },
      { name: "Salted Caramel Brownie", description: "Fudgy brownie with flaky sea salt", price: "$4.50" },
    ],
  },
  {
    id: "combos",
    title: "Cozy Combos",
    emoji: "🧺",
    items: [
      { name: "The Morning Den", description: "Any latte + croissant + fresh fruit", price: "$11.00", tag: "Save 15%" },
      { name: "Reading Nook", description: "Pot of pour-over + slice of cake", price: "$12.50" },
      { name: "Bear Family Box", description: "3 drinks + 3 cookies — share the cozy", price: "$24.00" },
      { name: "Hibernation Brunch", description: "Pancakes + latte + bacon side", price: "$16.80" },
    ],
  },
];
