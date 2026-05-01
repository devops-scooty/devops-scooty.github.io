import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="grow pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <h1 className="text-4xl font-heading font-bold text-blue-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-10 text-sm">Last Updated: May 1, 2026</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using the Scooty XP website and mobile application, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-700 mb-6">
            Scooty XP provides a technology platform that connects users with independent delivery riders and local vendors (including restaurants, grocery stores, and pharmacies) in Lagos, Nigeria. We facilitate the ordering and logistics, but do not directly prepare food or manufacture the goods sold.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 mb-6">
            To use certain features of the service, you must register for an account. You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Prohibited Conduct</h2>
          <p className="text-gray-700 mb-6">
            Users agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service. Misuse of the platform, including the submission of fraudulent orders or abuse of the referral and promo code systems, will result in immediate account termination.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Scooty XP shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service. Delivery times are estimates and may vary based on external conditions such as traffic and weather.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}