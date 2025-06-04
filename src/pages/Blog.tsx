import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Interest Rates in New Zealand",
    excerpt: "A comprehensive guide to how interest rates work in NZ and how they affect your mortgage payments.",
    date: "15 December 2024",
    readTime: "8 minute read",
    author: "Panda Finance Team",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Home Loans"
  },
  {
    id: "2",
    title: "First Home Buyer's Guide to KiwiSaver",
    excerpt: "Learn how to maximize your KiwiSaver benefits when purchasing your first home in New Zealand.",
    date: "10 December 2024",
    readTime: "12 minute read",
    author: "Panda Finance Team",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "First Home"
  },
  {
    id: "3",
    title: "Property Investment Strategies for 2025",
    excerpt: "Explore the latest property investment opportunities and strategies for the New Zealand market.",
    date: "5 December 2024",
    readTime: "15 minute read",
    author: "Panda Finance Team",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Investment"
  },
  {
    id: "4",
    title: "Refinancing Your Mortgage: When and How",
    excerpt: "Discover the best times to refinance your mortgage and how to navigate the process successfully.",
    date: "28 November 2024",
    readTime: "10 minute read",
    author: "Panda Finance Team",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Refinancing"
  }
];

const categories = ["All", "Home Loans", "First Home", "Investment", "Refinancing"];

const faqs: FAQ[] = [
  {
    question: "What types of mortgages do you offer?",
    answer: "We offer a wide range of mortgage options including first home buyer loans, investment property loans, refinancing, and construction loans. Our team will work with you to find the best solution for your specific needs."
  },
  {
    question: "How long does the mortgage application process take?",
    answer: "The timeline can vary depending on your situation, but typically the process takes 2-4 weeks from application to settlement. We'll keep you informed every step of the way and work to expedite the process where possible."
  },
  {
    question: "Do you charge fees for your services?",
    answer: "Our mortgage broking services are typically free to you, as we're paid by the lenders when your loan settles. We'll always be transparent about any fees upfront and explain how we're compensated."
  },
  {
    question: "Can you help with pre-approval?",
    answer: "Absolutely! Pre-approval is a great first step in your property journey. It gives you confidence when making offers and helps you understand your borrowing capacity. We can often get pre-approval within 24-48 hours."
  },
  {
    question: "What documents do I need to apply for a mortgage?",
    answer: "You'll typically need proof of income (payslips, tax returns), bank statements, identification, and details about the property you're purchasing. We'll provide you with a complete checklist tailored to your situation."
  },
  {
    question: "Do you work with all lenders?",
    answer: "We work with a wide panel of lenders including major banks, credit unions, and specialist lenders. This allows us to find competitive rates and terms that suit your specific circumstances."
  },
  {
    question: "Can you help if I have bad credit?",
    answer: "Yes, we have experience working with clients who have credit challenges. We can help you understand your options and work with specialist lenders who may be able to assist with your situation."
  },
  {
    question: "What is KiwiSaver and how can it help with buying a home?",
    answer: "KiwiSaver is New Zealand's retirement savings scheme. First home buyers can use their KiwiSaver funds for a deposit and may be eligible for the First Home Grant. We can help you maximize these benefits."
  }
];

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-yellow-400 transition-all duration-300 border border-gray-100 border-l-4 border-l-yellow-400">
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <span>{post.date}</span>
        </div>
      </div>
    </article>
  );
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-yellow-400 transition duration-300 border-l-4 border-l-yellow-400">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-lg text-gray-900">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Panda Finance Blog
            </h1>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Stay informed with the latest insights, market updates, and expert advice on home loans, property investment, and financial planning in New Zealand.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">

          {/* Featured Blog Posts */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-white rounded-xl p-8 mb-16 shadow-sm border border-yellow-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest financial insights, market updates, and expert tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none"
                />
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our mortgage and financial services. Can't find what you're looking for?
                <a href="/contact" className="text-yellow-600 hover:text-yellow-700 ml-1 font-medium">Get in touch with us</a>.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
