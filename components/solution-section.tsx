import { CheerfulStudentSVG } from "@/components/svg/cheerful-student"

export function SolutionSection() {
  return (
    <section id="solution" className="mb-24 scroll-mt-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <CheerfulStudentSVG />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">The Solution</h2>
          <p className="mb-4 text-lg text-gray-600">
            Sakha provides nearby learning centers where students can walk in, find a comfortable space to study, and
            access resources they need for effective learning.
          </p>
          <p className="mb-4 text-lg text-gray-600">
            Our centers are strategically located to minimize travel time and are designed to create a welcoming,
            stress-free environment that promotes focus and productivity.
          </p>
          <p className="text-lg text-gray-600">
            By eliminating the challenges of commuting with heavy bags and providing a dedicated space for learning,
            Sakha helps students concentrate on what truly matters: their education.
          </p>
        </div>
      </div>
    </section>
  )
}
