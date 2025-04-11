"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLocalStorage } from "@/hooks/use-local-storage"

export default function Home() {
  const [lastVisit, setLastVisit] = useLocalStorage("lastVisit", "")

  useEffect(() => {
    setLastVisit(new Date().toISOString())
  }, []) // Empty dependency array

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Soluções Integradas para seu Negócio
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Marketing estratégico e consultoria jurídica em um só lugar. Impulsione seu negócio com nossa
                    expertise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/marketing">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100">
                      Serviços de Marketing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/legal">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Serviços Jurídicos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] w-full overflow-hidden rounded-xl"
              >
                <Image src="/placeholder.svg" alt="Equipe de profissionais" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos soluções completas para impulsionar seu negócio e proteger seus interesses.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto my-8 relative h-[300px] w-full max-w-3xl overflow-hidden rounded-xl"
            >
              <Image
                src="/placeholder.svg"
                alt="Homem e mulher se cumprimentando com alegria em ambiente profissional"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl border bg-gradient-to-br from-pink-50 to-purple-50 p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-pink-600">Marketing & Conteúdo</h3>
                  <p className="text-muted-foreground">
                    Estratégias de marketing digital, produção de conteúdo e gestão de mídias sociais para aumentar sua
                    presença online.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-pink-500" />
                      <span>Estratégias de Marketing Digital</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-pink-500" />
                      <span>Produção de Conteúdo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-pink-500" />
                      <span>Gestão de Mídias Sociais</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">
                      Responsável: <span className="text-pink-600">Cláudia Mateus</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link href="/marketing">
                      <Button className="w-full bg-pink-600 hover:bg-pink-700">Saiba Mais</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl border bg-gradient-to-br from-purple-50 to-blue-50 p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-purple-600">Consultoria Jurídica</h3>
                  <p className="text-muted-foreground">
                    Assessoria jurídica completa para pessoas físicas e jurídicas, com atuação em diversas áreas do
                    direito.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>Direito Cível e Trabalhista</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>Direito Previdenciário e Administrativo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-500" />
                      <span>Direito de Família e Sucessões</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium">
                      Responsável: <span className="text-purple-600">Rodrigo Insuelas</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link href="/legal">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Saiba Mais</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que nos escolher?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Combinamos expertise em marketing e direito para oferecer soluções completas para seu negócio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-purple-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Proteção Completa</h3>
                <p className="text-muted-foreground">
                  Protegemos seus interesses com assessoria jurídica especializada em diversas áreas.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-pink-600"
                  >
                    <path d="M5.5 20H8M17 9l-4.5 4.5M19 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                    <path d="M8 20H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7l3 3h7a1 1 0 0 1 1 1v5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Crescimento Estratégico</h3>
                <p className="text-muted-foreground">
                  Impulsionamos seu negócio com estratégias de marketing personalizadas e eficientes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Conhecimento Integrado</h3>
                <p className="text-muted-foreground">
                  Combinamos expertise em diferentes áreas para oferecer soluções completas e eficientes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
