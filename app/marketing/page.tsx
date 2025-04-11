"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageSquare, PenTool, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-rose-500">
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
                    Serviços de Marketing & Conteúdo
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Estratégias personalizadas para impulsionar sua marca e aumentar sua presença digital.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-pink-600 hover:bg-gray-100">
                    Agendar Consultoria
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-[400px] w-full overflow-hidden rounded-xl"
              >
                <Image src="/placeholder.svg" alt="Equipe de marketing" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Serviços de Marketing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos soluções completas para impulsionar sua marca e aumentar sua presença digital.
                </p>
              </div>
            </div>

            <Tabs defaultValue="digital" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="digital">Marketing Digital</TabsTrigger>
                <TabsTrigger value="content">Produção de Conteúdo</TabsTrigger>
                <TabsTrigger value="social">Mídias Sociais</TabsTrigger>
              </TabsList>
              <TabsContent value="digital" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <TrendingUp className="h-12 w-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold">SEO & SEM</h3>
                    <p className="text-muted-foreground mt-2">
                      Otimização para mecanismos de busca e gestão de campanhas pagas para aumentar sua visibilidade
                      online.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 17V9l7 4-7 4Z" />
                    </svg>
                    <h3 className="text-xl font-bold">Marketing de Conteúdo</h3>
                    <p className="text-muted-foreground mt-2">
                      Criação de conteúdo relevante e estratégico para atrair e engajar seu público-alvo.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                    <h3 className="text-xl font-bold">Análise de Dados</h3>
                    <p className="text-muted-foreground mt-2">
                      Monitoramento e análise de métricas para otimizar suas estratégias de marketing.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent value="content" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <PenTool className="h-12 w-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold">Copywriting</h3>
                    <p className="text-muted-foreground mt-2">
                      Criação de textos persuasivos para seu site, blog, e-mails e materiais promocionais.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <path d="M2 12h5" />
                      <path d="M17 12h5" />
                      <path d="M12 2v5" />
                      <path d="M12 17v5" />
                      <path d="m4.93 4.93 3.54 3.54" />
                      <path d="m15.54 15.54 3.54 3.54" />
                      <path d="m15.54 4.93-3.54 3.54" />
                      <path d="m4.93 15.54 3.54-3.54" />
                    </svg>
                    <h3 className="text-xl font-bold">Design Gráfico</h3>
                    <p className="text-muted-foreground mt-2">
                      Criação de materiais visuais atrativos para suas campanhas de marketing.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M2 15h10" />
                      <path d="m9 18 3-3-3-3" />
                    </svg>
                    <h3 className="text-xl font-bold">E-books e Whitepapers</h3>
                    <p className="text-muted-foreground mt-2">
                      Desenvolvimento de materiais ricos para geração de leads e autoridade no mercado.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent value="social" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <MessageSquare className="h-12 w-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold">Gestão de Redes Sociais</h3>
                    <p className="text-muted-foreground mt-2">
                      Criação e gerenciamento de conteúdo para suas redes sociais, aumentando seu engajamento.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
                      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                      <path d="M17 7v.01" />
                    </svg>
                    <h3 className="text-xl font-bold">Campanhas Pagas</h3>
                    <p className="text-muted-foreground mt-2">
                      Criação e gestão de campanhas pagas em redes sociais para aumentar seu alcance.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
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
                      className="h-12 w-12 text-pink-500 mb-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h3 className="text-xl font-bold">Influencer Marketing</h3>
                    <p className="text-muted-foreground mt-2">
                      Parcerias com influenciadores para ampliar o alcance da sua marca.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-pink-100 px-3 py-1 text-sm text-pink-600">
                  Nossa Especialista
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Cláudia Mateus</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Com mais de 10 anos de experiência em marketing digital, Cláudia lidera nossa equipe de marketing com
                  expertise em estratégias digitais, produção de conteúdo e gestão de mídias sociais.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Especialista em Marketing Digital</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Estrategista de Conteúdo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>Gestora de Mídias Sociais</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-pink-600 hover:bg-pink-700">Fale com a Cláudia</Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full overflow-hidden rounded-xl"
              >
                <Image src="/placeholder.svg" alt="Cláudia Mateus" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça algumas das empresas que confiam em nossos serviços de marketing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex items-center justify-center p-4">
                  <Image
                    src="/placeholder.svg"
                    alt={`Cliente ${i}`}
                    width={150}
                    height={75}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Pronto para impulsionar sua marca?
                </h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco hoje mesmo para uma consultoria gratuita.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-pink-600 hover:bg-gray-100">
                  Agendar Consultoria
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Voltar para Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
