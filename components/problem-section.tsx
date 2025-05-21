import { TiredStudentSVG } from "@/components/svg/tired-student"

export function ProblemSection() {
  return (
    <section id="problem" className="mb-24 scroll-mt-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">The Problem</h2>
          <p className="mb-4 text-lg text-gray-600">
            Students today face numerous challenges in their educational journey. Long commutes, heavy backpacks, and
            traffic congestion add unnecessary stress to their daily routine.
          </p>
          <p className="mb-4 text-lg text-gray-600">
            The physical and mental toll of these challenges can significantly impact a student's ability to focus and
            perform well academically.
          </p>
          <p className="text-lg text-gray-600">
            Many students lack access to convenient, comfortable learning spaces that can accommodate their needs and
            provide a conducive environment for studying.
          </p>
        </div>
        {/* <div className="order-1 flex justify-center md:order-2">
          <div className="w-full max-w-md">
            <TiredStudentSVG />
          </div>
        </div> */}
      </div>
    </section>
  )
}
