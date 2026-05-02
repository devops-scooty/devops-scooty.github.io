"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Package, CheckCircle2, Navigation, Loader2 } from "lucide-react";

function TrackingFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const idParam = searchParams.get("id");

  const [orderId, setOrderId] = useState(idParam || "");
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
    if (!idParam) return;
    const interval = setInterval(() => {
      setStatus((prev) => {
        if (prev < trackingSteps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
      setEta((prev) => (prev > 0 ? prev - 5 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [idParam, trackingSteps.length]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      // Use query parameters instead of dynamic paths for GitHub Pages support
      router.push(`/track?id=${orderId.trim()}`);
    }
  };

  // If there is an ID in the URL, show the tracking interface
  if (idParam) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 pt-32">
        {/* Utility Header */}
        <div className="w-full max-w-lg mb-8 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-2xl text-blue-900 tracking-tight">
            Scooty XP
          </Link>
          <div className="text-sm font-medium text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            Order #{idParam.toUpperCase().substring(0, 8)}
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
          <div className="w-full h-48 bg-gray-200 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 opacity-40 mix-blend-multiply" />
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
                    {index < trackingSteps.length - 1 && (
                      <div className={`absolute left-[11px] top-8 bottom-[-24px] w-[2px] ${isCompleted ? 'bg-orange-500' : 'bg-gray-200'}`} />
                    )}
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

  // Default view: Search Input Form
  return (
    <main className="flex-grow pt-32 pb-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-8 h-8 text-orange-500" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-blue-900 mb-2">
          Track Your Order
        </h1>
        <p className="text-gray-600 mb-8">
          Enter your Order ID to get real-time updates on your delivery status.
        </p>

        <form onSubmit={handleTrack} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="e.g., ORD-12345"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="bg-gray-50 border-gray-200 h-12 text-center text-lg uppercase"
            required
          />
          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold"
          >
            Track Order
          </Button>
        </form>
      </div>
    </main>
  );
}

export default function TrackIndexPage() {
  return (
    <>
      <Header />
      {/* Suspense is required when using useSearchParams in a static export */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Loading tracker...</div>}>
        <TrackingFlow />
      </Suspense>
      <Footer />
    </>
  );
}