export interface SubMenuItem {
  title: string;
  description?: string;
  link: string;
  icon?: React.ReactNode;
}

export interface MenuItem {
  title: string;
  link: string;
  subItems?: SubMenuItem[];
}

export const mainNavItems: MenuItem[] = [
  {
    title: "Home",
    link: "/",
    subItems: [],
  },
  {
    title: "About Us",
    link: "/about",
    subItems: [
      {
        title: "About Us",
        description: "Learn more about Panda Finance",
        link: "/about",
        icon: "🏢",
      },
      {
        title: "Blog",
        description: "Latest news and insights from Panda Finance",
        link: "/blog",
        icon: "📝",
      },
    ],
  },
  {
    title: "Services",
    link: "/services",
    subItems: [
      {
        title: "Home Loans",
        description: "Find the right mortgage for your needs",
        link: "/services/home-loans",
        icon: "🏠",
      },
      {
        title: "KiwiSaver",
        description: "Maximize your retirement savings",
        link: "/services/kiwisaver",
        icon: "💰",
      },
      {
        title: "Property Finance & Development",
        description: "Specialized property financing solutions",
        link: "/services/property-finance",
        icon: "🏗️",
      },
      {
        title: "Insurance",
        description: "Protect what matters most",
        link: "/services/insurance",
        icon: "🛡️",
      },
    ],
  },
  {
    title: "Commercial",
    link: "/commercial",
    subItems: [
      {
        title: "Business Loans",
        description: "Funding solutions for your business",
        link: "/commercial",
        icon: "💼",
      },
      {
        title: "Commercial Mortgages",
        description: "Finance for commercial property",
        link: "/commercial",
        icon: "🏢",
      },
      {
        title: "Equipment Finance",
        description: "Asset and equipment funding",
        link: "/commercial",
        icon: "🔧",
      },
      {
        title: "Business Advisory",
        description: "Expert advice for your business",
        link: "/commercial",
        icon: "📋",
      },
    ],
  },
  {
    title: "Calculators",
    link: "/calculators",
    subItems: [
      {
        title: "Affordability Calculator",
        description: "How much can you borrow?",
        link: "/calculators?tab=affordability",
        icon: "🧮",
      },
      {
        title: "Repayment Calculator",
        description: "Calculate your loan repayments",
        link: "/calculators?tab=repayment",
        icon: "📊",
      },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
    subItems: [
      {
        title: "Get In Touch",
        description: "Contact us for personalized financial advice",
        link: "/contact",
        icon: "📞",
      },
      {
        title: "Disclosures",
        description: "Important legal and regulatory information",
        link: "/disclosures",
        icon: "📋",
      },
      {
        title: "Join Our Team",
        description: "Explore career opportunities with us",
        link: "/careers",
        icon: "💼",
      },
    ],
  },
];
