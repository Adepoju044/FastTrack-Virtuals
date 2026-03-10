import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />

      <section className="bg-white flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8 pt-40">
        <div className="flex flex-col justify-center items-center space-y-6 mobilesm:p-8 p-4 max-w-4xl mx-auto">
          <h1 className="text-ftvblack font-medium mobilelg:text-4xl text-3xl text-center">
            About Us
          </h1>

          <div className="space-y-6 text-ftvblack plusjakartasans mobilelg:text-lg text-base">
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
              pressure that comes with wearing too many hats. That's why we're
              dedicated to delivering reliable, high-quality virtual solutions
              that save time, reduce stress, and keep your business running
              seamlessly.
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
