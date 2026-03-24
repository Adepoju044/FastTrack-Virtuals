import { Helmet } from "react-helmet-async";

const StructuredData = ({ type = "organization" }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FastTrack Virtuals",
    url: "https://fasttrackvirtual.com",
    logo: "https://fasttrackvirtual.com/fasttrack-logo.svg",
    description:
      "Professional virtual assistant services for entrepreneurs and small businesses",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "Customer Service",
      email: "info@fasttrackvirtual.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/fasttrackvirtuals",
      "https://twitter.com/fasttrackvirtuals",
      "https://linkedin.com/company/fasttrackvirtuals",
      "https://instagram.com/fasttrackvirtuals",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Virtual Assistant Services",
    provider: {
      "@type": "Organization",
      name: "FastTrack Virtuals",
    },
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Virtual Assistant Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Administrative Support",
            description:
              "Email management, calendar scheduling, data entry and organization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing & Social Media",
            description:
              "Content creation, social media management, marketing campaign execution",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Customer Service",
            description:
              "Email support, live chat support, customer inquiry handling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Financial Management",
            description: "Bookkeeping, invoice processing, expense tracking",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://fasttrackvirtual.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://fasttrackvirtual.com#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://fasttrackvirtual.com#about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://fasttrackvirtual.com#contact",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
