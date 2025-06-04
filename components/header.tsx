"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Search, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import QuoteButton from "./quote-button"

const services = [
  { name: "House Cleaning", href: "/services/house-cleaning" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Industrial Cleaning", href: "/services/industrial-cleaning" },
]

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="bg-slate-700 text-white">
      {/* Top contact bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-end items-center text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1-561-7976704</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@mopzilla.cleaning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo positioned lower */}
            <div className="absolute left-4 lg:left-4 top-0 transform -translate-y-1/4 z-10">
              <Link href="/">
                <Image
                  src="/images/mopzilla-logo.png"
                  alt="Mopzilla Cleaning"
                  width={180}
                  height={120}
                  className="w-auto h-auto"
                />
              </Link>
            </div>

            <div className="flex items-center gap-8 mb-4 lg:mb-0 mt-16 lg:mt-0 lg:ml-48">
              <nav className="hidden lg:flex items-center gap-6">
                {/* Services Dropdown */}
                {/* <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button 
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                    SERVICES
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-[#2a738d] hover:text-white transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div> */}

                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
                <Link href="/services/house-cleaning" className="hover:text-yellow-400 transition-colors">
                  House Cleaning
                </Link>
                <Link href="/services/office-cleaning" className="hover:text-yellow-400 transition-colors">
                  Office Cleaning
                </Link>
                <Link href="/services/industrial-cleaning" className="hover:text-yellow-400 transition-colors">
                  Industrial Cleaning
                </Link>
                <Link href="/services" className="hover:text-yellow-400 transition-colors">
                  Services
                </Link>
                
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <QuoteButton className="bg-[#2a738d] text-white hover:bg-[#236073] font-semibold px-6">
                GET QUOTE
              </QuoteButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
