import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Button from "@components/ui/Button";

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
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvprimary-300 pt-40 pb-10 min-h-[600px] flex items-center flex-col justify-center relative mobilelg:px-15 w-full">
        <div className="absolute bg-white w-full min-h-[600px] opacity-50 z-5 inset-0"></div>

        <div className="flex lg:justify-between justify-content-center items-center z-10 tabletmd:flex-nowrap flex-wrap mobilesm:px-8 px-4">
          <div className="tabletmd:w-6/12 mobilelg:w-10/12 w-full mx-auto tabletmd:text-start text-center flex flex-col tabletmd:items-start items-center xl:justify-between lg:justify-evenly">
            <h1 className="mb-4 text-3xl mobilelg:text-4xl sm:text-[40px] font-extrabold tracking-wide leading-none text-ftvblack lg:text-5xl tabletmd:text-4xl xl:text-[45px] w-full">
              Free yourself from Administrative tasks
            </h1>
            <p className="mb-8 text-base mobilelg:text-lg font-normal text-ftvblack lg:text-xl">
              ... and boost your business growth with <br /> Fast Track, a
              guaranteed path to success.
            </p>
            <Link to="/login">
              <Button
                variant="outline"
                className="uppercase shadow-lg hover:shadow-xl"
              >
                Book a consultation
              </Button>
            </Link>
          </div>

          <div className="tabletmd:w-6/12 w-full">
            <div className="relative inline-block rounded-xl">
              <div className="w-full overflow-hidden rounded-xl">
                <img
                  alt="Team working"
                  className="w-full h-auto rounded object-cover transform scale-150"
                  src="/hero-img.jpg"
                />
              </div>

              <div
                className="absolute left-0 flex flex-col gap-4 bottom-4"
                style={{ marginLeft: "-30px" }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-ftvprimary to-ftvprimary-400 text-white font-medium px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Statistics Section */}
      <section className="bg-white flex justify-center items-center min-h-[600px] mobilelg:px-8 mobilelg:py-15 py-8">
        <div className="flex justify-between items-center mobilesm:p-8 p-4 gap-10 tabletmd:flex-nowrap flex-wrap">
          <div className="shadow-lg rounded-lg shadow-ftvgrey-500 hover:shadow-none transition all ease-in-out 300 tabletmd:w-6/12 w-full">
            <img
              className="w-full rounded-lg object-cover"
              alt="Stressed business owner"
              src="/stressed.png"
            />
          </div>

          <div className="tabletmd:w-6/12 w-full">
            <h2 className="mb-4 lg:text-4xl mobilelg:text-3xl mobilemd:text-2xl text-xl font-normal text-ftvblack">
              The National Small Business Association (NSBA) survey found
            </h2>
            <ul className="list-disc ps-10">
              <li className="mb-4 text-ftvgrey mobilelg:text-lg text-base plusjakartasans">
                82% of small business owners (including sole proprietors) worked
                over 40 hours per week.
              </li>
              <li className="mb-4 text-ftvgrey mobilelg:text-lg text-base plusjakartasans">
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

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-ftvprimary-100 via-ftvprimary-200 to-ftvoffwhite flex flex-col justify-center items-center min-h-[400px] mobilelg:py-15 mobilelg:px-8">
        <div className="min-h-100 w-full mx-auto flex justify-evenly items-center mobilesm:p-8 p-4 tabletmd:flex-nowrap flex-wrap gap-y-10">
          <div className="tabletmd:w-6/12 flex-col flex lg:justify-between justify-evenly items-start mobilelg:min-h-[550px] mobilelg:gap-0 gap-5">
            <span className="tabletmd:w-5/12 mobilelg:w-4/12 w-7/12 bg-ftvprimary uppercase text-white text-center py-3 px-5 rounded-full">
              key benefits
            </span>
            <h1 className="text-ftvblue mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
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
                  <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-[#030303] mobilelg:text-base text-sm plusjakartasans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section
        id="services"
        className="mobilelg:min-h-[300px] mobilelg:py-15 mobilelg:px-8 bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary"
      >
        <div className="xl:w-6/12 tabletmd:w-8/12 md:w-10/12 w-full flex-col flex justify-between items-start space-y-4 mobilesm:p-8 p-4">
          <span className="sm:w-4/12 mobilelg:w-5/12 w-7/12 bg-white uppercase text-ftvblue font-semibold text-center py-3 px-5 rounded-full">
            Our Services
          </span>
          <h1 className="text-white mobilelg:text-3xl mobilemd:text-2xl text-xl font-medium">
            We Provide a Wide Range Of Services That Help Businesses
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mobilelg:min-h-[300px] mobilelg:py-15 py-15 xl:px-10 lg:px-8 md:px-6 px-4 bg-ftvoffwhite flex justify-center items-center">
        <div className="flex flex-wrap justify-center xl:gap-10 gap-5 mobilelg:p-8 p-0 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="mobilelandscape:w-5/12 mobilelg:w-9/12 min-h-[300px] flex flex-col justify-center w-full tabletlg:p-8 md:p-4 mobilemd:p-8 p-4 rounded-lg bg-white space-y-3"
            >
              <h3 className="text-ftvprimary font-medium mobilelg:text-xl text-lg">
                {service.title}
              </h3>
              <ul className="list-disc ps-10">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="mb-4 text-ftvblue mobilelg:text-lg text-base plusjakartasans"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
