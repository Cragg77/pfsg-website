import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building, Hammer, TrendingUp, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyFinance() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Property Finance & Development</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Specialized financing solutions for property development projects and investment opportunities.
          From land acquisition to construction funding, we help turn your property vision into reality.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Property Finance & Development"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Building className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Development Finance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Secure funding for your property development projects with our specialized development finance solutions.
              We understand the unique needs of property developers and investors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Residential development funding</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Commercial development loans</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Mixed-use development finance</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Hammer className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Construction Loans</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Progressive construction financing that releases funds as your project milestones are achieved.
              Flexible terms to match your construction timeline and cash flow needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Progressive payment structures</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Interest-only during construction</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Quantity surveyor reports</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Investment Property Finance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Build and expand your property investment portfolio with our specialized investment property financing.
              Competitive rates and flexible structures for experienced investors.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Portfolio lending solutions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Cross-collateral strategies</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Commercial property investments</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Land Acquisition Funding</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Secure prime development sites with our land acquisition financing. Fast approval processes
              to help you capitalize on time-sensitive opportunities.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Fast settlement capability</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Subject to consent conditions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Subdivision financing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Development Process */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Development Finance Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">1</span>
            </div>
            <h3 className="font-bold mb-2">Initial Consultation</h3>
            <p className="text-gray-600">Assess your project and financing needs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">2</span>
            </div>
            <h3 className="font-bold mb-2">Project Analysis</h3>
            <p className="text-gray-600">Review feasibility and structure optimal funding</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">3</span>
            </div>
            <h3 className="font-bold mb-2">Lender Matching</h3>
            <p className="text-gray-600">Connect with specialist development lenders</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">4</span>
            </div>
            <h3 className="font-bold mb-2">Ongoing Support</h3>
            <p className="text-gray-600">Monitor progress and manage funding releases</p>
          </div>
        </div>
      </div>

      {/* Finance Types */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Types of Property Finance We Arrange</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Building className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Residential Development</h3>
            <p className="text-gray-600 text-sm">Houses, townhouses, and apartment developments</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Hammer className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Commercial Projects</h3>
            <p className="text-gray-600 text-sm">Office buildings, retail centers, and warehouses</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Mixed-Use Developments</h3>
            <p className="text-gray-600 text-sm">Combined residential and commercial projects</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Land Banking</h3>
            <p className="text-gray-600 text-sm">Strategic land acquisition for future development</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Building className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Subdivision Finance</h3>
            <p className="text-gray-600 text-sm">Infrastructure and lot development funding</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Hammer className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Renovation Projects</h3>
            <p className="text-gray-600 text-sm">Major renovation and refurbishment financing</p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-black text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Development Project?</h2>
        <p className="mb-6 text-gray-300">
          Let our property finance specialists help you secure the funding you need to bring your vision to life.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
