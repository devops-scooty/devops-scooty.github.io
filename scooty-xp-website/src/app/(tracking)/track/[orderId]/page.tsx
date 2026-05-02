"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Package, CheckCircle2, Navigation, Loader2 } from "lucide-react";

export async function generateStaticParams() {
  // Return an array of objects with the orderId values you want to pre-generate
  // Example: if you have orders with IDs 1, 2, 3:
  return [
    { orderId: '1' },
    { orderId: '2' },
    { orderId: '3' },
    // Add more order IDs as needed
  ];

  // Or, if you need to fetch order IDs from an external source:
  // const orders = await fetch('your-api/orders').then(res => res.json());
  // return orders.map(order => ({ orderId: order.id.toString() }));
}
export default function OrderTrackingPage({ params }: { params: { orderId: string } }) {
  const [status, setStatus] = useState<number>(0);
  const [eta, setEta] = useState<number>(45);

  const trackingSteps = [
    { title: "Order Placed", desc: "We've received your order." },
    { title: "Preparing", desc: "The vendor is getting your items ready." },
    { title: "Rider Assigned", desc: "Tunde is on the way to the store." },
    { title: "In Transit", desc: "Your order is on its way to you!" },
    { title: "Delivered", desc: "Enjoy your order!" },
  ];

  // Mock live polling
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => {
        if (prev < trackingSteps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
      setEta((prev) => (prev > 0 ? prev - 5 : 0));
    }, 5000); // Progress every 5 seconds for demo purposes

    return () => clearInterval(interval);
  }, [trackingSteps.length]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">

      {/* Utility Header */}
      <div className="w-full max-w-lg mb-8 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-2xl text-blue-900 tracking-tight">
          Scooty XP
        </Link>
        <div className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
          Order #{params.orderId.toUpperCase().substring(0, 8)}
        </div>
      </div>

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Top Summary Block */}
        <div className="bg-blue-900 text-white p-8 text-center">
          <Package className="w-12 h-12 mx-auto mb-4 text-orange-500" />
          <h1 className="text-3xl font-heading font-bold mb-2">
            {eta > 0 ? `Arriving in ~${eta} mins` : "Delivered!"}
          </h1>
          <p className="text-blue-100 opacity-90">
            {trackingSteps[status].desc}
          </p>
        </div>

        {/* Map Placeholder Block */}
        <div className="w-full h-48 bg-gray-200 relative flex items-center justify-center">
          {/* Replace this div with Google Maps JS API embed */}
          <div className="absolute inset-0 bg-[url('[https://maps.googleapis.com/maps/api/staticmap?center=Lagos,Nigeria&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY_PLACEHOLDER](https://maps.googleapis.com/maps/api/staticmap?center=Lagos,Nigeria&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY_PLACEHOLDER)')] bg-cover bg-center opacity-40 mix-blend-multiply" />
          <div className="z-10 flex flex-col items-center text-blue-900">
            <Navigation className="w-8 h-8 text-orange-500 animate-bounce mb-2" />
            <span className="font-semibold bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm text-sm">
              Live Map View
            </span>
          </div>
        </div>

        {/* Stepper Block */}
        <div className="p-8">
          <h3 className="font-bold text-blue-900 mb-6 text-lg">Order Status</h3>
          <div className="space-y-6">
            {trackingSteps.map((step, index) => {
              const isCompleted = index < status;
              const isCurrent = index === status;

              return (
                <div key={index} className="flex gap-4 relative">
                  {/* Connecting Line */}
                  {index < trackingSteps.length - 1 && (
                    <div className={`absolute left-[11px] top-8 bottom-[-24px] w-[2px] ${isCompleted ? 'bg-orange-500' : 'bg-gray-200'}`} />
                  )}

                  {/* Status Node */}
                  <div className="relative z-10 flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-orange-500" />
                    ) : isCurrent ? (
                      <div className="w-6 h-6 rounded-full border-4 border-orange-200 bg-orange-500 flex items-center justify-center">
                        <Loader2 className="w-3 h-3 text-white animate-spin" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-white" />
                    )}
                  </div>

                  {/* Status Text */}
                  <div className={`pb-2 ${isCurrent ? 'opacity-100' : isCompleted ? 'opacity-70' : 'opacity-40'}`}>
                    <h4 className={`font-bold ${isCurrent ? 'text-blue-900' : 'text-gray-900'}`}>
                      {step.title}
                    </h4>
                    {isCurrent && (
                      <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}