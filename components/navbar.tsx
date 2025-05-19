import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            Sakha
          </Link>
        </div>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#problem" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            The Problem
          </Link>
          <Link href="#solution" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            The Solution
          </Link>
        </nav>
        <Button variant="outline" className="rounded-full">
          Learn More
        </Button>
      </div>
    </header>
  )
}
