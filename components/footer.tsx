import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Sakha</h3>
            <p className="text-sm text-gray-300">Making education accessible and enjoyable for every student.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sakha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
