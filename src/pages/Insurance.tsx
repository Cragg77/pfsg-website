import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Heart, Home, Briefcase, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Insurance() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Insurance Services</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Protect yourself and your loved ones with comprehensive insurance coverage. We offer a range
          of insurance products to help you manage risk and secure your financial future.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Insurance"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Life Insurance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Provide financial security for your family with comprehensive life insurance coverage.
              Ensure your loved ones are protected in case of the unexpected.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Term life insurance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Whole life insurance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Family income benefit</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Health Insurance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Access quality healthcare when you need it most with comprehensive health insurance coverage.
              Protect against unexpected medical costs and ensure peace of mind.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Private hospital cover</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Specialist treatment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Diagnostic tests and procedures</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Income Protection</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Protect your income and lifestyle with comprehensive income protection insurance.
              Receive monthly payments if you're unable to work due to illness or injury.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Up to 75% income replacement</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Comprehensive medical coverage</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Partial and total disability benefits</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Mortgage Protection</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Secure your family home with mortgage protection insurance. Ensure your mortgage payments
              are covered if you're unable to work or in case of serious illness.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Mortgage payment coverage</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Redundancy protection</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Critical illness cover</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Additional Services */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Insurance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <User className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Trauma Insurance</h3>
            <p className="text-gray-600 text-sm">Lump sum payment for critical illness diagnosis</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Total Permanent Disability</h3>
            <p className="text-gray-600 text-sm">Financial support for permanent disability</p>
          </Card>
          <Card className="p-6 text-center border-l-4 border-l-yellow-400">
            <Briefcase className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Business Insurance</h3>
            <p className="text-gray-600 text-sm">Protect your business and key personnel</p>
          </Card>
        </div>
      </div>

      {/* Why Insurance Matters */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Why Insurance Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Financial Protection</h3>
            <p className="text-gray-600">Protect your family's financial future against unexpected events</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Peace of Mind</h3>
            <p className="text-gray-600">Sleep better knowing you and your family are protected</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Lifestyle Maintenance</h3>
            <p className="text-gray-600">Maintain your standard of living during difficult times</p>
          </div>
        </div>
      </div>

      {/* Insurance Needs Calculator */}
      <div className="bg-yellow-50 rounded-lg p-8 mb-16 border-l-4 border-l-yellow-400">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure How Much Coverage You Need?</h2>
          <p className="text-gray-700 mb-6">
            Our insurance needs assessment will help you determine the right level of coverage for your unique situation.
          </p>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Calculate Your Insurance Needs
          </Button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-black text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Protect What Matters Most</h2>
        <p className="mb-6 text-gray-300">
          Let our insurance specialists help you find the right coverage to protect your family and your future.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
