import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { SITE } from "./siteConfig";

const normalizeSiteUrl = (value) => {
  if (!value) return "";
  try {
    return new URL(value).origin;
  } catch {
    // If the env value is a bare domain (e.g. example.com), assume https.
    try {
      return new URL(`https://${value}`).origin;
    } catch {
      return "";
    }
  }
};

const Seo = ({
  title,
  description,
  keywords,
  path,
  image,
  type = "website",
  noIndex = false,
  jsonLd,
}) => {
  const location = useLocation();

  const baseUrl =
    normalizeSiteUrl(import.meta.env.VITE_SITE_URL) ||
    (typeof window !== "undefined" ? window.location.origin : "");

  const canonicalPath = path ?? location.pathname;

  const canonicalUrl = baseUrl
    ? new URL(canonicalPath, baseUrl).toString()
    : canonicalPath;

  const pageTitle = title
    ? title.includes(SITE.name)
      ? title
      : `${title} | ${SITE.name}`
    : SITE.defaultTitle;

  const pageDescription = description || SITE.defaultDescription;

  const imageUrl = baseUrl
    ? new URL(image || SITE.defaultImage, baseUrl).toString()
    : image || SITE.defaultImage;

  const logoUrl = baseUrl
    ? new URL(SITE.logo, baseUrl).toString()
    : SITE.logo;

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: SITE.name,
      url: baseUrl || canonicalUrl,
      logo: logoUrl,
      image: imageUrl,
      telephone: SITE.phone,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.addressText,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle,
      url: canonicalUrl,
      description: pageDescription,
      isPartOf: {
        "@type": "WebSite",
        name: SITE.name,
        url: baseUrl || canonicalUrl,
      },
    },
  ];

  if (jsonLd) {
    if (Array.isArray(jsonLd)) jsonLdData.push(...jsonLd);
    else jsonLdData.push(jsonLd);
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
    </Helmet>
  );
};

export default Seo;
