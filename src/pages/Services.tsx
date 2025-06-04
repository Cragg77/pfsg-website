import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Comprehensive financial solutions tailored to your unique needs.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Home Loans */}
        <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300" id="mortgages">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Home Loans"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h2 className="mb-4 text-2xl font-bold">Home Loans</h2>
            <p className="mb-4 text-gray-700">
              Whether you're a first-time buyer, looking to refinance, or investing in property, our expert
              mortgage advisors will help you find the right loan with competitive rates and terms.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> First Home Buyer Loans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Refinancing Options
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Investment Property Loans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Construction Loans
              </li>
            </ul>
              <Button className="w-full mt-auto" asChild>
                <Link to="/services/home-loans">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* KiwiSaver */}
        <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300" id="kiwisaver">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="KiwiSaver"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h2 className="mb-4 text-2xl font-bold">KiwiSaver</h2>
            <p className="mb-4 text-gray-700">
              Maximize your KiwiSaver benefits with our expert advice and management services. We'll help
              you choose the right fund and make informed decisions about your retirement savings.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Fund Selection Advice
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Contribution Optimization
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> First Home Withdrawal Assistance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Retirement Planning
              </li>
            </ul>
              <Button className="w-full mt-auto" asChild>
                <Link to="/services/kiwisaver">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Property Finance & Development */}
        <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300" id="property-finance">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Property Finance & Development"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h2 className="mb-4 text-2xl font-bold">Property Finance & Development</h2>
            <p className="mb-4 text-gray-700">
              Specialized financing solutions for property development projects and investment opportunities.
              From land acquisition to construction funding, we help turn your property vision into reality.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Development Finance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Construction Loans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Investment Property Finance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Land Acquisition Funding
              </li>
            </ul>
              <Button className="w-full mt-auto" asChild>
                <Link to="/services/property-finance">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Insurance */}
        <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300" id="insurance">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Insurance"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h2 className="mb-4 text-2xl font-bold">Insurance</h2>
            <p className="mb-4 text-gray-700">
              Protect yourself and your loved ones with comprehensive insurance coverage. We offer a range
              of insurance products to help you manage risk and secure your financial future.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Life Insurance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Health Insurance
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Income Protection
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Mortgage Protection
              </li>
            </ul>
              <Button className="w-full mt-auto" asChild>
                <Link to="/services/insurance">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Commercial Funding */}
        <Card className="h-full flex flex-col overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300" id="commercial">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Commercial Funding"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 pt-0 flex flex-col flex-grow">
              <h2 className="mb-4 text-2xl font-bold">Commercial Funding</h2>
            <p className="mb-4 text-gray-700">
              Grow your business with our commercial funding solutions. We work with a range of lenders
              to help you secure the financing you need for business expansion, equipment purchase, and more.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Business Loans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Commercial Property Loans
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Equipment Financing
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-500">✓</span> Cash Flow Solutions
              </li>
            </ul>
              <Button className="w-full mt-auto" asChild>
                <Link to="/commercial">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gray-100 p-8 text-center rounded-lg">
        <h2 className="mb-4 text-2xl font-bold">Need Help Choosing the Right Service?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
          Our expert advisors are here to help you navigate your options and find the solutions that best
          meet your needs. Contact us today for a free consultation.
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
