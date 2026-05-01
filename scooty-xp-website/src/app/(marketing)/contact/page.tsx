import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-grow pt-32 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-4">Get in Touch</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have a question, feedback, or need help with an order? Our team is always here for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <Input placeholder="Your Full Name" className="bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <Input type="email" placeholder="you@example.com" className="bg-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <Textarea placeholder="How can we help?" className="bg-white min-h-[150px]" />
                                </div>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500 mt-1">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg">Phone Number</h4>
                                    <p className="text-gray-600 mt-1">+234 915 430 5583</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500 mt-1">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg">Email Address</h4>
                                    <p className="text-gray-600 mt-1">contact@myscooty.ng</p>
                                    <p className="text-gray-600">support@myscooty.ng</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg">Headquarters</h4>
                                    <p className="text-gray-600 mt-1">Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-full mr-4 text-orange-500 mt-1">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-lg">Business Hours</h4>
                                    <p className="text-gray-600 mt-1">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
      
        <div className="w-full h-96 bg-gray-200">
          <iframe
            src="[https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.0622956291!2d3.284988775217997!3d6.53671714488975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.0622956291!2d3.284988775217997!3d6.53671714488975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng)"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scooty XP Location"
          ></iframe>
        </div>
*/}

            </main>
            <Footer />
        </>
    );
}