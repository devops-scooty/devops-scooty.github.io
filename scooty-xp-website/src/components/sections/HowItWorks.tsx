import { Search, MousePointerClick, CreditCard, MapPin } from "lucide-react";

const steps = [
  { id: 1, title: "Search", desc: "Find what you need from local stores.", icon: Search },
  { id: 2, title: "Choose", desc: "Browse and select your items.", icon: MousePointerClick },
  { id: 3, title: "Pay", desc: "Secure checkout via Paystack or Flutterwave.", icon: CreditCard },
  { id: 4, title: "Track", desc: "Real-time order tracking to your door.", icon: MapPin },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-blue-900 mb-16">How Scooty XP Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-orange-200 z-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-4 border-orange-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-8 h-8 text-blue-900" strokeWidth={1.5} />
              </div>
              <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold absolute top-0 -mt-2 md:-mt-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}