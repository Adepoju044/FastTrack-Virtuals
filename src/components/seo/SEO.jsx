import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "FastTrack Virtuals - Virtual Assistant Services",
  description = "Professional virtual assistant services for entrepreneurs and small businesses. We provide administrative support, marketing, customer service, and financial management.",
  keywords = "virtual assistant, administrative support, marketing services, customer service, financial management, business support, remote assistant",
  image = "/hero-img.jpg",
  url = "https://fasttrackvirtual.com",
  type = "website",
}) => {
  const fullTitle = title.includes("FastTrack")
    ? title
    : `${title} | FastTrack Virtuals`;
  const fullUrl = url.startsWith("http")
    ? url
    : `https://fasttrackvirtual.com${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://fasttrackvirtual.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="FastTrack Virtuals" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="FastTrack Virtuals" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
