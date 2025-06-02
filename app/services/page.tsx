import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Clock, Shield, Award } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Office Cleaning",
    description:
      "Complete office cleaning solutions including daily maintenance, deep cleaning, and sanitization services.",
    features: ["Daily cleaning", "Deep sanitization", "Carpet cleaning", "Window cleaning"],
    price: "Starting from $150/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Healthcare Facilities",
    description: "Specialized cleaning for medical facilities with strict hygiene and safety protocols.",
    features: ["Medical-grade disinfection", "Biohazard cleanup", "Operating room cleaning", "24/7 availability"],
    price: "Custom pricing",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning services for manufacturing and industrial facilities.",
    features: ["Equipment cleaning", "Floor maintenance", "Waste management", "Safety compliance"],
    price: "Starting from $500/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Educational Institutions",
    description: "Safe and thorough cleaning for schools, colleges, and universities.",
    features: ["Classroom cleaning", "Cafeteria sanitization", "Playground maintenance", "Emergency cleaning"],
    price: "Starting from $300/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Retail Spaces",
    description: "Maintain a clean shopping environment that attracts and retains customers.",
    features: ["Floor cleaning", "Restroom maintenance", "Display cleaning", "Entrance upkeep"],
    price: "Starting from $200/month",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Construction Cleanup",
    description: "Post-construction cleaning services to prepare your space for occupancy.",
    features: ["Debris removal", "Deep cleaning", "Window cleaning", "Final inspection"],
    price: "Starting from $0.15/sq ft",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to meet the unique needs of your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#2a738d]" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#2a738d]">{service.price}</span>
                    <Button className="bg-[#2a738d] hover:bg-[#236073] text-white">Get Quote</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional cleaning services with a commitment to quality and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock service to meet your cleaning needs anytime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">Complete insurance coverage for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all our cleaning services</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
