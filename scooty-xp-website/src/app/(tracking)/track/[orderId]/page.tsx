import { redirect } from "next/navigation";

// Required to satisfy Next.js static export for dynamic routes.
// This forces Next.js to build a dummy "/track/demo.html" file, bypassing the build error.
export function generateStaticParams() {
  return [{ orderId: "demo" }];
}

export default function OrderTrackingRedirect({ params }: { params: { orderId: string } }) {
  // Gracefully redirect any old dynamic links to our new query-param architecture
  redirect(`/track?id=${params.orderId}`);
}