import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sakha: Buddy to Your Study",
  description: "Making education accessible and enjoyable for every student",
    generator: 'Ashish Maurya'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
      className={inter.className}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
