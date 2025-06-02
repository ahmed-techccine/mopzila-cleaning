import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Newsletter section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-teal-600 rounded-full"></div>
              ))}
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">SUBSCRIBE</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="space-y-4">
              <div>
                <Image
                  src="/images/mopzilla-logo.png"
                  alt="Mopzilla Cleaning"
                  width={150}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading commercial cleaning company providing exceptional cleaning services to businesses across the
                country for over 20 years.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Franchising
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Office Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Healthcare Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Industrial Cleaning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Retail Spaces
                  </a>
                </li>
              </ul>
            </div>

            {/* Let's Talk */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Let's Talk</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">1-800-MOPZILLA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">info@mopzilla.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">Find a Location</span>
                </div>
              </div>
              <div className="fixed bottom-6 right-6 z-50">
                <Button size="icon" className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full">
                  <MessageCircle className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Mopzilla. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
