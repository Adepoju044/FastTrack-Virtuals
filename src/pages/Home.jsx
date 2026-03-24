import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Button from "@components/ui/Button";
import CTAButton from "@components/ui/CTAButton";
import Testimonials from "@components/sections/Testimonials";
import HowItWorks from "@components/sections/HowItWorks";
import SEO from "@components/seo/SEO";
import StructuredData from "@components/seo/StructuredData";
import useFadeIn from "@hooks/useFadeIn";

const Home = () => {
  const heroRef = useFadeIn();
  const statsRef = useFadeIn();
  const benefitsRef = useFadeIn();
  const whoRef = useFadeIn();
  const services = [
    {
      title: "Business Support Specialist",
      items: [
        "Email & calendar management",
        "Administrative support",
        "Customer service & inbox handling",
        "Data entry & organization",
        "Scheduling & coordination",
      ],
    },
    {
      title: "Project Management",
      items: [
        "Workflow setup & optimization",
        "Task & deadline tracking",
        "Team coordination",
        "Systems & process documentation",
        "Project reporting",
      ],
    },
    {
      title: "Marketing & Communications",
      items: [
        "Social media management",
        "Content creation & scheduling",
        "Email marketing campaigns",
        "Copywriting & proofreading",
        "Brand communications",
      ],
    },
    {
      title: "Graphic / Product Design",
      items: [
        "Brand identity & logo design",
        "Social media graphics",
        "Marketing materials",
        "Presentation design",
        "Product visuals",
      ],
    },
    {
      title: "Video Editing",
      items: [
        "Short-form content editing",
        "YouTube & podcast editing",
        "Reels & TikTok production",
        "Captions & subtitles",
        "Motion graphics",
      ],
    },
    {
      title: "AI & Development",
      items: [
        "AI tools integration",
        "Workflow automation",
        "Web development support",
        "Chatbot setup & management",
        "Tech stack consulting",
      ],
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

      <section className="page-enter bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-32 pb-16 flex items-center justify-center relative w-full">
        <div className="absolute bg-white dark:bg-gray-900 w-full h-full opacity-50 dark:opacity-30 inset-0"></div>

        <div
          ref={heroRef}
          className="fade-in relative z-10 flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-8 max-w-7xl mx-auto w-full"
        >
          <div className="lg:w-1/2 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-ftvblack dark:text-white w-full">
              Virtual Operations Support for Busy US, UK & Canadian Businesses
            </h1>
            <p className="mb-8 text-base sm:text-lg lg:text-xl font-medium text-ftvblack dark:text-gray-300 plusjakartasans">
              We help service-based businesses save up to 20 hours per week by
              handling operations, systems, and admin tasks.
            </p>
            <CTAButton size="xl" className="mb-4" />
            <p className="text-sm text-ftvgrey dark:text-gray-400 plusjakartasans text-center lg:text-left">
              ✓ No long-term contracts &nbsp;✓ US, UK & Canada time zones
              &nbsp;✓ Start in 48 hours
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="w-full overflow-hidden rounded-xl shadow-2xl">
              <img
                alt="Remote team collaborating on business operations"
                className="w-full h-auto object-cover"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              />
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white font-medium px-4 py-2 rounded-lg shadow-md text-sm">
                <img
                  alt="Customer Support"
                  src="/icons/customer-service.svg"
                  className="w-5 h-5"
                />
                <span>Customer Support</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white font-medium px-4 py-2 rounded-lg shadow-md text-sm">
                <img
                  alt="Project Management"
                  src="/icons/task.svg"
                  className="w-5 h-5"
                />
                <span>Project Management</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary-400 to-ftvprimary-300 text-white font-medium px-4 py-2 rounded-lg shadow-md text-sm">
                <img
                  alt="Finance Management"
                  src="/icons/money-bag.svg"
                  className="w-5 h-5"
                />
                <span>Finance Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <HowItWorks />

      <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8">
        <div
          ref={statsRef}
          className="fade-in max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 w-full">
            <img
              className="w-full rounded-xl object-cover shadow-lg"
              alt="Overwhelmed business owner buried in admin tasks"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-ftvblack dark:text-white">
              The National Small Business Association (NSBA) survey found
            </h2>
            <ul className="list-disc ps-6 space-y-3">
              <li className="dark:text-gray-300 text-base sm:text-lg plusjakartasans">
                82% of small business owners worked over 40 hours per week.
              </li>
              <li className="dark:text-gray-300 text-base sm:text-lg plusjakartasans">
                39% reported spending 3–10 hours per week on administrative
                tasks alone.
              </li>
            </ul>
            <Link to="/register">
              <Button className="mt-6 w-full sm:w-auto px-8 uppercase">
                JOIN FAST TRACK
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvoffwhite dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 py-16 px-4 sm:px-8">
        <div
          ref={benefitsRef}
          className="fade-in max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <span className="w-fit bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-2 px-5 rounded-full text-sm">
              key benefits
            </span>
            <h2 className="text-ftvblue dark:text-ftvprimary-300 text-2xl sm:text-3xl font-medium">
              Reclaim Your Time for What Matters
            </h2>
            <img
              alt="Business owner working productively with virtual assistant support"
              className="w-full rounded-xl object-cover shadow-lg"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
            />
            <Button className="w-full sm:w-auto px-8 uppercase">
              Read more
            </Button>
          </div>

          <div className="md:w-1/2 w-full space-y-6">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="flex gap-4">
                <span className="bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white flex justify-center items-center min-w-[36px] h-9 font-bold text-base rounded-full shadow-md">
                  {benefit.number}
                </span>
                <div>
                  <h3 className="text-ftvprimary dark:text-ftvprimary-300 font-medium text-lg mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-ftvblack dark:text-gray-300 text-sm plusjakartasans">
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
        className="bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 py-12 px-4 sm:px-8"
      >
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="inline-block bg-white dark:bg-gray-700 uppercase text-ftvblue dark:text-ftvprimary-300 font-semibold text-center py-2 px-5 rounded-full text-sm">
            Our Services
          </span>
          <h2 className="text-white text-2xl sm:text-3xl font-medium">
            We Provide a Wide Range Of Services That Help Businesses
          </h2>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-ftvoffwhite dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md card-hover"
            >
              <h3 className="text-ftvprimary dark:text-ftvprimary-300 font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <ul className="list-disc ps-5 space-y-1">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-ftvblue dark:text-gray-300 text-sm plusjakartasans"
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
            Let&apos;s discuss how we can transform your business operations
          </p>
          <CTAButton
            size="xl"
            className="bg-white text-ftvsecondary hover:bg-ftvoffwhite"
          />
        </div>
      </section>

      <section
        id="who-we-help"
        className="bg-white dark:bg-gray-900 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="bg-ftvprimary dark:bg-ftvprimary-400 uppercase text-white text-center py-3 px-6 rounded-full font-semibold inline-block mb-4">
              Who We Help
            </span>
            <h2 className="text-ftvblack dark:text-white font-bold text-3xl sm:text-4xl mb-4">
              Serving Businesses Across the US, UK & Canada
            </h2>
            <p className="text-ftvgrey dark:text-gray-300 text-base sm:text-lg plusjakartasans max-w-2xl mx-auto">
              We specialize in supporting service-based businesses that need
              reliable operations support
            </p>
          </div>

          <div ref={whoRef} className="fade-in grid md:grid-cols-3 gap-8">
            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow card-hover">
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

            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow card-hover">
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

            <div className="bg-ftvoffwhite dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow card-hover">
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

      <section className="bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary py-16 sm:py-20 px-4 sm:px-8 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-white font-bold text-3xl sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-lg sm:text-xl plusjakartasans">
            Let&apos;s discuss how FastTrack Virtual can help you reclaim your
            time and boost productivity.
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
