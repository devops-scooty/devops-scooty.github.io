import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-orange-500" />
          </div>

          <h1 className="text-6xl font-heading font-extrabold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looks like we took a wrong turn.
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 text-lg">
                Back to Homepage
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-lg text-blue-900 border-gray-300">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}