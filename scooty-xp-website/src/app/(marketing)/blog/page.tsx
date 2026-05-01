import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock CMS Data
const blogPosts = [
  {
    id: 1,
    slug: "scooty-xp-launches-in-lagos",
    title: "Scooty XP Officially Launches in Lagos to Transform Local Delivery",
    excerpt: "We are thrilled to announce our official launch in Lagos, bringing lightning-fast delivery to the heart of Nigeria's commercial capital.",
    date: "May 10, 2026",
    category: "Company News",
    imageUrl: "[https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800)",
  },
  {
    id: 2,
    slug: "top-5-restaurants-victoria-island",
    title: "Top 5 Restaurants in Victoria Island You Must Try This Weekend",
    excerpt: "Looking for the best spots to order lunch? We've compiled a list of the highest-rated restaurants currently partnering with Scooty XP in VI.",
    date: "May 15, 2026",
    category: "Food & Lifestyle",
    imageUrl: "[https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800)",
  },
  {
    id: 3,
    slug: "how-to-become-a-top-earning-rider",
    title: "Tips and Tricks: How to Become a Top-Earning Scooty Rider",
    excerpt: "Maximize your earnings with these insider tips on navigating traffic, peak hours, and providing excellent customer service.",
    date: "May 18, 2026",
    category: "Rider Community",
    imageUrl: "[https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800](https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800)",
  }
];

const categories = ["All", "Company News", "Food & Lifestyle", "Rider Community", "Tech Updates"];

export default function BlogListingPage() {
  return (
    <>
      <Header />
      <main className="grow pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-4">
              The Scooty XP Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              News, updates, tips, and stories from the fastest-growing delivery network in Nigeria.
            </p>
          </div>

          {/* Category Filters (UI Only) */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  idx === 0
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col grow">
                  <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 grow">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="mt-auto">
                    <span className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center">
                      Read Article <span className="ml-1">→</span>
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center">
            <Button variant="outline" className="border-gray-300 text-blue-900">
              Load More Posts
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}