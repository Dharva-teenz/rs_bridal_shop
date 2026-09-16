import React from "react";
import { motion } from "framer-motion";

const SITE_URL = "https://www.rsbridal.in";
const PAGE_URL = `${SITE_URL}/about-suji`;
const PROFILE_IMAGE_URL = `${SITE_URL}/assets/catalogs/artist1.png`;
const INSTAGRAM_URL = "https://instagram.com/suji_makeover_in_chennai_1";

const ABOUT_SUJI_SEO = {
  title: "About Suji | Bridal Makeup Artist in Chennai | RS Bridal",
  description: "Meet Suji, the bridal makeup artist behind RS Bridal in Chennai. Explore her bridal makeup expertise, professional training and venue services across Tamil Nadu.",
  canonical: PAGE_URL,
  ogTitle: "About Suji | Bridal Makeup Artist in Chennai",
  ogDescription: "Meet Suji, the bridal makeup artist behind RS Bridal, creating personalised wedding, engagement and reception looks in Chennai and across Tamil Nadu.",
  ogUrl: PAGE_URL,
  ogType: "profile",
  ogImage: PROFILE_IMAGE_URL,
  twitterTitle: "About Suji | RS Bridal Makeup Artist in Chennai",
  twitterDescription: "Discover Suji's bridal makeup expertise, professional beauty training and venue-based services across Chennai and Tamil Nadu.",
  twitterImage: PROFILE_IMAGE_URL,
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${PAGE_URL}#suji`,
  name: "Suji",
  jobTitle: "Bridal Makeup Artist",
  description: "Suji is the bridal makeup artist behind RS Bridal, primarily serving Chennai and accepting venue-based bridal bookings across Tamil Nadu.",
  url: PAGE_URL,
  image: PROFILE_IMAGE_URL,
  worksFor: {
    "@id": `${SITE_URL}/#business`,
  },
  knowsAbout: [
    "Bridal Makeup",
    "HD Makeup",
    "Ultra HD Makeup",
    "Engagement Makeup",
    "Reception Makeup",
    "Bridesmaid Makeup",
    "Groom Makeup and Grooming",
    "Hairstyling",
    "Bridal Hairdo",
    "Hair Extensions",
    "Saree Pre-Pleating",
    "Saree Draping",
    "Mehendi",
    "Bridal Flower Styling",
  ],
  award: "Scissors Award 2026",
  sameAs: [INSTAGRAM_URL],
};

const PROFILE_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: ABOUT_SUJI_SEO.title,
  description: ABOUT_SUJI_SEO.description,
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  mainEntity: {
    "@id": `${PAGE_URL}#suji`,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: PROFILE_IMAGE_URL,
  },
  inLanguage: "en-IN",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Suji",
      item: PAGE_URL,
    },
  ],
};

function setPageMeta(selector, attributeName, attributeValue, content) {
  let tag = document.head.querySelector(selector);
  const created = !tag;
  const previousContent = tag?.getAttribute("content") ?? null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attributeName, attributeValue);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);

  return () => {
    if (created) {
      tag.remove();
    } else if (previousContent === null) {
      tag.removeAttribute("content");
    } else {
      tag.setAttribute("content", previousContent);
    }
  };
}

function addStructuredData(id, data) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);

  return () => script.remove();
}

class AboutSuji extends React.Component {
  componentDidMount() {
    const { ui } = this.props;
    this.restoreHead = ui.applyHeadMetadata(ABOUT_SUJI_SEO);

    this.restoreAdditionalMeta = [
      setPageMeta('meta[name="author"]', "name", "author", "RS Bridal"),
      setPageMeta(
        'meta[name="robots"]',
        "name",
        "robots",
        "index, follow, max-image-preview:large"
      ),
      setPageMeta(
        'meta[name="googlebot"]',
        "name",
        "googlebot",
        "index, follow, max-image-preview:large"
      ),
      setPageMeta('meta[property="og:site_name"]', "property", "og:site_name", "RS Bridal"),
      setPageMeta('meta[property="og:locale"]', "property", "og:locale", "en_IN"),
      setPageMeta(
        'meta[property="og:image:alt"]',
        "property",
        "og:image:alt",
        "Suji, bridal makeup artist behind RS Bridal in Chennai"
      ),
      setPageMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image"),
      setPageMeta(
        'meta[name="twitter:image:alt"]',
        "name",
        "twitter:image:alt",
        "Suji, RS Bridal makeup artist in Chennai"
      ),
    ];

    this.removeStructuredData = [
      addStructuredData("rs-bridal-about-person-schema", PERSON_SCHEMA),
      addStructuredData("rs-bridal-about-profile-schema", PROFILE_PAGE_SCHEMA),
      addStructuredData("rs-bridal-about-breadcrumb-schema", BREADCRUMB_SCHEMA),
    ];
  }

  componentWillUnmount() {
    if (this.restoreHead) this.restoreHead();
    this.restoreAdditionalMeta?.reverse().forEach(restore => restore());
    this.removeStructuredData?.forEach(remove => remove());
  }

  render() {
    const { onBook, ui } = this.props;
    const { A, Brand, Footer, FloatingSocialDock, Icon } = ui;
    const IMG = import.meta.env.BASE_URL + "assets/images";
    const profilePrimary = import.meta.env.BASE_URL + "assets/catalogs/artist1.png";
    const profileFallback = `${IMG}/artist1.png`;
    const videoPrimary = import.meta.env.BASE_URL + "assets/catalogs/best_makup_artist.mp4";
    const videoFallback = import.meta.env.BASE_URL + "assets/catalogs/best_makeup_artist.mp4";

    return (
      <div className="min-h-screen bg-[#fffdfb]">
        <div className="sticky top-0 z-40 border-b border-[#eee4dc] bg-[#fffdfb]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[78px] max-w-[1420px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
            <Brand />
            <div className="hidden items-center gap-2 sm:flex sm:gap-3">
              <a href="/" className="btn-secondary !px-3 !py-2 !text-[12px] sm:!px-4 sm:!py-2.5 sm:!text-[13px]">Home</a>
              <button onClick={() => onBook()} className="btn-primary !px-3.5 !py-2 !text-[12px] sm:!px-5 sm:!py-2.5 sm:!text-[13px]"><Icon name="calendar" size={14} /> Book Now</button>
            </div>
          </div>
        </div>

        <main>
          <section className="bg-[#f6ebe2] py-12 sm:py-16">
            <div className="mx-auto grid max-w-[1420px] items-center gap-8 px-5 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-8 xl:px-10">
              <motion.div {...A.slideLeft(0.05)} className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[24px] border border-[#eadfd5] bg-[#f3e5da] shadow-[0_16px_40px_rgba(69,35,27,.10)] sm:max-w-[400px] sm:rounded-[30px] sm:shadow-[0_22px_60px_rgba(69,35,27,.12)]">
                <img
                  src={profilePrimary}
                  alt="Suji - Bridal Makeup Artist at RS Bridal"
                  className="h-[380px] w-full object-cover object-top sm:h-[520px]"
                  loading="eager"
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = profileFallback;
                  }}
                />
              </motion.div>
              <motion.div {...A.slideRight(0.12)}>
                <p className="section-kicker">ABOUT SUJI</p>
                <h1 className="section-title text-[34px] sm:text-[46px]">Suji – Bridal Makeup Artist in Chennai</h1>
                <h2 className="brand-serif mt-4 text-[28px] leading-tight text-[#241a17] sm:text-[34px]">About Suji</h2>
                <p className="mt-4 max-w-[700px] text-[14px] leading-7 text-[#655a54] sm:text-[15px]">Suji is the makeup artist behind RS Bridal, working with brides for wedding, engagement and reception functions. Originally from Trichy and primarily serving bridal clients in Chennai, she accepts venue-based bookings across Tamil Nadu based on date availability.</p>
                <p className="mt-3 max-w-[700px] text-[14px] leading-7 text-[#655a54] sm:text-[15px]">Her process is personal and practical. She understands each bride&apos;s preferred finish, then coordinates makeup with outfit, jewellery, function type and event style while keeping the preparation process friendly and comfortable.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button onClick={() => onBook()} className="btn-primary"><Icon name="whatsapp" size={16} /> Enquire on WhatsApp</button>
                  <a href="/#gallery" className="btn-secondary">View Bridal Gallery</a>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[#705f57]">
                  <a href="/" className="hover:text-[#7a111a]">Home</a>
                  <a href="/bridal-makeup-artist-chennai" className="hover:text-[#7a111a]">Bridal Makeup in Chennai</a>
                  <a href="/#services" className="hover:text-[#7a111a]">Services</a>
                  <a href="/#gallery" className="hover:text-[#7a111a]">Gallery</a>
                  <a href="/#book" className="hover:text-[#7a111a]">Contact</a>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] p-6 sm:p-9">
                <h2 className="section-title">Bridal Makeup Expertise</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Suji&apos;s bridal expertise includes Bridal Makeup, Engagement Makeup, Reception Makeup, Bridesmaid Makeup, Hairstyling, Bridal Hairdo, Hair Extension support, Saree Draping, Mehendi and Groom Makeup &amp; Grooming. Each service is planned based on the bride&apos;s look preference, outfit styling and function timeline.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-white p-6 sm:p-9">
                <h2 className="section-title">A Personal and Comfortable Bridal Experience</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Before every booking, Suji discusses the bride&apos;s preferred look, skin tone comfort and event requirement in detail. Makeup choices are coordinated with saree or lehenga styling, jewellery and function mood so the final look feels natural and event-appropriate.</p>
                <p className="mt-3 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">She also gives separate attention to engagement, reception and wedding-day differences, and supports venue-based preparation where applicable so the process stays smooth and stress-free.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fbf7f2] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)}>
                <h2 className="section-title">Professional Training &amp; Certifications</h2>
                <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {[
                    "Makeup Course",
                    "Beautician Course",
                    "Hairstyling Course",
                    "Mehendi Course",
                    "Bridal Hairdo Course",
                    "Nail Extension Course",
                    "HydraFacial Course",
                    "Massage & Spa Course",
                    "Hair Treatment Course",
                  ].map(item => (
                    <div key={item} className="flex min-h-[54px] items-center gap-3 rounded-[18px] border border-[#eadfd5] bg-white px-4 py-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#7a111a] text-[#f1d3a0]"><Icon name="check" size={13} /></span>
                      <span className="text-[12px] font-semibold leading-5 text-[#4d3c36] sm:text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-white p-6 sm:p-9">
                <h2 className="section-title">Makeup for Every Bridal Occasion</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Wedding makeup is planned for long-event wear and photography, while engagement and reception looks are adjusted for function mood, outfit styling and lighting. Bridesmaid makeup is designed to complement the bride without overpowering her look.</p>
                <p className="mt-3 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">For family-function bookings, RS Bridal can also discuss event makeup support for occasions such as baby shower or puberty functions where requested, using the same personalised approach to styling and preparation.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fbf7f2] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-[#fffaf6] p-6 sm:p-9">
                <h2 className="section-title">Friendly, Personal and Client-Focused Service</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Suji discusses expectations before each function, understands the client&apos;s preferred style and adapts the look based on requirement and occasion. Her service style is professional, approachable and focused on helping clients feel comfortable during bridal preparation.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] p-6 sm:p-9">
                <h2 className="section-title">Awards &amp; Recognition</h2>
                <p className="mt-4 max-w-[880px] text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Suji has been recognised for her work as a makeup artist and received a Scissors Award in 2026. The video captures the award moment and highlights from her bridal travel across different locations.</p>
                <div className="video-wrapper mx-auto mt-6 w-full max-w-[600px] overflow-hidden rounded-[24px] border border-[#eadfd5] bg-black shadow-[0_12px_32px_rgba(57,22,21,.14)]">
                  <video className="block h-auto max-h-[500px] w-full object-contain" controls playsInline preload="metadata">
                    <source src={videoPrimary} type="video/mp4" />
                    <source src={videoFallback} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fbf7f2] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-[#fffaf6] p-6 sm:p-9">
                <h2 className="section-title">Serving Brides Across Chennai &amp; Tamil Nadu</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Chennai is RS Bridal&apos;s primary work area. Brides can also enquire for venue-based makeup and styling in Trichy and other cities and districts across Tamil Nadu, based on booking schedule and venue timing.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-white p-6 sm:p-9">
                <h2 className="section-title">Why Brides Choose Suji and RS Bridal</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Bridal-Focused Services", "Makeup and styling support built around bridal functions and event timing."],
                    ["Personalised Approach", "Looks are planned around face features, outfit styling and preferred finish."],
                    ["Professional Beauty Skills", "Bridal, beauty and hair-related training applied to practical event requirements."],
                    ["Travel Availability", "Chennai-focused bookings with venue-based bridal services across Tamil Nadu."],
                  ].map(([title, desc], index) => (
                    <motion.article key={title} {...A.fadeUp(0.08 + index * 0.06)} className="rounded-[22px] border border-[#eadfd5] bg-[#fbf6f1] p-4">
                      <h3 className="text-[13px] font-bold text-[#2f2420]">{title}</h3>
                      <p className="mt-2 text-[12px] leading-5 text-[#665a54]">{desc}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#6d1119] py-14 text-white sm:py-16">
            <div className="mx-auto max-w-[1420px] px-5 text-center sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)}>
                <p className="text-[11px] font-bold tracking-[.2em] text-[#e8c2b2]">BOOK YOUR DATE</p>
                <h2 className="brand-serif mt-3 text-[30px] leading-tight sm:text-[42px]">Book Your Bridal Makeup Consultation</h2>
                <p className="mx-auto mt-4 max-w-[760px] text-[13px] leading-6 text-[#ead0c5] sm:text-[14px]">Use the existing RS Bridal booking flow to send your service, date and venue details on WhatsApp.</p>
                <div className="mt-6 sm:hidden">
                  <button onClick={() => onBook()} className="btn-primary">Book an Appointment</button>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button onClick={() => onBook()} className="btn-primary"><Icon name="calendar" size={16} /> Enquire Now</button>
                  <a href="/#services" className="btn-secondary">Explore Services</a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer onBook={onBook} />
        <FloatingSocialDock />
      </div>
    );
  }
}

export default AboutSuji;
