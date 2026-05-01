import { HeroAnimation } from "@/components/sections/Hero";
// Add other section imports here (Services, HowItWorks, Testimonials, etc.)

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-blue-900 relative overflow-hidden">
        {/* Hero Section Container */}
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 z-10 relative text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Fast. Elite. Efficient.</h1>
          <p className="text-xl mb-8">Your Everyday Delivery, Fast & Easy!</p>
          <div className="flex gap-4">
             <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">Download the App</button>
             <button className="border border-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold">Order Now</button>
          </div>
        </div>
        <HeroAnimation />
      </section>

      {/* Build out Section 2: Featured Services */}
      {/* Build out Section 3: How It Works */}
      {/* Build out Section 4: Why Choose Scooty */}
      {/* Build out Section 5: Testimonials Carousel */}
      {/* Build out Section 6: Partners & Trust */}
    </main>
  );
}