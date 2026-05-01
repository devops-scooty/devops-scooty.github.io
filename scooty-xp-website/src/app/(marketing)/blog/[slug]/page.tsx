import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Share2 } from "lucide-react";

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
export function generateStaticParams() {
  return [
    { slug: "scooty-xp-launches-in-lagos" },
    { slug: "top-5-restaurants-victoria-island" },
    { slug: "how-to-become-a-top-earning-rider" },
  ];
}
// Removed the unused `params` argument to fix the linting error
export default function BlogPostPage() {
  // In production, fetch the post data using `params.slug`
  // Mock data for display:
  const post = {
    title: "Scooty XP Officially Launches in Lagos to Transform Local Delivery",
    date: "May 10, 2026",
    category: "Company News",
    author: "Scooty XP Team",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
  };

  return (
    <>
      <Header />
      <main className="grow pt-24 pb-20 bg-white">
        
        {/* Article Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-orange-500 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 text-sm mb-6">
            <span className="bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                SX
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <TwitterIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <FacebookIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="w-full aspect-21/9 bg-gray-100 rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.imageUrl} alt="Article Feature" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body (Mocked Content) */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <p className="lead text-xl text-gray-600 mb-8">
            We are thrilled to announce our official launch in Lagos, bringing lightning-fast delivery to the heart of Nigeria&apos;s commercial capital. Starting today, residents across Victoria Island, Lekki, and Ikoyi can use the Scooty XP app to order exactly what they need, exactly when they need it.
          </p>
          
          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Why Lagos?</h2>
          <p className="text-gray-700 mb-6">
            Lagos is a city of incredible energy, but it&apos;s also a city where time is precious. We realized that local businesses were struggling to reach their customers efficiently due to logistical bottlenecks. Scooty XP was built to solve this exact problem, creating a hyper-local network that benefits everyone.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">What to Expect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Speed:</strong> Average delivery times under 45 minutes.</li>
            <li><strong>Variety:</strong> Access to hundreds of local supermarkets, pharmacies, and restaurants.</li>
            <li><strong>Transparency:</strong> Real-time GPS tracking from the moment your order is picked up.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-900 p-6 my-10 rounded-r-lg">
            <p className="italic text-blue-900 font-medium m-0">
              &quot;Our goal isn&apos;t just to deliver items; it&apos;s to give the people of Lagos their time back.&quot;
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            We are rolling out exclusive discounts for our first 10,000 users. Download the app today, use the promo code <strong>LAGOSLAUNCH</strong> at checkout, and get free delivery on your first three orders.
          </p>
        </article>

      </main>
      <Footer />
    </>
  );
}