"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-heading font-bold text-3xl mb-4 block">Scooty XP</span>
            <p className="text-blue-100 mb-2 font-medium">Your everyday delivery, fast and easy.</p>
            <p className="text-blue-100 mb-6 text-sm">
              Delivering fast, elite, and efficient solutions that empower Nigerian businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-500 transition-colors"><InstagramIcon size={20} /></Link>
              <Link href="#" className="hover:text-orange-500 transition-colors"><TwitterIcon size={20} /></Link>
              <Link href="#" className="hover:text-orange-500 transition-colors"><FacebookIcon size={20} /></Link>
            </div>
          </div>
          {/* Col 2: Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300 transition-colors">Our Ecosystem</Link></li>
              <li><Link href="/vendor" className="hover:text-gray-300 transition-colors">Become a Vendor</Link></li>
              <li><Link href="/rider" className="hover:text-gray-300 transition-colors">Drive & Earn</Link></li>
            </ul>
          </div>
          {/* Col 3: Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/faq" className="hover:text-gray-300 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/track" className="hover:text-gray-300 transition-colors">Track Order</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Col 4: Action */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Stay Updated</h3>
            <form className="flex space-x-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Email address" className="bg-white/10 border-white/20 text-white placeholder:text-blue-200" />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Subscribe</Button>
            </form>
            <div className="flex flex-col space-y-2">
              <div className="bg-black text-white px-4 py-2 rounded-md inline-block w-max text-sm cursor-pointer border border-gray-700">App Store</div>
              <div className="bg-black text-white px-4 py-2 rounded-md inline-block w-max text-sm cursor-pointer border border-gray-700">Google Play</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Scooty XP. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Victoria Island, Lagos, Nigeria 🇳🇬</p>
        </div>
      </div>
    </footer>
  );
}