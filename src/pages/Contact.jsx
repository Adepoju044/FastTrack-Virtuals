import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import SEO from "@components/seo/SEO";

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "info@fasttrackvirtual.com",
    href: "mailto:info@fasttrackvirtual.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (833) 213-9993",
    href: "tel:+18332139993",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Mon – Fri, 9am – 6pm",
    sub: "EST / GMT / CST",
    href: null,
  },
  {
    icon: "🌍",
    label: "We Serve",
    value: "United States, United Kingdom & Canada",
    href: null,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/innopowerafrica/",
    icon: "in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/innopowerafrica",
    icon: "ig",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1KxtuJ7UXd/?mibextid=wwXIfr",
    icon: "fb",
  },
];

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us - FastTrack Virtuals"
        description="Get in touch with FastTrack Virtuals. Reach us via email or WhatsApp. Serving businesses in the US, UK & Canada."
        url="https://fasttrackvirtual.com/contact"
      />
      <Header />

      <section className="page-enter bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-32 pb-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="bg-ftvprimary text-white text-sm font-semibold uppercase py-2 px-5 rounded-full inline-block mb-5">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ftvblack dark:text-white mb-4">
            Let&apos;s Talk About Your Business
          </h1>
          <p className="text-base sm:text-lg text-ftvblack dark:text-gray-300 plusjakartasans">
            Reach out directly — we&apos;re happy to answer any questions.
          </p>
        </div>
      </section>

      <section className="bg-ftvoffwhite dark:bg-gray-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md card-hover flex items-start gap-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ftvprimary dark:text-ftvprimary-300 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-ftvblack dark:text-white font-medium plusjakartasans hover:text-ftvprimary dark:hover:text-ftvprimary-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-ftvblack dark:text-white font-medium plusjakartasans">
                      {item.value}
                    </p>
                  )}
                  {item.sub && (
                    <p className="text-ftvgrey dark:text-gray-400 text-sm plusjakartasans mt-0.5">
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-ftvgrey dark:text-gray-400 plusjakartasans text-sm mb-5 uppercase tracking-widest">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-ftvprimary dark:text-ftvprimary-300 font-bold text-sm hover:bg-ftvprimary hover:text-white dark:hover:bg-ftvprimary transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
