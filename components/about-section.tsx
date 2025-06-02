import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Loaded with Professional and Honest Cleaners",
  "Provide the Finest Cleaning Supplies",
  "100% Satisfaction Cleaning Service",
  "We are bonded and insured",
]

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative curved shape */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M198.904 0.559143C156.081 40.5592 120.904 120.559 142.904 220.559C164.904 320.559 40.9036 400.559 4.90356 480.559C-31.0964 560.559 28.9036 640.559 100.904 720.559C172.904 800.559 198.904 800.559 198.904 800.559"
            stroke="#2a738d"
            strokeWidth="80"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side with overlapping images */}
<div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[420px]">
  {/* Back blue box */}

  {/* Back yellow box */}
  
  {/* Top image */}
  <div className="absolute overflow-hidden">
    <Image
      src="/about.png"
      alt="Professional cleaner"
      width={220}
      height={220}
      className="w-full h-full"
    />
  </div>
  {/* Bottom image */}
</div>

          {/* Right side with content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-[#2a738d] font-medium">ABOUT US</p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Best Cleaning Services
              <br />
              Provider Since 2001
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper
              malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor.
            </p>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#2a738d] rounded-md flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3 rounded-md">More About Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
