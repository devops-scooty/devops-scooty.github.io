import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="grow pt-32 pb-20">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6">
            Redefining Logistics in Nigeria.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Based in Victoria Island, Lagos, Scooty XP is scaling scalable, future-ready logistics solutions to support sustainable urban mobility and local commerce.
          </p>
        </section>

        {/* Mission / Vision Split */}
        <section className="bg-blue-900 text-white py-20 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                To deliver fast, elite, and efficient solutions that empower Nigerian businesses, creating a true "All-in-One" household application.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Ecosystem</h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                We bridge the gap using a highly sophisticated 5-app ecosystem connecting consumers, gig-economy drivers, independent merchants, and service-based businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-heading font-bold text-center text-blue-900 mb-16">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <Card className="border-none shadow-sm bg-gray-50">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-6">CM</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">Chatru Moorjani</h3>
                <p className="text-orange-500 font-semibold mb-4">Director</p>
                <p className="text-gray-600">
                  A results-driven Business Executive leading the strategic expansion of the multi-vertical super-app across Nigeria. With a background from King's College London, he brings strong expertise in platform scaling, user acquisition, and merchant partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-gray-50">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-6">ES</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">Edward Stevenson</h3>
                <p className="text-orange-500 font-semibold mb-4">Managing Director</p>
                <p className="text-gray-600">
                  A visionary executive with over 25 years of experience scaling operations across Africa and the UK. He leads the strategic deployment of our 5-app ecosystem, driving future-ready logistics solutions that support sustainable urban mobility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-gray-50">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-6">AA</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">Anthony Akpotu</h3>
                <p className="text-orange-500 font-semibold mb-4">Operations Manager</p>
                <p className="text-gray-600">
                  A seasoned operations leader with broad expertise in last-mile logistics and fleet management. He oversees the day-to-day operations of Scooty XP, driving efficiency across the platform's 8-vertical grid to ensure seamless fulfillment.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}