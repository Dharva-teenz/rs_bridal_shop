import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const A = {
  fadeUp: (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
  slideLeft: (d = 0) => ({ initial: { opacity: 0, x: -60 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
  slideRight: (d = 0) => ({ initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
};

const IMG = import.meta.env.BASE_URL + "assets/images";

const CONFIG = {
  whatsappNumber: "", // Add client number like 919876543210 before launch
  phoneDisplay: "Contact number pending",
  instagramUrl: "",
  instagramHandle: "Instagram pending",
  primaryArea: "Chennai, Tamil Nadu",
};

const heroImage = `${IMG}/bidal-home.png`;

const services = [
  {
    name: "Bridal Makeup",
    image: `${IMG}/bridal-4.webp`,
    summary: "A complete wedding-day look planned around your outfit, jewellery, skin preference and ceremony style.",
    details: "Bridal makeup is planned as a complete look rather than only a makeup application. The final style can be discussed around outfit colours, jewellery, venue lighting, photography and the bride's comfort preference.",
    bestFor: "Wedding ceremony, reception or main bridal event",
    includes: ["Pre-booking look discussion", "Skin-prep and bridal makeup", "Lashes and finishing touches", "Final quote based on date, selected services and requirements"],
    note: "Pricing is discussed after understanding the complete bridal requirement.",
  },
  {
    name: "Party Makeup",
    image: `${IMG}/bridal-2.webp`,
    summary: "Soft, elegant or glamorous makeup for receptions, parties and family celebrations.",
    details: "Party makeup can be kept natural, soft-glam or more defined depending on the outfit, event timing and personal preference. It is suitable for bridesmaids, friends and guests too.",
    bestFor: "Reception guests, engagement parties and celebrations",
    includes: ["Look selection", "Event makeup", "Lashes if required", "Finishing suitable for photos"],
    note: "Best price can be shared after the event type and required services are confirmed.",
  },
  {
    name: "HD Makeup",
    image: `${IMG}/bridal-1.webp`,
    summary: "Camera-friendly makeup with a smooth, polished finish for high-resolution photos and video.",
    details: "HD makeup focuses on a refined finish that photographs well under close-up cameras and event lighting. The exact product selection and finish can be adapted to the client's skin and desired coverage.",
    bestFor: "Bridal photography, reception and camera-heavy events",
    includes: ["Skin-prep", "HD-style base finish", "Eye and lip detailing", "Camera-ready final setting"],
    note: "Package and price depend on the required look and event duration.",
  },
  {
    name: "Airbrush Makeup",
    image: `${IMG}/gallery-1.webp`,
    summary: "A lightweight, even-finish option for clients who prefer an airbrushed bridal look.",
    details: "Airbrush makeup can provide a light, even appearance with a refined finish. Keep this service on the live site only after the client confirms that airbrush makeup is actually offered.",
    bestFor: "Brides who specifically request an airbrush finish",
    includes: ["Availability confirmation", "Look discussion", "Airbrush finish if offered", "Final package confirmation"],
    note: "Service availability and pricing must be confirmed with the client.",
  },
  {
    name: "Hair Styling",
    image: "https://images.pexels.com/photos/12303221/pexels-photo-12303221.jpeg?auto=compress&cs=tinysrgb&w=900",
    fallback: `${IMG}/bridal-2.webp`,
    summary: "Bridal and occasion hairstyles coordinated with jewellery, flowers, veil and outfit styling.",
    details: "Hair styling can be planned around face shape, hair length, outfit neckline and accessories. Bridal buns, curls, braids and event hairstyles can be discussed based on what the client offers.",
    bestFor: "Bridal, reception, engagement and party looks",
    includes: ["Style discussion", "Hair setting and styling", "Accessory placement support", "Flower or veil coordination when applicable"],
    note: "Complexity, extensions and accessories can affect the final quote.",
  },
  {
    name: "Saree Draping",
    image: "https://images.pexels.com/photos/30458545/pexels-photo-30458545.jpeg?auto=compress&cs=tinysrgb&w=900",
    fallback: `${IMG}/gallery-2.webp`,
    summary: "Neat traditional or contemporary saree draping for bridal and special-event looks.",
    details: "Saree draping can be matched to the event style, saree fabric and preferred silhouette. South Indian bridal draping, classic pleats and event-ready pinning can be discussed with the client.",
    bestFor: "Wedding, muhurtham, reception and family functions",
    includes: ["Drape style discussion", "Pleating and pinning", "Pallu placement", "Final fit check"],
    note: "Final availability and price should be confirmed with the client.",
  },
  {
    name: "Mehendi",
    image: "https://images.pexels.com/photos/33088135/pexels-photo-33088135.jpeg?auto=compress&cs=tinysrgb&w=900",
    fallback: `${IMG}/bridal-4.webp`,
    summary: "Traditional bridal or event mehendi — keep this service only if the client confirms it is offered.",
    details: "This service is included from the original brief as a placeholder. If RS Bridal provides mehendi directly or through a partner, the final page can show available design styles, coverage and booking requirements.",
    bestFor: "Bridal mehendi, engagement and festive events",
    includes: ["Design preference discussion", "Coverage confirmation", "Timing estimate", "Price confirmation"],
    note: "Client confirmation is required before publishing this service.",
  },
  {
    name: "Pre-Wedding Shoot Makeup",
    image: `${IMG}/gallery-2.webp`,
    summary: "Makeup and styling support for outdoor, studio and couple pre-wedding photo sessions.",
    details: "Pre-wedding shoot makeup can be planned for one or multiple outfits, with attention to natural light, camera finish and the shoot setting. Share the city and venue while booking so availability can be planned clearly.",
    bestFor: "Pre-wedding photoshoots and couple sessions",
    includes: ["Shoot look planning", "Makeup and styling", "Touch-up discussion", "Venue and schedule confirmation"],
    note: "Final price depends on the number of looks, styling requirements and shoot duration.",
  },
  {
    name: "Groom Makeup / Grooming",
    image: "https://images.pexels.com/photos/19609236/pexels-photo-19609236.jpeg?auto=compress&cs=tinysrgb&w=900",
    fallback: `${IMG}/gallery-3.webp`,
    summary: "Subtle camera-ready grooming for the groom — publish only after service availability is confirmed.",
    details: "Groom grooming can include basic skin prep, shine control and a natural camera-ready finish. This service should remain marked as pending until the client confirms the exact scope.",
    bestFor: "Wedding, reception and couple photography",
    includes: ["Service confirmation", "Natural finish planning", "Basic grooming scope", "Final price confirmation"],
    note: "Client confirmation is required before launch.",
  },
  {
    name: "Family Function Makeup",
    image: `${IMG}/bridal-3.webp`,
    summary: "Event-ready makeup for mothers, sisters, bridesmaids and family members attending functions.",
    details: "Family makeup bookings can be planned for one person or a small group. Looks can be coordinated with outfits while keeping each person's preferred level of makeup in mind.",
    bestFor: "Wedding family, bridesmaids and special functions",
    includes: ["Group requirement review", "Individual look preferences", "Event makeup", "Quote based on the number of people and selected services"],
    note: "Group pricing can be discussed after the total number of people is confirmed.",
  },
];

const galleryImages = [
  { src: `${IMG}/gallery-1.webp`, alt: "Bridal makeup gallery portrait" },
  { src: `${IMG}/gallery-2.webp`, alt: "Indian bridal makeup look gallery" },
  { src: `${IMG}/gallery-3.webp`, alt: "Traditional bridal beauty look" },
  { src: `${IMG}/bridal-1.webp`, alt: "Bridal makeup with traditional jewellery" },
  { src: `${IMG}/bridal-5.webp`, alt: "Elegant bridal portrait" },
  { src: `${IMG}/bridal-3.webp`, alt: "Wedding makeup close-up" },
];

const faqItems = [
  {
    q: "Is bridal makeup suitable for sensitive skin?",
    a: "Tell the artist about sensitivities, allergies and products that have caused reactions before the event. Product choices and any trial or patch-test process should be discussed directly with the artist before the booking date.",
  },
  {
    q: "How much time should I keep for bridal makeup?",
    a: "The final timing depends on the makeup look, hair styling, saree or dupatta draping, accessories and the event schedule. Share your ready-time with the artist early so the preparation slot can be planned without rushing.",
  },
  {
    q: "Do you travel to the wedding venue?",
    a: "Yes. Chennai is the primary work area, and venue-based bridal bookings can be discussed for cities and districts across Tamil Nadu. Share your date, city and venue so availability can be confirmed for your event.",
  },
  {
    q: "Can I book a makeup trial before the wedding?",
    a: "Trial availability is a client-confirmation item for this website. Ask on WhatsApp with your wedding date and preferred look so the artist can confirm whether a trial session is available and how it is priced.",
  },
  {
    q: "Can family members book makeup along with the bride?",
    a: "Yes, family-function and party-makeup enquiries can be collected together. Share the number of people, event time and location to receive the most suitable group plan and quote.",
  },
  {
    q: "How is the final makeup price decided?",
    a: "The quote can vary based on service type, number of looks, hair and draping requirements, number of people, event timing and any add-ons. The website therefore keeps pricing enquiry-based until the client approves final packages.",
  },
];

const guideRows = [
  ["Bridal Makeup", "Main wedding look", "₹8,000 – ₹30,000+"],
  ["HD Bridal Makeup", "Camera-focused finish", "₹10,000 – ₹35,000+"],
  ["Airbrush Bridal Makeup", "Airbrush finish", "₹12,000 – ₹40,000+"],
  ["Party Makeup", "Guests / functions", "₹2,500 – ₹8,000 per person"],
  ["Hair Styling", "Bridal / occasion hair", "₹2,000 – ₹8,000"],
  ["Saree Draping", "Traditional / event drape", "₹1,000 – ₹4,000"],
  ["Pre-Wedding Shoot Makeup", "Shoot look planning", "₹5,000 – ₹20,000+"],
  ["Family Makeup Package", "Multiple people", "₹8,000 – ₹30,000+"],
  ["Groom Grooming", "Natural camera-ready finish", "₹2,000 – ₹7,500"],
  ["Touch-Up / Second Look", "Additional styling support", "₹2,000 – ₹10,000+"],
];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    calendar: <g><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /><path d="M8 14h3v3H8z" /></g>,
    whatsapp: <g><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.8Z" /><path d="M8.2 7.8c.4-.4.8-.2 1 .2l.8 1.8c.1.3 0 .6-.2.8l-.6.7c.7 1.5 1.9 2.6 3.4 3.3l.7-.7c.2-.2.5-.3.8-.1l1.8.8c.4.2.5.6.2 1-.5.7-1.3 1-2.1.9-3.5-.5-6.4-3.3-6.9-6.8-.1-.7.3-1.5 1.1-1.9Z" /></g>,
    sparkles: <g><path d="m12 3 1.2 3.1L16 7.3l-2.8 1.2L12 12l-1.2-3.5L8 7.3l2.8-1.2L12 3Z" /><path d="m18.5 13 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8ZM5.2 14.2l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" /></g>,
    map: <g><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2.2" /></g>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <g><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></g>,
    close: <g><path d="m6 6 12 12" /><path d="M18 6 6 18" /></g>,
    menu: <g><path d="M4 7h16M4 12h16M4 17h16" /></g>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9a16 16 0 0 0 6 6l1-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2Z" />,
    plus: <g><path d="M12 5v14M5 12h14" /></g>,
    minus: <path d="M5 12h14" />,
    book: <g><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" /></g>,
    clock: <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
  };
  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function routeFromHash() {
  if (window.location.hash === "#book") return "book";
  if (window.location.hash === "#guide") return "guide";
  return "home";
}

function navigateTo(route) {
  if (route === "home") window.location.hash = "";
  else window.location.hash = route;
  window.scrollTo({ top: 0, behavior: "auto" });
}

function scrollToSection(id) {
  if (routeFromHash() !== "home") {
    window.location.hash = "";
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

function Brand() {
  return <button onClick={() => navigateTo("home")} className="flex items-center gap-3 text-left" aria-label="RS Bridal home">
    <span className="brand-serif grid h-11 w-11 place-items-center rounded-full border border-[#b8917e] text-[22px] text-[#79151d]">RS</span>
    <span><strong className="brand-serif block text-[20px] tracking-[.05em] text-[#4f171b]">RS BRIDAL</strong><span className="block text-[10px] tracking-[.1em] text-[#8a7168]">MAKEUP ARTIST</span></span>
  </button>;
}

class Header extends React.Component {
  constructor(props) { super(props); this.state = { open: false }; }
  render() {
    const { onBook } = this.props;
    const links = [["Home", "home"], ["About", "about"], ["Services", "services"], ["Gallery", "gallery"], ["FAQs", "faq"], ["Bridal Guide", "featured-guide"], ["Why Us", "why-us"], ["Service Areas", "service-areas"]];
    return <>
      <header className="sticky top-0 z-50 border-b border-[#eee4dc] bg-[#fffdfb]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1420px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
          <Brand />
          <nav className="hidden items-center gap-8 lg:flex">{links.map(([label, id]) => <button key={id} onClick={() => scrollToSection(id)} className="nav-link">{label}</button>)}</nav>
          <div className="hidden lg:block"><button onClick={() => onBook()} className="btn-primary"><Icon name="calendar" size={16} /> Book Now</button></div>
          <button onClick={() => this.setState(({ open }) => ({ open: !open }))} className="grid h-11 w-11 place-items-center rounded-full border border-[#dfd1c6] text-[#70151c] lg:hidden" aria-label="Toggle navigation"><Icon name={this.state.open ? "close" : "menu"} /></button>
        </div>
        <div className={`mobile-nav border-t border-[#eee4dc] bg-[#fffdfb] lg:hidden ${this.state.open ? "is-open" : ""}`}>
          <div className="grid gap-1 px-4 py-4">{links.map(([label, id]) => <button key={id} onClick={() => { this.setState({ open: false }); scrollToSection(id); }} className="rounded-full px-4 py-3 text-left text-[13px] font-semibold text-[#4a3d38] hover:bg-[#faf1ea]">{label}</button>)}<button onClick={() => { this.setState({ open: false }); onBook(); }} className="btn-primary mt-2 justify-center"><Icon name="calendar" size={16} /> Book Now</button></div>
        </div>
      </header>
    </>;
  }
}

function Hero({ onBook }) {
  return (
    <section id="home" className="section-anchor hero-shell relative overflow-hidden bg-[#f6ebe2]">
      <div className="mx-auto grid max-w-[1420px] grid-cols-1 items-center px-5 sm:px-6 lg:grid-cols-[46%_54%] lg:min-h-[680px] lg:px-8">
        <motion.div {...A.slideLeft(0)} className="order-2 py-10 lg:order-1 lg:py-0 lg:pr-6 xl:pr-8">
          <div className="max-w-[580px]">
            <h1 className="brand-serif text-[40px] leading-[1.05] tracking-[-.02em] text-[#211714] sm:text-[52px] lg:text-[62px]">
              Enhancing Beauty,<br />Creating <span className="text-[#7a111a]">Timeless Memories</span>
            </h1>
            <p className="mt-5 text-[13px] font-bold uppercase tracking-[.12em] text-[#8a363b] sm:text-[14px]">
              Elegant Bridal Makeup for Your Most Special Moments
            </p>
            <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#5e524c] sm:text-[17px]">
              RS Bridal creates refined bridal looks that complement your features, outfit, and personal style. Every look is thoughtfully crafted to make you feel confident, graceful, and beautifully yourself on your special day.
            </p>
            <p className="mt-4 text-[12px] text-[#6a5e58]">
              Available for Weddings Across Tamil Nadu
            </p>
            <motion.div {...A.fadeUp(0.3)} className="mt-7">
              <button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Book Your Date</button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div {...A.slideRight(0.1)} className="order-1 relative h-[420px] overflow-hidden lg:order-2 lg:h-full">
          <img
            src={heroImage}
            alt="Indian bride wearing traditional red bridal attire showcasing bridal makeup by RS Bridal"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-right lg:object-[72%_center]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 lg:hidden"
            style={{ background: "linear-gradient(to top, #f6ebe2 0%, transparent 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-28 xl:w-32"
            style={{ background: "linear-gradient(to right, #f6ebe2 0%, rgba(246,235,226,0.55) 40%, transparent 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 lg:w-16 xl:w-20"
            style={{ background: "linear-gradient(to left, #f6ebe2 0%, rgba(246,235,226,0.5) 40%, transparent 100%)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function About({ onBook }) {
  return <section id="about" className="section-anchor bg-[#fffdfb] py-20 sm:py-24">
    <div className="mx-auto grid max-w-[1420px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8">
      <motion.div {...A.slideLeft(0.1)} className="relative"><div className="mx-auto max-w-[400px] overflow-hidden rounded-[30px] border border-[#eadfd5] bg-[#f3e5da] shadow-[0_22px_60px_rgba(69,35,27,.12)]"><img src={`${IMG}/gallery-3.webp`} alt="RS Bridal makeup artist introduction placeholder portrait" className="h-[520px] w-full object-cover object-center" /></div></motion.div>
      <motion.div {...A.slideRight(0.15)}><div><p className="section-kicker">ABOUT RS BRIDAL</p><h2 className="section-title">Beauty That Feels Like You</h2><p className="mt-4 text-[14px] font-semibold tracking-[.04em] text-[#8a363b]">Personalised bridal artistry for your most meaningful celebrations.</p><p className="mt-6 text-[15px] leading-7 text-[#655a54]">RS Bridal is built around one simple idea — every bride should feel like the most confident and beautiful version of herself on her wedding day. Each look is thoughtfully planned around the bride's features, outfit, jewellery, occasion, and personal preference rather than following one fixed makeup style.</p><p className="mt-4 text-[15px] leading-7 text-[#655a54]">Originally from Trichy and primarily serving bridal clients in Chennai, RS Bridal accepts wedding and beauty bookings across Tamil Nadu. Whether the celebration is intimate or grand, the focus remains on creating an elegant, comfortable, and timeless look that feels truly personal to the bride.</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">{[["Personalised Looks", "Created around your features and personal style"], ["Bridal-Focused Beauty", "Thoughtful styling for your wedding celebrations"], ["Chennai Bookings", "Primary service area for bridal appointments"], ["Across Tamil Nadu", "Wedding bookings accepted throughout Tamil Nadu"]].map(([title, desc], i) => <motion.div key={title} {...A.fadeUp(0.3 + i * 0.08)} className="flex gap-3 rounded-[22px] border border-[#eadfd5] bg-[#fbf6f1] p-4"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white"><Icon name="check" size={14} /></span><div><strong className="block text-[13px] text-[#29211e]">{title}</strong><span className="mt-1 block text-[12px] leading-5 text-[#746963]">{desc}</span></div></motion.div>)}</div>
        <motion.div {...A.fadeUp(0.6)} className="mt-8 flex flex-wrap gap-3"><button onClick={onBook} className="btn-primary">Book an Appointment</button><button onClick={() => scrollToSection("gallery")} className="btn-secondary">See Makeup Work</button></motion.div></div></motion.div>
    </div>
  </section>;
}

function TrustStrip() {
  const items = [["map", "More Chennai Clients", "Primary work area for bridal bookings"], ["sparkles", "Look Planning", "Style discussion around outfit and event"], ["heart", "Bride-Focused", "Personal, comfortable booking experience"], ["calendar", "Tamil Nadu Wide", "Venue bookings across cities and districts"]];
  return <section className="border-y border-[#eadfd5] bg-[#faf4ee]"><div className="mx-auto grid max-w-[1420px] gap-0 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 xl:px-10">{items.map(([icon, title, desc], i) => <motion.div key={title} {...A.fadeUp(0.1 + i * 0.08)} className={`flex gap-4 py-6 ${i ? "lg:border-l lg:border-[#eadfd5] lg:pl-7" : ""}`}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ba7d7f] text-[#7a111a]"><Icon name={icon} /></span><div><strong className="block text-[13px] text-[#29211e]">{title}</strong><span className="mt-1 block text-[12px] leading-5 text-[#746963]">{desc}</span></div></motion.div>)}</div></section>;
}

class Services extends React.Component {
  constructor(props) { super(props); this.state = { selected: null }; }
  render() {
    const { onBook } = this.props;
    const selected = this.state.selected;
    return <section id="services" className="section-anchor bg-[#fbf7f2] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
      <motion.div {...A.fadeUp(0)} className="mx-auto max-w-[760px] text-center"><p className="section-kicker">OUR SERVICES</p><h2 className="section-title">Beauty Services for Every Special Occasion</h2><p className="mt-4 text-[15px] leading-7 text-[#6b5f59]">Each service has its own visual card. Tap Explore to see what the service can include, who it suits and how the final price will be discussed.</p></motion.div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <motion.article key={service.name} {...A.fadeUp(0.15 + index * 0.08)} className="card-lift overflow-hidden rounded-[24px] border border-[#eadfd5] bg-white"><div className="relative h-[210px] overflow-hidden bg-[#eee2d8] sm:h-[230px]"><img src={service.image} alt={`${service.name} service at RS Bridal`} loading="lazy" className="service-image h-full w-full object-cover" onError={e => { if (service.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = service.fallback; } }} /><span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-bold text-[#72131a] shadow-sm">{String(index + 1).padStart(2, "0")}</span></div><div className="p-4 sm:p-5"><h3 className="brand-serif text-[17px] text-[#241a17] sm:text-[20px]">{service.name}</h3><p className="mt-2 min-h-[56px] text-[12px] leading-[20px] text-[#6a5d57] sm:min-h-[66px] sm:text-[13px] sm:leading-[22px]">{service.summary}</p><div className="mt-3 flex items-center justify-between gap-4 border-t border-[#eee3da] pt-3 sm:mt-4"><span className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#8b6f61] sm:text-[11px]">Price on consultation</span><button onClick={() => this.setState({ selected: service })} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold text-[#7a111a] transition hover:bg-[#fbf0ea] sm:text-[13px]">Explore <Icon name="arrow" size={14} /></button></div></div></motion.article>)}</div>
      <motion.div {...A.fadeUp(0.7)} className="mt-10 text-center"><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Book Your Service</button></motion.div>
    </div>{selected && <ServiceModal service={selected} onClose={() => this.setState({ selected: null })} onBook={() => { const name = selected.name; this.setState({ selected: null }, () => onBook(name)); }} />}</section>;
  }
}

class ServiceModal extends React.Component {
  componentDidMount() { this.keyHandler = e => e.key === "Escape" && this.props.onClose(); document.addEventListener("keydown", this.keyHandler); }
  componentWillUnmount() { document.removeEventListener("keydown", this.keyHandler); }
  render() {
    const { service, onClose, onBook } = this.props;
    return <div className="modal-backdrop fixed inset-0 z-[70] grid place-items-center bg-black/55 p-3 sm:p-4" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal-panel max-h-[88vh] w-full max-w-[900px] overflow-auto rounded-[22px] bg-[#fffdfb] shadow-2xl sm:max-h-[92vh] sm:rounded-[30px]"><div className="grid md:grid-cols-[.85fr_1.15fr]"><div className="min-h-[180px] bg-[#ead9cb] sm:min-h-[280px]"><img src={service.image} alt={`${service.name} detailed service view`} className="h-full min-h-[180px] w-full object-cover sm:min-h-[280px]" onError={e => { if (service.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = service.fallback; } }} /></div><div className="p-4 sm:p-8"><div className="flex items-start justify-between gap-3"><div><p className="section-kicker">SERVICE DETAIL</p><h2 className="brand-serif mt-1 text-[24px] text-[#241a17] sm:mt-2 sm:text-[36px]">{service.name}</h2></div><button onClick={onClose} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e1d3c9] text-[#6d171d] sm:h-10 sm:w-10" aria-label="Close service details"><Icon name="close" size={16} /></button></div><p className="mt-3 text-[13px] leading-6 text-[#665a54] sm:mt-5 sm:text-[14px] sm:leading-7">{service.details}</p><div className="mt-4 rounded-[18px] border border-[#eadfd5] bg-[#fbf5ef] p-4 sm:mt-6 sm:rounded-[22px] sm:p-5"><strong className="text-[11px] uppercase tracking-[.12em] text-[#7b252b]">Best for</strong><p className="mt-1.5 text-[13px] text-[#413733] sm:mt-2 sm:text-[14px]">{service.bestFor}</p></div><h3 className="mt-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#7b252b] sm:mt-6">What this can include</h3><div className="mt-2 grid gap-1.5 sm:mt-3 sm:gap-2">{service.includes.map(item => <div key={item} className="flex gap-2 text-[12px] leading-5 text-[#554a45] sm:gap-3 sm:text-[13px] sm:leading-6"><span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white sm:h-5 sm:w-5"><Icon name="check" size={10} /></span>{item}</div>)}</div><p className="mt-4 rounded-[18px] bg-[#f4e7dc] p-3 text-[11px] leading-5 text-[#6f5b52] sm:mt-6 sm:rounded-[22px] sm:p-4 sm:text-[12px]">{service.note}</p><div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3"><button onClick={onBook} className="btn-primary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]"><Icon name="calendar" size={15} /> Book This Service</button><button onClick={onClose} className="btn-secondary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]">Close</button></div></div></div></div></div>;
  }
}

function FeaturedGuide({ onBook }) {
  const points = [["book", "Understand Makeup Pricing", "What usually changes a bridal beauty quote"], ["calendar", "2026 Planning Guide", "Useful questions before confirming your package"], ["sparkles", "Smart Saving Tips", "Plan inclusions, timing and group bookings early"], ["heart", "Tailored Quote", "Final pricing is discussed for your exact requirement"]];
  return <section id="featured-guide" className="section-anchor bg-[#fffdfb] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
    <motion.div {...A.fadeUp(0)} className="featured-layout overflow-hidden rounded-[32px] border border-[#eadfd5] bg-[#fbf4ee] shadow-[0_18px_55px_rgba(69,35,27,.07)]">
      <div className="featured-media relative overflow-hidden"><img src={`${IMG}/bridal-5.webp`} alt="Bridal makeup cost planning guide in India" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#571016]/45 via-transparent to-transparent"></div><div className="absolute bottom-6 left-6 rounded-full bg-white/92 px-4 py-2 text-[11px] font-bold text-[#74131b] shadow">5 Minutes Read</div></div>
      <div className="p-7 sm:p-10 lg:p-12"><p className="section-kicker">FEATURED BRIDAL GUIDE</p><h2 className="brand-serif mt-3 text-[38px] leading-[1.08] text-[#211815] sm:text-[46px]">Bridal Makeup Costs in India (2026)</h2><p className="mt-5 max-w-[650px] text-[14px] leading-7 text-[#665a54]">Discover how bridal beauty pricing is usually structured, what can affect your quote and how to compare packages without choosing only by the lowest number.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{points.map(([icon, title, text], i) => <motion.div key={title} {...A.fadeUp(0.2 + i * 0.08)} className="flex gap-3 rounded-[22px] border border-[#eadfd5] bg-white p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f6e6dc] text-[#7a111a]"><Icon name={icon} size={18} /></span><div><strong className="block text-[13px] text-[#312724]">{title}</strong><span className="mt-1 block text-[11px] leading-5 text-[#746963]">{text}</span></div></motion.div>)}</div><div className="mt-7 flex flex-wrap gap-3"><button onClick={() => navigateTo("guide")} className="btn-primary">Read Full Article <Icon name="arrow" size={16} /></button><button onClick={onBook} className="btn-secondary">Get a Personal Quote</button></div></div>
    </motion.div>
    <motion.div {...A.fadeUp(0.3)} className="guide-stats mt-5 overflow-hidden rounded-[26px]">{[["10", "Service categories", "Bridal to family functions"], ["Chennai", "Primary work area", "Main booking focus"], ["Tamil Nadu", "Service coverage", "Cities and districts across the state"], ["1:1", "Quote discussion", "Based on your requirement"]].map(([big, title, desc], i) => <div key={title} className={`p-6 ${i ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}><strong className="brand-serif text-[30px] text-[#f4d7c6]">{big}</strong><span className="mt-1 block text-[12px] font-bold">{title}</span><span className="mt-1 block text-[11px] text-[#d9bab1]">{desc}</span></div>)}</motion.div>
  </div></section>;
}

class FAQ extends React.Component {
  constructor(props) { super(props); this.state = { open: 0 }; }
  render() {
    return <section id="faq" className="section-anchor border-y border-[#eadfd5] bg-[#fbf7f2] py-20 sm:py-24"><div className="mx-auto grid max-w-[1420px] gap-10 px-5 sm:px-6 lg:grid-cols-[.62fr_1.38fr] lg:px-8 xl:px-10">
      <motion.div {...A.slideLeft(0.1)} className="lg:sticky lg:top-[130px] lg:self-start"><p className="section-kicker">GOT QUESTIONS?</p><h2 className="brand-serif mt-3 text-[42px] leading-[1.05] text-[#211815]">Frequently Asked <span className="italic text-[#7a111a]">Questions</span></h2><p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[#665a54]">Have a question not listed here? Reach out on WhatsApp with your date, city, venue and service requirement.</p><button onClick={() => this.props.onBook()} className="btn-primary mt-6"><Icon name="whatsapp" size={17} /> Ask on WhatsApp</button></motion.div>
      <motion.div {...A.slideRight(0.2)} className="grid gap-3">{faqItems.map((item, index) => { const open = this.state.open === index; return <article key={item.q} className="overflow-hidden rounded-[24px] border border-[#e5d7cb] bg-white"><button onClick={() => this.setState({ open: open ? -1 : index })} className="flex w-full items-center gap-5 rounded-none px-5 py-5 text-left sm:px-6"><span className="brand-serif text-[18px] text-[#9a5559]">{String(index + 1).padStart(2, "0")}</span><strong className="flex-1 text-[14px] font-semibold text-[#2e2623]">{item.q}</strong><span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#dcc9bc] text-[#7a111a]"><Icon name={open ? "minus" : "plus"} size={17} /></span></button><div className={`faq-answer ${open ? "is-open" : ""}`}><p className="px-5 pb-6 pl-[68px] text-[13px] leading-7 text-[#6c605a] sm:px-6 sm:pl-[76px]">{item.a}</p></div></article>; })}</motion.div>
    </div></section>;
  }
}

class Gallery extends React.Component {
  constructor(props) { super(props); this.state = { selected: null }; }
  render() { const { onBook } = this.props; return <section id="gallery" className="section-anchor bg-[#fffdfb] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><motion.div {...A.fadeUp(0)} className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">BRIDAL GALLERY</p><h2 className="section-title">Looks that inspire your wedding-day mood</h2></div><button onClick={onBook} className="btn-secondary self-start">Book Your Look</button></motion.div><div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">{galleryImages.map((item, index) => <motion.button key={item.src} {...A.fadeUp(0.1 + index * 0.07)} onClick={() => this.setState({ selected: item })} className={`group overflow-hidden rounded-[24px] bg-[#efe1d7] ${index === 0 ? "md:row-span-2" : ""}`}><img src={item.src} alt={item.alt} loading="lazy" className={`block w-full h-full object-cover ${index === 0 ? "" : "aspect-[4/3]"}`} /></motion.button>)}</div></div>{this.state.selected && <div className="modal-backdrop fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4" onClick={() => this.setState({ selected: null })}><button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#70151c]" aria-label="Close image"><Icon name="close" /></button><img src={this.state.selected.src} alt={this.state.selected.alt} className="lightbox-image max-w-[92vw] rounded-[24px]" /></div>}</section>; }
}

function WhyUs() {
  const items = [["sparkles", "Look Planning", "Makeup can be coordinated with outfit, jewellery, photography and event timing."], ["heart", "Personal Attention", "The website is designed around direct bridal enquiries instead of a generic salon flow."], ["map", "Tamil Nadu Coverage", "Chennai-focused bookings with venue enquiries across Tamil Nadu, subject to date availability."], ["check", "Clear Confirmation", "Service scope, date, venue and final quote can be confirmed before booking."]];
  return <section id="why-us" className="section-anchor bg-[#6d1119] py-20 text-white sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><motion.div {...A.fadeUp(0)} className="mx-auto max-w-[720px] text-center"><p className="text-[12px] font-bold tracking-[.22em] text-[#e5b8a7]">WHY RS BRIDAL</p><h2 className="brand-serif mt-3 text-[42px] sm:text-[50px]">A calm, personal beauty experience for your special day</h2></motion.div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([icon, title, desc], i) => <motion.div key={title} {...A.fadeUp(0.15 + i * 0.1)} className="rounded-[26px] border border-white/15 bg-white/[.06] p-6"><span className="grid h-12 w-12 place-items-center rounded-full border border-[#d79c8d] text-[#f3c8b8]"><Icon name={icon} /></span><h3 className="brand-serif mt-5 text-[24px]">{title}</h3><p className="mt-3 text-[12px] leading-6 text-[#e5cbc2]">{desc}</p></motion.div>)}</div></div></section>;
}

function ServiceAreas({ onBook }) {
  const areas = ["Chennai", "Trichy", "Coimbatore", "Madurai", "Salem", "Erode", "Thanjavur", "Tirunelveli", "Vellore", "Tiruppur", "Kanchipuram", "Cuddalore"];
    return <div><section id="service-areas" className="section-anchor bg-[#fffdfb] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch"><motion.div {...A.slideLeft(0.1)} className="rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] p-7 sm:p-9"><p className="section-kicker">SERVICE AREAS</p><h2 className="brand-serif mt-3 text-[38px] leading-[1.08] text-[#211815] sm:text-[44px]"> Bridal bookings across Tamil Nadu.</h2><p className="mt-5 text-[14px] leading-7 text-[#665a54]">Chennai is the primary work area for RS Bridal. Brides can also enquire for weddings, receptions, pre-wedding shoots and family functions in cities and districts across Tamil Nadu, based on date availability.</p><p className="mt-4 text-[13px] leading-6 text-[#786b64]">Share your event date, city and venue in the booking form. We will use those details only to check scheduling and service availability for your event.</p><div className="mt-7 flex flex-wrap gap-3"><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Check Your Date</button><button onClick={() => scrollToSection("services")} className="btn-secondary">Explore Services</button></div></motion.div><motion.div {...A.slideRight(0.2)} className="rounded-[30px] border border-[#e2d3c7] bg-[radial-gradient(circle_at_top_left,#fff8f3,#f1dfd2)] p-7 sm:p-9"><div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white"><Icon name="map" size={22} /></span><div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8a363b]">Primary Work Area</p><h3 className="brand-serif mt-1 text-[31px] text-[#4f171b]">{CONFIG.primaryArea}</h3><p className="mt-2 text-[12px] leading-5 text-[#75665f]">Available for venue-based bridal enquiries across Tamil Nadu.</p></div></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{areas.map(area => <div key={area} className="rounded-full border border-[#ddc9bc] bg-white/80 px-4 py-3 text-center text-[12px] font-semibold text-[#5c302e]">{area}</div>)}</div><p className="mt-6 text-center text-[12px] font-semibold text-[#7a111a]">And other cities & districts across Tamil Nadu</p></motion.div></div></div></section><section className="bg-[#fffdfb] pb-20 sm:pb-24"><div className="mx-auto flex max-w-[1420px] flex-col justify-between gap-8 rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:px-12"><div><p className="section-kicker">READY TO ENQUIRE?</p><h2 className="brand-serif mt-2 text-[34px] text-[#211815]">Share your date, service, city and venue.</h2><p className="mt-2 text-[13px] text-[#6b5f59]">Book Now opens the dedicated booking page and prepares your details for WhatsApp.</p></div><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Open Booking Page</button></div></section></div>;
}

function Footer({ onBook }) {
  return <footer className="bg-[#211715] text-[#eadbd4]"><div className="mx-auto grid max-w-[1420px] gap-8 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8 xl:px-10"><div><Brand /><p className="mt-4 max-w-[280px] text-[12px] leading-6 text-[#bdaea8]">bridal makeup artist focused on Chennai and available for bookings across Tamil Nadu.</p></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Quick Links</h3><div className="mt-4 grid gap-2 text-[12px] text-[#bdaea8]"><button onClick={() => scrollToSection("about")} className="text-left">About</button><button onClick={() => scrollToSection("services")} className="text-left">Services</button><button onClick={() => navigateTo("guide")} className="text-left">Bridal Guide</button><button onClick={() => scrollToSection("faq")} className="text-left">FAQs</button><button onClick={() => scrollToSection("service-areas")} className="text-left">Service Areas</button></div></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Service Area</h3><p className="mt-4 text-[13px] font-semibold text-white">Chennai — Primary Work Area</p><p className="mt-2 text-[13px]">Bookings across Tamil Nadu</p><p className="mt-4 text-[13px]">{CONFIG.phoneDisplay}</p><p className="mt-2 text-[13px]">{CONFIG.instagramHandle}</p></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Booking</h3><p className="mt-4 text-[12px] leading-6 text-[#bdaea8]">Use the dedicated booking page to share your service, date, city and venue, then send the enquiry on WhatsApp.</p><button onClick={onBook} className="mt-4 rounded-full border border-[#8f5d58] px-5 py-2.5 text-[13px] font-semibold text-white">Book Now</button></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-[1420px] flex-col gap-2 px-5 py-5 text-[11px] text-[#9f918b] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-10"><span>© {new Date().getFullYear()} RS Bridal. All rights reserved.</span><span>Client photos, final contact details, prices and confirmed service claims required before launch.</span></div></div></footer>;
}

function FloatingWhatsApp() {
  const click = () => { if (CONFIG.whatsappNumber) window.open(`https://wa.me/${CONFIG.whatsappNumber}`, "_blank", "noopener"); else navigateTo("book"); };
  return <button onClick={click} className="wa-float fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_28px_rgba(37,211,102,.45)] transition hover:scale-110" aria-label="Open WhatsApp"><img src={`${IMG}/whatsapp-logo.svg`} alt="" className="h-[34px] w-[34px]" /></button>;
}

class BookingPage extends React.Component {
  constructor(props) { super(props); this.state = { form: { name: "", phone: "", service: props.presetService || services[0].name, date: "", location: "", notes: "" }, status: "" }; }
  update = e => this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
  buildMessage = () => { const f = this.state.form; return ["Hello RS Bridal, I would like to enquire about a booking.", "", `Name: ${f.name || "-"}`, `Phone: ${f.phone || "-"}`, `Service: ${f.service || "-"}`, `Preferred Date: ${f.date || "-"}`, `Location: ${f.location || "-"}`, `Notes: ${f.notes || "-"}`, "", "Please share availability and the best quote for this requirement."].join("\n"); };
  submit = e => { e.preventDefault(); const f = this.state.form; if (!f.name || !f.phone || !f.service || !f.date) { this.setState({ status: "Please fill name, phone, service and preferred date." }); return; } if (!CONFIG.whatsappNumber) { this.setState({ status: "Booking message is ready. Add the client's WhatsApp number in CONFIG.whatsappNumber before launch, or use Copy Message for this demo." }); return; } window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(this.buildMessage())}`, "_blank", "noopener"); };
  copy = async () => { try { await navigator.clipboard.writeText(this.buildMessage()); this.setState({ status: "Booking message copied." }); } catch { this.setState({ status: "Copy is unavailable in this browser. Add the WhatsApp number before launch." }); } };
  render() { const f = this.state.form; return <div className="min-h-screen bg-[#f8efe8]"><div className="border-b border-[#eadfd5] bg-[#fffdfb]"><div className="mx-auto flex h-[80px] max-w-[1420px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10"><Brand /><button onClick={() => navigateTo("home")} className="btn-secondary">← Back to Website</button></div></div><main className="mx-auto grid max-w-[1420px] gap-8 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[.8fr_1.2fr] lg:px-8 xl:px-10"><motion.aside {...A.slideLeft(0.1)} className="rounded-[30px] bg-[#711019] p-7 text-white sm:p-9"><p className="text-[12px] font-bold tracking-[.2em] text-[#edc4b1]">BOOK YOUR LOOK</p><h1 className="brand-serif mt-3 text-[45px] leading-[1.08]">Tell us your date, service, city and venue.</h1><p className="mt-5 text-[14px] leading-7 text-[#eedbd3]">This dedicated page collects the booking details and formats them into one WhatsApp enquiry message.</p><div className="mt-8 grid gap-4">{[["01", "Choose a service"], ["02", "Pick your preferred date"], ["03", "Share your city and venue"], ["04", "Send everything on WhatsApp"]].map(([n, t]) => <div key={n} className="flex items-center gap-4 rounded-[22px] border border-white/15 bg-white/[.06] p-4"><span className="brand-serif text-[24px] text-[#efc4b0]">{n}</span><span className="text-[13px] font-semibold">{t}</span></div>)}</div><p className="mt-8 text-[11px] leading-5 text-[#c9aca2]">WhatsApp number, prices and exact booking policy are still pending client confirmation.</p></motion.aside><motion.section {...A.slideRight(0.2)} className="rounded-[30px] border border-[#e3d4c8] bg-white p-6 shadow-[0_18px_55px_rgba(69,35,27,.09)] sm:p-9"><p className="section-kicker">BOOKING DETAILS</p><h2 className="brand-serif mt-2 text-[34px] text-[#211815]">Request an Appointment</h2><form onSubmit={this.submit} className="mt-7 grid gap-5 sm:grid-cols-2"><label><span className="form-label">Your Name *</span><input className="form-field" name="name" value={f.name} onChange={this.update} placeholder="Enter your name" required /></label><label><span className="form-label">Phone Number *</span><input className="form-field" name="phone" value={f.phone} onChange={this.update} placeholder="Enter phone number" inputMode="tel" required /></label><label><span className="form-label">Service *</span><select className="form-field" name="service" value={f.service} onChange={this.update}>{services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}</select></label><label><span className="form-label">Preferred Date *</span><input className="form-field" type="date" name="date" value={f.date} onChange={this.update} required /></label><label className="sm:col-span-2"><span className="form-label">Location</span><input className="form-field" name="location" value={f.location} onChange={this.update} placeholder="City / venue in Tamil Nadu" /></label><label className="sm:col-span-2"><span className="form-label">Notes</span><textarea className="form-field min-h-[120px] resize-y" name="notes" value={f.notes} onChange={this.update} placeholder="Tell us about the event, number of people, preferred look, timing, etc."></textarea></label><div className="sm:col-span-2"><div className="flex flex-wrap gap-3"><button type="submit" className="btn-primary"><Icon name="whatsapp" size={18} /> Send on WhatsApp</button><button type="button" onClick={this.copy} className="btn-secondary">Copy Message</button></div>{this.state.status && <p className="mt-4 rounded-[20px] bg-[#fbf3ed] p-4 text-[12px] leading-5 text-[#725f55]">{this.state.status}</p>}</div></form></motion.section></main></div>; }
}

function GuidePage({ onBook }) {
  const factors = [["01", "Event Schedule", "Ready-time, ceremony schedule and number of looks can change the service plan."], ["02", "Artist Experience", "Senior artists and specialist teams may price differently based on demand and expertise."], ["03", "Package Inclusions", "Hair, draping, lashes, touch-ups, trials and extra looks can change the package total."], ["04", "Products & Technique", "HD, airbrush or specific product preferences can affect the final service plan."], ["05", "Event Complexity", "Multiple ceremonies, people, looks or tight schedules can require extra time or team members."]];
  const tips = [["01", "Book Early", "Popular wedding dates fill quickly. Enquire early so artist availability and event timing can be planned together."], ["02", "Share Exact Requirements", "Send the date, venue, ready-time, number of people and services required before comparing quotes."], ["03", "Compare Inclusions, Not Only Price", "Check whether hair, draping, lashes, trial, touch-ups or additional looks are included before judging two packages."], ["04", "Bundle Family Services", "If several family members need makeup, ask whether one coordinated group plan is possible."], ["05", "Keep Reference Looks Ready", "Share a few makeup references plus outfit and jewellery photos so the artist understands the finish you prefer."]];
  return <div className="min-h-screen bg-[#fffdfb]"><Header onBook={onBook} /><main>
    <motion.section {...A.fadeUp(0)} className="border-b border-[#eadfd5] bg-[#fbf4ee]"><div className="mx-auto max-w-[1040px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><button onClick={() => { navigateTo("home"); setTimeout(() => scrollToSection("featured-guide"), 60); }} className="btn-secondary">← Back to Bridal Guide</button><div className="mt-8 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#7e373b]"><span className="rounded-full bg-white px-3 py-2">Updated for 2026</span><span className="rounded-full bg-white px-3 py-2">India Planning Guide</span><span className="rounded-full bg-white px-3 py-2">For Brides & Families</span></div><h1 className="brand-serif mt-6 max-w-[920px] text-[45px] leading-[1.03] text-[#211815] sm:text-[62px]">Bridal Makeup Costs in India (2026): Complete Planning Guide</h1><p className="mt-6 max-w-[820px] text-[17px] leading-8 text-[#645953]">Understand the typical planning ranges around bridal beauty services, what changes the final quote and how to compare packages with confidence.</p><div className="mt-7 flex flex-wrap items-center gap-5 text-[12px] text-[#786a63]"><span className="flex items-center gap-2"><Icon name="clock" size={16} /> 7 min comprehensive read</span><span>•</span><span>RS Bridal planning content</span></div></div></motion.section>
    <article className="mx-auto max-w-[1040px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.section {...A.fadeUp(0.1)}><p className="section-kicker">BRIDAL BUDGET BASICS</p><h2 className="article-title">Understanding Bridal Makeup Pricing in India</h2><p className="article-copy">Bridal makeup prices are not one fixed number. Two artists can quote differently because the work may include different products, techniques, team size, hair styling, draping, touch-ups or additional people. A useful comparison starts with the exact scope of the package.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{factors.map(([n, title, text], i) => <motion.div key={title} {...A.fadeUp(0.2 + i * 0.08)} className={`rounded-[24px] border border-[#eadfd5] bg-[#fbf7f2] p-6 ${i === 4 ? "sm:col-span-2" : ""}`}><span className="brand-serif text-[25px] text-[#a05a5d]">{n}</span><h3 className="brand-serif mt-2 text-[25px] text-[#2a211e]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#6a5f59]">{text}</p></motion.div>)}</div></motion.section>
      <motion.section {...A.fadeUp(0.15)} className="mt-16"><p className="section-kicker">ILLUSTRATIVE PLANNING INDEX</p><h2 className="article-title">Typical Bridal Beauty Cost Ranges</h2><p className="article-copy">The ranges below are sample planning bands for the prototype, not confirmed RS Bridal prices. Before launch, replace them with client-approved ranges or keep the website enquiry-based.</p><div className="mt-8 overflow-x-auto rounded-[24px] border border-[#e5d7cc]"><table className="min-w-[760px] w-full border-collapse bg-white text-left"><thead className="bg-[#74121a] text-white"><tr><th className="px-5 py-4 text-[12px]">Service</th><th className="px-5 py-4 text-[12px]">Category</th><th className="px-5 py-4 text-[12px]">Illustrative Planning Range</th></tr></thead><tbody>{guideRows.map((row, index) => <tr key={row[0]} className={index % 2 ? "bg-[#fcf8f4]" : "bg-white"}>{row.map((cell, i) => <td key={cell} className={`border-t border-[#eee3db] px-5 py-4 text-[13px] ${i === 0 ? "font-semibold text-[#2f2522]" : "text-[#6d6059]"}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 rounded-[20px] bg-[#fbf1ea] p-4 text-[11px] leading-5 text-[#78665e]">Prototype note: These are illustrative editorial ranges only. Actual prices vary widely by city, artist, package and requirements. Confirm the client's real pricing policy before publishing.</p></motion.section>
      <motion.section {...A.fadeUp(0.2)} className="mt-16"><p className="section-kicker">COST TRANSPARENCY</p><h2 className="article-title">Why Can Bridal Makeup Packages Cost More?</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{[["Timing & Team Size", "Very early ready-times, multiple people or tightly scheduled looks can require extra coordination."], ["Experience & Demand", "Wedding-season demand and the artist's experience level can affect availability and pricing."], ["Hair, Draping & Accessories", "A quote may cover makeup only or a complete styling package, so always compare inclusions."], ["Multiple Looks or People", "Reception changes, family makeup or multi-event bookings increase the total service scope."], ["Technique & Products", "HD, airbrush and specific product requirements may use different processes and kits."], ["Touch-Up Support", "Staying through the ceremony or returning for a second look may be priced separately."]].map(([title, text]) => <div key={title} className="rounded-[24px] border border-[#eadfd5] p-6"><h3 className="brand-serif text-[25px] text-[#2a211e]">{title}</h3><p className="mt-3 text-[13px] leading-6 text-[#6b5f59]">{text}</p></div>)}</div></motion.section>
      <motion.section {...A.fadeUp(0.25)} className="mt-16 rounded-[32px] bg-[#74121a] p-7 text-white sm:p-10"><p className="text-[11px] font-bold tracking-[.18em] text-[#efc6b5]">SMART BRIDAL PLANNING</p><h2 className="brand-serif mt-3 text-[40px] sm:text-[48px]">How to get the best value from your makeup booking</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{tips.map(([n, title, text], i) => <div key={title} className={`rounded-[24px] border border-white/15 bg-white/[.06] p-5 ${i === 4 ? "md:col-span-2" : ""}`}><span className="brand-serif text-[23px] text-[#efc6b5]">{n}</span><h3 className="mt-2 text-[14px] font-bold">{title}</h3><p className="mt-2 text-[12px] leading-6 text-[#ead5cd]">{text}</p></div>)}</div></motion.section>
      <motion.section {...A.fadeUp(0.3)} className="mt-16"><p className="section-kicker">TAILORED ENQUIRY</p><h2 className="article-title">A better quote starts with complete details</h2><p className="article-copy">Instead of showing a misleading fixed price, RS Bridal can collect the information that actually changes a booking: service, date, number of people, ready-time, styling requirements and preferred look. The venue or city is collected separately so date availability can be planned clearly.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{[["Bridal Makeup", "Share wedding date, venue, ready-time and preferred finish.", "Bridal Makeup"], ["Family / Party Makeup", "Share number of people and whether hair or draping is required.", "Family Function Makeup"], ["Pre-Wedding / Venue Booking", "Share number of looks, shoot duration, city and venue details.", "Pre-Wedding Shoot Makeup"]].map(([title, text, service]) => <div key={title} className="rounded-[24px] border border-[#eadfd5] bg-[#fbf7f2] p-6"><h3 className="brand-serif text-[24px] text-[#2a211e]">{title}</h3><p className="mt-3 text-[12px] leading-6 text-[#6d615b]">{text}</p><button onClick={() => onBook(service)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7a111a] px-5 py-2.5 text-[12px] font-bold text-white">Request Quote <Icon name="arrow" size={14} /></button></div>)}</div></motion.section>
      <motion.section {...A.fadeUp(0.35)} className="mt-16 rounded-[32px] border border-[#e7d9ce] bg-[#fbf4ee] p-7 text-center sm:p-12"><p className="section-kicker">START YOUR BRIDAL PLAN</p><h2 className="brand-serif mt-3 text-[42px] text-[#211815] sm:text-[52px]">Ready to discuss your look, date and venue?</h2><p className="mx-auto mt-4 max-w-[680px] text-[14px] leading-7 text-[#665a54]">Use the booking page to send all the key details in one message. Final services, availability and pricing can then be confirmed directly with RS Bridal.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><button onClick={() => onBook()} className="btn-primary"><Icon name="calendar" size={17} /> Book Your Consultation</button><button onClick={() => navigateTo("home")} className="btn-secondary">Back to Website</button></div></motion.section>
    </article>
  </main><Footer onBook={onBook} /><FloatingWhatsApp /></div>;
}

function HomePage({ onBook }) {
  return <div><Header onBook={onBook} /><main><Hero onBook={onBook} /><About onBook={onBook} /><TrustStrip /><Services onBook={onBook} /><Gallery onBook={onBook} /><FAQ onBook={onBook} /><FeaturedGuide onBook={onBook} /><WhyUs /><ServiceAreas onBook={onBook} /></main><Footer onBook={onBook} /><FloatingWhatsApp /></div>;
}

class App extends React.Component {
  constructor(props) { super(props); this.state = { route: routeFromHash(), presetService: "" }; }
  componentDidMount() { this.hashHandler = () => this.setState({ route: routeFromHash() }); window.addEventListener("hashchange", this.hashHandler); }
  componentWillUnmount() { window.removeEventListener("hashchange", this.hashHandler); }
  onBook = (service = "") => { this.setState({ presetService: service }); window.location.hash = "book"; window.scrollTo(0, 0); };
  render() {
    const { route, presetService } = this.state;
    const anim = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.3, ease: "easeInOut" } };
    return (
      <AnimatePresence mode="wait">
        <motion.div key={route} {...anim}>
          {route === "book" && <BookingPage presetService={presetService} />}
          {route === "guide" && <GuidePage onBook={this.onBook} />}
          {route === "home" && <HomePage onBook={this.onBook} />}
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default App;
