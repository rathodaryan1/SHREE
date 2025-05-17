import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { companyInfo, services } from "@/lib/data";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { formatPhoneNumber } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
           <img 
  src="/Shree_page-0001.jpg" 
  alt="Shree Enterprise Logo" 
  className="mb-4 max-w-[200px]" 
/>

            <p className="text-gray-400 mb-6 mt-2">
              Leading provider of comprehensive fire safety solutions for commercial, industrial, and residential properties.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gradient-to-r from-[#F56040] via-[#E1306C] to-[#833AB4] text-white p-2 rounded-full hover:opacity-90 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <Link 
                    href={`/#${service.id}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </li>
              <li className="flex">
                <Phone className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-gray-400">
                  <a href={`tel:+91${companyInfo.phone1}`} className="hover:text-primary">
                    +91 {formatPhoneNumber(companyInfo.phone1)}
                  </a>
                  <br />
                  <a href={`tel:+91${companyInfo.phone2}`} className="hover:text-primary">
                    +91 {formatPhoneNumber(companyInfo.phone2)}
                  </a>
                </span>
              </li>
              <li className="flex">
                <Mail className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-gray-400">
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-primary">
                    {companyInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shree Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
