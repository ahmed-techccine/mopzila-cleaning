import { Home, Building2, Armchair, HardHat, Waves, Square } from "lucide-react"

const services = [
  {
    title: "House Cleaning",
    description: "Complete home cleaning including bedrooms, bathrooms, kitchen, and living areas. We use safe and effective products for a spotless, fresh home.",
    icon: Home,
    featured: false,
  },
  {
    title: "Office Cleaning",
    description: "Professional cleaning for offices, workspaces, and meeting rooms. We ensure a hygienic and productive environment for your team and clients.",
    icon: Building2,
    featured: true,
  },
  {
    title: "Furniture Cleaning",
    description: "Deep cleaning for sofas, chairs, mattresses, and all upholstered furniture. Removes stains, dust, and allergens for a healthier space.",
    icon: Armchair,
    featured: false,
  },
  {
    title: "Construction Cleaning",
    description: "Post-construction and renovation cleaning to remove dust, debris, and residues. We make your new or remodeled space move-in ready.",
    icon: HardHat,
    featured: false,
  },
  {
    title: "Carpet Cleaning",
    description: "Expert carpet and rug cleaning using advanced techniques to remove dirt, stains, and odors. Restores freshness and extends carpet life.",
    icon: Waves,
    featured: false,
  },
  {
    title: "Glass Cleaning",
    description: "Streak-free cleaning for windows, glass doors, and partitions. We ensure sparkling clear glass for homes, offices, and commercial spaces.",
    icon: Square,
    featured: false,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#2a738d] relative overflow-hidden">
      {/* Decorative stars/sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 text-white/20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-32 right-32 w-6 h-6 text-white/15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-40 w-3 h-3 text-white/25">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-40 left-1/2 w-5 h-5 text-white/10">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 w-4 h-4 text-white/20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-60 right-60 w-3 h-3 text-white/15">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-white/80 text-sm font-medium mb-4 tracking-wider">WHAT WE DO</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            We Offer Different Services to
            <br />
            Clean Your Area
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer ${
                service.featured
                  ? "bg-[#1e5a6b] text-white shadow-xl hover:bg-[#2a738d]"
                  : "bg-white text-gray-800 shadow-lg hover:shadow-xl hover:bg-[#2a738d] hover:text-white"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  service.featured ? "bg-white/20 group-hover:bg-white/30" : "bg-[#2a738d]/10 group-hover:bg-white/20"
                }`}
              >
                <service.icon
                  className={`w-8 h-8 transition-all duration-300 ${
                    service.featured ? "text-white" : "text-[#2a738d] group-hover:text-white"
                  }`}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  service.featured ? "text-white" : "text-gray-800 group-hover:text-white"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-all duration-300 ${
                  service.featured ? "text-white/90" : "text-gray-600 group-hover:text-white/90"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
