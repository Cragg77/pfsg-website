import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import PandaLogo from "./PandaLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo and Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <PandaLogo variant="light" size="md" showText={true} />
            </div>
            <p className="mb-6 text-gray-300">
              Expert financial advice and exceptional customer service for all your financial needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-yellow-400">Services</Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-yellow-400">Commercial</Link>
              </li>
              <li>
                <Link to="/calculators" className="text-gray-300 hover:text-yellow-400">Calculators</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#mortgages" className="text-gray-300 hover:text-yellow-400">Mortgages</Link>
              </li>
              <li>
                <Link to="/services#insurance" className="text-gray-300 hover:text-yellow-400">Insurance</Link>
              </li>
              <li>
                <Link to="/services#kiwisaver" className="text-gray-300 hover:text-yellow-400">KiwiSaver</Link>
              </li>
              <li>
                <Link to="/services#property-finance" className="text-gray-300 hover:text-yellow-400">Property Finance</Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-300 hover:text-yellow-400">Commercial Funding</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:0800000000" className="text-gray-300 hover:text-yellow-400">0800 000 000</a>
              </li>
              <li className="flex items-center gap-2 mb-6">
                <Mail size={18} />
                <a href="mailto:info@pfsg.co.nz" className="text-gray-300 hover:text-yellow-400">info@pfsg.co.nz</a>
              </li>
              <li className="mb-8">
                <Link to="/contact" className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500 transition-all duration-300 font-semibold">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-400">
            © {currentYear} Panda Finance. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/disclosures" className="text-gray-400 hover:text-yellow-400">Privacy Policy</Link>
            <Link to="/disclosures" className="text-gray-400 hover:text-yellow-400">Terms & Conditions</Link>
            <Link to="/disclosures" className="text-gray-400 hover:text-yellow-400">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
