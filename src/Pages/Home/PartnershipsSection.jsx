import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8 } from "../../assets";

const PartnershipsSection = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8
  ];

  // Double the array for seamless looping
  const doubledLogos = [...logos, ...logos];

  return (
    <section 
      className="relative py-20 bg-gray-50 overflow-hidden"
      id="partnerships"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 -right-20 w-64 h-64 border-2 border-[#FFC857] rounded-full opacity-10" />
      <div className="absolute bottom-1/4 -left-20 w-48 h-48 border border-[#0A2463] rounded-full opacity-10" />

      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A2463]">
            OUR PARTNERS
          </h2>
          <div className="w-20 h-1 bg-[#FFC857] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Aligned with the finest brands in sports and luxury
          </p>
        </div>

        {/* Infinite Logo Carousel */}
        <div className="relative py-8 overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 px-10 hover:scale-105 transition-transform duration-300"
              >
                <div className="h-32 w-48 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Partner logo" 
                    className="max-h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                    style={{ 
                      filter: "grayscale(30%)",
                      transition: "filter 0.3s ease"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/partnerships"
            className="inline-flex items-center text-[#0A2463] font-medium group"
          >
            Explore partnership opportunities
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              <ChevronRight className="h-5 w-5" />
            </span>
          </a>
        </div>
      </div>

      {/* CSS Animation for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnershipsSection;