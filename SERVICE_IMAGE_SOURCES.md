# Service image sources

This build uses the exact service-image URLs supplied by the client/user for the service cards. The Bridesmaid Makeup image is stored locally at `public/assets/images/services/bridesmaid-makeup.webp` from the supplied image.

All remote service images have a local fallback already present in the project so a card will not render broken if an external host blocks hotlinking or a URL expires.

Important for production: confirm that RS Bridal has permission/licensing to publish third-party images. Client-owned portfolio photos are preferred for the final live website.

The Diamond Facial URL supplied is a signed ChatGPT content URL and may expire. Replace it with a permanent local image or stable licensed URL before final production if it stops loading.
