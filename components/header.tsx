import { Phone, Mail, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-slate-700 text-white">
      {/* Top contact bar */}
      <div className="bg-slate-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>PHONE: 1-800-MOPZILLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>EMAIL: info@mopzilla.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>FIND A LOCATION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo positioned lower */}
            <div className="absolute left-5 lg:left-5 top-0 transform -translate-y-1/4.5 z-10">
              <Link href="/">
                <Image
                  src="/images/mopzilla-logo.png"
                  alt="Mopzilla Cleaning"
                  width={150}
                  height={50}
                  className=""
                />
              </Link>
            </div>

            <div className="flex items-center gap-8 mb-4 lg:mb-0 mt-16 lg:mt-0 lg:ml-48">
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/services" className="hover:text-yellow-400 transition-colors">
                  SERVICES
                </Link>
                <Link href="/sectors" className="hover:text-yellow-400 transition-colors">
                  SECTORS
                </Link>
                <Link href="/franchising" className="hover:text-yellow-400 transition-colors">
                  FRANCHISING
                </Link>
                <Link href="/find-a-team" className="hover:text-yellow-400 transition-colors">
                  FIND A TEAM
                </Link>
                <Link href="/careers" className="hover:text-yellow-400 transition-colors">
                  CAREERS
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <Button className="bg-[#2a738d] text-white hover:bg-[#236073] font-semibold px-6">GET QUOTE</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
