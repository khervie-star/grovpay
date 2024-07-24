import {
  DevicePhoneMobileIcon,
  BoltIcon,
  TvIcon,
  CreditCardIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  TruckIcon,
  TicketIcon,
  ShoppingCartIcon,
  HeartIcon,
  HandRaisedIcon,
  NewspaperIcon,
  HomeIcon,
  BriefcaseIcon,
  SquaresPlusIcon,
  CakeIcon
} from "@heroicons/react/24/outline";
interface RechargeType {
  category: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  types: string[];
}

export const gender = [
  { key: "Male", label: "Male" },
  { key: "Female", label: "Female" }
];

export const discos = [
  { key: "BEDC", label: "Benin Distribution Company (BEDC)" },
  { key: "KDEDC", label: "Kaduna Distribution Company (KDEDC)" },
  { key: "KEDC", label: "Kano Distribution Company (KEDC)" },
  { key: "YEDC", label: "Yola Distribution Company (YEDC)" },
  { key: "JEDC", label: "Jos Distribution Company (JEDC)" },
  { key: "AEDC", label: "Abuja Distribution Company (AEDC)" },
  { key: "IBEDC", label: "Ibadan Distribution Company (IBEDC)" },
  { key: "IEDC", label: "Ikeja Distribution Company (IEDC)" },
  { key: "EKEDC", label: "Eko Distribution Company (EKEDC)" },
  { key: "PEDC", label: "Port Harcourt Distribution Company (PEDC)" },
  { key: "EEDC", label: "Enugu Distribution Company (EEDC)" }
];

export const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
];

export const rechargeAndBillingTypes: RechargeType[] = [
  {
    category: "Mobile",
    icon: DevicePhoneMobileIcon,
    types: [
      "Prepaid mobile recharges",
      "Postpaid mobile bill payments",
      "Data pack recharges",
      "International calling card recharges"
    ]
  },
  {
    category: "Utility Bills",
    icon: BoltIcon,
    types: [
      "Electricity bills",
      "Water bills",
      "Gas bills",
      "Internet bills",
      "Landline phone bills"
    ]
  },
  {
    category: "Television Services",
    icon: TvIcon,
    types: [
      "Cable TV recharges",
      "DTH (Direct-to-Home) TV recharges",
      "Streaming service subscriptions"
    ]
  },
  {
    category: "Financial Services",
    icon: CreditCardIcon,
    types: [
      "Credit card bill payments",
      "Loan EMI payments",
      "Insurance premium payments"
    ]
  },
  {
    category: "Education",
    icon: AcademicCapIcon,
    types: ["School/College fee payments", "Online course fee payments"]
  },
  {
    category: "Government Payments",
    icon: BuildingLibraryIcon,
    types: ["Property tax", "Vehicle registration fees", "Traffic fines"]
  },
  {
    category: "Travel",
    icon: TruckIcon,
    types: ["Metro card recharges", "Bus pass renewals", "Toll tag recharges"]
  },
  {
    category: "Entertainment",
    icon: TicketIcon,
    types: ["Movie ticket bookings", "Event ticket purchases", "Gaming credits"]
  },
  {
    category: "E-commerce",
    icon: ShoppingCartIcon,
    types: ["Gift card recharges", "Wallet top-ups"]
  }
  // {
  //   category: "Healthcare",
  //   icon: HeartIcon,
  //   types: ["Hospital bill payments", "Health insurance premiums"]
  // },
  // {
  //   category: "Donations",
  //   icon: HandRaisedIcon,
  //   types: ["Charitable organizations", "Religious institutions"]
  // },
  // {
  //   category: "Subscriptions",
  //   icon: NewspaperIcon,
  //   types: [
  //     "Magazine subscriptions",
  //     "Gym memberships",
  //     "Software subscriptions"
  //   ]
  // },
  // {
  //   category: "Housing",
  //   icon: HomeIcon,
  //   types: ["Rent payments", "Maintenance fees for apartments"]
  // },
  // {
  //   category: "Professional Services",
  //   icon: BriefcaseIcon,
  //   types: ["Lawyer fee payments", "Accounting service payments"]
  // },
  // {
  //   category: "Parking",
  //   icon: SquaresPlusIcon,
  //   types: ["Parking meter recharges", "Parking garage payments"]
  // },
  // {
  //   category: "Food Delivery",
  //   icon: CakeIcon,
  //   types: ["Restaurant bill payments", "Food delivery service charges"]
  // }
];
