import React from "react";
import { Link } from "react-router-dom";

const SEO = () => (
  <div className="container mx-auto max-w-3xl py-12 px-4">
    <h1 className="text-4xl font-bold mb-6">SEO Strategy: Powered for Results</h1>
    <p className="mb-4">
      Our comprehensive SEO strategy is designed to deliver measurable results for New Zealand businesses. Inspired by top digital agencies, our process combines technical excellence with powerful, conversion-driven content.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-3">Pillar & Cluster Content Model</h2>
    <p className="mb-4">
      We organise site content around core pillar pages for key services, linking to more focused cluster pages. This builds topical authority and maximises Google rankings for core search terms such as <b>Financial Services NZ</b>, <b>Mortgage Calculators</b>, and <b>Commercial Lending</b>.
    </p>
    <h2 className="text-2xl font-bold mt-8 mb-3">Conversion-Oriented Content</h2>
    <ul className="list-disc ml-8 mb-4">
      <li>Keyword-rich H1 and H2 headings on every service, calculator, and landing page.</li>
      <li>Benefit-driven copy focused on customer needs and NZ market advantages.</li>
      <li>Clear calls-to-action such as "Book a Free Chat" and "Apply Online" on all pages.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-3">Trust & Authority Signals</h2>
    <ul className="list-disc ml-8 mb-4">
      <li>Local NZ focus – our brand is 100% New Zealand-owned, speaking to Kiwi businesses.</li>
      <li>Client testimonials and real results are featured site-wide for authenticity.</li>
      <li>Logos of partner businesses enhance credibility.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-3">Technical SEO & Schema</h2>
    <ul className="list-disc ml-8 mb-4">
      <li>Dynamic meta titles and descriptions for every page.</li>
      <li>Open Graph/Twitter Card tags power click-worthy social shares.</li>
      <li>JSON-LD schema for Local Business, Services, Reviews, FAQ, and BreadcrumbList.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-3">Analytics & Performance</h2>
    <ul className="list-disc ml-8 mb-4">
      <li>Google Analytics conversion tracking on all forms, phone, and CTA buttons.</li>
      <li>Google Tag Manager for marketing agility.</li>
      <li>Images are optimised for fast load speed and SEO.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-3">FAQs and Blog</h2>
    <ul className="list-disc ml-8 mb-4">
      <li>FAQ schema for key customer questions boosts visibility for voice and featured snippet search.</li>
      <li>Regular, keyword-optimised blog articles drive fresh organic traffic and internal links.</li>
    </ul>
    <h2 className="text-2xl font-bold mt-8 mb-3">Ready to Grow?</h2>
    <p className="mb-4">We offer a complimentary strategy call and SEO audit – book yours today to outpace your market.</p>
    <Link to="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold text-black transition">Book My Free SEO Audit</Link>
  </div>
);

export default SEO;
