"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { vendorSignupSchema } from "@/lib/schemas/forms";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VendorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof vendorSignupSchema>>({
    resolver: zodResolver(vendorSignupSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      phone: "",
      email: "",
      businessType: "Restaurant",
      location: "",
    },
  });

  async function onSubmit(values: z.infer<typeof vendorSignupSchema>) {
    setIsSubmitting(true);
    // Simulate API call to backend/CRM
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", values);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-blue-900">
              Grow your business with Scooty XP
            </h1>
            <p className="mb-8 text-gray-600 text-lg">
              Join hundreds of vendors reaching more customers across Lagos. Fill out the form below and our partnerships team will contact you.
            </p>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Application Received!</h3>
                <p>Thank you for your interest. Our team will reach out to you within 24 hours.</p>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Business Name</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g. Lagos Supermart" className="bg-gray-50 border-gray-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Business Type</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="Restaurant">Restaurant</option>
                              <option value="Grocery">Grocery / Supermarket</option>
                              <option value="Pharmacy">Pharmacy</option>
                              <option value="Fashion">Fashion & Retail</option>
                              <option value="Other">Other</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Contact Person</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" className="bg-gray-50 border-gray-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+234..." className="bg-gray-50 border-gray-200" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="hello@yourbusiness.com" className="bg-gray-50 border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900">Store Address / Location</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. Lekki Phase 1" className="bg-gray-50 border-gray-200" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold rounded-xl mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Apply Now"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}