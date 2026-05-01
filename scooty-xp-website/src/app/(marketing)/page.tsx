import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroAnimation } from "@/components/sections/Hero";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Partners } from "@/components/sections/Partners";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, ShieldCheck, Clock } from "lucide-react";

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">

        {/* Section 1: Hero */}
        <section className="relative w-full bg-blue-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-orange-500/30 z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
                Fast. Elite. <span className="text-orange-500">Efficient.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-50 font-medium">
                Your Everyday Delivery, Fast & Easy!
              </p>
              <p className="text-lg mb-10 text-blue-100 leading-relaxed">
                Welcome to Scooty XP, the revolutionary tech-enabled logistics platform and "super-app" ecosystem transforming last-mile delivery and field services in Lagos, Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg h-14 px-8">
                  Download the App
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 text-lg h-14 px-8">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-20">
            <HeroAnimation />
          </div>
        </section>

        {/* Section 2: Featured Services */}
        <FeaturedServices />

        {/* Section 3: How It Works */}
        <HowItWorks />

        {/* Section 4: Why Choose Scooty */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-4">
                   Why Choose Scooty XP?
                 </h2>
                 <p className="text-lg text-gray-600">The premier delivery choice for businesses and consumers in Nigeria.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
                      <MapPin size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-blue-900 mb-3">Local Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">Built for Nigerian cities.</p>
                 </div>

                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
                      <Zap size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-blue-900 mb-3">Fast Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">Same-day service in Lagos.</p>
                 </div>

                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
                      <ShieldCheck size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-blue-900 mb-3">Secure Payments</h3>
                    <p className="text-gray-600 leading-relaxed">Multiple Nigerian payment options.</p>
                 </div>

                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-6">
                      <Clock size={24} />
                    </div>
                    <h3 className="font-bold text-xl text-blue-900 mb-3">24/7 Support</h3>
                    <p className="text-gray-600 leading-relaxed">Customer care available anytime.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 5: Testimonials */}
        <Testimonials />

        {/* Section 6: Partners & Trust Signals */}
        <Partners />

        {/* Section 7: App Download CTA */}
        <section className="py-24 bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="max-w-xl mb-12 md:mb-0 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Get the Scooty XP App</h2>
              <p className="text-xl mb-10 text-orange-50 leading-relaxed">
                Order faster, track your rider in real-time, and unlock exclusive loyalty rewards with ScootyPass.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <div className="bg-black text-white px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition-all cursor-pointer font-medium flex items-center justify-center">
                   <span className="text-lg">Download on App Store</span>
                 </div>
                 <div className="bg-black text-white px-8 py-4 rounded-xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition-all cursor-pointer font-medium flex items-center justify-center">
                   <span className="text-lg">Get it on Google Play</span>
                 </div>
              </div>
            </div>
            {/* Mockup Placeholder */}
            <div className="w-full md:w-5/12 aspect-[4/3] bg-black/20 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-2xl">
              <span className="text-orange-100 font-medium text-lg px-6 text-center">
                [App 3D Mockup Graphic Here]
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}