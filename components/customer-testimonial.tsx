import Image from "next/image"

export default function CustomerTestimonial() {
  return (
    <section className="py-16 bg-teal-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Customer testimonial"
              width={100}
              height={100}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-white mb-2">Jessica Oliver</h3>
            <p className="text-gray-200">Business Owner</p>
          </div>

          <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-8">
            "I have utilized my commercial to your team who has been servicing our facility for over 3 years now and
            they continue to exceed our expectations. Their attention to detail and professionalism is unmatched."
          </blockquote>

          <div className="flex justify-center">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
