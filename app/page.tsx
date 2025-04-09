"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  Brain,
  Layers,
  Code,
  Laptop,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  User,
  DollarSign,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1A1E2E] via-[#1E2235] to-[#1A1E2E] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#3CBFB4]/10 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-[#3CBFB4]/10 blur-3xl"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#3CBFB4]/50"
              initial={{
   
                scale: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
  

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-12 pb-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <Sparkles className="h-10 w-10 text-[#3CBFB4]" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CBFB4] via-[#4ECDC4] to-white text-center">
            I.A.
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-[#3CBFB4] mt-4 mb-12 text-center max-w-3xl"
        >
          Del Hype a la Herramienta Práctica
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mb-12 max-w-4xl w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/20 to-[#3CBFB4]/20 rounded-xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <p className="text-lg text-white/90 leading-relaxed">
              Únete a nosotros en este curso práctico donde aprenderás a dominar los Modelos de Lenguaje Largo (LLMs) y
              a implementarlos en tus flujos de trabajo de manufactura. Desde conceptos básicos hasta integraciones
              avanzadas, descubrirás cómo la IA puede transformar la manera en que trabajas, individual y
              colectivamente.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2"
          >
            <Calendar className="h-5 w-5 text-[#3CBFB4]" />
            <span>24 de Abril, 2025</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2"
          >
            <MapPin className="h-5 w-5 text-[#3CBFB4]" />
            <span>Do it! Business Center, Tijuana</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2"
          >
            <Clock className="h-5 w-5 text-[#3CBFB4]" />
            <span>9:00 AM - 12:00 PM</span>
          </motion.div>
        </div>
      </section>

      {/* Presenter Section */}
      <section className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/30 to-[#3CBFB4]/30 rounded-xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#3CBFB4]/20 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-[#3CBFB4]/20 to-[#3CBFB4]/20 backdrop-blur-sm rounded-full p-1 border border-white/10 overflow-hidden h-40 w-40">
                    <div className="bg-[#3CBFB4]/30 h-full w-full rounded-full flex items-center justify-center">
                      <img src="/me.jpeg" alt="Andrés González Wong" className="h-32 w-32 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/4">
                <h2 className="text-3xl font-bold mb-2 text-white">Impartido por</h2>
                <h3 className="text-2xl font-bold mb-4 text-[#3CBFB4]">Andrés González Wong</h3>
                <p className="text-white/80 mb-6">
                  Experto en Inteligencia Artificial aplicada a procesos, con amplia
                  experiencia en la implementación de soluciones tecnológicas para optimizar flujos de trabajo y
                  aumentar la productividad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                    Especialista en LLMs
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">Consultor de IA</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                    Innovación Tecnológica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Course Overview */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Lo Que Aprenderás
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/20 to-[#3CBFB4]/20 rounded-xl blur-xl"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col">
              <div className="bg-[#3CBFB4]/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-[#3CBFB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fundamentos de LLMs</h3>
              <p className="text-white/80 mb-4 flex-grow">
                Comprende qué son los Modelos de Lenguaje Largo, cómo funcionan y por qué están revolucionando la forma
                en que interactuamos con la tecnología en entornos industriales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Tokens y Parámetros</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Ventanas de Contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Prompt Engineering</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/20 to-[#3CBFB4]/20 rounded-xl blur-xl"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col">
              <div className="bg-[#3CBFB4]/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-[#3CBFB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aplicaciones Avanzadas</h3>
              <p className="text-white/80 mb-4 flex-grow">
                Explora técnicas avanzadas y arquitecturas que permiten crear soluciones sofisticadas basadas en IA para
                resolver problemas complejos en la manufactura.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Sistemas SMA (Agentes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">RAG (Retrieval Augmented Generation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Fine-tuning y Personalización</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/20 to-[#3CBFB4]/20 rounded-xl blur-xl"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col">
              <div className="bg-[#3CBFB4]/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-[#3CBFB4]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integración Práctica</h3>
              <p className="text-white/80 mb-4 flex-grow">
                Aprende a integrar LLMs en tus aplicaciones y flujos de trabajo de manufactura para automatizar tareas y
                potenciar la productividad.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">APIs y Conectores</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Automatización de Procesos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#3CBFB4] mt-2"></div>
                  <span className="text-white/70 text-sm">Casos de Uso Industriales</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="relative z-10 container mx-auto px-4 py-16 bg-gradient-to-br from-[#1A1E2E]/50 to-[#1E2235]/50 backdrop-blur-sm rounded-3xl border border-white/5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Estructura del Curso
        </motion.h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="bg-[#3CBFB4]/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 md:mt-2">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-[#3CBFB4]">Etapa 1: Conceptos Básicos de la IA</h3>
              <p className="text-white/80 mb-4">
                Introducción a los fundamentos de los LLMs y cómo interactuar con ellos de manera efectiva en entornos
                de manufactura.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Comprensión de tokens, parámetros y ventanas de contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Técnicas de prompt engineering aplicables a cualquier LLM</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Optimización de instrucciones para obtener resultados precisos</span>
                </li>
              </ul>
              <div className="mt-4 bg-[#1A1E2E]/50 rounded-lg p-3 border border-[#3CBFB4]/20">
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#3CBFB4]" />
                  <span className="text-[#3CBFB4] font-medium">Laboratorio Práctico:</span>
                </div>
                <p className="text-white/70 text-sm mt-1">
                  Creación de prompts efectivos y experimentación con diferentes modelos de lenguaje.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="bg-[#3CBFB4]/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 md:mt-2">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-[#3CBFB4]">
                Etapa 2: Conceptos Avanzados y Aplicaciones
              </h3>
              <p className="text-white/80 mb-4">
                Exploración de técnicas avanzadas y arquitecturas para crear soluciones sofisticadas basadas en IA para
                la manufactura.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Sistemas multi-agente (SMA) para tareas complejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">
                    Retrieval Augmented Generation (RAG) para información contextual
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Personalización de modelos para necesidades específicas</span>
                </li>
              </ul>
              <div className="mt-4 bg-[#1A1E2E]/50 rounded-lg p-3 border border-[#3CBFB4]/20">
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#3CBFB4]" />
                  <span className="text-[#3CBFB4] font-medium">Laboratorio Práctico:</span>
                </div>
                <p className="text-white/70 text-sm mt-1">
                  Implementación de un sistema RAG simple y configuración de agentes para tareas específicas.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="bg-[#3CBFB4]/20 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 md:mt-2">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex-grow">
              <h3 className="text-2xl font-semibold mb-3 text-[#3CBFB4]">
                Etapa 3: Integración en Entornos de Trabajo
              </h3>
              <p className="text-white/80 mb-4">
                Aplicación práctica de los conceptos aprendidos en flujos de trabajo y procesos industriales reales.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Integración con APIs y herramientas existentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Automatización de procesos mediante IA generativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                  <span className="text-white/80">Implementación de soluciones en entornos industriales</span>
                </li>
              </ul>
              <div className="mt-4 bg-[#1A1E2E]/50 rounded-lg p-3 border border-[#3CBFB4]/20">
                <div className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-[#3CBFB4]" />
                  <span className="text-[#3CBFB4] font-medium">Laboratorio Práctico:</span>
                </div>
                <p className="text-white/70 text-sm mt-1">
                  Desarrollo de un flujo de trabajo automatizado que integre IA con herramientas de manufactura.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location and Price */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/30 to-[#3CBFB4]/30 rounded-xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-white">Ubicación</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#3CBFB4] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#3CBFB4]">Do it! Business Center</h3>
                    <p className="text-white/80">José Clemente Orozco 10093-1A</p>
                    <p className="text-white/80">Zona Urbana Río Tijuana, 22010 Tijuana, B.C.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-[#3CBFB4] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#3CBFB4]">Fecha</h3>
                    <p className="text-white/80">24 de Abril, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-[#3CBFB4] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#3CBFB4]">Horario</h3>
                    <p className="text-white/80">Registro: 8:45 AM</p>
                    <p className="text-white/80">Evento: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/30 to-[#3CBFB4]/30 rounded-xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-white">Inversión</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-[#3CBFB4] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#3CBFB4]">Socios</h3>
                    <p className="text-white text-xl font-bold">$1,500 + IVA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-[#3CBFB4] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#3CBFB4]">No Socios</h3>
                    <p className="text-white text-xl font-bold">$2,500 + IVA</p>
                  </div>
                </div>
                <div className="bg-[#1A1E2E]/50 rounded-lg p-4 border border-[#3CBFB4]/20 mt-4">
                  <p className="text-white/80 text-sm">
                    El precio incluye acceso completo al curso y materiales digitales.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3CBFB4]/30 to-[#3CBFB4]/30 rounded-xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Más Información</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-[#3CBFB4]">Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-[#3CBFB4] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium">Eliot Cisneros</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#3CBFB4] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80">ecisneros@indexzonacostabc.org.mx</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#3CBFB4] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80">Cel: 6631270820</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-[#3CBFB4]">¿Por qué asistir?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                    <span className="text-white/80">Aprende a implementar IA en procesos de manufactura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                    <span className="text-white/80">Optimiza flujos de trabajo con tecnologías de vanguardia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#3CBFB4] flex-shrink-0" />
                    <span className="text-white/80">Networking con profesionales del sector</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1A1E2E]/50 to-[#1E2235]/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Manufactura con IA?
          </h2>
          <p className="text-xl text-[#3CBFB4] mb-8 max-w-3xl mx-auto">
            Únete a nosotros y descubre cómo la IA puede potenciar tus procesos industriales y flujos de trabajo.
          </p>
          <a href="tel:6631270820" className="bg-[#3CBFB4] hover:bg-[#2EA89E] text-white text-lg px-8 py-6 rounded-xl mb-6">
            Reserva tu Lugar Ahora
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#1A1E2E]/80 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2025 INDEX Zona Costa BC. Todos los derechos reservados. Landing page generada completamente con IA</p>
          <div className="flex justify-center gap-4 mt-4">
      
          </div>
        </div>
      </footer>
    </main>
  )
}
