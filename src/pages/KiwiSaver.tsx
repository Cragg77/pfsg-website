import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PiggyBank, TrendingUp, Shield, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function KiwiSaver() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">KiwiSaver</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Maximize your KiwiSaver benefits with our expert advice and management services.
          We'll help you choose the right fund and make informed decisions about your retirement savings.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="KiwiSaver"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Fund Selection Advice</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Choose the right KiwiSaver fund based on your age, risk tolerance, and financial goals.
              We'll analyze different fund options to maximize your long-term returns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Risk profile assessment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Fund performance analysis</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Fee comparison across providers</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <PiggyBank className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Contribution Optimization</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Maximize your KiwiSaver contributions to get the most from government and employer contributions.
              We'll help you optimize your contribution strategy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Government contribution maximization</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Employer matching strategies</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Voluntary contribution planning</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">First Home Withdrawal</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Access your KiwiSaver funds for your first home purchase. We'll guide you through the
              withdrawal process and help you understand the requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Eligibility assessment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Withdrawal application assistance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>HomeStart Grant guidance</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg transition duration-300">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-bold">Retirement Planning</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Plan for a comfortable retirement with comprehensive KiwiSaver strategy. We'll project
              your retirement income and suggest ways to improve your financial position.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Retirement income projections</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Withdrawal strategy planning</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Additional savings recommendations</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* KiwiSaver Benefits */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">KiwiSaver Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <PiggyBank className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Government Contributions</h3>
            <p className="text-gray-600">Up to $521 per year in government contributions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">Employer Matching</h3>
            <p className="text-gray-600">Most employers contribute 3% of your salary</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-black" />
            </div>
            <h3 className="font-bold mb-2">First Home Purchase</h3>
            <p className="text-gray-600">Access funds for your first home deposit</p>
          </div>
        </div>
      </div>

      {/* Fund Types */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">KiwiSaver Fund Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center p-6 border-l-4 border-l-green-400">
            <h3 className="font-bold mb-2">Conservative</h3>
            <p className="text-sm text-gray-600">Lower risk, stable returns</p>
            <p className="text-xs mt-2">15-25% growth assets</p>
          </Card>
          <Card className="text-center p-6 border-l-4 border-l-blue-400">
            <h3 className="font-bold mb-2">Moderate</h3>
            <p className="text-sm text-gray-600">Balanced risk and return</p>
            <p className="text-xs mt-2">25-35% growth assets</p>
          </Card>
          <Card className="text-center p-6 border-l-4 border-l-orange-400">
            <h3 className="font-bold mb-2">Balanced</h3>
            <p className="text-sm text-gray-600">Medium risk, good returns</p>
            <p className="text-xs mt-2">35-55% growth assets</p>
          </Card>
          <Card className="text-center p-6 border-l-4 border-l-red-400">
            <h3 className="font-bold mb-2">Growth</h3>
            <p className="text-sm text-gray-600">Higher risk, higher returns</p>
            <p className="text-xs mt-2">55-75% growth assets</p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-black text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Optimize Your KiwiSaver Today</h2>
        <p className="mb-6 text-gray-300">
          Get expert advice on your KiwiSaver strategy and maximize your retirement savings potential.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
