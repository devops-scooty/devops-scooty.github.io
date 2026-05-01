import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Chinedu O.",
    location: "Lekki Phase 1, Lagos",
    quote: "Scooty XP has completely saved me from Lagos traffic! I ordered my groceries on a Saturday morning, and everything arrived fresh in under 40 minutes. Absolute lifesaver.",
    rating: 5,
    avatar: "[https://i.pravatar.cc/150?img=11](https://i.pravatar.cc/150?img=11)",
  },
  {
    id: 2,
    name: "Amina B.",
    location: "Victoria Island, Lagos",
    quote: "The pharmacy delivery feature is incredible. When my daughter had a fever late at night, I was able to get medicine delivered safely and quickly. The riders are always polite.",
    rating: 5,
    avatar: "[https://i.pravatar.cc/150?img=5](https://i.pravatar.cc/150?img=5)",
  },
  {
    id: 3,
    name: "Tobi F.",
    location: "Yaba, Lagos",
    quote: "I use this app almost every day for lunch at the office. The food is always hot, the tracking is super accurate, and the app is very easy to use. Highly recommended!",
    rating: 5,
    avatar: "[https://i.pravatar.cc/150?img=8](https://i.pravatar.cc/150?img=8)",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Loved by Thousands in Lagos
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our customers are saying about their Scooty XP experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 border-none text-white backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6 text-orange-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-orange-500" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-8 italic text-blue-50">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-blue-200">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}