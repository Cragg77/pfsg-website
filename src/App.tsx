import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Commercial from "./pages/Commercial";
import Calculators from "./pages/Calculators";
import Contact from "./pages/Contact";
import Disclosures from "./pages/Disclosures";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import HomeLoans from "./pages/HomeLoans";
import KiwiSaver from "./pages/KiwiSaver";
import PropertyFinance from "./pages/PropertyFinance";
import Insurance from "./pages/Insurance";

import "./components/layout/navigation.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/home-loans" element={<HomeLoans />} />
          <Route path="/services/kiwisaver" element={<KiwiSaver />} />
          <Route path="/services/property-finance" element={<PropertyFinance />} />
          <Route path="/services/insurance" element={<Insurance />} />

          <Route path="/commercial" element={<Commercial />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclosures" element={<Disclosures />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
