import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsMobile } from './hooks/use-mobile'
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ArrowUp,
  Leaf,
  Droplets,
  Heart,
  Truck,
  Clock,
  Package,
  ChevronDown,
  Star,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

// Content Configuration - Admin Editable
const content = {
  brand_name: "Gokul Ras",
  tagline: "Pure mango. Pure joy.",
  hero_description: "Made with Gir Kesar mangoes. No concentrates. No compromise.",
  sub_hero_line: "Surat's fresh Aam Ras, delivered.",
  contact: {
    phone: "+91-XXXXXXXXXX",
    whatsapp: "+91-XXXXXXXXXX",
    email: "hello@gokulras.in",
    address: "Surat, Gujarat, India",
    hours: "Mon-Sat: 9AM - 8PM"
  },
  social: {
    instagram: "https://instagram.com/gokulras",
    facebook: "https://facebook.com/gokulras",
    whatsapp: "https://wa.me/91XXXXXXXXXX"
  },
  products: [
    { id: 1, name: "500ml Bottle", price: "₹199", description: "Perfect for personal use", image: "/images/product-jar.jpg" },
    { id: 2, name: "1L Bottle", price: "₹349", description: "Family size pack", image: "/images/product-jar.jpg" },
    { id: 3, name: "5L Family Pack", price: "₹1,499", description: "Best value for families", image: "/images/product-jar.jpg" },
    { id: 4, name: "Bulk / Catering", price: "Custom", description: "For events & restaurants", image: "/images/product-jar.jpg" }
  ],
  features: [
    { icon: Leaf, title: "100% Natural", description: "Pure mango pulp with no additives" },
    { icon: Droplets, title: "No Artificial Color", description: "Natural golden color from mangoes" },
    { icon: CheckCircle2, title: "No Preservatives", description: "Fresh extraction process" },
    { icon: Package, title: "Farm Fresh", description: "Sourced from Gir Kesar farms" },
    { icon: Clock, title: "Same Day Extraction", description: "Made fresh every morning" },
    { icon: Truck, title: "Bulk Supply", description: "Available for catering & events" },
    { icon: MapPin, title: "Surat Delivery", description: "Fast local delivery" }
  ],
  testimonials: [
    { name: "Priya Shah", location: "Surat", rating: 5, text: "The authentic taste of Gir Kesar! Reminds me of my grandmother's recipe." },
    { name: "Rajesh Patel", location: "Vadodara", rating: 5, text: "Best Aam Ras I've ever had. The thickness and flavor are unmatched." },
    { name: "Anita Desai", location: "Ahmedabad", rating: 5, text: "Ordered for my son's birthday party. Everyone loved it! Will order again." }
  ],
  faqs: [
    { q: "How long does Gokul Ras stay fresh?", a: "Our Aam Ras stays fresh for 5 days when refrigerated. We recommend consuming within 3 days for the best taste." },
    { q: "Do you add sugar?", a: "We use minimal raw sugar to enhance the natural sweetness. No refined sugar or artificial sweeteners." },
    { q: "Do you deliver outside Surat?", a: "Currently we deliver within Surat city. For bulk orders outside Surat, please contact us." },
    { q: "Is it suitable for diabetics?", a: "We offer a no-sugar variant. Please mention your preference when ordering." }
  ],
  seo: {
    title: "Gokul Ras | Pure Aam Ras Surat | Authentic Gir Kesar Mango Juice",
    description: "Pure Gokul Ras - Real Taste of Gir Kesar Mango. Freshly extracted Aam Ras made in Surat with authentic Kesar mangoes. 100% natural, no preservatives.",
    keywords: "Aam Ras Surat, Mango Juice Surat, Kesar Mango Ras, Fresh Aam Ras Gujarat"
  }
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  
  const mainRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const realFruitRef = useRef<HTMLDivElement>(null)
  const madeWithLoveRef = useRef<HTMLDivElement>(null)
  const pureMangoRef = useRef<HTMLDivElement>(null)
  
  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // GSAP Animations
  useEffect(() => {
    const sceneLength = isMobile ? "+=100%" : "+=130%"
    
    const ctx = gsap.context(() => {
      // Hero Section Animation
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: sceneLength,
          pin: true,
          scrub: 0.6,
        }
      })
      
      heroTl
        .fromTo(".hero-mango", 
          { x: 0, y: 0, scale: 1, rotation: 0 },
          { x: isMobile ? "10vw" : "28vw", y: isMobile ? "-6vh" : "-10vh", scale: isMobile ? 0.85 : 0.72, rotation: isMobile ? 10 : 18, ease: "power2.in" },
          0.7
        )
        .fromTo(".hero-headline",
          { x: 0, opacity: 1 },
          { x: isMobile ? "-25vw" : "-55vw", opacity: 0, ease: "power2.in" },
          0.7
        )
        .fromTo(".hero-subcontent",
          { y: 0, opacity: 1 },
          { y: isMobile ? "10vh" : "18vh", opacity: 0, ease: "power2.in" },
          0.72
        )
      
      // Real Fruit Section
      const realFruitTl = gsap.timeline({
        scrollTrigger: {
          trigger: realFruitRef.current,
          start: "top top",
          end: sceneLength,
          pin: true,
          scrub: 0.6,
        }
      })
      
      realFruitTl
        .fromTo(".real-bg",
          { scale: 1.12, opacity: 0.6 },
          { scale: 1.02, opacity: 1 },
          0
        )
        .fromTo(".real-outline",
          { scale: 1.25, opacity: 0 },
          { scale: 1, opacity: 1 },
          0.05
        )
        .fromTo(".real-label",
          { x: "-12vw", opacity: 0 },
          { x: 0, opacity: 1 },
          0.08
        )
        .fromTo(".real-paragraph",
          { x: "12vw", opacity: 0 },
          { x: 0, opacity: 1 },
          0.12
        )
        .to(".real-bg", { scale: 1.10, opacity: 0.35 }, 0.7)
        .to(".real-outline", { scale: 1.35, opacity: 0 }, 0.7)
        .to(".real-label", { x: "-10vw", opacity: 0 }, 0.75)
        .to(".real-paragraph", { x: "10vw", opacity: 0 }, 0.75)
      
      // Made With Love Section
      const madeWithLoveTl = gsap.timeline({
        scrollTrigger: {
          trigger: madeWithLoveRef.current,
          start: "top top",
          end: sceneLength,
          pin: true,
          scrub: 0.6,
        }
      })
      
      madeWithLoveTl
        .fromTo(".mwl-bg",
          { y: "10vh", scale: 1.08, opacity: 0.7 },
          { y: 0, scale: 1, opacity: 1 },
          0
        )
        .fromTo(".mwl-outline",
          { scale: 1.2, opacity: 0 },
          { scale: 1, opacity: 1 },
          0.05
        )
        .fromTo(".mwl-label",
          { x: "12vw", opacity: 0 },
          { x: 0, opacity: 1 },
          0.08
        )
        .fromTo(".mwl-paragraph",
          { x: "-12vw", opacity: 0 },
          { x: 0, opacity: 1 },
          0.12
        )
        .to(".mwl-bg", { y: "-10vh", opacity: 0.35 }, 0.7)
        .to(".mwl-outline", { scale: 1.3, opacity: 0 }, 0.7)
        .to(".mwl-label", { x: "12vw", opacity: 0 }, 0.75)
        .to(".mwl-paragraph", { x: "-12vw", opacity: 0 }, 0.75)
      
      // Pure Mango Section
      const pureMangoTl = gsap.timeline({
        scrollTrigger: {
          trigger: pureMangoRef.current,
          start: "top top",
          end: sceneLength,
          pin: true,
          scrub: 0.6,
        }
      })
      
      pureMangoTl
        .fromTo(".pm-mango",
          { x: isMobile ? "-30vw" : "-60vw", y: isMobile ? "10vh" : "20vh", scale: isMobile ? 0.78 : 0.65, rotation: isMobile ? -14 : -25 },
          { x: 0, y: 0, scale: 1, rotation: 0 },
          0
        )
        .fromTo(".pm-headline",
          { x: "40vw", opacity: 0 },
          { x: 0, opacity: 1 },
          0.08
        )
        .fromTo(".pm-subcontent",
          { y: "10vh", opacity: 0 },
          { y: 0, opacity: 1 },
          0.12
        )
        .to(".pm-mango", { x: isMobile ? "-16vw" : "-28vw", y: isMobile ? "-10vh" : "-18vh", scale: isMobile ? 0.82 : 0.72, rotation: isMobile ? 10 : 18 }, 0.7)
        .to(".pm-headline", { x: isMobile ? "14vw" : "30vw", opacity: 0 }, 0.7)
        .to(".pm-subcontent", { y: isMobile ? "8vh" : "12vh", opacity: 0 }, 0.72)
      
      // Flowing sections animation
      gsap.utils.toArray<HTMLElement>('.flow-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
      
    }, mainRef)
    
    return () => ctx.revert()
  }, [isMobile])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div ref={mainRef} className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-[#1A1A1A]">{content.brand_name}</span>
            </button>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('story')} className="text-[#1A1A1A] font-medium underline-animation">Story</button>
              <button onClick={() => scrollToSection('product')} className="text-[#1A1A1A] font-medium underline-animation">Product</button>
              <button onClick={() => scrollToSection('nutrition')} className="text-[#1A1A1A] font-medium underline-animation">Nutrition</button>
              <button onClick={() => scrollToSection('contact')} className="text-[#1A1A1A] font-medium underline-animation">Contact</button>
            </div>
            
            {/* CTA */}
            <div className="flex items-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="hidden sm:flex btn-primary text-sm py-3 px-6">
                Order Now
              </button>
              <button 
                className="md:hidden p-2 text-[#1A1A1A]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFD400]/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('story')} className="block w-full text-left text-lg font-medium text-[#1A1A1A] py-2">Story</button>
              <button onClick={() => scrollToSection('product')} className="block w-full text-left text-lg font-medium text-[#1A1A1A] py-2">Product</button>
              <button onClick={() => scrollToSection('nutrition')} className="block w-full text-left text-lg font-medium text-[#1A1A1A] py-2">Nutrition</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-lg font-medium text-[#1A1A1A] py-2">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary w-full mt-4">Order Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section 
        id="hero" 
        ref={heroRef}
        className="section-pinned bg-[#FFD400] flex items-center justify-center"
        style={{ zIndex: 10 }}
      >
        {/* Splash Blob */}
        <div className="splash-blob w-[80vw] h-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative w-full h-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
          {/* Headline */}
          <div className="hero-headline absolute left-[6vw] top-[18vh] max-w-[44vw]">
            <h1 className="display-hero text-[#1A1A1A]">
              PURE<br />MANGO<br />JOY
            </h1>
          </div>
          
          {/* 3D Mango */}
          <div className="hero-mango absolute left-[58vw] top-[52vh] -translate-x-1/2 -translate-y-1/2 w-[62vw] max-w-[800px]">
            <img 
              src="/images/hero-mango.png" 
              alt="Fresh Kesar Mango" 
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto mango-shadow animate-float"
            />
          </div>
          
          {/* Subcontent */}
          <div className="hero-subcontent absolute left-[6vw] top-[62vh] max-w-[34vw]">
            <p className="text-lg md:text-xl text-[#2A2A2A] mb-6">
              {content.hero_description}
            </p>
            <button onClick={() => scrollToSection('contact')} className="btn-primary mb-8">
              Order Now
            </button>
          </div>
          
          {/* Bottom Line */}
          <div className="absolute left-[6vw] bottom-[4vh]">
            <p className="text-sm text-[#1A1A1A]/70">{content.sub_hero_line}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Real Fruit */}
      <section 
        id="story"
        ref={realFruitRef}
        className="section-pinned"
        style={{ zIndex: 20 }}
      >
        {/* Background Image */}
        <div className="real-bg absolute inset-0 yellow-tint">
          <img 
            src="/images/ingredient-pour.jpg" 
            alt="Fresh mango being sliced" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 image-overlay-gradient" />
        </div>
        
        {/* Outline Text */}
        <div className="real-outline absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="display-outline">REAL</span>
        </div>
        
        {/* Label */}
        <div className="real-label absolute left-[6vw] top-[10vh]">
          <span className="text-white text-lg md:text-xl font-bold tracking-wider">100% REAL FRUIT</span>
        </div>
        
        {/* Paragraph */}
        <div className="real-paragraph absolute right-[6vw] bottom-[10vh] max-w-[min(44vw,520px)]">
          <div className="glass-card-dark p-6 md:p-8">
            <p className="text-white text-base md:text-lg leading-relaxed mb-4">
              We use ripe, seasonal mangoes—never pulp, never concentrate. Just fruit, sweetness, and sunshine.
            </p>
            <button onClick={() => scrollToSection('product')} className="text-[#FF6A00] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              See how it's made <ArrowUp className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Made With Love */}
      <section 
        ref={madeWithLoveRef}
        className="section-pinned"
        style={{ zIndex: 40 }}
      >
        {/* Background Image */}
        <div className="mwl-bg absolute inset-0 yellow-tint">
          <img 
            src="/images/process-hands.jpg" 
            alt="Hands preparing mango" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        
        {/* Outline Text */}
        <div className="mwl-outline absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="display-outline">MADE</span>
        </div>
        
        {/* Label */}
        <div className="mwl-label absolute right-[6vw] top-[10vh]">
          <span className="text-white text-lg md:text-xl font-bold tracking-wider">MADE WITH LOVE</span>
        </div>
        
        {/* Paragraph */}
        <div className="mwl-paragraph absolute left-[6vw] bottom-[10vh] max-w-[min(44vw,520px)]">
          <div className="glass-card-dark p-6 md:p-8">
            <p className="text-white text-base md:text-lg leading-relaxed">
              Peeled by hand, blended gently, packed fresh. It tastes like home—because it is made like home.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Pure Mango (Product) */}
      <section 
        id="product"
        ref={pureMangoRef}
        className="section-pinned bg-[#FFD400]"
        style={{ zIndex: 50 }}
      >
        <div className="relative w-full h-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Mango */}
          <div className="pm-mango absolute left-[18vw] top-[54vh] -translate-y-1/2 w-[74vw] max-w-[900px]">
            <img 
              src="/images/hero-mango.png" 
              alt="Pure mango" 
              loading="lazy"
              decoding="async"
              className="w-full h-auto mango-shadow"
            />
          </div>
          
          {/* Headline */}
          <div className="pm-headline absolute right-[6vw] top-[14vh] text-right">
            <h2 className="display-section text-[#1A1A1A]">
              PURE<br />MANGO
            </h2>
          </div>
          
          {/* Subcontent */}
          <div className="pm-subcontent absolute right-[6vw] top-[52vh] max-w-[30vw] text-right">
            <p className="text-[#2A2A2A] text-base md:text-lg mb-6">
              Thick. Golden. Aromatic. The way Aam Ras should be.
            </p>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get a Jar
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Texture & Flavor (Flowing) */}
      <section className="section-flowing !pt-8 md:!pt-12 bg-[#FFD400]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flow-reveal mb-12">
            <h2 className="display-section text-[#1A1A1A] mb-4">THICK, GOLDEN, AROMATIC</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Features */}
            <div className="space-y-6">
              {[
                { title: "Fiber-rich", desc: "Natural pulp for real body." },
                { title: "Naturally sweet", desc: "No added refined sugar." },
                { title: "Gir Kesar origin", desc: "Authentic Gujarati mangoes." }
              ].map((feature, i) => (
                <div key={i} className="flow-reveal feature-card">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                  <p className="text-[#2A2A2A]">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Image */}
            <div className="flow-reveal">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/images/texture-spoon.jpg" 
                  alt="Thick mango pulp texture" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-[#2A2A2A] mt-4 text-sm">
                Perfect with parathas, puris, or a spoon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Products */}
      <section className="section-flowing bg-[#FFF8E1]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flow-reveal text-center mb-16">
            <h2 className="display-section text-[#1A1A1A] mb-4">OUR PRODUCTS</h2>
            <p className="text-[#2A2A2A] text-lg max-w-2xl mx-auto">
              Choose the perfect size for your needs. All packs are freshly made and delivered within Surat.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.products.map((product) => (
              <div key={product.id} className="flow-reveal product-card">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#FFD400]/20 to-[#FF6A00]/10">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{product.name}</h3>
                  <p className="text-sm text-[#2A2A2A] mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6A00]">{product.price}</span>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="px-4 py-2 bg-[#FF6A00] text-white text-sm font-semibold rounded-full hover:bg-[#FF7700] transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Features */}
      <section className="section-flowing bg-[#FFD400]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flow-reveal text-center mb-16">
            <h2 className="display-section text-[#1A1A1A] mb-4">WHY CHOOSE GOKUL RAS?</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {content.features.map((feature, i) => (
              <div key={i} className="flow-reveal feature-card text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FF6A00]/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[#FF6A00]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#2A2A2A]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Nutrition & Usage */}
      <section 
        id="nutrition"
        className="section-flowing bg-[#FFF8E1]"
        style={{ zIndex: 70 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flow-reveal mb-12">
            <h2 className="display-section text-[#1A1A1A]">SIMPLE INGREDIENTS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nutrition Card */}
            <div className="flow-reveal glass-card p-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">What's Inside</h3>
              <ul className="space-y-3">
                {[
                  "Mango pulp (Gir Kesar)",
                  "Purified water",
                  "Raw sugar (minimal)",
                  "Lemon juice",
                  "Pinch of cardamom"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#2A2A2A]">
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-[#FFD400]/30 rounded-xl">
                <p className="text-sm text-[#1A1A1A]">
                  <strong>Storage:</strong> Refrigerate. Consume within 5 days of opening.
                </p>
              </div>
            </div>
            
            {/* Usage Ideas */}
            <div className="flow-reveal glass-card p-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">How to Enjoy</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🥣", text: "Top your yogurt" },
                  { icon: "🥤", text: "Blend into lassi" },
                  { icon: "🍰", text: "Drizzle on desserts" },
                  { icon: "❄️", text: "Serve chilled" }
                ].map((idea, i) => (
                  <div key={i} className="p-4 bg-white/60 rounded-xl text-center">
                    <span className="text-3xl mb-2 block">{idea.icon}</span>
                    <span className="text-sm text-[#2A2A2A]">{idea.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Testimonials */}
      <section className="section-flowing bg-[#FFD400]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flow-reveal text-center mb-16">
            <h2 className="display-section text-[#1A1A1A] mb-4">WHAT CUSTOMERS SAY</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial, i) => (
              <div key={i} className="flow-reveal testimonial-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>
                <p className="text-[#2A2A2A] mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-sm text-[#2A2A2A]/70">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: FAQ */}
      <section className="section-flowing bg-[#FFF8E1]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl mx-auto">
          <div className="flow-reveal text-center mb-12">
            <h2 className="display-section text-[#1A1A1A] mb-4">FAQ</h2>
          </div>
          
          <div className="space-y-0">
            {content.faqs.map((faq, i) => (
              <details key={i} className="flow-reveal faq-item group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                  <span className="text-lg font-semibold text-[#1A1A1A] pr-8">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#FF6A00] flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-[#2A2A2A] pb-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: Location */}
      <section className="section-flowing bg-[#FFD400]" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <div className="flow-reveal">
              <div className="map-container shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.529088123!2d72.73989523437499!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558298288c42a!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709833600000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gokul Ras Location - Surat, Gujarat"
                />
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="flow-reveal space-y-6">
              <h2 className="display-section text-[#1A1A1A]">VISIT US</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6A00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Address</h3>
                    <p className="text-[#2A2A2A]">{content.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6A00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Phone</h3>
                    <p className="text-[#2A2A2A]">{content.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6A00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">Hours</h3>
                    <p className="text-[#2A2A2A]">{content.contact.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={content.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a 
                  href={content.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Contact / Order */}
      <section 
        id="contact"
        className="section-flowing dark-section bg-[#111111]"
        style={{ zIndex: 70 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline */}
            <div className="flow-reveal">
              <h2 className="display-section text-white mb-6">
                ORDER<br />GOKUL RAS
              </h2>
              <p className="text-[#B7B7B7] text-lg mb-8 max-w-md">
                Fresh Aam Ras delivered to your doorstep in Surat. Bulk orders available for events and restaurants.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-[#FF6A00]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#FF6A00]" />
                  </div>
                  <span>{content.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 bg-[#FF6A00]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#FF6A00]" />
                  </div>
                  <span>{content.contact.email}</span>
                </div>
              </div>
            </div>
            
            {/* Right: Form */}
            <div className="flow-reveal">
              <div className="glass-card p-8" style={{ background: 'rgba(255, 212, 0, 0.95)' }}>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send Order Inquiry</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you soon.'); }}>
  <label htmlFor="order-name" className="sr-only">Your Name</label>
  <input 
    id="order-name"
    type="text" 
    placeholder="Your Name" 
    className="input-field"
    required
  />
  <label htmlFor="order-phone" className="sr-only">Phone or WhatsApp</label>
  <input 
    id="order-phone"
    type="tel" 
    placeholder="Phone / WhatsApp" 
    className="input-field"
    required
  />
  <label htmlFor="order-quantity" className="sr-only">Select Quantity</label>
  <select id="order-quantity" className="input-field">
    <option value="">Select Quantity</option>
    <option value="500ml">500ml Bottle - ₹199</option>
    <option value="1L">1L Bottle - ₹349</option>
    <option value="5L">5L Family Pack - ₹1,499</option>
    <option value="bulk">Bulk / Catering - Custom</option>
  </select>
  <label htmlFor="order-area" className="sr-only">Delivery Area in Surat</label>
  <input 
    id="order-area"
    type="text" 
    placeholder="Delivery Area in Surat" 
    className="input-field"
    required
  />
  <label htmlFor="order-note" className="sr-only">Special requirements</label>
  <textarea 
    id="order-note"
    placeholder="Any special requirements..." 
    rows={3}
    className="input-field resize-none"
  />
  <button type="submit" className="btn-primary w-full">
    Send Order
  </button>
</form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12" style={{ zIndex: 70 }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/hero-mango.png" alt="" loading="lazy" decoding="async" className="w-10 h-10 object-contain" />
                <span className="text-2xl font-bold">{content.brand_name}</span>
              </div>
              <p className="text-[#B7B7B7] max-w-sm">
                Pure Aam Ras made with authentic Gir Kesar mangoes. Freshly extracted in Surat, delivered with love.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#B7B7B7]">
                <li><button onClick={() => scrollToSection('story')} className="hover:text-white transition-colors">Our Story</button></li>
                <li><button onClick={() => scrollToSection('product')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('nutrition')} className="hover:text-white transition-colors">Nutrition</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6A00] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6A00] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={content.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#B7B7B7] text-sm">
              © 2024 {content.brand_name}. All rights reserved.
            </p>
            <p className="text-[#B7B7B7] text-sm flex items-center gap-1">
              Made in Surat with <Heart className="w-4 h-4 text-[#FF6A00] fill-[#FF6A00]" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={content.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  )
}

export default App
