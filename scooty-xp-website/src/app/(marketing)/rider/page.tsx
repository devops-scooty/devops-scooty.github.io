"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { riderSignupSchema } from "@/lib/schemas/forms";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bike, Smartphone, IdCard } from "lucide-react";

export default function RiderPage() {
  const [hours, setHours] = useState(20);
  const hourlyRate = 1500; // Estimated NGN per hour
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof riderSignupSchema>>({
    resolver: zodResolver(riderSignupSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      vehicleType: "Motorcycle",
      area: "",
      availability: "Full-time",
    },
  });

  async function onSubmit(values: z.infer<typeof riderSignupSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Rider application:", values);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20">

        {/* Hero & Calculator Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-6">
              Earn on your own schedule.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join the Scooty XP fleet and deliver smiles across Lagos. You decide when, where, and how much you work.
            </p>

            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-4">Calculate Your Earnings</h3>
              <div className="mb-4">
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Hours per week</span>
                  <span className="text-orange-500 font-bold">{hours} hrs</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-orange-500"
                />
              </div>
              <div className="pt-4 border-t border-orange-200">
                <p className="text-sm text-gray-600">Estimated Weekly Earnings</p>
                <p className="text-3xl font-bold text-orange-500">
                  ₦{(hours * hourlyRate).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Requirements List */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">What you need</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900 h-min"><Bike size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">A Vehicle</h4>
                  <p className="text-gray-600 text-sm">Motorcycle, bicycle, car, or van in good condition.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900 h-min"><Smartphone size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">A Smartphone</h4>
                  <p className="text-gray-600 text-sm">iOS or Android device with a data plan.</p>
                </div>
              </li>
                            <li className="flex gap-4">
                <div className="bg-blue-50 p-3 rounded-full text-blue-900 h-min"><IdCard size={24} /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Rigorous Verification</h4>
                  <p className="text-gray-600 text-sm">Valid ID, Driver's License, and dual photo uploads (your face + vehicle photo) required for trust and safety.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Application Form */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="apply">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center text-blue-900">Apply Now</h2>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Application Received!</h3>
                <p>Welcome to the first step! We will contact you shortly for onboarding.</p>
                <Button className="mt-6 bg-green-600 hover:bg-green-700" onClick={() => setIsSuccess(false)}>
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="+234..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="vehicleType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Type</FormLabel>
                        <FormControl>
                          <select className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm" {...field}>
                            <option value="Motorcycle">Motorcycle</option>
                            <option value="Bicycle">Bicycle</option>
                            <option value="Car">Car</option>
                            <option value="Van">Van</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="area" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Area (Lagos)</FormLabel>
                        <FormControl><Input placeholder="E.g. Surulere" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="availability" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Availability</FormLabel>
                        <FormControl>
                          <select className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm" {...field}>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Weekends">Weekends Only</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}