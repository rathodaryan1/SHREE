import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Fire safety system" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-20">
        <div className="max-w-3xl bg-black/30 p-6 md:p-8 rounded-lg backdrop-blur-sm border border-white/10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-roboto font-bold text-white mb-4 animate-fadeIn">
            Complete Fire Safety Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Expert installation, maintenance, and service of fire safety systems to protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
  <Button className="bg-primary hover:bg-red-700 text-white font-roboto font-semibold w-full sm:w-auto px-10 py-7 text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all rounded-2xl"
>
    Explore Our Services
  </Button>
</Link>

            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary hover:bg-red-700 text-white font-roboto font-medium w-full sm:w-auto px-6 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"

              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
