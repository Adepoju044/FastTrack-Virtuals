import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-ftvsecondary via-ftvsecondary-400 to-ftvprimary antialiased">
      <div className="max-w-screen-xl mx-auto px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/20">
          <div className="md:col-span-1 space-y-4">
            <img
              className="w-8/12"
              alt="FastTrack Logo"
              src="/fasttrack-logo-footer.svg"
            />
            <p className="text-white/70 text-sm plusjakartasans leading-relaxed">
              Connecting skilled African professionals with businesses across
              the US, UK &amp; Canada.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/innopowerafrica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-xs font-bold transition-colors"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/innopowerafrica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-xs font-bold transition-colors"
              >
                ig
              </a>
              <a
                href="https://www.facebook.com/share/1KxtuJ7UXd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white text-xs font-bold transition-colors"
              >
                fb
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold uppercase text-sm tracking-widest">
              Company
            </h3>
            <ul className="space-y-2 plusjakartasans">
              <li>
                <Link
                  to="/about-us"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/founder"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Our Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-help"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Who We Help
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold uppercase text-sm tracking-widest">
              Services
            </h3>
            <ul className="space-y-2 plusjakartasans">
              <li>
                <Link
                  to="/services"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold uppercase text-sm tracking-widest">
              Contact
            </h3>
            <ul className="space-y-2 plusjakartasans">
              <li>
                <a
                  href="mailto:info@fasttrackvirtual.com"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@fasttrackvirtual.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18332139993"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  +1 (833) 213-9993
                </a>
              </li>
              <li className="text-white/70 text-sm">Mon – Fri, 9am – 6pm</li>
              <li className="text-white/70 text-sm">EST / GMT / CST</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm plusjakartasans">
            © {new Date().getFullYear()} FastTrack Virtuals. All rights
            reserved.
          </p>
          <div className="flex gap-5 plusjakartasans">
            <a
              href="#"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center pt-6 gap-2">
          <span className="text-white/50 text-xs plusjakartasans">
            Powered by
          </span>
          <img
            alt="INNOPOWER"
            className="h-5 object-contain"
            src="/partners/innopower.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
