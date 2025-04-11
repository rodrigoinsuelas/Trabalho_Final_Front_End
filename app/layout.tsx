import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Link from "next/link"
import { Mountain } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consultoria Integrada",
  description: "Serviços de marketing e consultoria jurídica em um só lugar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Mountain className="h-6 w-6" />
                  <span className="font-bold">Consultoria Integrada</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/marketing" className="text-sm font-medium hover:underline underline-offset-4">
                    Marketing
                  </Link>
                  <Link href="/legal" className="text-sm font-medium hover:underline underline-offset-4">
                    Jurídico
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    Contato
                  </Link>
                </nav>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} Consultoria Integrada. Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    Termos
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    Privacidade
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                    Contato
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'