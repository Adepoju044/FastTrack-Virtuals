import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import SEO from "@components/seo/SEO";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us - FastTrack Virtuals"
        description="Learn about FastTrack Virtual's mission to empower entrepreneurs and small businesses with reliable virtual assistant services across the US, UK, and Canada."
        url="/about-us"
      />
      <Header />

      <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 pt-32">
        <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl mx-auto">
          <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-5 rounded-full font-semibold">
            About Us
          </span>
          <h1 className="text-ftvblack dark:text-white font-medium text-3xl sm:text-4xl text-center">
            Your Trusted Virtual Assistant Partner
          </h1>
          <div className="space-y-5 text-ftvblack dark:text-gray-300 plusjakartasans text-base sm:text-lg">
            <p>
              At FastTrack Virtual, we empower entrepreneurs and small
              businesses to work smarter, not harder. Our mission is to provide
              dependable virtual support that simplifies your daily operations
              and helps your business thrive.
            </p>

            <p>
              We specialize in administrative assistance, marketing support,
              customer service, financial organization, and content editing,
              freeing you to focus on strategy, growth, and innovation.
            </p>

            <p>
              We understand the challenges of managing a business and the
              pressure that comes with wearing too many hats. That&apos;s why
              we&apos;re dedicated to delivering reliable, high-quality virtual
              solutions that save time, reduce stress, and keep your business
              running seamlessly.
            </p>

            <p>
              With FastTrack Virtual, you gain a trusted partner committed to
              your success, so you can focus on what truly matters: growing your
              business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
