export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "fire-hydrant",
    title: "Fire Hydrant System",
    shortDescription: "Complete installation, maintenance, and repair of fire hydrant systems for commercial and industrial properties.",
    description: "Our fire hydrant systems are designed to provide a reliable water supply for firefighting operations. We offer end-to-end solutions including system design, installation, testing, and maintenance of fire hydrant systems that comply with all safety regulations. Our systems include hydrant valves, hose reels, landing valves, and complete piping networks.",
    imageUrl: "/fire-hydrant-system.jpg",
    icon: "fire-extinguisher"
  },
  {
    id: "fire-alarm",
    title: "Fire Alarm & Detection System",
    shortDescription: "Advanced fire detection systems with smoke, heat, and gas detectors for early warning and response.",
    description: "Our fire alarm and detection systems are designed to provide early warning in case of fire emergencies. We offer installation and maintenance of advanced detection systems including smoke detectors, heat detectors, gas detectors, and integrated control panels. Our systems comply with the latest safety standards and can be customized to meet specific building requirements.",
    imageUrl: "/fire-detection-and-alarm-system.jpg",
    icon: "bell"
  },
  {
    id: "fire-extinguisher",
    title: "Fire Extinguisher Supply & Service",
    shortDescription: "Supply, installation, and regular maintenance of various types of fire extinguishers for different fire classes.",
    description: "We provide a wide range of fire extinguishers suitable for different classes of fires. Our services include supply, installation, regular maintenance, and refilling of fire extinguishers. We offer CO2, dry chemical powder, foam, and water-based extinguishers, and help you determine the right mix for your facility based on risk assessment.",
    imageUrl: "/Fire-extinguisher.jpg",
    icon: "cylinder"
  },
  {
    id: "fire-sprinkler",
    title: "Fire Sprinkler System",
    shortDescription: "Design and installation of automatic fire sprinkler systems for commercial and residential buildings.",
    description: "Our fire sprinkler systems provide automatic fire suppression to control or extinguish fires before they spread. We offer complete design, installation, and maintenance of various sprinkler systems including wet pipe, dry pipe, pre-action, and deluge systems. All our installations comply with local fire safety codes and international standards.",
    imageUrl: "/Fire-Sprinkler-Inspection.jpg",
    icon: "droplets"
  },
  {
    id: "designing",
    title: "Designing & Commissioning",
    shortDescription: "Professional design, planning, and commissioning of fire safety systems according to regulations.",
    description: "Our team of experienced engineers provides comprehensive design and commissioning services for all types of fire safety systems. We conduct thorough site assessments, develop detailed designs, oversee installation, and perform system commissioning to ensure all components work together effectively. Our designs comply with local building codes and fire safety regulations.",
    imageUrl: "/fire-alarm-service-engineer-1.jpg",
    icon: "pencil-ruler"
  },
  {
    id: "amc",
    title: "Annual Maintenance Contract",
    shortDescription: "Comprehensive maintenance packages to ensure your fire safety systems remain in optimal condition.",
    description: "Our annual maintenance contracts provide regular inspection, testing, and maintenance of all fire safety systems to ensure they remain in optimal working condition. Our comprehensive AMC packages include scheduled preventive maintenance, emergency repairs, system testing, and detailed documentation to help you meet compliance requirements. We offer customized maintenance plans based on your specific needs and budget.",
    imageUrl: "/amc-fire-2.jpg",
    icon: "clipboard-check"
  }
];

export const features: Feature[] = [
  {
    title: "Certified Experts",
    description: "Our team consists of certified professionals with years of experience in fire safety systems.",
    icon: "award"
  },
  {
    title: "24/7 Support",
    description: "We provide round-the-clock emergency service and support for all our clients.",
    icon: "clock"
  },
  {
    title: "Quality Assurance",
    description: "We use only high-quality products and follow strict quality control for all installations.",
    icon: "shield"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    position: "Office Manager",
    company: "Tech Solutions",
    content: "Shree Enterprise installed our entire office fire safety system. Their team was professional, knowledgeable, and completed the work on schedule. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Anita Sharma",
    position: "Facility Manager",
    company: "Grand Hotel",
    content: "We've been using Shree Enterprise for our annual maintenance contract for the past 3 years. Their service is prompt, thorough, and they always ensure our systems are up to code.",
    rating: 5
  },
  {
    id: 3,
    name: "Vijay Mehta",
    position: "Owner",
    company: "Mehta Manufacturing",
    content: "After a small fire incident, we realized the importance of proper fire safety. Shree Enterprise designed and installed a comprehensive system for our factory. Their expertise and attention to detail were impressive.",
    rating: 4.5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Commercial Building Hydrant System",
    description: "Complete installation for a 10-floor office building",
    imageUrl: "/commercial-building-fire-hydrants-systemss.jpg",
  },
  {
    id: 2,
    title: "Advanced Alarm System",
    description: "Smart fire detection for a tech company",
    imageUrl: "/advanced-fire-alarm-system.avif"
  },
  {
    id: 3,
    title: "Hotel Sprinkler System",
    description: "Comprehensive coverage for guest safety",
    imageUrl: "/install-fire-sprinkler.jpg"
  },
  {
    id: 4,
    title: "Multi-Class Extinguisher Setup",
    description: "Factory-wide fire protection deployment",
    imageUrl: "/different-types-of-fire-extinguisher-1.jpg.webp"
  },
  {
    id: 5,
    title: "Regular Maintenance",
    description: "Annual servicing for corporate client",
    imageUrl: "/fire-fighting-consultation-services-500x500.webp"
  },
  {
    id: 6,
    title: "Custom System Design",
    description: "Specialized planning for heritage building",
    imageUrl: "/fire-fighting-piping-system-design-7.jpg"
  }
];

export const companyInfo = {
  name: "Shree Enterprise",
  tagline: "Fire Safety Solutions",
  address: "Plot No. 32c/1, B/h Hospital, Anantapur, Bhavnagar - 364005",
  phone1: "7337196916",
  phone2: "9327993934",
  email: "chauhan.prakash123@gmail.com",
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed"
  },
  about: "Shree Enterprise is a leading provider of comprehensive fire safety solutions in Anantapur, Bhavnagar, and surrounding areas. With years of experience in the industry, we have established ourselves as trusted experts in fire protection systems. Our team of certified professionals is dedicated to ensuring the safety of your property and people through high-quality installation, regular maintenance, and prompt service. We adhere to all local and national fire safety regulations to provide you with compliant and effective protection systems."
};
