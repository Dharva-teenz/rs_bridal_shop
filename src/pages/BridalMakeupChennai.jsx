import React from "react";
import { motion } from "framer-motion";

class BridalMakeupChennai extends React.Component {
  componentDidMount() {
    const { ui } = this.props;
    const title = "Best Bridal Makeup Artist in Chennai | RS Bridal";
    const description = "Looking for a bridal makeup artist in Chennai? RS Bridal offers bridal, engagement, reception, hairstyling and saree draping services with on-site travel across Chennai and Tamil Nadu.";
    const canonical = "https://www.rsbridal.in/bridal-makeup-artist-chennai";
    const image = "https://www.rsbridal.in/assets/images/artist1.png";

    this.restoreHead = ui.applyHeadMetadata({
      title,
      description,
      canonical,
      ogTitle: title,
      ogDescription: description,
      ogUrl: canonical,
      ogType: "website",
      ogImage: image,
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: image,
    });

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.rsbridal.in/bridal-makeup-artist-chennai#service",
          name: "RS Bridal Makeup Services",
          serviceType: "Best Bridal Makeup Artist in Chennai",
          url: canonical,
          areaServed: [
            { "@type": "City", name: "Chennai" },
            { "@type": "City", name: "Tiruchirappalli", alternateName: "Trichy" },
            { "@type": "AdministrativeArea", name: "Tamil Nadu" },
          ],
          provider: {
            "@type": ["LocalBusiness", "BeautySalon", "ProfessionalService"],
            name: "RS Bridal",
            sameAs: [ui.CONFIG.instagramUrl],
          },
        },
      ],
    };

    this.schemaTag = document.createElement("script");
    this.schemaTag.type = "application/ld+json";
    this.schemaTag.text = JSON.stringify(schema);
    document.head.appendChild(this.schemaTag);
  }

  componentWillUnmount() {
    if (this.restoreHead) this.restoreHead();
    if (this.schemaTag?.parentNode) this.schemaTag.parentNode.removeChild(this.schemaTag);
  }

  render() {
    const { onBook, ui } = this.props;
    const { A, Brand, Footer, FloatingSocialDock, Icon, CONFIG, heroImage } = ui;

    const faqItems = [
      {
        q: "Does RS Bridal provide bridal makeup at wedding venues in Chennai?",
        a: "Yes. RS Bridal provides venue-based bridal makeup in Chennai for wedding-day events based on booking date and schedule.",
      },
      {
        q: "Does RS Bridal travel across Chennai for bridal bookings?",
        a: "Yes. On-site bridal bookings are accepted across Chennai, and event timing can be planned around your venue schedule.",
      },
      {
        q: "What bridal makeup services are available?",
        a: "Bridal services include HD Makeup, Ultra HD Makeup, Signature Look, Glossy Skin Finish Makeup, hairstyling, saree draping, bridesmaid makeup and mehendi options.",
      },
      {
        q: "Does RS Bridal provide engagement and reception makeup?",
        a: "Yes. RS Bridal takes bookings for engagement and reception looks, with style planning based on outfit, jewellery and function timing.",
      },
      {
        q: "Does RS Bridal travel outside Chennai?",
        a: "Yes. Chennai is the primary work area, and venue-based bookings can also be discussed for Trichy and other cities across Tamil Nadu.",
      },
    ];

    const serviceHighlights = [
      ["Bridal Makeup", "HD, Ultra HD, Signature and Glossy Skin Finish bridal looks planned for your wedding-day style."],
      ["Engagement & Reception Makeup", "Look planning for engagement and reception functions with a polished, camera-ready finish."],
      ["Bridesmaid Makeup", "Event makeup for sisters and bridesmaids to complement the wedding palette."],
      ["Hairstyling & Saree Draping", "Hair do support and saree pre-pleating options for a complete bridal-ready look."],
      ["Mehendi", "Organic-cone mehendi options for bridal and function requirements."],
    ];

    const whyItems = [
      ["Personalised Bridal Looks", "Every bridal look is planned around your features, outfit, jewellery and event style."],
      ["Professional Bridal Focus", "The website and service flow are built around direct bridal bookings and clear planning."],
      ["Venue-Based Service", "On-site bridal makeup is available for Chennai wedding functions and related celebrations."],
      ["Tamil Nadu Coverage", "Chennai is the primary work area, with bookings also accepted across Tamil Nadu based on date availability."],
      ["Training and Specialisations", "Existing listed training includes Makeup, Beautician, Hairstyling, Mehendi and Bridal Hairdo courses."],
      ["Booking Clarity", "Service scope, date, venue and final quote are confirmed before the booking is locked."],
    ];

    return (
      <div className="min-h-screen bg-[#fffdfb]">
        <div className="sticky top-0 z-40 border-b border-[#eee4dc] bg-[#fffdfb]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[78px] max-w-[1420px] items-center justify-between px-5 sm:px-6 lg:px-8 xl:px-10">
            <Brand />
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="/" className="btn-secondary !px-3 !py-2 !text-[12px] sm:!px-4 sm:!py-2.5 sm:!text-[13px]">Home</a>
              <button onClick={() => onBook()} className="btn-primary !px-3.5 !py-2 !text-[12px] sm:!px-5 sm:!py-2.5 sm:!text-[13px]"><Icon name="calendar" size={14} /> Book Now</button>
            </div>
          </div>
        </div>

        <main>
          <section className="bg-[#f6ebe2] py-12 sm:py-16">
            <div className="mx-auto grid max-w-[1420px] items-center gap-8 px-5 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 xl:px-10">
              <motion.div {...A.slideLeft(0.05)}>
                <p className="section-kicker">CHENNAI BRIDAL MAKEUP</p>
                <h1 className="section-title text-[34px] sm:text-[46px]">Bridal Makeup Artist in Chennai</h1>
                <p className="mt-5 max-w-[640px] text-[14px] leading-7 text-[#655a54] sm:text-[15px]">RS Bridal provides professional bridal makeup services for brides in Chennai, with personalised look planning for wedding, engagement and reception functions. On-site bridal bookings are available across Chennai and Tamil Nadu based on your event schedule.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button onClick={() => onBook()} className="btn-primary"><Icon name="whatsapp" size={16} /> Book on WhatsApp</button>
                  <a href="/#services" className="btn-secondary">View Services</a>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[#705f57]">
                  <a href="/" className="hover:text-[#7a111a]">Home</a>
                  <a href="/#services" className="hover:text-[#7a111a]">Services</a>
                  <a href="/#gallery" className="hover:text-[#7a111a]">Gallery</a>
                  <a href="/#book" className="hover:text-[#7a111a]">Contact</a>
                </div>
              </motion.div>
              <motion.div {...A.slideRight(0.1)} className="overflow-hidden rounded-[26px] border border-[#eadfd5] bg-[#efe1d7] shadow-[0_18px_46px_rgba(75,31,29,.12)]">
                <img src={heroImage} alt="Bride in traditional wedding attire with bridal makeup by RS Bridal" width="1401" height="1024" className="h-full min-h-[300px] w-full object-cover object-top sm:min-h-[430px]" />
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0)} className="mx-auto max-w-[840px] text-center">
                <h2 className="section-title">Bridal Makeup Services in Chennai</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#6b5f59] sm:text-[15px]">RS Bridal offers bridal makeup and styling services already listed on the main website, including wedding-day looks, reception-ready finishes, bridesmaid makeup, hairstyling, saree draping and mehendi support where required.</p>
              </motion.div>
              <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceHighlights.map(([title, desc], i) => (
                  <motion.article key={title} {...A.fadeUp(0.08 + i * 0.06)} className="rounded-[22px] border border-[#eadfd5] bg-[#fbf6f1] p-5">
                    <h3 className="brand-serif text-[24px] leading-tight text-[#2b1f1c]">{title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#675a54]">{desc}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#fbf7f2] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-white p-7 sm:p-9">
                <h2 className="section-title">Why Choose RS Bridal for Your Wedding Makeup?</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {whyItems.map(([title, desc], i) => (
                    <motion.div key={title} {...A.fadeUp(0.1 + i * 0.06)} className="flex gap-3 rounded-[18px] border border-[#eadfd5] bg-[#fbf6f1] p-4">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white"><Icon name="check" size={12} /></span>
                      <div>
                        <h3 className="text-[13px] font-bold text-[#2f2420]">{title}</h3>
                        <p className="mt-1 text-[12px] leading-5 text-[#665a54]">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="mx-auto max-w-[880px]">
                <h2 className="section-title">Bridal Makeup for Chennai Weddings</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">From early-morning wedding ceremonies to evening receptions, RS Bridal plans each makeup look based on your function timing, outfit and preferred finish. Engagement and reception looks can be coordinated as part of the same bridal schedule so your styling feels consistent across events.</p>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">For venue-based bookings in Chennai, share your date, ready-time and location details in advance. This helps organise bridal preparation, hairstyling and saree draping smoothly without last-minute rush.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fbf7f2] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)} className="rounded-[30px] border border-[#eadfd5] bg-[#fffaf6] p-7 sm:p-9">
                <h2 className="section-title">Service Area</h2>
                <p className="mt-4 text-[14px] leading-7 text-[#665a54] sm:text-[15px]">Chennai is the primary work area for RS Bridal bridal bookings. Venue enquiries are also accepted for Trichy and open travel services across Tamil Nadu based on date and schedule availability.</p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#fffdfb] py-16 sm:py-20">
            <div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)}>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="mt-7 grid gap-3">
                  {faqItems.map((item, i) => (
                    <motion.article key={item.q} {...A.fadeUp(0.1 + i * 0.06)} className="rounded-[22px] border border-[#e5d7cb] bg-white p-5 sm:p-6">
                      <h3 className="text-[14px] font-semibold text-[#2f2623]">{item.q}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#675b54]">{item.a}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#6d1119] py-14 text-white sm:py-16">
            <div className="mx-auto max-w-[1420px] px-5 text-center sm:px-6 lg:px-8 xl:px-10">
              <motion.div {...A.fadeUp(0.05)}>
                <p className="text-[11px] font-bold tracking-[.2em] text-[#e8c2b2]">READY TO BOOK?</p>
                <h2 className="brand-serif mt-3 text-[30px] leading-tight sm:text-[42px]">Share your wedding date and venue details</h2>
                <p className="mx-auto mt-4 max-w-[760px] text-[13px] leading-6 text-[#ead0c5] sm:text-[14px]">Use the existing RS Bridal booking flow to send your requirement on WhatsApp and confirm availability for Chennai or Tamil Nadu venue bookings.</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button onClick={() => onBook()} className="btn-primary"><Icon name="calendar" size={16} /> Book Your Date</button>
                  <a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"><Icon name="instagram" size={16} /> View Instagram</a>
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

export default BridalMakeupChennai;
