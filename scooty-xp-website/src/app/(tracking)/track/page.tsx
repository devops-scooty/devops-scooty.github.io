"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function TrackIndexPage() {
  const [orderId, setOrderId] = useState("");
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      // Redirect the user to the dynamic tracking page
      router.push(`/track/${orderId.trim()}`);
    }
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}