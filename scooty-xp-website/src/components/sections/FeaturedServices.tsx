import Link from "next/link";
import { ShoppingCart, Cross, UtensilsCrossed, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "Groceries", icon: ShoppingCart, href: "/services#groceries", desc: "Fresh produce and daily essentials." },
  { title: "Medicines", icon: Cross, href: "/services#medicines", desc: "Pharmacy items delivered fast." },
  { title: "Food & Drinks", icon: UtensilsCrossed, href: "/services#food", desc: "Hot meals from local restaurants." },
  { title: "Fashion", icon: Shirt, href: "/services#fashion", desc: "Clothing and lifestyle brands." },
];

export function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-4">What do you need today?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We deliver everything from your weekly groceries to a quick lunch at the office.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link key={i} href={s.href} className="group">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 duration-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    <s.icon className="w-8 h-8 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}