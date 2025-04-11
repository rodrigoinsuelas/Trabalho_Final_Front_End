"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Scale, Briefcase, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-500">
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
                    Serviços Jurídicos Especializados
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    Assessoria jurídica completa para pessoas físicas e jurídicas em diversas áreas do direito.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    Agendar Consulta
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
                <Image src="/placeholder.svg" alt="Equipe jurídica" fill className="object-cover" priority />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Áreas de Atuação</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos assessoria jurídica especializada em diversas áreas do direito.
                </p>
              </div>
            </div>

            <Tabs defaultValue="civil" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="civil">Direito Cível</TabsTrigger>
                <TabsTrigger value="labor">Direito Trabalhista</TabsTrigger>
                <TabsTrigger value="family">Direito de Família</TabsTrigger>
              </TabsList>
              <TabsContent value="civil" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <Scale className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold">Contratos</h3>
                    <p className="text-muted-foreground mt-2">
                      Elaboração, análise e revisão de contratos civis e comerciais para proteger seus interesses.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <h3 className="text-xl font-bold">Responsabilidade Civil</h3>
                    <p className="text-muted-foreground mt-2">
                      Representação em casos de danos morais, materiais e indenizações por acidentes.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <h3 className="text-xl font-bold">Direito do Consumidor</h3>
                    <p className="text-muted-foreground mt-2">
                      Defesa dos seus direitos em relações de consumo, contra práticas abusivas.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent value="labor" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <Briefcase className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold">Reclamações Trabalhistas</h3>
                    <p className="text-muted-foreground mt-2">
                      Representação em processos trabalhistas, defendendo seus direitos como empregado ou empregador.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                    <h3 className="text-xl font-bold">Contratos de Trabalho</h3>
                    <p className="text-muted-foreground mt-2">
                      Elaboração e análise de contratos de trabalho, termos de rescisão e acordos coletivos.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    <h3 className="text-xl font-bold">Direitos Previdenciários</h3>
                    <p className="text-muted-foreground mt-2">
                      Assessoria em questões relacionadas à aposentadoria, benefícios e direitos previdenciários.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
              <TabsContent value="family" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <motion.div whileHover={{ y: -5 }} className="rounded-lg border bg-card p-6 shadow-sm">
                    <FileText className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="text-xl font-bold">Divórcio e Separação</h3>
                    <p className="text-muted-foreground mt-2">
                      Assessoria jurídica em processos de divórcio, separação e dissolução de união estável.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <h3 className="text-xl font-bold">Guarda e Pensão</h3>
                    <p className="text-muted-foreground mt-2">
                      Representação em processos de guarda de filhos, regulamentação de visitas e pensão alimentícia.
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
                      className="h-12 w-12 text-purple-500 mb-4"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    <h3 className="text-xl font-bold">Inventário e Sucessões</h3>
                    <p className="text-muted-foreground mt-2">
                      Assessoria em processos de inventário, partilha de bens e planejamento sucessório.
                    </p>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                  Nosso Especialista
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Rodrigo Insuelas</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Com mais de 15 anos de experiência jurídica, Rodrigo lidera nossa equipe de advogados com expertise em
                  diversas áreas do direito, oferecendo soluções jurídicas eficientes e personalizadas.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Especialista em Direito Civil e Trabalhista</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Mestre em Direito Empresarial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span>Experiência em Contencioso de Massa</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-purple-600 hover:bg-purple-700">Fale com o Rodrigo</Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full overflow-hidden rounded-xl"
              >
                <Image src="/placeholder.svg" alt="Rodrigo Insuelas" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tire suas dúvidas sobre nossos serviços jurídicos.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona a primeira consulta?</AccordionTrigger>
                  <AccordionContent>
                    A primeira consulta é uma oportunidade para conhecermos seu caso e avaliarmos as melhores
                    estratégias jurídicas. Durante essa consulta, você poderá expor seu problema, tirar dúvidas e
                    receber uma análise preliminar da situação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Quais são os custos dos serviços jurídicos?</AccordionTrigger>
                  <AccordionContent>
                    Os custos variam de acordo com a complexidade do caso e o tipo de serviço jurídico necessário.
                    Trabalhamos com diferentes modalidades de honorários, incluindo valor fixo, por hora ou percentual
                    sobre o êxito. Na primeira consulta, apresentaremos uma proposta de honorários transparente e
                    adequada ao seu caso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Quanto tempo leva um processo judicial?</AccordionTrigger>
                  <AccordionContent>
                    O tempo de duração de um processo judicial varia conforme a complexidade do caso, a região onde
                    tramita e o tipo de ação. Alguns processos podem ser resolvidos em meses, enquanto outros podem
                    levar anos. Durante nossa assessoria, manteremos você informado sobre o andamento e as expectativas
                    de prazo do seu processo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Vocês atendem empresas de todos os portes?</AccordionTrigger>
                  <AccordionContent>
                    Sim, atendemos desde microempreendedores individuais até grandes empresas. Nossa equipe está
                    preparada para oferecer soluções jurídicas personalizadas de acordo com o porte e as necessidades
                    específicas de cada negócio.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>É possível resolver meu caso sem ir a juízo?</AccordionTrigger>
                  <AccordionContent>
                    Sim, sempre buscamos soluções extrajudiciais quando possível, como mediação, conciliação e
                    negociação. Essas alternativas geralmente são mais rápidas e menos custosas. Avaliamos cada caso
                    individualmente para recomendar a melhor estratégia.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Precisa de assessoria jurídica?
                </h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco hoje mesmo para uma consulta inicial.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Agendar Consulta
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
