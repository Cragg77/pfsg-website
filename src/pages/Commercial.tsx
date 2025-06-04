import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Commercial() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Commercial Funding Solutions</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Expert business funding and commercial mortgage solutions for New Zealand businesses.
        </p>
      </div>

      {/* Source Funding Connection */}
      <div className="mb-16 rounded-lg bg-gray-50 p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">In Partnership with Source Funding</h2>
            <p className="mb-4 text-gray-700">
              Panda Financial Services Group works in partnership with Source Funding to provide comprehensive
              commercial funding solutions for businesses of all sizes.
            </p>
            <p className="mb-6 text-gray-700">
              Source Funding is a team of business funding experts who have one thing in mind: to make a difference.
              They help business owners – from start-ups to more established companies – simply and quickly access
              the money they need to move forward and see their companies thrive.
            </p>
            <p className="mb-6 text-gray-700">
              Through our partnership with Source Funding, we can offer our clients access to a wider range of
              commercial funding options and expertise in business finance.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => window.open("https://sourcefunding.co.nz/", "_blank")}
              >
                Visit Source Funding <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/4051446359/2208079327.svg"
              alt="Source Funding Logo"
              className="max-h-40"
            />
          </div>
        </div>
      </div>

      {/* Commercial Services */}
      <div>
        <h2 className="mb-8 text-2xl font-bold text-center">Our Commercial Funding Solutions</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Service 1 */}
          <Card className="h-full flex flex-col hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="mb-4">
                <img
                  src="https://ext.same-assets.com/1421499075/1299087278.jpeg"
                  alt="Asset and Machinery Funding"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold">Asset and Machinery Funding</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  Secure funding for business assets without using personal property as security. Fund 100% of your asset's purchase price while preserving working capital.
                </p>
                <Button asChild className="w-full mt-auto">
                  <a href="https://sourcefunding.co.nz/services/" target="_blank" rel="noopener noreferrer">Get Asset Funding</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service 2 */}
          <Card className="h-full flex flex-col hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="mb-4">
                <img
                  src="https://ext.same-assets.com/1421499075/1504001496.jpeg"
                  alt="Working Capital Finance"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold">Working Capital Finance</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  Free up working capital for rapidly growing businesses. Manage payment terms and trade cashflow constraints with specialized financing solutions.
                </p>
                <Button asChild className="w-full mt-auto">
                  <a href="https://sourcefunding.co.nz/services/" target="_blank" rel="noopener noreferrer">Improve Cashflow</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service 3 */}
          <Card className="h-full flex flex-col hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="mb-4">
                <img
                  src="https://ext.same-assets.com/1421499075/734541367.jpeg"
                  alt="Acquisitions"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold">Acquisitions</h3>
                <p className="mb-4 text-gray-600 flex-grow">
                  Buying an existing business? Get customized financial solutions that work with your accountant and stakeholders to make it happen.
                </p>
                <Button asChild className="w-full mt-auto">
                  <a href="https://sourcefunding.co.nz/services/" target="_blank" rel="noopener noreferrer">Buy a Business</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-black p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Ready to Grow Your Business?</h2>
            <p className="mb-6">
              Our team of commercial funding experts is ready to help you find the right financial solution
              for your business. Contact us today to schedule a consultation.
            </p>
            <Button
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Why Choose Us?</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> Access to a wide range of lenders
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> Experienced commercial funding specialists
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> Tailored solutions for your business needs
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> Streamlined application process
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-yellow-400">✓</span> Ongoing support throughout the funding journey
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
