import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Users, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Above-market wages with performance bonuses and regular pay increases",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your family",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible scheduling options and paid time off",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement opportunities and professional development programs",
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Supportive team culture with recognition and appreciation programs",
  },
]

const positions = [
  {
    title: "Cleaning Technician",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$15-18/hour",
    description: "Join our cleaning team and help maintain clean, healthy environments for our clients.",
    requirements: [
      "No experience required",
      "Reliable transportation",
      "Attention to detail",
      "Physical ability to perform cleaning tasks",
    ],
  },
  {
    title: "Team Leader",
    location: "New York, NY",
    type: "Full-time",
    salary: "$20-25/hour",
    description: "Lead a team of cleaning professionals and ensure quality service delivery.",
    requirements: [
      "2+ years cleaning experience",
      "Leadership skills",
      "Valid driver's license",
      "Bilingual preferred",
    ],
  },
  {
    title: "Operations Manager",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$50,000-65,000/year",
    description: "Oversee daily operations and manage multiple cleaning teams in your region.",
    requirements: [
      "5+ years management experience",
      "Bachelor's degree preferred",
      "Strong communication skills",
      "Operations experience",
    ],
  },
  {
    title: "Customer Service Representative",
    location: "Remote",
    type: "Full-time",
    salary: "$16-20/hour",
    description: "Provide excellent customer service and support to our clients via phone and email.",
    requirements: [
      "Customer service experience",
      "Excellent communication",
      "Computer proficiency",
      "Problem-solving skills",
    ],
  },
  {
    title: "Sales Representative",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$40,000-60,000/year + Commission",
    description: "Generate new business and maintain relationships with existing commercial clients.",
    requirements: ["Sales experience", "Self-motivated", "Valid driver's license", "CRM experience preferred"],
  },
  {
    title: "Quality Inspector",
    location: "Houston, TX",
    type: "Part-time",
    salary: "$18-22/hour",
    description: "Ensure our cleaning standards are met through regular quality inspections.",
    requirements: [
      "Attention to detail",
      "Reliable transportation",
      "Communication skills",
      "Cleaning experience preferred",
    ],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2a738d] py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Join Our Team</h1>
              <p className="text-xl text-white/90 mb-8">
                Build a rewarding career with Mopzilla. We offer competitive benefits, growth opportunities, and a
                supportive work environment.
              </p>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">
                View Open Positions
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Join our team"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our employees because they take care of our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current job opportunities and find the perfect role for you
            </p>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {position.salary}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#2a738d] rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-[#2a738d] hover:bg-[#236073] text-white px-6">Apply Now</Button>
                    <Button variant="outline" className="border-[#2a738d] text-[#2a738d] hover:bg-[#2a738d]/10 px-6">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to join our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application through our online portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Interview</h3>
              <p className="text-gray-600 text-sm">Initial phone screening with our HR team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">In-Person Interview</h3>
              <p className="text-gray-600 text-sm">Meet with the local team manager</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start Working</h3>
              <p className="text-gray-600 text-sm">Begin your career with comprehensive training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#2a738d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Career?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied employees who have built successful careers with Mopzilla
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-lg">Apply Today</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2a738d] px-8 py-3 text-lg"
            >
              Contact HR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
