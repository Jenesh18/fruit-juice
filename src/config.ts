/**
 * Gokul Ras - Admin Editable Content Configuration
 * 
 * This file contains all the editable content for the website.
 * Modify the values below to update the website content without changing code.
 */

export const siteConfig = {
  // Brand Information
  brand: {
    name: "Gokul Ras",
    tagline: "Pure mango. Pure joy.",
    description: "Pure Gokul Ras - Real Taste of Gir Kesar Mango. Freshly extracted Aam Ras made in Surat with authentic Kesar mangoes.",
    subHeroLine: "Surat's fresh Aam Ras, delivered.",
    heroDescription: "Made with Gir Kesar mangoes. No concentrates. No compromise."
  },

  // Contact Information
  contact: {
    phone: "+91-XXXXXXXXXX",
    whatsapp: "+91-XXXXXXXXXX",
    email: "hello@gokulras.in",
    address: "Surat, Gujarat, India",
    fullAddress: "123, Mango Market, Ring Road, Surat - 395001, Gujarat, India",
    hours: "Mon-Sat: 9AM - 8PM",
    sundayHours: "Sunday: 10AM - 6PM"
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/gokulras",
    facebook: "https://facebook.com/gokulras",
    whatsapp: "https://wa.me/91XXXXXXXXXX",
    youtube: "https://youtube.com/@gokulras"
  },

  // Products - Add, remove, or modify products here
  products: [
    {
      id: 1,
      name: "500ml Bottle",
      price: "₹199",
      originalPrice: "₹249",
      description: "Perfect for personal use",
      image: "/images/product-jar.jpg",
      badge: "Popular",
      inStock: true
    },
    {
      id: 2,
      name: "1L Bottle",
      price: "₹349",
      originalPrice: "₹399",
      description: "Family size pack",
      image: "/images/product-jar.jpg",
      badge: "Best Value",
      inStock: true
    },
    {
      id: 3,
      name: "5L Family Pack",
      price: "₹1,499",
      originalPrice: "₹1,749",
      description: "Best value for families",
      image: "/images/product-jar.jpg",
      badge: "Save ₹250",
      inStock: true
    },
    {
      id: 4,
      name: "Bulk / Catering",
      price: "Custom",
      originalPrice: "",
      description: "For events & restaurants",
      image: "/images/product-jar.jpg",
      badge: "Wholesale",
      inStock: true
    }
  ],

  // Features / Why Choose Us
  features: [
    {
      icon: "Leaf",
      title: "100% Natural",
      description: "Pure mango pulp with no additives or chemicals"
    },
    {
      icon: "Droplets",
      title: "No Artificial Color",
      description: "Natural golden color from Gir Kesar mangoes"
    },
    {
      icon: "CheckCircle2",
      title: "No Preservatives",
      description: "Fresh extraction process with cold storage"
    },
    {
      icon: "Package",
      title: "Farm Fresh",
      description: "Sourced directly from Gir Kesar farms"
    },
    {
      icon: "Clock",
      title: "Same Day Extraction",
      description: "Made fresh every morning for maximum flavor"
    },
    {
      icon: "Truck",
      title: "Bulk Supply",
      description: "Available for catering, events & restaurants"
    },
    {
      icon: "MapPin",
      title: "Surat Delivery",
      description: "Fast same-day delivery across Surat city"
    }
  ],

  // Customer Testimonials
  testimonials: [
    {
      id: 1,
      name: "Priya Shah",
      location: "Surat",
      rating: 5,
      text: "The authentic taste of Gir Kesar! Reminds me of my grandmother's recipe. Absolutely love the thickness and natural sweetness.",
      avatar: "",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Patel",
      location: "Vadodara",
      rating: 5,
      text: "Best Aam Ras I've ever had. The thickness and flavor are unmatched. My kids finish a bottle in one sitting!",
      avatar: "",
      verified: true
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Ahmedabad",
      rating: 5,
      text: "Ordered for my son's birthday party. Everyone loved it! The 5L pack was perfect for our guests. Will order again.",
      avatar: "",
      verified: true
    },
    {
      id: 4,
      name: "Kiran Mehta",
      location: "Surat",
      rating: 5,
      text: "Finally found authentic Aam Ras without preservatives. The taste is just like homemade. Highly recommended!",
      avatar: "",
      verified: true
    }
  ],

  // FAQ Items
  faqs: [
    {
      question: "How long does Gokul Ras stay fresh?",
      answer: "Our Aam Ras stays fresh for 5 days when refrigerated at 4°C or below. We recommend consuming within 3 days for the best taste and flavor. Since we don't use any preservatives, it's important to keep it chilled."
    },
    {
      question: "Do you add sugar?",
      answer: "We use minimal raw sugar (jaggery powder) to enhance the natural sweetness of the mangoes. No refined sugar or artificial sweeteners are used. We also offer a no-sugar variant on request."
    },
    {
      question: "Do you deliver outside Surat?",
      answer: "Currently we deliver within Surat city only. For bulk orders outside Surat (Ahmedabad, Vadodara, etc.), please contact us and we can arrange special delivery."
    },
    {
      question: "Is it suitable for diabetics?",
      answer: "We offer a no-sugar variant specifically for diabetics and health-conscious customers. Please mention your preference when ordering. However, we recommend consulting your doctor before consumption."
    },
    {
      question: "What mangoes do you use?",
      answer: "We use authentic Gir Kesar mangoes sourced directly from farms in Gujarat's Gir region. These are known for their distinctive sweet taste, bright orange color, and pleasant aroma."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer special pricing for bulk orders above 20L. This is perfect for restaurants, catering services, weddings, and corporate events. Contact us for a custom quote."
    }
  ],

  // Usage Ideas
  usageIdeas: [
    { icon: "🥣", text: "Top your yogurt", description: "Add a spoonful to plain yogurt" },
    { icon: "🥤", text: "Blend into lassi", description: "Mix with milk for mango lassi" },
    { icon: "🍰", text: "Drizzle on desserts", description: "Perfect for ice cream & cakes" },
    { icon: "❄️", text: "Serve chilled", description: "Enjoy as is, straight from fridge" },
    { icon: "🥪", text: "With parathas", description: "Classic Indian breakfast combo" },
    { icon: "🍹", text: "Make smoothies", description: "Blend with bananas & milk" }
  ],

  // Ingredients
  ingredients: [
    "Mango pulp (Gir Kesar variety)",
    "Purified water",
    "Raw sugar (jaggery powder)",
    "Fresh lemon juice",
    "Pinch of cardamom powder"
  ],

  // SEO Configuration
  seo: {
    title: "Gokul Ras | Pure Aam Ras Surat | Authentic Gir Kesar Mango Juice",
    description: "Pure Gokul Ras - Real Taste of Gir Kesar Mango. Freshly extracted Aam Ras made in Surat with authentic Kesar mangoes. 100% natural, no preservatives. Order now!",
    keywords: [
      "Aam Ras Surat",
      "Mango Juice Surat",
      "Kesar Mango Ras",
      "Fresh Aam Ras Gujarat",
      "Buy Mango Ras Online Surat",
      "Gir Kesar Mango",
      "Pure Aam Ras",
      "Gokul Ras",
      "Authentic Aam Ras",
      "Surat Mango Products"
    ],
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@gokulras"
  },

  // Navigation Links
  navigation: [
    { label: "Story", href: "#story" },
    { label: "Product", href: "#product" },
    { label: "Nutrition", href: "#nutrition" },
    { label: "Contact", href: "#contact" }
  ],

  // Footer Links
  footer: {
    quickLinks: [
      { label: "Our Story", href: "#story" },
      { label: "Products", href: "#product" },
      { label: "Nutrition Info", href: "#nutrition" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ]
  },

  // Colors (for reference - changes require CSS update)
  colors: {
    mangoYellow: "#FFD400",
    deepOrange: "#FF6A00",
    leafGreen: "#2E7D32",
    creamBg: "#FFF8E1",
    inkBlack: "#111111",
    textDark: "#1A1A1A",
    textLight: "#FFFFFF",
    textMuted: "#B7B7B7"
  },

  // Analytics (optional)
  analytics: {
    googleAnalyticsId: "", // Add your GA ID here
    facebookPixelId: "" // Add your FB Pixel ID here
  }
};

export default siteConfig;
