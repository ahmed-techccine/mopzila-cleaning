import Image from "next/image"

const workSteps = [
  {
    step: "1",
    title: "Choose a Cleaning Plan",
    description:
      "Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper.",
    image: "/process1.png",
  },
  {
    step: "2",
    title: "We Clean",
    description:
      "Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper.",
    image: "/process2.png",
  },
  {
    step: "3",
    title: "Back to comfortable",
    description:
      "Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper.",
    image: "/process3.png",
  },
]

export default function HowWeWorkSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/25 rounded-full -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#2a738d] font-medium mb-4">HOW WE WORK</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">Puresh Working Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {workSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="mb-6">
                <div className="w-16 h-16 bg-[#2a738d] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>

              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
