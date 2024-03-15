import arcadeIcon from "./src/assets/images/icon-arcade.svg";
import advancedIcon from "./src/assets/images/icon-advanced.svg";
import proIcon from "./src/assets/images/icon-pro.svg";

const monthlyPlans = [
  { id: 1, plan: "monthly", img: arcadeIcon, title: "Arcade", price: 9 },
  {
    id: 2,
    plan: "monthly",
    img: advancedIcon,
    title: "Advanced",
    price: 12,
  },
  {
    id: 3,
    plan: "monthly",
    img: proIcon,
    title: "Pro",
    price: 15,
  },
];

const yearlyPlans = [
  {
    id: 1,
    plan: "yearly",
    img: arcadeIcon,
    title: "Arcade",
    price: 90,
    extra: "2 months free",
  },
  {
    id: 2,
    plan: "yearly",
    img: advancedIcon,
    title: "Advanced",
    price: 120,
    extra: "2 months free",
  },
  {
    id: 3,
    plan: "yearly",
    img: proIcon,
    title: "Pro",
    price: 150,
    extra: "2 months free",
  },
];

const monthlyAddons = [
  {
    id: 1,
    plan: "monthly",
    title: "Online service",
    description: "Acces to multiplayer games",
    price: 1,
  },
  {
    id: 2,
    plan: "monthly",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: 3,
    plan: "monthly",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

const yearlyAddons = [
  {
    id: 1,
    plan: "yearly",
    title: "Online service",
    description: "Acces to multiplayer games",
    price: 10,
  },
  {
    id: 2,
    plan: "yearly",
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 20,
  },
  {
    id: 3,
    plan: "yearly",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 20,
  },
];

export { monthlyPlans, yearlyPlans, monthlyAddons, yearlyAddons };
