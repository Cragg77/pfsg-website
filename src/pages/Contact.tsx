import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calculator, Home, ArrowRight, TrendingUp } from "lucide-react";
import { sendContactEmail } from "@/lib/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: "Thank you for your message! We'll be in touch soon."
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Get in touch with our team to discuss how we can help you achieve your financial goals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-4 rounded-md mb-4 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px] rounded-md border border-gray-300 p-2"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full mb-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">0800 000 000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 mb-6">info@pfsg.co.nz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      123 Financial Street<br />
                      Auckland, New Zealand
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="border-l-4 border-l-yellow-400 hover:shadow-lg hover:border-yellow-400 transition duration-300">
            <CardContent className="p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50940.70800818054!2d174.71188354452635!3d-36.85073998510607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%20CBD%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1653465123456!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-b-lg"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Financial Tools Section - Tella Style */}
      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Start your financial journey
            </h2>
            <p className="text-lg text-gray-600">
              Use our financial tools to find out exactly what you can borrow and explore your options.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Find out your borrowing power</h3>
                  <p className="text-gray-600">See exactly what you can borrow.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Calculate your repayments</h3>
                  <p className="text-gray-600">See what your monthly payments would be.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Get in touch</h3>
                  <p className="text-gray-600">Contact us to discuss your options.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calculator Buttons */}
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Try our financial calculators</h3>
              <p className="mb-6 text-gray-600">
                Get instant estimates and see what financing options work best for you.
              </p>
              <p className="mb-6 flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                This should take about 5 minutes.
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full h-12 text-base font-medium"
                >
                  <Link to="/calculators?tab=affordability" className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calculator className="mr-3 h-5 w-5" />
                      Affordability Calculator
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="w-full h-12 text-base font-medium"
                >
                  <Link to="/calculators?tab=repayment" className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="mr-3 h-5 w-5" />
                      Repayment Calculator
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  className="w-full h-12 text-base font-medium"
                >
                  <Link to="/services#mortgages" className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Home className="mr-3 h-5 w-5" />
                      Explore Home Loans
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
