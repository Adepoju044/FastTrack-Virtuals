import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Button from "@components/ui/Button";
import CTAButton from "@components/ui/CTAButton";
import ContactForm from "@components/forms/ContactForm";
import Testimonials from "@components/sections/Testimonials";
import HowItWorks from "@components/sections/HowItWorks";
import SEO from "@components/seo/SEO";
import StructuredData from "@components/seo/StructuredData";

const Home = () => {
  const services = [
    {
      title: "Marketing & Social Media",
      items: [
        "Content creation",
        "Social media management",
        "Marketing campaign execution",
      ],
    },
    {
      title: "Administrative Support",
      items: [
        "Email management",
        "Calendar scheduling",
        "Data entry and organization",
      ],
    },
    {
      title: "Customer Service",
      items: [
        "Email support",
        "Live chat support",
        "Customer inquiry handling",
      ],
    },
    {
      title: "Financial Management",
      items: ["Bookkeeping", "Invoice processing", "Expense tracking"],
    },
  ];

  const benefits = [
    {
      number: "1",
      title: "Financial Management",
      description:
        "Stay on top of your budget with real-time tracking and expert insights. Let's optimize your expenses effortlessly.",
    },
    {
      number: "2",
      title: "Social Media and Marketing",
      description:
        "Boost engagement and grow your brand with data-driven strategies. We handle the content, you enjoy the results.",
    },
    {
      number: "3",
      title: "Administrative Tasks",
      description:
        "Free up your time with seamless scheduling, data entry, and task coordination. Efficiency starts here.",
    },
    {
      number: "4",
      title: "Email and Customer Service Management",
      description:
        "Keep your inbox organized and customers happy. Prompt responses, professional support, zero stress.",
    },
  ];

  return (
    <>
      <SEO
        title="FastTrack Virtuals - Professional Virtual Assistant Services"
        description="Empower your business with FastTrack Virtuals. We provide expert virtual assistant services including administrative support, marketing, customer service, and financial management for entrepreneurs and small businesses."
        keywords="virtual assistant, virtual assistant services, administrative support, marketing services, social media management, customer service, financial management, bookkeeping, business support, remote assistant, entrepreneur support, small business services"
        url="https://fasttrackvirtual.com"
      />
      <StructuredData />
      <Header />

      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-40 pb-16 min-h-[700px] flex items-center flex-col justify-center relative mobilelg:px-15 w-full">
        <div className="absolute bg-white dark:bg-gray-900 w-full min-h-[700px] opacity-50 dark:opacity-30 z-5 inset-0"></div>

        <div className="flex lg:justify-between justify-content-center items-center z-10 tabletmd:flex-nowrap flex-wrap mobilesm:px-8 px-4 max-w-7xl mx-auto">
          <div className="tabletmd:w-6/12 mobilelg:w-10/12 w-full mx-auto tabletmd:text-start text-center flex flex-col tabletmd:items-start items-center">
            <h1 className="mb-6 text-3xl mobilelg:text-4xl sm:text-[42px] font-extrabold tracking-tight leading-tight text-ftvblack dark:text-white lg:text-5xl tabletmd:text-4xl xl:text-[48px] w-full">
              Virtual Operations Support for Busy US, UK & Canadian Businesses
            </h1>
            <p className="mb-8 text-lg mobilelg:text-xl font-medium text-ftvblack dark:text-gray-300 lg:text-2xl plusjakartasans mr-2">
              We help service-based businesses save up to 20 hours per week by
              handling operations, systems, and admin tasks.
            </p>
            <CTAButton size="xl" className="mb-4" />
            <p className="text-sm text-ftvgrey dark:text-gray-400 plusjakartasans">
              ✓ No long-term contracts ✓ US, UK & Canada time zones ✓ Start in
              48 hours
            </p>
          </div>

          <div className="tabletmd:w-6/12 w-full mt-8 tabletmd:mt-0">
            <div className="relative inline-block rounded-xl w-full">
              <div className="w-full overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="Professional team working"
                  className="w-full h-auto rounded object-cover"
                  src="/hero-img.jpg"
                />
              </div>

              <div
                className="absolute left-0 flex flex-col gap-4 bottom-4"
                style={{ marginLeft: "-30px" }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white font-medium px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ml-3">
                  <img
                    alt="Customer Support"
                    src="/icons/customer-service.svg"
                  />
                  <span>Customer Support</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-ftvsecondary to-ftvsecondary-400 text-white font-medium px-4 py-3 rounded-lg shadow-lg ms-4 hover:shadow-xl transition-all duration-300">
                  <img alt="Project Management" src="/icons/task.svg" />
                  <span>Project Management</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary-400 to-ftvprimary-300 text-white font-medium px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img alt="Finance Management" src="/icons/money-bag.svg" />
                  <span>Finance Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <HowItWorks />

      <section className="bg-white dark:bg-gray-900 flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8">
        <div className="flex justify-between items-center mobilesm:p-8 p-4 gap-10 tabletmd:flex-nowrap flex-wrap">
          <div className="shadow-lg rounded-lg shadow-ftvgrey-500 dark:shadow-gray-700 hover:shadow-none transition all ease-in-out 300 tabletmd:w-6/12 w-full">
            <img
              className="w-full rounded-lg object-cover"
              alt="Stressed business owner"
              src="/stressed.png"
            />
          </div>

          <div className="tabletmd:w-6/12 w-full">
            <h2 className="mb-4 lg:text-4xl mobilelg:text-3xl mobilemd:text-2xl text-xl font-normal text-ftvblack dark:text-white">
              The National Small Business Association (NSBA) survey found
            </h2>
            <ul className="list-disc ps-10">
              <li className="mb-4 text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans">
                82% of small business owners (including sole proprietors) worked
                over 40 hours per week.
              </li>
              <li className="mb-4 text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans">
                39% reported spending 3-10 hours per week on administrative
                tasks alone
              </li>
            </ul>
            <Button className="sm:w-5/12 tabletmd:w-7/12 mobilelg:w-6/12 w-8/12 mt-5 uppercase">
              JOIN FAST TRACK
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvoffwhite dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 flex flex-col justify-center items-center min-h-[400px] mobilelg:py-15 mobilelg:px-8">
        <div className="min-h-100 w-full mx-auto flex justify-evenly items-center mobilesm:p-8 p-4 tabletmd:flex-nowrap flex-wrap gap-y-10">
          <div className="tabletmd:w-6/12 flex-col flex lg:justify-between justify-evenly items-start mobilelg:min-h-[550px] mobilelg:gap-0 gap-5">
            <span className="tabletmd:w-5/12 mobilelg:w-4/12 w-7/12 bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-5 rounded-full">
              key benefits
            </span>
            <h1 className="text-ftvblue dark:text-ftvprimary-300 mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
              Reclaim Your Time for What Matters
            </h1>
            <img
              alt="Benefits"
              className="mobilelg:w-10/12 w-full h-fit rounded-lg"
              src="/benefit.png"
            />
            <Button className="tabletmd:w-7/12 mobilelg:w-4/12 w-7/12 mt-5 uppercase">
              Read more
            </Button>
          </div>

          <div className="tabletmd:w-6/12 w-full space-y-7">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="flex space-x-3">
                <span className="bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white text-center flex justify-center items-center w-11 font-bold text-lg h-9 rounded-full shadow-md">
                  {benefit.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-ftvprimary dark:text-ftvprimary-300 font-medium mobilelg:text-xl text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-[#030303] dark:text-gray-300 mobilelg:text-base text-sm plusjakartasans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mobilelg:min-h-[300px] mobilelg:py-15 mobilelg:px-8 bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary dark:from-gray-800 dark:via-gray-850 dark:to-gray-900"
      >
        <div className="xl:w-6/12 tabletmd:w-8/12 md:w-10/12 w-full flex-col flex justify-between items-start space-y-4 mobilesm:p-8 p-4">
          <span className="sm:w-4/12 mobilelg:w-5/12 w-7/12 bg-white dark:bg-gray-700 uppercase text-ftvblue dark:text-ftvprimary-300 font-semibold text-center py-3 px-5 rounded-full">
            Our Services
          </span>
          <h1 className="text-white mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
            We Provide a Wide Range Of Services That Help Businesses
          </h1>
        </div>
      </section>

      <section className="mobilelg:min-h-[300px] mobilelg:py-15 py-15 xl:px-10 lg:px-8 md:px-6 px-4 bg-ftvoffwhite dark:bg-gray-950 flex justify-center items-center">
        <div className="flex flex-wrap justify-center xl:gap-10 gap-5 mobilelg:p-8 p-0 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white dark:bg-gray-800 space-y-3"
            >
              <h3 className="text-ftvprimary dark:text-ftvprimary-300 font-medium mobilelg:text-xl text-lg">
                {service.title}
              </h3>
              <ul className="list-disc ps-10">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="mb-4 text-ftvblue dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-ftvsecondary to-ftvprimary py-16 text-center">
        <div className="max-w-4xl mx-auto mobilesm:px-8 px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Ready to Reclaim 20+ Hours Per Week?
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 plusjakartasans">
            Let's discuss how we can transform your business operations
          </p>
          <CTAButton
            size="xl"
            className="bg-white text-ftvsecondary hover:bg-ftvoffwhite"
          />
        </div>
      </section>

      <section
        id="who-we-help"
        className="bg-white dark:bg-gray-900 py-16 mobilelg:py-20"
      >
        <div className="max-w-7xl mx-auto mobilesm:px-8 px-4">
          <div className="text-center mb-12">
            <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-6 rounded-full font-semibold inline-block mb-4">
              Who We Help
            </span>
            <h2 className="text-ftvblack dark:text-white font-bold mobilelg:text-4xl text-3xl mb-4">
              Serving Businesses Across the US, UK & Canada
            </h2>
            <p className="text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans max-w-2xl mx-auto">
              We specialize in supporting service-based businesses that need
              reliable operations support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-ftvprimary to-ftvprimary-400 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chalkboard-teacher text-white text-2xl"></i>
              </div>
              <h3 className="text-ftvblack dark:text-white font-bold text-xl mb-4">
                Coaches & Consultants
              </h3>
              <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
                Focus on your clients while we handle scheduling, client
                onboarding, and administrative tasks.
              </p>
            </div>

            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-ftvsecondary to-ftvsecondary-400 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-ftvblack dark:text-white font-bold text-xl mb-4">
                Agencies
              </h3>
              <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
                Scale your operations with dedicated support for project
                management and client communication.
              </p>
            </div>

            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-ftvprimary-400 to-ftvprimary-300 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-store text-white text-2xl"></i>
              </div>
              <h3 className="text-ftvblack dark:text-white font-bold text-xl mb-4">
                Small Businesses
              </h3>
              <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
                Get enterprise-level support without the enterprise cost.
                Perfect for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white dark:bg-gray-900 flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8"
      >
        <div className="flex flex-col justify-center items-center space-y-6 mobilesm:p-8 p-4 max-w-4xl mx-auto">
          <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-5 rounded-full font-semibold">
            About Us
          </span>
          <h2 className="text-ftvblack dark:text-white font-medium mobilelg:text-4xl text-3xl text-center">
            Your Trusted Virtual Assistant Partner
          </h2>

          <div className="space-y-6 text-ftvblack dark:text-gray-300 plusjakartasans mobilelg:text-lg text-base">
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

      <section className="bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary min-h-[400px] flex items-center justify-center mobilelg:px-8 mobilelg:py-15 py-10">
        <div className="max-w-4xl mx-auto text-center mobilesm:p-8 p-4 space-y-6">
          <h2 className="text-white font-bold mobilelg:text-4xl text-3xl">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white mobilelg:text-xl text-lg plusjakartasans">
            Let's discuss how FastTrack Virtual can help you reclaim your time
            and boost productivity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-ftvprimary hover:bg-ftvoffwhite uppercase"
              >
                Get Started Today
              </Button>
            </Link>
            <a href="#contact">
              <Button variant="secondary" size="lg" className="uppercase">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-ftvoffwhite dark:bg-gray-950 flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8"
      >
        <div className="max-w-6xl mx-auto w-full mobilesm:p-8 p-4">
          <div className="text-center mb-10">
            <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-5 rounded-full font-semibold inline-block mb-4">
              Contact Us
            </span>
            <h2 className="text-ftvblack dark:text-white font-medium mobilelg:text-4xl text-3xl">
              Get In Touch
            </h2>
            <p className="text-ftvgrey dark:text-gray-300 mobilelg:text-lg text-base plusjakartasans mt-4">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="flex tabletmd:flex-nowrap flex-wrap gap-10">
            <div className="tabletmd:w-7/12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <ContactForm />
            </div>

            <div className="tabletmd:w-5/12 w-full space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ftvprimary rounded-full p-3">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-ftvblack dark:text-white font-medium text-lg mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@fasttrackvirtual.com"
                      className="text-ftvgrey dark:text-gray-300 hover:text-ftvprimary dark:hover:text-ftvprimary-300 plusjakartasans"
                    >
                      info@fasttrackvirtual.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ftvsecondary rounded-full p-3">
                    <i className="fas fa-phone text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-ftvblack dark:text-white font-medium text-lg mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-ftvgrey dark:text-gray-300 hover:text-ftvprimary dark:hover:text-ftvprimary-300 plusjakartasans"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ftvprimary-400 rounded-full p-3">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-ftvblack dark:text-white font-medium text-lg mb-2">
                      Business Hours
                    </h3>
                    <p className="text-ftvgrey dark:text-gray-300 plusjakartasans">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-ftvprimary to-ftvprimary-400 rounded-lg shadow-lg p-6 text-white">
                <h3 className="font-medium text-lg mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:scale-110 transition-transform">
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="#" className="hover:scale-110 transition-transform">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
