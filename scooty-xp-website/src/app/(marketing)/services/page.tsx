import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShoppingCart, Cross, UtensilsCrossed, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "groceries",
    title: "Groceries & Supermarket",
    icon: ShoppingCart,
    desc: "Skip the checkout lines. Order fresh produce, pantry staples, and household essentials from your favorite local supermarkets and have them delivered directly to your kitchen counter.",
    features: ["Fresh produce guarantee", "Bulk orders supported", "Multi-store shopping"],
  },
  {
    id: "medicines",
    title: "Pharmacy & Wellness",
    icon: Cross,
    desc: "Health can't wait. We partner with certified pharmacies to deliver over-the-counter medications, prescriptions, and wellness products securely and confidentially.",
    features: ["Confidential packaging", "Fast priority routing", "Verified pharmacy partners"],
  },
  {
    id: "food",
    title: "Food & Drinks",
    icon: UtensilsCrossed,
    desc: "Craving something specific? From local Bukas to premium restaurants, get hot meals and cold drinks delivered fast before the cravings fade.",
    features: ["Insulated delivery bags", "Real-time rider tracking", "Group ordering"],
  },
  {
    id: "fashion",
    title: "Fashion & Lifestyle",
    icon: Shirt,
    desc: "Last-minute outfit emergency? Shop from local boutiques and lifestyle brands and get your new gear delivered exactly when you need it.",
    features: ["Careful handling", "Same-day boutique delivery", "Gift deliveries"],
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scooty XP is your ultimate delivery companion in Lagos. Whatever you need, we deliver it with speed and care.
          </p>
        </div>

        <div className="space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Graphic Placeholder */}
              <div className="flex-1 w-full aspect-video md:aspect-square bg-orange-50 rounded-3xl border border-orange-100 flex items-center justify-center">
                <service.icon className="w-32 h-32 text-orange-200" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-900 rounded-xl mb-6">
                  <service.icon size={24} />
                </div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.desc}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 font-medium">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 text-lg">
                  Order {service.title.split(' ')[0]} Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}