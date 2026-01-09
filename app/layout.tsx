// layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/footer'
import Navbar from './components/navbar'

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: 'Full-Stack Developer & Game Development Student',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
      <body className="bg-slate-950 text-white">
      <Navbar />
      {children}
      <Footer />
      </body>
      </html>
  )
}