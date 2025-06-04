import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Eye, Download, ExternalLink } from "lucide-react";

export default function Disclosures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Disclosures</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Important legal and regulatory information to help you understand our services,
          how we operate, and your rights as our client.
        </p>
      </div>

      {/* Financial Services Guide */}
      <div className="mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <FileText className="h-12 w-12 text-yellow-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-bold">Financial Services Guide (FSG)</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Financial Services Guide contains important information about the financial services we provide,
                  our fees and charges, and how we handle complaints. This document helps you decide whether our
                  services are right for you and understand what you can expect from us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Our services and how we provide them</li>
                      <li>• Fee structure and payment arrangements</li>
                      <li>• Our professional qualifications</li>
                      <li>• How we manage conflicts of interest</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Your Rights:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Right to receive clear information</li>
                      <li>• Cooling-off periods where applicable</li>
                      <li>• Complaint resolution process</li>
                      <li>• Professional indemnity coverage</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download FSG (PDF)
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Online
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Policy */}
      <div className="mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <Shield className="h-12 w-12 text-yellow-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-bold">Privacy Policy</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We are committed to protecting your privacy and handling your personal information responsibly.
                  Our Privacy Policy explains how we collect, use, store, and protect your personal information
                  in accordance with the Privacy Act and other applicable privacy laws.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-blue-900">Collection</h3>
                    <p className="text-sm text-blue-700">
                      What information we collect and how we collect it from you directly or through third parties.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-green-900">Use & Storage</h3>
                    <p className="text-sm text-green-700">
                      How we use your information to provide services and how we store it securely.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2 text-purple-900">Your Rights</h3>
                    <p className="text-sm text-purple-700">
                      Your rights to access, correct, or request deletion of your personal information.
                    </p>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Read Full Privacy Policy
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Terms of Service */}
      <div className="mb-16">
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <Eye className="h-12 w-12 text-yellow-500 mt-2 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="mb-4 text-2xl font-bold">Terms of Service</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  These terms and conditions govern the relationship between you and Panda Financial Services Group.
                  By using our services, you agree to be bound by these terms. Please read them carefully as they
                  contain important information about your rights and obligations.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold mb-3 text-amber-900">Key Terms Include:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-amber-800">
                    <ul className="space-y-2">
                      <li>• Service scope and limitations</li>
                      <li>• Client responsibilities and obligations</li>
                      <li>• Fee payment terms and conditions</li>
                      <li>• Cancellation and termination policies</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Liability limitations and exclusions</li>
                      <li>• Intellectual property rights</li>
                      <li>• Dispute resolution procedures</li>
                      <li>• Governing law and jurisdiction</li>
                    </ul>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  View Complete Terms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>



      {/* Contact Information for Disclosures */}
      <div className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Need More Information?</h3>
        <p className="text-gray-600 mb-6">
          If you have questions about any of these disclosures or need additional information, please don't hesitate to contact us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:info@pfsg.co.nz">Email: info@pfsg.co.nz</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
