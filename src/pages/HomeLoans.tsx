import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Calculator, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeLoans() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Home Loans</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Whether you're a first-time buyer, looking to refinance, or investing in property,
          our expert mortgage advisors will help you find the right loan with competitive rates and terms.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Home Loans"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">First Home Buyer Loans</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Get on the property ladder with our first home buyer specialist services. We'll help you navigate
              government schemes and find the best rates for your first home purchase.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>First Home Grant assistance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>KiwiSaver withdrawal guidance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Low deposit options</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Calculator className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Refinancing Options</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Save money and improve your loan terms with our refinancing services. We'll review your
              current mortgage and find better options to suit your changing needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Rate comparison across lenders</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Debt consolidation options</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Cash-out refinancing</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Investment Property Loans</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Build your property portfolio with our investment loan specialists. We understand the unique
              requirements of property investors and can structure loans to maximize your returns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Interest-only payment options</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Portfolio lending strategies</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Tax optimization advice</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Construction Loans</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Building your dream home? Our construction loan specialists will help you secure progressive
              funding that releases as your build progresses.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Progressive payment structures</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Land and build packages</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Renovation financing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Home Loan Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Expert Advice</h3>
            <p className="text-gray-600">Professional mortgage advisors with years of experience</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Competitive Rates</h3>
            <p className="text-gray-600">Access to exclusive rates from multiple lenders</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">End-to-End Service</h3>
            <p className="text-gray-600">From application to settlement, we're with you every step</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-black text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-gray-300">
          Contact us today for a free consultation and let us help you find the perfect home loan solution.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
