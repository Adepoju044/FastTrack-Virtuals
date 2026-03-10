import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary antialiased">
      <div className="mx-auto mobilesm:p-8 p-4">
        <div className="flex justify-between items-center py-8 mobilelg:flex-nowrap flex-wrap gap-y-10">
          <div className="tabletmd:w-7/12 mobilelg:w-5/12 w-full">
            <img
              className="tabletmd:w-3/12 w-5/12"
              alt="FastTrack Logo"
              src="/fasttrack-logo-footer.svg"
            />
          </div>

          <div className="tabletmd:w-5/12 mobilelg:w-7/12 w-full flex justify-content-between items-center tabletmd:gap-0 gap-10 mobilelg:flex-nowrap flex-wrap">
            <div className="mobilelg:w-6/12 w-full space-y-3 text-white">
              <h1>Quicklinks</h1>
              <div className="space-x-4 plusjakartasans">
                <Link to="/#services" className="text-sm hover:underline">
                  Features
                </Link>
                <Link to="/#services" className="text-sm hover:underline">
                  Services
                </Link>
                <Link to="/about-us" className="text-sm hover:underline">
                  Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
            <ul className="flex flex-wrap items-center gap-4 text-sm text-white xl:justify-center plusjakartasans">
              <li className="text-sm">
                © {new Date().getFullYear()}{" "}
                <Link to="/" className="hover:underline">
                  Fasttrack Virtuals
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center py-6 gap-2">
            <span className="text-white text-sm plusjakartasans">
              Powered by
            </span>
            <img
              alt="INNOPOWER"
              className="h-6 object-contain"
              src="/partners/innopower.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
