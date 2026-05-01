import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-bold mb-8 text-blue-900">Frequently Asked Questions</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-500">Orders</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I place an order?</AccordionTrigger>
          <AccordionContent>
            You can place an order by downloading the Scooty XP app from the App Store or Google Play Store, or directly through our website via the &apos;Order Now&apos; button.
          </AccordionContent>
        </AccordionItem>
        {/* Add more items based on documentation */}
      </Accordion>
    </main>
  );
}