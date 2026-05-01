"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about ordering and delivering with Scooty XP.
            </p>
          </div>

          <div className="space-y-8">
            {/* Orders Category */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Orders & Delivery</h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-blue-900 font-medium text-left">
                    How do I place an order?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    You can place an order by downloading the Scooty XP app from the App Store or Google Play Store, or directly through our website via the &apos;Order Now&apos; button. Simply browse your favorite stores, add items to your cart, and checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-blue-900 font-medium text-left">
                    What areas do you currently deliver to?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    We currently operate across major neighborhoods in Lagos, including Victoria Island, Lekki, Ikoyi, Yaba, Surulere, and Ikeja. We are constantly expanding our delivery radius!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-blue-900 font-medium text-left">
                    How long does delivery take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    Standard deliveries typically take between 30 to 45 minutes depending on traffic and the distance between the vendor and your location. You can track your rider in real-time within the app.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Payments Category */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-500">Payments</h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-blue-900 font-medium text-left">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    We accept secure online payments via Debit/Credit Cards (Mastercard, Visa, Verve) and Bank Transfers through Paystack and Flutterwave. Select vendors also support Pay-on-Delivery.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}