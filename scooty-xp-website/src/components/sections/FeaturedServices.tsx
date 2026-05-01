import Link from "next/link";
import { ShoppingCart, Cross, UtensilsCrossed, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Groceries",
    icon: ShoppingCart,
    href: "/services#groceries",
    desc: "Fresh produce and essentials from local supermarkets."
  },
  {
    title: "Medicines",
    icon: Cross,
    href: "/services#medicines",
    desc: "Partnered pharmacies with safe, verified delivery."
  },
  {
    title: "Food & Drinks",
    icon: UtensilsCrossed,
    href: "/services#food",
    desc: "Restaurants and fast food chains in Lagos."
  },
  {
    title: "Fashion & Lifestyle",
    icon: Shirt,
    href: "/services#fashion",
    desc: "Clothing, electronics, and home goods."
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 mb-4">
            Everything You Need, Delivered.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From hot meals to weekly groceries, our trusted network has you covered across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link key={i} href={s.href} className="group">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 duration-200 bg-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                    <s.icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}