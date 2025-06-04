import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">About Panda Financial Services Group</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Your trusted partner in financial services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* About Us Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-gray-700">
            Panda Financial Services Group was founded with a simple mission: to provide expert financial
            advice and exceptional service to help our clients achieve their financial goals.
          </p>
          <p className="text-gray-700">
            Our team of experienced professionals is dedicated to understanding your unique financial
            situation and providing tailored solutions that meet your specific needs.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Our Approach</h2>
          <p className="text-gray-700">
            We believe in a client-centered approach to financial services. We take the time to listen
            to your needs, understand your goals, and develop personalized strategies to help you succeed.
          </p>
          <p className="text-gray-700">
            Our commitment to excellence means we're always striving to provide the best possible service
            and advice to our clients.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Leadership</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="h-full flex flex-col hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold">John Smith</h3>
                <p className="text-sm text-gray-500">Chief Executive Officer</p>
                <p className="mt-2 text-sm flex-grow">
                  With over 20 years of experience in financial services, John leads our team with vision and expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full flex flex-col hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold">Jane Doe</h3>
                <p className="text-sm text-gray-500">Chief Financial Officer</p>
                <p className="mt-2 text-sm flex-grow">
                  Jane brings a wealth of knowledge in financial planning and strategy to help our clients succeed.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <ul className="ml-6 mt-4 list-disc space-y-2">
              <li className="text-gray-700">
                <span className="font-semibold">Integrity:</span> We maintain the highest ethical standards in all our dealings.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Excellence:</span> We strive for excellence in everything we do.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Client Focus:</span> Our clients' needs are at the center of all our decisions.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Innovation:</span> We embrace new ideas and technologies to better serve our clients.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-16 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Contact us today to schedule a consultation and learn more about how we can help you achieve your financial goals.
        </p>
        <Link
          to="/contact"
          className="inline-block rounded bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-500"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
