import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/layout/Hero";
import { BarChart3, Home as HomeIcon, BriefcaseBusiness, Calculator, PhoneCall, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <Hero
        title="Expert Financial Services for All Your Needs"
        subtitle="At Panda Finance, we're dedicated to helping you achieve your financial goals with tailored solutions and exceptional service."
        primaryButtonText="Book a Chat"
        primaryButtonLink="/contact"
        secondaryButtonText="Apply Online"
        secondaryButtonLink="https://pandamortgages.gettrail.com/Account/Register/70455c6f-99ba-4d3f-83c0-cb5ef6c230ee"
      />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We provide comprehensive financial services to help you navigate life's
              financial journey with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Service Card 1 */}
            <Card className="hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Home Loans</CardTitle>
                <HomeIcon className="h-6 w-6 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert mortgage advice to help you secure the right home loan with the best rates and terms.
                </p>
                <Button variant="link" className="mt-4 p-0 text-yellow-600 hover:text-yellow-700" asChild>
                  <Link to="/services/home-loans">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Business Funding</CardTitle>
                <BriefcaseBusiness className="h-6 w-6 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Commercial finance solutions to help your business grow, with tailored options for any industry.
                </p>
                <Button variant="link" className="mt-4 p-0 text-yellow-600 hover:text-yellow-700" asChild>
                  <Link to="/commercial">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Property Finance & Development</CardTitle>
                <BarChart3 className="h-6 w-6 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized financing solutions for property development projects and investment opportunities.
                </p>
                <Button variant="link" className="mt-4 p-0 text-yellow-600 hover:text-yellow-700" asChild>
                  <Link to="/services/property-finance">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Service Card 4 */}
            <Card className="hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">Calculators</CardTitle>
                <Calculator className="h-6 w-6 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Useful tools to help you plan your finances, calculate loan repayments, and more.
                </p>
                <Button variant="link" className="mt-4 p-0 text-yellow-600 hover:text-yellow-700" asChild>
                  <Link to="/calculators">
                    Try Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Take the Next Step?
              </h2>
              <p className="text-gray-300">
                Let our experts guide you through the financial landscape. We're here to help you achieve your goals with tailored solutions and exceptional service.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
              >
                <Link to="/calculators">
                  Try Our Calculators
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="bg-white border-t-4 border-t-yellow-400 hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-7 w-7 fill-current drop-shadow-sm"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "Panda Financial made the home loan process so easy and got me into my first home without any major hurdles."
                </p>
                <p className="text-center font-semibold">
                  Sarah Johnson
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white border-t-4 border-t-yellow-400 hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-7 w-7 fill-current drop-shadow-sm"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "The team at Panda Financial went above and beyond to help me secure funding for my business. Highly recommended!"
                </p>
                <p className="text-center font-semibold">
                  Michael Brown
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white border-t-4 border-t-yellow-400 hover:shadow-lg transition duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-7 w-7 fill-current drop-shadow-sm"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-center italic text-gray-600">
                  "Their financial advice helped me plan for retirement with confidence. The team is professional and genuinely cares about their clients."
                </p>
                <p className="text-center font-semibold">
                  Emma Wilson
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
