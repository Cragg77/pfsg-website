// Instructions: Replace the entire calculator page with a "Coming Soon" design that maintains the yellow branding

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Clock, Bell, TrendingUp } from "lucide-react";

export default function Calculators() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Financial Calculators</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Powerful tools to help you make informed financial decisions and plan for your future.
        </p>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-l-4 border-l-yellow-400 mb-12">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-12 h-12 text-black" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you comprehensive financial calculators that will help you make informed decisions about your loans, mortgages, and investments. Stay tuned!
            </p>
            <div className="flex justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                <Link to="/contact">
                  Contact Us for Help
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview of Upcoming Calculators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What's Coming</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-l-4 border-l-yellow-400 opacity-75">
              <Calculator className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Mortgage Calculator</h4>
              <p className="text-gray-600 text-sm">Calculate your monthly mortgage payments with different loan amounts and interest rates</p>
            </Card>
            <Card className="p-6 text-center border-l-4 border-l-yellow-400 opacity-75">
              <TrendingUp className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Affordability Calculator</h4>
              <p className="text-gray-600 text-sm">Discover how much you can borrow based on your income and expenses</p>
            </Card>
            <Card className="p-6 text-center border-l-4 border-l-yellow-400 opacity-75">
              <Calculator className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Repayment Calculator</h4>
              <p className="text-gray-600 text-sm">Plan your loan repayments and see how different terms affect your payments</p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            While our calculators are being developed, our expert advisors are ready to help you with personalized calculations and financial planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
              <Link to="/contact">
                Book a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
