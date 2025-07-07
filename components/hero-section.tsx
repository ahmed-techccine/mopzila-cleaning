import { Button } from "@/components/ui/button"
import Image from "next/image"
import QuoteButton from "./quote-button"
import Script from "next/script"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-700 leading-tight">
              You deserve a clean, 
              <br />
              beautiful
              House
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Delivering Expert Commercial Cleaning Services Facility and Everyone In It
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <QuoteButton className="bg-[#2a738d] hover:bg-[#236073] text-white px-8 py-3 text-lg">
                GET FREE ESTIMATE
              </QuoteButton>
              <a href="/about">
                <Button
                  variant="outline"
                  className="border-[#2a738d] text-[#2a738d] hover:bg-[#2a738d]/10 px-8 py-3 text-lg"
                >
                  LEARN MORE ABOUT US
                </Button>
              </a>
            </div>
            {/* Estimatty Widget */}
            <div id="estimatty-div"></div>
          </div>
          <div className="relative">
            <Image
              src="/hero.png"
              alt="Professional cleaner in yellow gloves cleaning surface"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <Script id="estimatty-widget" strategy="afterInteractive">
        {`
          (function(d,s,i,a,t){
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
            j.async=true;
            j.src='https://w.estimatty.com/cdn/estimatty.js';
            j.dataset.i=i;
            j.dataset.a=a;
            f.parentNode.insertBefore(j,f);
          })(document,'script','pq.hm4xf9pTG2TcFO2Gv6Vu','pq.miRG2ACipka8AMJptVqS');
        `}
      </Script>
    </section>
  )
}