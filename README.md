# RS Bridal — React + Tailwind V4

Responsive bridal makeup website focused on **Chennai as the primary work area** with booking enquiries accepted across **Tamil Nadu**.

## V4 changes

- Removed the shop-location / Google Maps section.
- Added a clean **Service Areas** section instead.
- Chennai is now the primary work area across hero, about, trust strip, footer and SEO.
- Tamil Nadu-wide venue booking coverage is clearly communicated.
- No travel fee / travel charge messaging is shown anywhere.
- SEO title, description, Open Graph, Twitter metadata and basic `ProfessionalService` structured data updated for Chennai + Tamil Nadu.
- Added `public/robots.txt`.
- Existing responsive hero, services, guide, FAQ, gallery, booking page and WhatsApp flow are preserved.

## Run locally

```bash
npm install
npm run dev
```

## Production checklist

Before launch, update the `CONFIG` object in `src/App.jsx` with the client's WhatsApp number, phone number and Instagram details. Replace placeholder artist information and stock images with the client's approved content.

Once the final domain is known, add the production canonical URL, Open Graph URL/image and a domain-specific sitemap.
