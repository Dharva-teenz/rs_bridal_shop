import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const A = {
  fadeUp: (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
  slideLeft: (d = 0) => ({ initial: { opacity: 0, x: -60 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
  slideRight: (d = 0) => ({ initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.5, ease: "easeOut", delay: d } }),
};

const IMG = import.meta.env.BASE_URL + "assets/images";

const CONFIG = {
  whatsappNumber: "9150109056",
  phoneDisplay: "9150109056",
  instagramUrl: "https://instagram.com/suji_makeover_in_chennai_1",
  instagramHandle: "suji_makeover_in_chennai_1",
  email: "sujimakeover1@gmail.com",
  primaryArea: "Chennai, Tamil Nadu",
};

const heroImage = `${IMG}/bidal-home.png`;

const SERVICE_IMAGE_URLS = {
  'HD Makeup': 'https://lyrabeauty.in/wp-content/uploads/2026/05/hd-bridal-makeup-ghaziabad-768x1024.jpeg',
  'Ultra HD Makeup': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXJ2CuCxkOmPiDsvn3ds9v9O5mi0VyTsN_qSgGmxH1A&s=10',
  'Signature Look': 'https://hdmakeover.com/wp-content/uploads/2025/07/hd-bridal-makeup.webp',
  'Glass Skin Finish Makeup': 'https://weddingbyte.com/uploads/blog/s2s.jpg',
  'Pre-Wedding Shoot Makeup': 'https://trendview.co.in/wp-content/uploads/2023/12/Prewedding-look.jpg',
  'Bridesmaid Makeup': `${IMG}/services/bridesmaid-makeup.webp`,
  'Groom Makeup & Grooming': 'https://www.wedium.com/wp-content/uploads/2026/01/groom.jpg',
  'Mehendi — Organic Cones': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqK7t1ODTxOb-cJlEWWxJXckaYZFttkbZSMy2ZIBq7UMEWS6nN4DiAx6o&s=10',
  'Saree Pre-Pleating': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICSBbzBqHgOA7lc15ZwcQSuioKpUK3ultrfFhT-oggGjAR_LLKBH_1EY&s=10',
  'Hair Do & Hair Extensions': 'https://i.pinimg.com/736x/ef/65/1e/ef651e9966b3aa7b647554e9ddc95a24.jpg',
  'Bridal Flower Making & Hair Floral Styling': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmvp-1qJUiteIzhNpo35OwCOB2Ctdhthatmup4hOoYaiqt-jXBwOBoos&s=10',
  'Golden Facial': 'https://www.yesmadam.com/blog/wp-content/uploads/2021/11/unnamed-3-8.jpg',
  'Diamond Facial': `${IMG}/services/dimond_facial.png`,
  'Pearl Facial': 'https://d3k88l35vy59af.cloudfront.net/A42/8696/1755758007277.jpeg',
  'Fruit Facial': 'https://images.herzindagi.info/image/2021/Aug/best-products-for-fruit-facial-at-home.jpg',
  'Skin Whitening Facial': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0SEDrh97RY1U618LJze4wsbT1_Qvg6eOQjJuyLMzcJa7RyDwSgzaixnP&s=10',
  'Skin Lightening Facial': 'https://caraclinics.com/wp-content/uploads/2025/05/Skin-Lightening-Chemical-Peels.jpg',
  'Skin Brightening Facial': 'https://beautyfirstspa.com/cdn/shop/products/beautyfirstspa-brightening-treatment-38538264248564.png?v=1670604832',
  'Wine Facial': 'https://images.boldsky.com/hi/img/2020/06/redwinefacial-jpg3-1592900809.jpg',
  'De-Tan Treatment': 'https://anlonartsalon.com/wp-content/uploads/2026/02/De-Tan-Treatment-1.jpg',
  'Waxing': 'https://artmassagephuket.com/wp-content/uploads/2012/08/Waxing-Phuket.jpg',
  'Manicure': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rqFto3qYjgVrzQ8MaI9WJ2nqupwIDt6o2dO1vLR1iHfQHTdVHro3pEqK&s=10',
  'Pedicure': 'https://gorgeous-star.com/wp-content/uploads/2025/08/b16748775886d426d62e197fecfce734.jpg',
  'Threading': 'https://5.imimg.com/data5/SELLER/Default/2022/2/XM/JX/SY/47412176/new-product-500x500.jpeg',
  'Haircut': 'https://ladyandthehair.com.au/wp-content/uploads/2025/04/Butterfly-Cut-.jpg',
  'Cleanup': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaGsypfZSiJCtGlkWw4pNvXg-eZSIDTW6L8wwNK5nGKSRuf5eyguzA1cs&s=10',
  'Hair Straightening': 'https://techsquadteam.com/assets/profile/blogimages/9e0817d28da5bb896d7c5f8c898b8094.jpg',
  'Nanoplastia': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrsD6-PiZGDgXI9nhskG0_pFT8DALCVHuDMGZ4N_2mGmkbMPCzvWa1uEW&s=10',
  'Hair Botox Spa': 'https://www.bodycraft.co.in/hubfs/Bodycraft/Images/Hair%20Botox%20Treatment%20in%20Mumbai.png',
  'Keratin Treatment': 'https://img.magnific.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?semt=ais_hybrid&w=740&q=80',
  'Jewellery Set Rental': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfB64wEIVHHqd8YvpbI8KsNm8REEaxZfCbTEA4nzui37j6ZxgHktiAFzmx&s=10',
};

const serviceCategories = [
  {
    name: "Bridal",
    description: "Bridal makeup, styling and wedding-day add-on services, with clear inclusions and pricing inside each service detail.",
    services: [
      {
        name: "HD Makeup",
        image: SERVICE_IMAGE_URLS['HD Makeup'],
        fallback: `${IMG}/bridal-4.webp`,
        summary: "A refined high-definition bridal finish created to look smooth and polished in close-up photos and video.",
        details: "HD Makeup is designed for brides who want a clean, photo-ready finish that still looks elegant in person. The look is planned around your outfit, jewellery, skin preference and event timing, with extra attention to base blending, eye definition and long-event setting.",
        bestFor: "Wedding ceremony, reception and camera-focused bridal events",
        includes: ["Bridal look discussion", "Skin preparation and HD base", "Eye, lip and complexion detailing", "Final setting for the event"],
        complimentary: ["Lens", "Lashes", "Hair Extension", "Hair Do", "Sweat-Proof Finish", "Water-Proof Finish", "Jewellery Set", "Saree Draping"],
        price: "₹16,000",
        note: "Saree draping is available for this bridal makeup service — one or more sarees can be draped for the bride. Final look and complimentary items can also be coordinated before the event date.",
      },
      {
        name: "Ultra HD Makeup",
        image: SERVICE_IMAGE_URLS['Ultra HD Makeup'],
        fallback: `${IMG}/bridal-1.webp`,
        summary: "An enhanced high-definition bridal finish with added detailing for high-resolution photography and stage lighting.",
        details: "Ultra HD Makeup builds on the HD look with more detailed complexion work, refined finishing and face contouring for brides who want a more polished camera-ready result. The finish can be customised from soft bridal to defined glam based on the outfit and event style.",
        bestFor: "Main wedding, reception and high-resolution photography",
        includes: ["Detailed bridal look planning", "Ultra-HD style complexion finish", "Eye and lip detailing", "Face contouring and final setting"],
        complimentary: ["Lens", "Lashes", "Hair Extension", "Hair Do", "Sweat-Proof Finish", "Water-Proof Finish", "Jewellery Set", "Face Contouring", "Saree Draping"],
        price: "₹20,000",
        note: "Saree draping is available for this bridal makeup service — one or more sarees can be draped for the bride. The final styling can also be coordinated with outfit colours, jewellery and the bride's preferred finish.",
      },
      {
        name: "Signature Look",
        image: SERVICE_IMAGE_URLS['Signature Look'],
        fallback: `${IMG}/bridal-5.webp`,
        summary: "A complete premium bridal look with coordinated makeup, hair and finishing details for a distinctive RS Bridal style.",
        details: "The Signature Look is a more customised bridal package built around the bride's face, outfit, jewellery and event mood. Makeup, eye detailing, complexion shaping and hairstyle are planned together so the complete look feels cohesive rather than like separate services.",
        bestFor: "Brides wanting a fully coordinated premium wedding or reception look",
        includes: ["Personalised bridal look planning", "Premium complexion and eye detailing", "Face contouring and finishing", "Hair styling coordinated with the complete look"],
        complimentary: ["Lens", "Lashes", "Hair Extension", "Hair Do", "Sweat-Proof Finish", "Water-Proof Finish", "Jewellery Set", "Saree Draping"],
        price: "₹20,000",
        note: "Saree draping is available for this bridal makeup service — one or more sarees can be draped for the bride. Reference looks, outfit photos and jewellery photos can also be shared before the event for better look planning.",
      },
      {
        name: "Glossy Skin Finish Makeup",
        image: SERVICE_IMAGE_URLS['Glass Skin Finish Makeup'],
        fallback: `${IMG}/bridal-5.1.webp`,
        summary: "A luminous, fresh bridal finish focused on smooth-looking skin, soft dimension and an elegant glow.",
        details: "Glossy Skin Finish Makeup is designed for brides who prefer a luminous, fresh and polished complexion rather than a heavy matte appearance. The final finish is balanced for photography while keeping the skin-looking glow controlled and refined.",
        bestFor: "Brides who prefer a luminous premium finish for wedding or reception",
        includes: ["Skin-prep focused base", "Luminous complexion finish", "Soft contour and highlight placement", "Detailed eye, lip and final setting"],
        complimentary: ["Lens", "Lashes", "Hair Extension", "Hair Do", "Sweat-Proof Finish", "Water-Proof Finish", "Jewellery Set", "Saree Draping"],
        price: "₹25,000",
        note: "Saree draping is available for this bridal makeup service — one or more sarees can be draped for the bride. The final glow level and coverage are also adjusted to suit the bride's skin preference and event lighting.",
      },
      {
        name: "Pre-Wedding Shoot Makeup",
        image: SERVICE_IMAGE_URLS['Pre-Wedding Shoot Makeup'],
        fallback: `${IMG}/gallery-2.webp`,
        summary: "Flexible makeup and styling support for pre-wedding shoots with multiple outfits, looks and locations.",
        details: "Pre-wedding shoots often involve dress changes, different locations and more than one visual mood. This service is planned around the number of looks, outfit changes, shoot locations, timing and the level of touch-up or hairstyle changes required across the session.",
        bestFor: "Outdoor, studio and multi-look pre-wedding photoshoots",
        includes: ["Look planning for the shoot", "Makeup matched to outfit and location", "Support for multiple dress changes", "Styling plan based on the shoot schedule"],
        price: "Based on requirements",
        priceNote: "Final amount is based on the number of looks, dress changes, locations and shoot duration.",
        note: "Share the shoot plan, number of outfits and locations while enquiring so the service can be quoted accurately.",
      },
      {
        name: "Bridesmaid Makeup",
        image: SERVICE_IMAGE_URLS['Bridesmaid Makeup'],
        fallback: `${IMG}/bridal-2.webp`,
        summary: "Elegant event makeup for bridesmaids, styled to complement the wedding palette without overpowering the bride.",
        details: "Bridesmaid Makeup is planned as a polished occasion look that works well in wedding photos and stays coordinated with the event. The finish can be kept soft, classic or slightly glamorous depending on the outfit and personal preference.",
        bestFor: "Bridesmaids, sisters and close wedding party members",
        includes: ["Event makeup", "Eye and lip detailing", "Photo-ready finishing", "Look matched to outfit and occasion"],
        complimentary: ["Lens", "Lashes", "Hair Extension"],
        price: "₹3,500",
        note: "For multiple bridesmaids, share the total number of people and ready-time while enquiring.",
      },
      {
        name: "Groom Makeup & Grooming",
        image: SERVICE_IMAGE_URLS['Groom Makeup & Grooming'],
        fallback: `${IMG}/gallery-3.webp`,
        summary: "Subtle groom grooming focused on a neat, natural and camera-ready wedding-day finish.",
        details: "Groom Makeup & Grooming keeps the overall appearance natural while helping with shine control, complexion balancing, beard finishing and hairstyle setting. The goal is a clean, well-groomed look that photographs well without looking heavily made up.",
        bestFor: "Wedding, reception and couple photography",
        includes: ["Natural complexion grooming", "Basic shine-control finish", "Beard and hair styling support", "Camera-ready final setting"],
        complimentary: ["Beard Set", "Hair Set", "Lens", "Sweat-Proof Finish"],
        price: "Price on consultation",
        note: "The final quote depends on the exact grooming requirement and event schedule.",
      },
      {
        name: "Mehendi — Organic Cones",
        badge: "Organic Cones",
        image: SERVICE_IMAGE_URLS['Mehendi — Organic Cones'],
        fallback: `${IMG}/bridal-3.webp`,
        summary: "Bridal and occasion mehendi using organic-cone styling, with hand and leg coverage options.",
        details: "Mehendi can be planned from elegant occasion patterns to fuller bridal coverage. The final design and time required depend on the requested detail level and coverage area. Organic cones are highlighted for this service as requested by the client.",
        bestFor: "Bridal mehendi, engagement, nalangu and festive functions",
        includes: ["Design preference discussion", "Front and back hand coverage option", "Leg coverage option", "Timing planned around design complexity"],
        complimentary: ["Nail Art"],
        priceOptions: [["Front + Back Hands", "₹2,500"], ["Legs", "₹1,500"]],
        note: "Design complexity and coverage can be confirmed before the appointment.",
      },
      {
        name: "Saree Pre-Pleating",
        image: SERVICE_IMAGE_URLS['Saree Pre-Pleating'],
        fallback: `${IMG}/gallery-1.webp`,
        summary: "Pre-pleating service for a neater, faster and more organised saree drape on the event day.",
        details: "Saree Pre-Pleating prepares the main pleats in advance so the saree is easier to drape neatly and quickly. Choose between normal pleating and a puffier pleat style depending on the saree fabric and the silhouette you prefer.",
        bestFor: "Bridal sarees, muhurtham sarees and special-event draping",
        includes: ["Pleat preparation", "Pinning and shape setting", "Fabric-aware pleat adjustment", "Ready-to-drape finishing"],
        priceOptions: [["Puffy Pleat", "₹1,000"], ["Normal Pleat", "₹500"]],
        note: "The saree fabric and desired pleat style can be shared before the service.",
      },
      {
        name: "Hair Do & Hair Extensions",
        image: SERVICE_IMAGE_URLS['Hair Do & Hair Extensions'],
        fallback: `${IMG}/bridal-2.webp`,
        summary: "Bridal and occasion hairstyles with extension support when extra length or volume is needed.",
        details: "Hair Do & Hair Extensions can be planned around the face shape, outfit neckline, jewellery, veil or flowers. Extensions may be used when the selected hairstyle needs additional length or volume, subject to the style and available extension match.",
        bestFor: "Bridal buns, braids, curls, reception hairstyles and occasion styling",
        includes: ["Hairstyle consultation", "Hair setting and finishing", "Extension support when required", "Accessory, veil or flower placement support"],
        price: "Price on consultation",
        note: "Pricing depends on hairstyle complexity, hair length and extension requirements.",
      },
      {
        name: "Bridal Flower Making & Hair Floral Styling",
        image: SERVICE_IMAGE_URLS['Bridal Flower Making & Hair Floral Styling'],
        fallback: `${IMG}/bridal-1.webp`,
        summary: "Custom floral hair arrangements designed to complement bridal buns, braids and traditional wedding styling.",
        details: "Flower Making & Hair Floral Styling focuses on preparing and arranging flowers to suit the chosen bridal hairstyle. The style can range from neat traditional floral wrapping to fuller bun or braid arrangements based on flower choice, hairstyle and overall bridal look.",
        bestFor: "Traditional bridal buns, braids, muhurtham and reception hairstyles",
        includes: ["Flower style discussion", "Arrangement matched to the hairstyle", "Bun or braid floral placement", "Final securing and finishing"],
        price: "Price on consultation",
        note: "Flower type, quantity and design depend on the requested bridal style and availability.",
      },
      {
        name: "Jewellery Set Rental",
        image: SERVICE_IMAGE_URLS['Jewellery Set Rental'],
        fallback: `${IMG}/bridal-4.webp`,
        summary: "Rental access to bridal jewellery sets, with two full catalogues available to browse from the service detail.",
        details: "Jewellery Set Rental allows brides to review available bridal jewellery options and choose a set that works with the outfit and makeup plan. Use the catalogue buttons below to open the two jewellery PDFs once the client catalogue files are added to the project.",
        bestFor: "Brides who want coordinated wedding or reception jewellery without purchasing a full set",
        includes: ["Catalogue browsing", "Set selection discussion", "Coordination with bridal outfit", "Rental availability confirmation"],
        price: "Based on selected set",
        priceNote: "Rental amount depends on the jewellery set selected from the catalogue.",
        catalogs: [
          { label: "Jewellery Catalogue 1", href: `${import.meta.env.BASE_URL}assets/catalogs/jewellery-set-1.pdf` },
          { label: "Jewellery Catalogue 2", href: `${import.meta.env.BASE_URL}assets/catalogs/jewellery-set-2.pdf` },
        ],
        note: "The two client PDF catalogues were not included in the uploaded project ZIP. Add them using the expected filenames before launch.",
      },
    ],
  },
  {
    name: "Beauty Services",
    description: "Salon beauty and grooming services with simple service descriptions and clear prices.",
    services: [
      {
        name: "Golden Facial",
        image: SERVICE_IMAGE_URLS['Golden Facial'],
        fallback: `${IMG}/gallery-1.webp`,
        summary: "A classic glow-focused facial routine with cleansing, exfoliation, massage and a finishing mask.",
        details: "Golden Facial is a salon facial designed around a refreshed, polished appearance. The session typically combines cleansing, gentle exfoliation, massage and a gold-themed facial kit or mask selected by the artist for the service.",
        bestFor: "Pre-event grooming and clients looking for a refreshed salon facial",
        includes: ["Cleansing", "Gentle exfoliation", "Facial massage", "Mask and finishing care"],
        price: "₹750",
        note: "Skin response varies. Share any known sensitivity or product allergy before the service.",
      },
      {
        name: "Diamond Facial",
        image: SERVICE_IMAGE_URLS['Diamond Facial'],
        fallback: `${IMG}/gallery-2.webp`,
        summary: "A polishing-style salon facial focused on cleansing, exfoliation and a smooth, refreshed finish.",
        details: "Diamond Facial uses a diamond-themed salon facial routine that usually focuses on cleansing, exfoliation, massage and a finishing pack. It is intended as an event-prep beauty service rather than a medical skin treatment.",
        bestFor: "Occasion preparation and dull-looking skin that needs a polished salon finish",
        includes: ["Cleansing", "Exfoliation", "Facial massage", "Finishing mask or pack"],
        price: "₹950",
        note: "Results vary by skin type and product suitability.",
      },
      {
        name: "Pearl Facial",
        image: SERVICE_IMAGE_URLS['Pearl Facial'],
        fallback: `${IMG}/gallery-3.webp`,
        summary: "A gentle pearl-themed facial routine for a clean, soft and refreshed appearance before an event.",
        details: "Pearl Facial is a traditional salon facial commonly built around cleansing, mild exfoliation, massage and a pearl-themed facial pack. It is a simple option for clients who want a fresh, groomed look without a heavy treatment routine.",
        bestFor: "Regular beauty care and event preparation",
        includes: ["Cleansing", "Mild exfoliation", "Massage", "Pearl-themed finishing pack"],
        price: "₹500",
        note: "Product choice can be adjusted based on basic skin comfort and sensitivity information.",
      },
      {
        name: "Fruit Facial",
        image: SERVICE_IMAGE_URLS['Fruit Facial'],
        fallback: `${IMG}/bridal-3.webp`,
        summary: "A fruit-extract inspired facial routine for cleansing, light exfoliation and a fresh salon finish.",
        details: "Fruit Facial uses fruit-themed or fruit-extract salon products as part of a standard cleansing, exfoliation, massage and mask routine. It is suited to clients looking for a simple refresh before a function or regular grooming session.",
        bestFor: "Regular grooming and light pre-event facial care",
        includes: ["Cleansing", "Light exfoliation", "Massage", "Fruit-based or fruit-themed pack"],
        price: "₹500",
        note: "Tell the artist about known fruit or skincare allergies before the service.",
      },
      {
        name: "Skin Whitening Facial",
        image: SERVICE_IMAGE_URLS['Skin Whitening Facial'],
        fallback: `${IMG}/bridal-5.webp`,
        summary: "A brightness-focused salon facial for a cleaner, fresher and more even-looking finish.",
        details: "Skin Whitening Facial is kept as the client's service name, but the treatment is presented as a brightness-focused salon facial. The aim is to refresh dull-looking skin and improve the appearance of surface unevenness; it does not change a person's natural skin tone.",
        bestFor: "Clients requesting a brighter-looking pre-event facial finish",
        includes: ["Cleansing", "Exfoliation", "Brightening-focused facial steps", "Mask and finishing care"],
        price: "₹1,250",
        note: "No change to natural complexion is guaranteed. Results depend on skin type and product suitability.",
      },
      {
        name: "Skin Lightening Facial",
        image: SERVICE_IMAGE_URLS['Skin Lightening Facial'],
        fallback: `${IMG}/bridal-5.1.webp`,
        summary: "A salon facial focused on reducing dull appearance and supporting a fresh, even-looking finish.",
        details: "Skin Lightening Facial is a brightness-oriented beauty service using cleansing, exfoliation and salon products selected for a refreshed appearance. It is described conservatively on the website and is not presented as a permanent complexion-changing treatment.",
        bestFor: "Pre-event facial care and clients wanting a fresher-looking complexion",
        includes: ["Cleansing", "Gentle exfoliation", "Brightness-focused facial routine", "Finishing mask"],
        price: "₹1,050",
        note: "Results vary and depend on skin type, sensitivity and the products used.",
      },
      {
        name: "Skin Brightening Facial",
        image: SERVICE_IMAGE_URLS['Skin Brightening Facial'],
        fallback: `${IMG}/bridal-4.webp`,
        summary: "A premium brightening facial routine focused on a refreshed, polished and event-ready skin appearance.",
        details: "Skin Brightening Facial combines salon cleansing, exfoliation, massage and brightening-focused products to help the skin look fresh and prepared for an occasion. The exact routine can be adjusted based on the client's skin comfort and product suitability.",
        bestFor: "Special-event preparation and clients wanting a brighter-looking salon finish",
        includes: ["Cleansing", "Exfoliation", "Massage", "Brightening mask and finishing care"],
        price: "₹1,350",
        note: "This is a cosmetic salon service; individual results vary.",
      },
      {
        name: "Wine Facial",
        image: SERVICE_IMAGE_URLS['Wine Facial'],
        fallback: `${IMG}/gallery-1.webp`,
        summary: "A grape/wine-extract inspired salon facial for cleansing, massage and a refreshed glow-focused finish.",
        details: "Wine Facial is the commonly used salon name for a facial routine built around grape- or wine-extract themed products. The service generally follows cleansing, exfoliation, massage and a finishing mask for a refreshed appearance without making medical skin claims.",
        bestFor: "Occasion preparation and clients who enjoy glow-focused salon facials",
        includes: ["Cleansing", "Exfoliation", "Massage", "Wine/grape-themed finishing pack"],
        price: "₹600",
        note: "Share any known skincare or ingredient sensitivities before the service.",
      },
      {
        name: "De-Tan Treatment",
        image: SERVICE_IMAGE_URLS['De-Tan Treatment'],
        fallback: `${IMG}/gallery-2.webp`,
        summary: "A salon de-tan service focused on reducing the appearance of surface tan, dullness and uneven-looking skin.",
        details: "De-Tan is the clearer spelling for the client's D.Tan service. The salon routine usually includes cleansing, mild exfoliation and a de-tan pack intended to reduce the appearance of sun-exposed dullness and surface tanning while keeping the natural complexion unchanged.",
        bestFor: "Face or exposed areas with a visible sun-tanned or dull appearance",
        includes: ["Cleansing", "Gentle exfoliation", "De-tan product application", "Soothing finishing care"],
        price: "₹400",
        note: "Results vary by skin type and sun exposure. This service does not promise permanent pigmentation change.",
      },
      {
        name: "Waxing",
        image: SERVICE_IMAGE_URLS['Waxing'],
        fallback: `${IMG}/gallery-3.webp`,
        summary: "Salon waxing for arms and legs with separate pricing by service area.",
        details: "Waxing removes hair from the root using a salon waxing method. Choose the required area while enquiring so the appointment can be planned with the correct service time.",
        bestFor: "Routine grooming before weddings, functions and regular beauty appointments",
        includes: ["Area preparation", "Waxing service", "Basic post-wax cleanup", "Area-specific booking"],
        priceOptions: [["2 Hands", "₹300"], ["Legs", "₹500"]],
        note: "Tell the artist about very sensitive skin, active irritation or recent skin treatments before waxing.",
      },
      {
        name: "Manicure",
        image: SERVICE_IMAGE_URLS['Manicure'],
        fallback: `${IMG}/bridal-2.webp`,
        summary: "Hand and nail grooming for a clean, neat and event-ready finish.",
        details: "Manicure focuses on basic hand and nail grooming, including nail shaping, cuticle-area care and finishing steps based on the salon routine. It is a useful add-on before weddings, functions and photo sessions.",
        bestFor: "Bridal preparation, functions and regular hand grooming",
        includes: ["Nail shaping", "Basic cuticle-area care", "Hand grooming", "Finishing care"],
        price: "₹500",
        note: "Nail polish or nail-art scope can be confirmed separately if required.",
      },
      {
        name: "Pedicure",
        image: SERVICE_IMAGE_URLS['Pedicure'],
        fallback: `${IMG}/bridal-1.webp`,
        summary: "Foot and nail grooming for a clean, neat and refreshed event-ready finish.",
        details: "Pedicure focuses on basic foot and toenail grooming, including nail shaping and salon finishing care. It can be booked as part of bridal preparation or as a regular beauty service.",
        bestFor: "Bridal preparation, functions and regular foot grooming",
        includes: ["Nail shaping", "Basic cuticle-area care", "Foot grooming", "Finishing care"],
        price: "₹600",
        note: "Share any active cuts, irritation or discomfort before beginning the service.",
      },
      {
        name: "Threading",
        image: SERVICE_IMAGE_URLS['Threading'],
        fallback: `${IMG}/bridal-5.webp`,
        summary: "Quick facial hair shaping and cleanup using traditional threading technique.",
        details: "Threading is used for precise hair removal and shaping in areas such as the eyebrows or upper-lip area, depending on the client's requirement. The exact area can be confirmed at booking.",
        bestFor: "Eyebrow shaping and small facial grooming areas",
        includes: ["Shape discussion", "Threading", "Basic cleanup", "Finishing check"],
        price: "₹100",
        note: "Price shown is the client-provided service price; confirm the exact area during booking.",
      },
      {
        name: "Haircut",
        image: SERVICE_IMAGE_URLS['Haircut'],
        fallback: `${IMG}/bridal-3.webp`,
        summary: "Classic and layered haircut options with pricing by selected cut and hair length where applicable.",
        details: "Choose from simple straight, U, V, butterfly or layer cuts. The style is selected around the current hair length, density and the shape the client wants to maintain. Butterfly cut pricing is confirmed after checking hair length.",
        bestFor: "Routine hair shaping, length refresh and layered styling",
        includes: ["Basic style discussion", "Selected haircut", "Length and shape check", "Final finishing"],
        priceOptions: [["Straight Cut", "₹200"], ["U Cut", "₹250"], ["V Cut", "₹350"], ["Butterfly Cut", "Based on hair length"], ["Layer Cut", "₹350"]],
        note: "Butterfly Cut is priced after checking hair length, as requested by the client.",
      },
      {
        name: "Cleanup",
        image: SERVICE_IMAGE_URLS['Cleanup'],
        fallback: `${IMG}/gallery-1.webp`,
        summary: "A simple face cleanup service for cleansing, mild exfoliation and a fresh, tidy finish.",
        details: "Cleanup is a lighter salon face-care service than a full facial. It focuses on cleansing, gentle exfoliation and finishing steps to refresh the skin before a function or as part of regular grooming.",
        bestFor: "Quick pre-event refresh and routine salon care",
        includes: ["Cleansing", "Gentle exfoliation", "Basic face cleanup", "Finishing care"],
        price: "₹350",
        note: "The exact steps may be adjusted based on basic skin comfort and the products used.",
      },
    ],
  },
  {
    name: "Hair Treatment",
    description: "Professional smoothing and conditioning services. Final treatment pricing is based on hair length and the selected service.",
    services: [
      {
        name: "Hair Straightening",
        image: SERVICE_IMAGE_URLS['Hair Straightening'],
        fallback: `${IMG}/bridal-2.webp`,
        summary: "A salon straightening service for clients who want a straighter, more controlled hair finish.",
        details: "Hair Straightening is a professional chemical-and-heat salon service designed to create a straighter finish. Suitability depends on current hair condition, previous colouring or chemical services, length and the final result expected, so an in-person hair assessment is important before proceeding.",
        bestFor: "Clients seeking a straighter, lower-frizz finish",
        includes: ["Hair assessment", "Straightening service", "Heat finishing", "Basic after-care guidance"],
        price: "Based on hair length",
        priceNote: "Final amount is confirmed after checking hair length, density and treatment history.",
        note: "Previously bleached, coloured or chemically treated hair should be discussed before the service.",
      },
      {
        name: "Nanoplastia",
        image: SERVICE_IMAGE_URLS['Nanoplastia'],
        fallback: `${IMG}/bridal-5.1.webp`,
        summary: "A professional smoothing treatment intended to reduce frizz and create a sleeker, more manageable finish.",
        details: "Nanoplastia is a modern salon smoothing treatment commonly marketed for reducing frizz and improving smoothness and shine. The exact formula and result can differ by product, so the service should be selected only after checking hair condition, previous treatments and the finish the client wants.",
        bestFor: "Frizzy or difficult-to-manage hair where a smoother finish is desired",
        includes: ["Hair assessment", "Nanoplastia product application", "Blow-dry and heat-sealing steps", "Basic after-care guidance"],
        price: "Based on hair length",
        priceNote: "Final amount depends on hair length, density and condition.",
        note: "Treatment suitability and expected result should be discussed after assessing the hair in person.",
      },
      {
        name: "Hair Botox Spa",
        image: SERVICE_IMAGE_URLS['Hair Botox Spa'],
        fallback: `${IMG}/bridal-1.webp`,
        summary: "A deep-conditioning, smoothing salon service focused on softness, shine and improved manageability.",
        details: "Hair Botox is a salon marketing term for an intensive conditioning and smoothing treatment; it does not involve injectable botulinum toxin. The service is generally chosen for dry, frizzy or stressed-looking hair when the goal is softness and a more polished finish rather than permanent straightening.",
        bestFor: "Dry, frizzy or stressed-looking hair needing conditioning and smoothing",
        includes: ["Hair assessment", "Deep-conditioning treatment", "Blow-dry and finishing", "Basic after-care guidance"],
        price: "Based on hair length",
        priceNote: "Final amount depends on hair length, density and the product/treatment required.",
        note: "The expected result should be confirmed after checking current hair condition and treatment history.",
      },
      {
        name: "Keratin Treatment",
        image: SERVICE_IMAGE_URLS['Keratin Treatment'],
        fallback: `${IMG}/bridal-4.webp`,
        summary: "A professional keratin smoothing service focused on frizz control, shine and easier hair management.",
        details: "Keratin Treatment is a salon smoothing service used to reduce frizz and create a sleeker, easier-to-manage finish. The exact product system, processing time and suitability depend on hair history, texture, colour treatments and the amount of smoothing the client wants.",
        bestFor: "Clients seeking smoother, shinier and more manageable hair",
        includes: ["Hair assessment", "Keratin product application", "Blow-dry and heat-sealing steps", "Basic after-care guidance"],
        price: "Based on hair length",
        priceNote: "Final amount is confirmed after checking hair length, density, condition and treatment history.",
        note: "Share any previous colouring, bleaching, straightening or smoothing treatments before booking.",
      },
    ],
  },
];

const services = serviceCategories.flatMap(category =>
  category.services.map(service => ({ ...service, category: category.name }))
);

const galleryImages = [
  { src: `${IMG}/gallery/image1.webp`, alt: "Bride in a green and purple silk saree with bridal makeup and gold jewellery", width: 901, height: 1200, fallback: `${IMG}/gallery/image1.webp` },
  { src: `${IMG}/gallery/image2.webp`, alt: "South Indian bride in red and green wedding attire looking down at her mehendi", width: 800, height: 1200, fallback: `${IMG}/gallery/image2.webp` },
  { src: `${IMG}/gallery/image3.webp`, alt: "Bride in a green and pink silk saree with traditional wedding makeup", width: 742, height: 868, fallback: `${IMG}/gallery/image3.webp` },
  { src: `${IMG}/gallery/image4.webp`, alt: "Bride adjusting her earring in bright pink and green wedding attire", width: 800, height: 1200, fallback: `${IMG}/gallery/image4.webp` },
  { src: `${IMG}/gallery/image5.webp`, alt: "South Indian bride in an orange silk saree with bridal makeup and temple jewellery", width: 537, height: 1200, fallback: `${IMG}/gallery/image5.webp` },
  { src: `${IMG}/gallery/image6.webp`, alt: "Bride in a blue and yellow silk saree with eye makeup and bridal jewellery", width: 675, height: 1200, fallback: `${IMG}/gallery/image6.webp` },
  { src: `${IMG}/gallery/image7.webp`, alt: "Close-up of a bride with gold jewellery, floral hair styling and wedding makeup", width: 1200, height: 814, fallback: `${IMG}/gallery/image7.webp` },
  { src: `${IMG}/gallery/image8.webp`, alt: "Bride in a red and gold silk saree with traditional bridal makeup", width: 675, height: 1200, fallback: `${IMG}/gallery/image8.webp` },
  { src: `${IMG}/gallery/image9.webp`, alt: "Close-up bridal portrait with red lip makeup and wedding jewellery", width: 673, height: 712, fallback: `${IMG}/gallery/image9.webp` },
  { src: `${IMG}/gallery/image10.webp`, alt: "Bride in a red silk saree posing with traditional jewellery and hairstyling", width: 799, height: 1200, fallback: `${IMG}/gallery/image10.webp` },
  { src: `${IMG}/gallery/image11.webp`, alt: "Seated bride with a veil, wedding makeup and gold jewellery", width: 953, height: 1200, fallback: `${IMG}/gallery/image11.webp` },
  { src: `${IMG}/gallery/image12.webp`, alt: "Bride and groom in wedding attire with floral garlands", width: 1118, height: 1391, fallback: `${IMG}/gallery/image12.webp` },
  { src: `${IMG}/gallery/image13.webp`, alt: "Bride and groom walking during an outdoor wedding ceremony", width: 1098, height: 1433, fallback: `${IMG}/gallery/image13.webp` },
  { src: `${IMG}/gallery/image14.webp`, alt: "Woman in a black evening dress with event makeup and styled hair", width: 807, height: 1200, fallback: `${IMG}/gallery/image14.webp` },
  { src: `${IMG}/gallery/image15.webp`, alt: "Bride in a green silk saree with bridal makeup and jasmine hair flowers", width: 900, height: 1200, fallback: `${IMG}/gallery/image15.webp` },
  { src: `${IMG}/gallery/image16.webp`, alt: "Bride in dark reception attire posing with family members", width: 1128, height: 1200, fallback: `${IMG}/gallery/image16.webp` },
  { src: `${IMG}/gallery/image17.webp`, alt: "Woman in a blue gown with evening makeup and curled hairstyle", width: 1013, height: 1200, fallback: `${IMG}/gallery/image17.webp` },
  { src: `${IMG}/gallery/image18.webp`, alt: "Bride in a blue and red silk saree wearing traditional wedding jewellery", width: 689, height: 1066, fallback: `${IMG}/gallery/image18.webp` },
  { src: `${IMG}/gallery/image19.webp`, alt: "Bride in a red silk saree with gold jewellery and bridal makeup", width: 675, height: 1200, fallback: `${IMG}/gallery/image19.webp` },
  { src: `${IMG}/gallery/image20.webp`, alt: "Bride in a green silk saree with traditional makeup and gold jewellery", width: 1200, height: 1200, fallback: `${IMG}/gallery/image20.webp` },
  { src: `${IMG}/gallery/image21.webp`, alt: "Blue bridal lehenga with embroidered details and jewellery", width: 629, height: 1200, fallback: `${IMG}/gallery/image21.webp` },
  { src: `${IMG}/gallery/image22.webp`, alt: "Woman in a silver saree with formal makeup and styled hair", width: 900, height: 1200, fallback: `${IMG}/gallery/image22.webp` },
  { src: `${IMG}/gallery/image23.webp`, alt: "Bride in a pink and blue silk saree with wedding makeup and gold jewellery", width: 900, height: 1200, fallback: `${IMG}/gallery/image23.webp` },
  { src: `${IMG}/gallery/image24.webp`, alt: "Bridal portrait in a green saree with defined eye makeup and jewellery", width: 940, height: 1200, fallback: `${IMG}/gallery/image24.webp` },
  { src: `${IMG}/gallery/image25.webp`, alt: "Bride in a pink silk saree with traditional wedding makeup and gold jewellery", width: 958, height: 1200, fallback: `${IMG}/gallery/image25.webp` },
  { src: `${IMG}/gallery/image26.webp`, alt: "Woman in a gold embellished gown with formal makeup and hairstyle", width: 900, height: 1200, fallback: `${IMG}/gallery/image26.webp` },
  { src: `${IMG}/gallery/image27.webp`, alt: "Seated bride in a purple reception gown with bridal makeup", width: 1183, height: 1200, fallback: `${IMG}/gallery/image27.webp` },
  { src: `${IMG}/gallery/image28.webp`, alt: "Bridal portrait in a navy silk saree with gold jewellery and wedding makeup", width: 800, height: 1200, fallback: `${IMG}/gallery/image28.webp` },
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
    instagram: <g><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></g>,
    mail: <g><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.9 5.4a2 2 0 0 1-2.2 0L2 7" /></g>,
  };
  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function routeFromHash() {
  if (typeof window === "undefined") return "home";
  if (window.location.hash === "#book") return "book";
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

function Brand({ white }) {
  return <button onClick={() => navigateTo("home")} className="flex items-center gap-3 text-left" aria-label="RS Bridal home">
    {white ? (
      <span className="brand-serif grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white">RS</span>
    ) : (
      <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[14px] border border-[#eadfd5] bg-[#fbf6f1] shadow-[0_5px_16px_rgba(76,35,28,.08)] sm:h-[54px] sm:w-[54px]">
        <img src={`${IMG}/rs-bridal-brand-logo.webp`} alt="RS Bridal brand logo" width="700" height="700" className="h-full w-full object-contain" />
      </span>
    )}
    <span><strong className={`brand-serif block text-[20px] tracking-[.05em] ${white ? "text-white" : "text-[#4f171b]"}`}>RS BRIDAL</strong><span className={`block text-[10px] tracking-[.1em] ${white ? "text-white/60" : "text-[#8a7168]"}`}>MAKEUP ARTIST</span></span></button>;
}

class Header extends React.Component {
  constructor(props) { super(props); this.state = { open: false }; }
  render() {
    const { onBook } = this.props;
    const links = [["Home", "home"], ["About", "about"], ["Services", "services"], ["Gallery", "gallery"], ["FAQs", "faq"], ["Why Us", "why-us"], ["Service Areas", "service-areas"]];
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
          <div className="max-w-[680px]">
            <h1 className="brand-serif text-[36px] leading-[1.05] tracking-[-.02em] text-[#211714] sm:text-[40px] md:text-[52px] lg:text-[62px]">
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
            width="1401"
            height="1024"
            loading="eager"
            fetchpriority="high"
            className="h-full w-full object-cover object-top sm:object-center lg:object-[72%_center]"
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
    <div className="mx-auto grid max-w-[1420px] items-center gap-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8">
      <motion.div {...A.slideLeft(0.1)} className="relative"><div className="mx-auto max-w-[320px] overflow-hidden rounded-[24px] border border-[#eadfd5] bg-[#f3e5da] shadow-[0_16px_40px_rgba(69,35,27,.10)] sm:max-w-[400px] sm:rounded-[30px] sm:shadow-[0_22px_60px_rgba(69,35,27,.12)]"><img src={`${IMG}/services/artist.jpeg`} alt="RS Bridal makeup artist portrait" width="745" height="1825" loading="lazy" decoding="async" className="h-[380px] w-full object-cover object-top sm:h-[520px]" /></div></motion.div>
      <motion.div {...A.slideRight(0.15)}><div><p className="section-kicker">ABOUT RS BRIDAL</p><h2 className="section-title text-[28px] leading-[1.1] sm:text-[clamp(2.45rem,4.2vw,3rem)]">Beauty That Feels Like You</h2><p className="mt-3 text-[13px] font-semibold tracking-[.04em] text-[#8a363b] sm:mt-4 sm:text-[14px]">Personalised bridal artistry for your most meaningful celebrations.</p><p className="mt-4 text-[14px] leading-6 text-[#655a54] sm:mt-6 sm:text-[15px] sm:leading-7">RS Bridal is built around one simple idea — every bride should feel like the most confident and beautiful version of herself on her wedding day. Each look is thoughtfully planned around the bride's features, outfit, jewellery, occasion, and personal preference rather than following one fixed makeup style.</p><p className="mt-3 text-[14px] leading-6 text-[#655a54] sm:mt-4 sm:text-[15px] sm:leading-7">Originally from Trichy and primarily serving bridal clients in Chennai, RS Bridal accepts wedding and beauty bookings across Tamil Nadu. Whether the celebration is intimate or grand, the focus remains on creating an elegant, comfortable, and timeless look that feels truly personal to the bride.</p>
        <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">{[["Personalised Looks", "Created around your features and personal style"], ["Bridal-Focused Beauty", "Thoughtful styling for your wedding celebrations"], ["Chennai Bookings", "Primary service area for bridal appointments"], ["Across Tamil Nadu", "Wedding bookings accepted throughout Tamil Nadu"]].map(([title, desc], i) => <motion.div key={title} {...A.fadeUp(0.3 + i * 0.08)} className="flex gap-2.5 rounded-[18px] border border-[#eadfd5] bg-[#fbf6f1] p-3.5 sm:gap-3 sm:rounded-[22px] sm:p-4"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white sm:h-6 sm:w-6"><Icon name="check" size={12} /></span><div><strong className="block text-[12px] text-[#29211e] sm:text-[13px]">{title}</strong><span className="mt-0.5 block text-[11px] leading-4 text-[#746963] sm:mt-1 sm:text-[12px] sm:leading-5">{desc}</span></div></motion.div>)}</div>
        <motion.div {...A.fadeUp(0.6)} className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"><button onClick={onBook} className="btn-primary !px-4 !py-2.5 !text-[13px] sm:!px-5 sm:!py-3 sm:!text-[14px]">Book an Appointment</button><button onClick={() => scrollToSection("gallery")} className="btn-secondary !px-4 !py-2.5 !text-[13px] sm:!px-5 sm:!py-3 sm:!text-[14px]">See Makeup Work</button></motion.div></div></motion.div>
    </div>
    <motion.div {...A.fadeUp(0.15)} className="mx-auto mt-10 max-w-[1420px] px-5 sm:mt-12 sm:px-6 lg:px-8">
      <div className="border-t border-[#eadfd5] pt-8 sm:pt-10">
        <p className="section-kicker uppercase">Professional Experience &amp; Training</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {[["5+ Years", "Professional Experience"], ["200+", "Happy Clients"]].map(([value, label]) => <div key={label} className="flex min-h-[88px] items-center gap-4 rounded-[20px] border border-[#dfc9bd] bg-[#fbf6f1] px-5 py-4 sm:min-h-[96px] sm:px-6"><strong className="brand-serif shrink-0 text-[34px] leading-none text-[#7a111a] sm:text-[40px]">{value}</strong><span className="h-10 w-px shrink-0 bg-[#c8a36b]" /><span className="text-[12px] font-bold uppercase leading-5 tracking-[.08em] text-[#5f4a42] sm:text-[13px]">{label}</span></div>)}
        </div>
        <div className="mt-7 sm:mt-8">
          <h3 className="brand-serif text-[25px] leading-tight text-[#211815] sm:text-[30px]">Courses &amp; Specialisations</h3>
          <div className="mt-4 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {["Makeup Course", "Beautician Course", "Hairstyling Course", "Mehendi Course", "Bridal Hairdo Course", "Nail Extension Course", "HydraFacial Course", "Massage & Spa Course", "Hair Treatment Course"].map(course => <div key={course} className="flex min-h-[52px] items-center gap-3 rounded-[18px] border border-[#eadfd5] bg-[#fffaf6] px-4 py-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#7a111a] text-[#f1d3a0]"><Icon name="check" size={13} /></span><span className="text-[12px] font-semibold leading-5 text-[#4d3c36] sm:text-[13px]">{course}</span></div>)}
          </div>
        </div>
      </div>
    </motion.div>
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
      <motion.div {...A.fadeUp(0)} className="mx-auto max-w-[780px] text-center"><p className="section-kicker">OUR SERVICES</p><h2 className="section-title">Bridal, Beauty & Hair Services</h2><p className="mt-4 text-[15px] leading-7 text-[#6b5f59]">Explore each service to see the full details, complimentary items where included, and the client-approved price or pricing method.</p></motion.div>
      {serviceCategories.map((category, categoryIndex) => <div key={category.name} className={categoryIndex === 0 ? "mt-12" : "mt-16 sm:mt-20"}>
        <motion.div {...A.fadeUp(0.05)} className="mx-auto max-w-[760px] border-b border-[#e7d9cf] pb-5 text-center">
          <h3 className="brand-serif text-[34px] leading-tight text-[#2a1d1b] sm:text-[42px]">{category.name}</h3>
          <p className="mx-auto mt-2 max-w-[660px] text-[12px] leading-6 text-[#746963] sm:text-[13px]">{category.description}</p>
        </motion.div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{category.services.map((service, index) => <motion.article key={service.name} {...A.fadeUp(0.08 + index * 0.04)} className="card-lift flex h-full flex-col overflow-hidden rounded-[24px] border border-[#eadfd5] bg-white"><div className="relative h-[190px] overflow-hidden bg-[#eee2d8] sm:h-[210px]"><img src={service.image} alt={`${service.name} service at RS Bridal`} loading="lazy" referrerPolicy="no-referrer" className="service-image h-full w-full object-cover" onError={e => { if (service.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = service.fallback; } }} />{service.badge && <span className="absolute right-3 top-3 rounded-full bg-[#7a111a] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[.08em] text-white shadow-sm">{service.badge}</span>}</div><div className="flex flex-1 flex-col p-4 sm:p-5"><h4 className="brand-serif text-[17px] leading-snug text-[#241a17] sm:text-[19px]">{service.name}</h4><p className="mt-2 flex-1 text-[12px] leading-[20px] text-[#6a5d57] sm:text-[12.5px] sm:leading-[21px]">{service.summary}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eee3da] pt-3"><span className="text-[9px] font-semibold uppercase tracking-[.1em] text-[#8b6f61] sm:text-[10px]">Details & price</span><button onClick={() => this.setState({ selected: { ...service, category: category.name } })} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[12px] font-bold text-[#7a111a] transition hover:bg-[#fbf0ea]">Explore <Icon name="arrow" size={14} /></button></div></div></motion.article>)}</div>
      </div>)}
      <motion.div {...A.fadeUp(0.7)} className="mt-12 text-center"><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Book Your Service</button></motion.div>
    </div>{selected && <ServiceModal service={selected} onClose={() => this.setState({ selected: null })} onBook={() => { const name = selected.name; this.setState({ selected: null }, () => onBook(name)); }} />}</section>;
  }
}

function ServiceNote({ note }) {
  const parts = note.split("Saree Draping");
  if (parts.length === 1) return note;
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part}
      {i < parts.length - 1 && <strong className="font-bold text-[#7a111a]">Saree Draping</strong>}
    </React.Fragment>
  ));
}

class ServiceModal extends React.Component {
  componentDidMount() { this.keyHandler = e => e.key === "Escape" && this.props.onClose(); document.addEventListener("keydown", this.keyHandler); document.body.style.overflow = "hidden"; }
  componentWillUnmount() { document.removeEventListener("keydown", this.keyHandler); document.body.style.overflow = ""; }
  render() {
    const { service, onClose, onBook } = this.props;
    const hasPriceOptions = service.priceOptions?.length > 0;
    const hasComplimentary = service.complimentary?.length > 0;
    const hasCatalogs = service.catalogs?.length > 0;
    return <div className="modal-backdrop fixed inset-0 z-[70] grid place-items-center bg-black/55 p-3 sm:p-4" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal-panel max-h-[90vh] w-full max-w-[980px] overflow-auto rounded-[22px] bg-[#fffdfb] shadow-2xl sm:max-h-[92vh] sm:rounded-[30px]"><div className="grid md:grid-cols-[.78fr_1.22fr]"><div className="min-h-[190px] bg-[#ead9cb] sm:min-h-[300px]"><img src={service.image} alt={`${service.name} detailed service view`} referrerPolicy="no-referrer" className="h-full min-h-[190px] w-full object-cover sm:min-h-[300px]" onError={e => { if (service.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = service.fallback; } }} /></div><div className="p-4 sm:p-8"><div className="flex items-start justify-between gap-3"><div><p className="section-kicker">{service.category || "SERVICE DETAIL"}</p><h2 className="brand-serif mt-1 text-[24px] leading-tight text-[#241a17] sm:mt-2 sm:text-[36px]">{service.name}</h2></div><button onClick={onClose} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e1d3c9] text-[#6d171d] sm:h-10 sm:w-10" aria-label="Close service details"><Icon name="close" size={16} /></button></div><p className="mt-3 text-[13px] leading-6 text-[#665a54] sm:mt-5 sm:text-[14px] sm:leading-7">{service.details}</p>
      <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2"><div className="rounded-[18px] border border-[#eadfd5] bg-[#fbf5ef] p-4 sm:rounded-[22px] sm:p-5"><strong className="text-[10px] uppercase tracking-[.12em] text-[#7b252b]">Best for</strong><p className="mt-1.5 text-[13px] leading-5 text-[#413733] sm:mt-2">{service.bestFor}</p></div><div className="rounded-[18px] border border-[#dfc8bc] bg-[#74121a] p-4 text-white sm:rounded-[22px] sm:p-5"><strong className="text-[10px] uppercase tracking-[.14em] text-[#efc6b5]">Price</strong>{hasPriceOptions ? <div className="mt-2 grid gap-2">{service.priceOptions.map(([label, price]) => <div key={label} className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"><span className="text-[11px] text-white/75">{label}</span><strong className="text-[13px]">{price}</strong></div>)}</div> : <strong className="brand-serif mt-2 block text-[25px] leading-tight text-white">{service.price || "Price on consultation"}</strong>}{service.priceNote && <p className="mt-2 text-[10px] leading-4 text-white/65">{service.priceNote}</p>}</div></div>
      <h3 className="mt-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#7b252b] sm:mt-6">What this service includes</h3><div className="mt-2 grid gap-1.5 sm:mt-3 sm:grid-cols-2 sm:gap-2">{service.includes.map(item => <div key={item} className="flex gap-2 text-[12px] leading-5 text-[#554a45] sm:gap-3 sm:text-[13px]"><span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white sm:h-5 sm:w-5"><Icon name="check" size={10} /></span>{item}</div>)}</div>
      {hasComplimentary && <><h3 className="mt-5 text-[10px] font-bold uppercase tracking-[.14em] text-[#7b252b]">Complimentary</h3><div className="mt-2 flex flex-wrap gap-2">{service.complimentary.map(item => <span key={item} className="rounded-full border border-[#dfc9bd] bg-[#fff8f4] px-3 py-1.5 text-[10px] font-semibold text-[#6f292d] sm:text-[11px]">{item}</span>)}</div></>}
      {hasCatalogs && <div className="mt-5 rounded-[20px] border border-[#e1d0c4] bg-[#fbf4ee] p-4"><h3 className="text-[10px] font-bold uppercase tracking-[.14em] text-[#7b252b]">Jewellery Catalogues</h3><p className="mt-1.5 text-[11px] leading-5 text-[#74665f]">Open either catalogue to browse the full jewellery sets.</p><div className="mt-3 flex flex-wrap gap-2">{service.catalogs.map(catalog => <a key={catalog.label} href={catalog.href} target="_blank" rel="noopener noreferrer" className="btn-secondary !px-4 !py-2 !text-[11px]"><Icon name="book" size={14} /> {catalog.label}</a>)}</div></div>}
      <p className="mt-4 rounded-[18px] bg-[#f4e7dc] p-3 text-[11px] leading-5 text-[#6f5b52] sm:mt-6 sm:rounded-[22px] sm:p-4 sm:text-[12px]"><ServiceNote note={service.note} /></p><div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3"><button onClick={onBook} className="btn-primary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]"><Icon name="calendar" size={15} /> Book This Service</button><button onClick={onClose} className="btn-secondary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]">Close</button></div></div></div></div></div>;
  }
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
  render() {
    const { onBook } = this.props;
    return <section id="gallery" className="section-anchor bg-[#fffdfb] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10">
      <motion.div {...A.fadeUp(0)} className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">BRIDAL GALLERY</p><h2 className="section-title">Looks that inspire your wedding-day mood</h2></div><button onClick={onBook} className="btn-secondary self-start">Book Your Look</button></motion.div>
      <div className="mt-10 gallery-grid">{galleryImages.map((item, index) => {
        return <motion.button key={`${item.src}-${index}`} {...A.fadeUp(0.08 + index * 0.035)} onClick={() => this.setState({ selected: item })} className="group gallery-item"><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" onError={e => { if (item.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = item.fallback; } }} /></motion.button>;
      })}</div>
      <motion.div {...A.fadeUp(0.45)} className="mt-10 flex flex-col items-center text-center"><p className="text-[13px] leading-6 text-[#6b5f59]">Want to see more recent bridal looks and client work?</p><a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-glow mt-4"><Icon name="instagram" size={17} /> View More Work on Instagram</a></motion.div>
    </div>{this.state.selected && <div className="modal-backdrop fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4" onClick={() => this.setState({ selected: null })}><button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#70151c]" aria-label="Close image"><Icon name="close" /></button><img src={this.state.selected.src} alt={this.state.selected.alt} decoding="async" referrerPolicy="no-referrer" onError={e => { if (this.state.selected?.fallback) { e.currentTarget.onerror = null; e.currentTarget.src = this.state.selected.fallback; } }} className="lightbox-image max-w-[92vw] rounded-[24px]" /></div>}</section>;
  }
}

function WhyUs() {
  const items = [["sparkles", "Look Planning", "Makeup can be coordinated with outfit, jewellery, photography and event timing."], ["heart", "Personal Attention", "The website is designed around direct bridal enquiries instead of a generic salon flow."], ["map", "Tamil Nadu Coverage", "Chennai-focused bookings with venue enquiries across Tamil Nadu, subject to date availability."], ["check", "Clear Confirmation", "Service scope, date, venue and final quote can be confirmed before booking."]];
  return <section id="why-us" className="section-anchor bg-[#6d1119] py-14 text-white sm:py-20"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><motion.div {...A.fadeUp(0)} className="mx-auto max-w-[720px] text-center"><p className="text-[11px] font-bold tracking-[.22em] text-[#e5b8a7] sm:text-[12px]">WHY RS BRIDAL</p><h2 className="brand-serif mt-3 text-[28px] leading-[1.1] sm:text-[42px] lg:text-[50px]">A calm, personal beauty experience for your special day</h2></motion.div><div className="mt-8 grid gap-3.5 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">{items.map(([icon, title, desc], i) => <motion.div key={title} {...A.fadeUp(0.15 + i * 0.1)} className="rounded-[22px] border border-white/15 bg-white/[.06] p-5 sm:rounded-[26px] sm:p-6"><span className="grid h-10 w-10 place-items-center rounded-full border border-[#d79c8d] text-[#f3c8b8] sm:h-12 sm:w-12"><Icon name={icon} size={20} /></span><h3 className="brand-serif mt-4 text-[19px] sm:mt-5 sm:text-[24px]">{title}</h3><p className="mt-2 text-[12px] leading-5 text-[#e5cbc2] sm:mt-3 sm:leading-6">{desc}</p></motion.div>)}</div></div></section>;
}

function ServiceAreas({ onBook }) {
  const areas = ["Chennai", "Trichy", "Coimbatore", "Madurai", "Salem", "Erode", "Thanjavur", "Tirunelveli", "Vellore", "Tiruppur", "Kanchipuram", "Cuddalore"];
    return <div><section id="service-areas" className="section-anchor bg-[#fffdfb] py-20 sm:py-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch"><motion.div {...A.slideLeft(0.1)} className="rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] p-7 sm:p-9"><p className="section-kicker">SERVICE AREAS</p><h2 className="brand-serif mt-3 text-[38px] leading-[1.08] text-[#211815] sm:text-[44px]"> Bridal bookings across Tamil Nadu.</h2><p className="mt-5 text-[14px] leading-7 text-[#665a54]">Chennai is the primary work area for RS Bridal. Brides can also enquire for weddings, receptions, pre-wedding shoots and family functions in cities and districts across Tamil Nadu, based on date availability.</p><p className="mt-4 text-[13px] leading-6 text-[#786b64]">Share your event date, city and venue in the booking form. We will use those details only to check scheduling and service availability for your event.</p><div className="mt-7 flex flex-wrap gap-3"><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Check Your Date</button><button onClick={() => scrollToSection("services")} className="btn-secondary">Explore Services</button></div></motion.div><motion.div {...A.slideRight(0.2)} className="rounded-[30px] border border-[#e2d3c7] bg-[radial-gradient(circle_at_top_left,#fff8f3,#f1dfd2)] p-7 sm:p-9"><div className="flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#7a111a] text-white"><Icon name="map" size={22} /></span><div><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#8a363b]">Primary Work Area</p><h3 className="brand-serif mt-1 text-[31px] text-[#4f171b]">{CONFIG.primaryArea}</h3><p className="mt-2 text-[12px] leading-5 text-[#75665f]">Available for venue-based bridal enquiries across Tamil Nadu.</p></div></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{areas.map(area => <div key={area} className="rounded-full border border-[#ddc9bc] bg-white/80 px-4 py-3 text-center text-[12px] font-semibold text-[#5c302e]">{area}</div>)}</div><p className="mt-6 text-center text-[12px] font-semibold text-[#7a111a]">And other cities & districts across Tamil Nadu</p></motion.div></div></div></section><section className="bg-[#fffdfb] pb-20 sm:pb-24"><div className="mx-auto max-w-[1420px] px-5 sm:px-6 lg:px-8 xl:px-10"><div className="flex flex-col justify-between gap-8 rounded-[30px] border border-[#eadfd5] bg-[#fbf6f1] px-6 py-9 sm:px-10 lg:flex-row lg:items-center lg:px-12"><div><p className="section-kicker">READY TO ENQUIRE?</p><h2 className="brand-serif mt-2 text-[34px] text-[#211815]">Share your date, service, city and venue.</h2><p className="mt-2 text-[13px] text-[#6b5f59]">Book Now opens the dedicated booking page and prepares your details for WhatsApp.</p></div><button onClick={onBook} className="btn-primary"><Icon name="calendar" size={17} /> Open Booking Page</button></div></div></section></div>;
}

function Footer({ onBook }) {
  return <footer className="bg-[#211715] text-[#eadbd4]"><div className="mx-auto grid max-w-[1420px] gap-8 px-5 py-12 sm:px-6 md:grid-cols-4 lg:px-8 xl:px-10"><div><Brand white /><p className="mt-4 max-w-[280px] text-[12px] leading-6 text-[#bdaea8]">bridal makeup artist focused on Chennai and available for bookings across Tamil Nadu.</p></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Quick Links</h3><div className="mt-4 grid gap-2 text-[12px] text-[#bdaea8]"><button onClick={() => scrollToSection("about")} className="text-left">About</button><button onClick={() => scrollToSection("services")} className="text-left">Services</button><button onClick={() => scrollToSection("faq")} className="text-left">FAQs</button><button onClick={() => scrollToSection("service-areas")} className="text-left">Service Areas</button></div></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Service Area</h3><p className="mt-4 text-[13px] font-semibold text-white">Chennai — Primary Work Area</p><p className="mt-2 text-[13px]">Bookings across Tamil Nadu</p><p className="mt-4 text-[13px]">{CONFIG.phoneDisplay}</p><div className="mt-3 flex flex-wrap gap-3"><a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] text-[#e5b8a7] transition hover:text-white"><Icon name="instagram" size={16} /> Instagram</a><a href={"mailto:" + CONFIG.email} className="inline-flex items-center gap-1.5 text-[13px] text-[#e5b8a7] transition hover:text-white"><Icon name="mail" size={16} /> Gmail</a></div></div><div><h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-white">Booking</h3><p className="mt-4 text-[12px] leading-6 text-[#bdaea8]">Use the dedicated booking page to share your service, date, city and venue, then send the enquiry on WhatsApp.</p><button onClick={onBook} className="mt-4 rounded-full border border-[#8f5d58] px-5 py-2.5 text-[13px] font-semibold text-white">Book Now</button></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-[1420px] flex-col gap-2 px-5 py-5 text-[11px] text-[#9f918b] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-10"><span>© {new Date().getFullYear()} RS Bridal. All rights reserved.</span><span>Built with care for bridal beauty.</span></div></div></footer>;
}

class FloatingSocialDock extends React.Component {
  constructor(props) { super(props); this.state = { open: false }; this.dockRef = React.createRef(); }
  componentDidMount() { this._onClickOutside = e => { if (this.dockRef.current && !this.dockRef.current.contains(e.target)) this.setState({ open: false }); }; document.addEventListener("mousedown", this._onClickOutside); }
  componentWillUnmount() { document.removeEventListener("mousedown", this._onClickOutside); }
  openWhatsApp = () => { if (CONFIG.whatsappNumber) window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi RS Bridal! Welcome! I came across your page and I'm interested in your bridal makeup services. Could you please share more details about the packages and availability?")}`, "_blank", "noopener"); else navigateTo("book"); };
  openInstagram = () => { if (CONFIG.instagramUrl) window.open(CONFIG.instagramUrl, "_blank", "noopener"); };
  render() {
    const open = this.state.open;
    return <div ref={this.dockRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-center">

      <button
        onClick={() => this.setState({ open: !open })}
        className="social-arrow grid h-9 w-9 place-items-center rounded-full transition-all duration-300"
        style={{ marginBottom: open ? "20px" : "10px" }}
        aria-label={open ? "Hide Instagram" : "Show Instagram"}
        title={open ? "Hide Instagram" : "Show Instagram"}
      ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .28s ease" }}><path d="M4 10l4-4.5L12 10" stroke="#7a111a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>

      <div
        style={{ height: open ? "66px" : "0px", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "height .28s ease, opacity .22s ease", marginBottom: open ? "10px" : "0px" }}
      >
        <AnimatePresence>
          {open && <motion.button
            initial={{ opacity: 0, y: 10, scale: .86 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: .88 }}
            transition={{ duration: .22 }}
            onClick={this.openInstagram}
            className="insta-attention grid h-[56px] w-[56px] place-items-center rounded-full bg-[radial-gradient(circle_at_32%_105%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white shadow-[0_8px_28px_rgba(193,53,132,.35)] transition hover:scale-110"
            aria-label="Open Instagram"
            title="Instagram"
          ><Icon name="instagram" size={28} /></motion.button>}
        </AnimatePresence>
      </div>

      <button onClick={this.openWhatsApp} className="wa-float flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_28px_rgba(37,211,102,.45)] transition hover:scale-110" aria-label="Open WhatsApp" title="WhatsApp"><img src={`${IMG}/whatsapp-logo.svg`} alt="" className="h-[34px] w-[34px]" /></button>
    </div>;
  }
}

class BookingPage extends React.Component {
  constructor(props) { super(props); this.state = { form: { name: "", phone: "", service: props.presetService || services[0].name, date: "", location: "", notes: "" }, status: "" }; }
  update = e => this.setState({ form: { ...this.state.form, [e.target.name]: e.target.value } });
  buildMessage = () => { const f = this.state.form; return ["Hello RS Bridal, I would like to enquire about a booking.", "", `Name: ${f.name || "-"}`, `Phone: ${f.phone || "-"}`, `Service: ${f.service || "-"}`, `Preferred Date: ${f.date || "-"}`, `Location: ${f.location || "-"}`, `Notes: ${f.notes || "-"}`, "", "Please share availability and the best quote for this requirement."].join("\n"); };
  submit = e => { e.preventDefault(); const f = this.state.form; if (!f.name || !f.phone || !f.service || !f.date) { this.setState({ status: "Please fill name, phone, service and preferred date." }); return; } if (!CONFIG.whatsappNumber) { this.setState({ status: "Booking message is ready. Add the client's WhatsApp number in CONFIG.whatsappNumber before launch, or use Copy Message for this demo." }); return; } window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(this.buildMessage())}`, "_blank", "noopener"); };
  copy = async () => { try { await navigator.clipboard.writeText(this.buildMessage()); this.setState({ status: "Booking message copied." }); } catch { this.setState({ status: "Copy is unavailable in this browser. Add the WhatsApp number before launch." }); } };
  render() { const f = this.state.form; return <div className="min-h-screen bg-[#f8efe8]"><div className="border-b border-[#eadfd5] bg-[#fffdfb]"><div className="mx-auto flex h-[70px] max-w-[1420px] items-center justify-between px-5 sm:h-[80px] sm:px-6 lg:px-8 xl:px-10"><Brand /><button onClick={() => navigateTo("home")} className="btn-secondary !px-3 !py-2 !text-[12px] sm:!px-5 sm:!py-2.5 sm:!text-[13px]">←</button></div></div><main className="mx-auto max-w-[1420px] px-4 py-6 sm:px-6 sm:py-14 lg:px-8 xl:px-10"><div className="mx-auto grid max-w-[340px] gap-4 sm:max-w-none sm:gap-8 lg:grid-cols-[.8fr_1.2fr]"><motion.aside {...A.slideLeft(0.1)} className="rounded-[18px] bg-[#711019] p-3.5 text-white sm:rounded-[30px] sm:p-9"><p className="text-[9px] font-bold tracking-[.2em] text-[#edc4b1] sm:text-[12px]">BOOK YOUR LOOK</p><h2 className="brand-serif mt-1 text-[18px] leading-[1.15] sm:mt-3 sm:text-[36px] lg:text-[45px]">Tell us your date, service, city and venue.</h2><p className="mt-2 text-[11px] leading-4.5 text-[#eedbd3] sm:mt-5 sm:text-[14px] sm:leading-7">This dedicated page collects the booking details and formats them into one WhatsApp enquiry message.</p><div className="mt-4 grid gap-1.5 sm:mt-8 sm:gap-4">{[["01", "Choose a service"], ["02", "Pick your preferred date"], ["03", "Share your city and venue"], ["04", "Send everything on WhatsApp"]].map(([n, t]) => <div key={n} className="flex items-center gap-2 rounded-[12px] border border-white/15 bg-white/[.06] p-2 sm:gap-4 sm:rounded-[22px] sm:p-4"><span className="brand-serif text-[14px] text-[#efc4b0] sm:text-[24px]">{n}</span><span className="text-[10px] font-semibold sm:text-[13px]">{t}</span></div>)}</div><p className="mt-4 text-[9px] leading-4 text-[#c9aca2] sm:mt-8 sm:text-[11px] sm:leading-5">Fixed service prices are shown in Service Details. Custom bridal, jewellery and hair-treatment pricing is confirmed based on the selected requirement.</p></motion.aside><motion.section {...A.slideRight(0.2)} className="rounded-[18px] border border-[#e3d4c8] bg-white p-3.5 shadow-[0_8px_24px_rgba(69,35,27,.09)] sm:rounded-[30px] sm:p-9"><p className="text-[10px] font-bold tracking-[.2em] text-[#8a363b] sm:section-kicker">BOOKING DETAILS</p><h2 className="brand-serif mt-1.5 text-[18px] text-[#211815] sm:mt-2 sm:text-[34px]">Request an Appointment</h2><form onSubmit={this.submit} className="mt-4 grid gap-3.5 sm:mt-7 sm:grid-cols-2 sm:gap-5"><label><span className="form-label">Your Name *</span><input className="form-field" name="name" value={f.name} onChange={this.update} placeholder="Enter your name" required /></label><label><span className="form-label">Phone Number *</span><input className="form-field" name="phone" value={f.phone} onChange={this.update} placeholder="Enter phone number" inputMode="tel" required /></label><label><span className="form-label">Service *</span><select className="form-field" name="service" value={f.service} onChange={this.update}>{services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}</select></label><label><span className="form-label">Preferred Date *</span><input className="form-field" type="date" name="date" value={f.date} onChange={this.update} required /></label><label className="sm:col-span-2"><span className="form-label">Location</span><input className="form-field" name="location" value={f.location} onChange={this.update} placeholder="City / venue in Tamil Nadu" /></label><label className="sm:col-span-2"><span className="form-label">Notes</span><textarea className="form-field min-h-[120px] resize-y" name="notes" value={f.notes} onChange={this.update} placeholder="Tell us about the event, number of people, preferred look, timing, etc."></textarea></label><div className="sm:col-span-2"><div className="flex flex-wrap gap-2.5 sm:gap-3"><button type="submit" className="btn-primary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]"><Icon name="whatsapp" size={16} /> Send on WhatsApp</button><button type="button" onClick={this.copy} className="btn-secondary !px-4 !py-2.5 !text-[12px] sm:!px-5 sm:!py-3 sm:!text-[14px]">Copy Message</button></div>{this.state.status && <p className="mt-4 rounded-[20px] bg-[#fbf3ed] p-4 text-[12px] leading-5 text-[#725f55]">{this.state.status}</p>}</div></form></motion.section></div></main><FloatingSocialDock /></div>; }
}



function HomePage({ onBook }) {
  return <div><Header onBook={onBook} /><main><Hero onBook={onBook} /><About onBook={onBook} /><TrustStrip /><Services onBook={onBook} /><Gallery onBook={onBook} /><FAQ onBook={onBook} /><WhyUs /><ServiceAreas onBook={onBook} /></main><Footer onBook={onBook} /><FloatingSocialDock /></div>;
}

class App extends React.Component {
  constructor(props) { super(props); this.state = { route: props.initialRoute || routeFromHash(), presetService: "" }; }
  componentDidMount() { this.hashHandler = () => this.setState({ route: routeFromHash() }); window.addEventListener("hashchange", this.hashHandler); this.hashHandler(); }
  componentWillUnmount() { window.removeEventListener("hashchange", this.hashHandler); }
  onBook = (service = "") => { this.setState({ presetService: service }); window.location.hash = "book"; window.scrollTo(0, 0); };
  render() {
    const { route, presetService } = this.state;
    const anim = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.3, ease: "easeInOut" } };
    return (
      <AnimatePresence mode="wait">
        <motion.div key={route} {...anim}>
          {route === "book" && <BookingPage presetService={presetService} />}
          {route === "home" && <HomePage onBook={this.onBook} />}
        </motion.div>
      </AnimatePresence>
    );
  }
}

export default App;
