import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Award, Star, Mail } from "lucide-react";

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Join Our Team</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 mb-8">
          Build a rewarding career helping people achieve their financial goals. Join our growing team of
          passionate professionals who make a real difference in people's lives every day.
        </p>

      </div>

      {/* Why Work With Us */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Why Choose PFSG?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300 text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Meaningful Work</h3>
              <p className="text-gray-600 text-sm">
                Help families achieve their dreams of homeownership and financial security
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">
                Clear advancement paths with ongoing training and development opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300 text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Great Team</h3>
              <p className="text-gray-600 text-sm">
                Work alongside supportive colleagues who celebrate your success
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300 text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Recognition</h3>
              <p className="text-gray-600 text-sm">
                Performance-based rewards and recognition for outstanding achievements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Benefits & Perks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Professional Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Comprehensive onboarding and training program
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Industry certification and continuing education support
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Regular coaching and mentorship opportunities
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Conference attendance and networking events
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Work-Life Balance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Flexible working arrangements and remote work options
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Generous annual leave and personal days
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Health and wellness programs
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Team building events and social activities
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Financial Rewards</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Competitive base salary plus performance bonuses
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  KiwiSaver contributions and financial planning assistance
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Commission structures for sales roles
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Annual salary reviews and career progression increases
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Tools & Technology</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Latest technology and software platforms
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Mobile devices and home office setup support
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Access to premium research and market data
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  Comprehensive CRM and client management systems
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>



      {/* Application Process */}
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-center">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Apply Online</h3>
            <p className="text-gray-600 text-sm">
              Submit your application and CV through our online portal
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Initial Review</h3>
            <p className="text-gray-600 text-sm">
              Our HR team reviews your application within 48 hours
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Interview</h3>
            <p className="text-gray-600 text-sm">
              Meet with our team to discuss your experience and goals
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-yellow-600 font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold mb-2">Welcome</h3>
            <p className="text-gray-600 text-sm">
              Join our team and start your comprehensive onboarding
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Career Journey?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Don't see the perfect role? We're always looking for talented individuals to join our team.
          Send us your CV and let's discuss how you can contribute to our mission.
        </p>
        <div className="flex justify-center items-center gap-2 text-lg">
          <Mail className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">Email: </span>
          <a
            href="mailto:info@pfsg.co.nz"
            className="text-yellow-600 hover:text-yellow-700 underline font-medium"
          >
            info@pfsg.co.nz
          </a>
        </div>
      </div>
    </div>
  );
}
