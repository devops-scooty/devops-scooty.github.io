import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroAnimation } from "@/components/sections/Hero"; // Assuming you kept this from Phase 1
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Button } from "@/components/ui/button";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">

        {/* Section 1: Hero */}
        <section className="relative w-full bg-blue-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-orange-500/30 z-10" />

          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
                Fast. Elite. <span className="text-orange-500">Efficient.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-50">
                Your Everyday Delivery, Fast & Easy! Order groceries, food, and medicines across Lagos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg h-14 px-8">
                  Download the App
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-blue-900 hover:bg-white hover:text-blue-900 text-lg h-14 px-8">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-20">
            <HeroAnimation />
          </div>
        </section>

        {/* Section 2 & 3 */}
        <FeaturedServices />
        <HowItWorks />

        {/* Section 4: Why Choose Scooty */}
        <section className="py-20 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Built for Lagos. We know the routes and avoid the traffic.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">Same-day and express delivery in Victoria Island, Lekki & more.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">Secure Payments</h3>
                    <p className="text-gray-600">Pay safely via Paystack, Flutterwave, or bank transfer.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-xl text-blue-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our customer service team is always here to help you.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 8: App Download CTA */}
        <section className="py-20 bg-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl mb-10 md:mb-0">
              <h2 className="text-4xl font-heading font-bold mb-6">Get the Scooty XP App</h2>
              <p className="text-xl mb-8 text-orange-50">
                Order faster, track your rider in real-time, and unlock exclusive loyalty rewards with ScootyPass.
              </p>
              <div className="flex gap-4">
                 <div className="bg-black text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 cursor-pointer font-medium">App Store</div>
                 <div className="bg-black text-white px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 cursor-pointer font-medium">Google Play</div>
              </div>
            </div>
            {/* Mockup Placeholder */}
            <div className="w-full md:w-1/2 h-64 bg-black/10 rounded-2xl flex items-center justify-center border border-white/20">
              <span className="text-orange-100 font-medium">[App 3D Mockup Graphic Here]</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}