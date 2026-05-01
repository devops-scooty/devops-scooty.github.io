export function Partners() {
  return (
    <section className="py-16 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-8">
          Trusted by Top Nigerian Brands & Secure Payment Partners
        </p>

        {/* Logos container using generic placeholder styles for the requested brands */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">

          {/* Payment Gateways */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-sm"></div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">Paystack</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            <span className="text-2xl font-bold text-gray-800 tracking-tight">Flutterwave</span>
          </div>

          <div className="w-px h-8 bg-gray-300 hidden md:block mx-4"></div>

          {/* Supermarkets & Restaurants */}
          <div className="text-2xl font-bold font-serif text-gray-800">Lagos Supermarts</div>
          <div className="text-2xl font-bold text-gray-800 italic">PharmPlus NG</div>
          <div className="text-2xl font-bold font-heading text-gray-800">Tasty Bukas</div>

        </div>
      </div>
    </section>
  );
}