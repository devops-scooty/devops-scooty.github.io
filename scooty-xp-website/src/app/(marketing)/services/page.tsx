import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Layers } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6">Our Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scooty XP operates a complex, multi-tiered software architecture consisting of five distinct applications enabling a unique B2B2C hierarchy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">1. Scooty XP (Customer App)</h2>
              <p className="text-gray-600">The consumer-facing super-app featuring an 8-tile service grid, multi-language support, real-time tracking, multi-service checkout, and integrated loyalty rewards.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">2. Scooty XP Driver (Gig-Worker Supply)</h2>
              <p className="text-gray-600">The supply-side app for independent transport and delivery gig workers handling both in-city cab rides and multi-category parcel deliveries, powered by Google Maps live routing.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">3. Scooty XP Worker (Field Service Supply)</h2>
              <p className="text-gray-600">Designed specifically for field service professionals (cleaners, technicians). Workers are provisioned and managed by Providers, featuring a one-tap online/offline broadcast.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">4. Scooty XP Provider (Business Management)</h2>
              <p className="text-gray-600">A business management tool for service business owners. Providers can add/remove workers, set precise hourly pay rates, and view their team's real-time status to optimize dispatching.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <Layers className="text-orange-500 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">5. Scooty XP Store (Merchant Portal)</h2>
              <p className="text-gray-600">The portal for restaurants and retailers featuring non-destructive inventory toggles, transparent per-order commission visibility, and physical QR code generation to drive offline-to-online growth.</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}