"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { vendorSignupSchema } from "@/lib/schemas/forms";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function VendorPage() {
  const form = useForm<z.infer<typeof vendorSignupSchema>>({
    resolver: zodResolver(vendorSignupSchema),
    defaultValues: { businessName: "", contactName: "", phone: "", email: "", location: "" },
  });

  function onSubmit(values: z.infer<typeof vendorSignupSchema>) {
    console.log(values); // API integration happens here
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-bold mb-4 text-blue-900">Grow your business with Scooty XP</h1>
      <p className="mb-8 text-gray-600">Join hundreds of vendors reaching more customers across Lagos.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. Lagos Supermart" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Add other fields: contactName, phone, email, etc. */}
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600">
            Apply Now
          </button>
        </form>
      </Form>
    </main>
  );
}