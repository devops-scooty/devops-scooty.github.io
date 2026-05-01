import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6">
            Redefining Logistics in Nigeria.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scooty XP is a hyper-local delivery platform bridging the gap between local businesses and consumers in Lagos through cutting-edge technology and a reliable fleet.
          </p>
        </section>

        {/* Mission / Vision Split */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                To empower local commerce by providing lightning-fast, affordable, and transparent delivery services for everyday essentials.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Vision</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                To become the most trusted and ubiquitous logistics layer for retail in Africa, making seamless delivery a standard, not a luxury.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline / Values */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center text-blue-900 mb-16">Why We Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl text-blue-900 mb-3">Speed</h3>
              <p className="text-gray-700">Optimized routing algorithms ensure our riders take the fastest path from vendor to your door.</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl text-blue-900 mb-3">Reliability</h3>
              <p className="text-gray-700">Vetted riders, secure packaging, and live tracking mean your items arrive exactly as expected.</p>
            </div>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="font-bold text-xl text-blue-900 mb-3">Community</h3>
              <p className="text-gray-700">By partnering exclusively with local businesses, we help keep the neighborhood economy thriving.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}