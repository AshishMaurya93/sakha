import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-16">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Sakha: Buddy to Your Study</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
              Making education accessible and enjoyable for every student
            </p>
          </div>

          <ProblemSection />
          <SolutionSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
