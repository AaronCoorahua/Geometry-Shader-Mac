"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Github, Triangle, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent" />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
              >
                <Triangle className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-zinc-400">Geometry Shaders</span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
                Geometry Shaders
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Generación dinámica de geometría mediante{" "}
                <span className="text-white font-medium">shaders programables</span>
              </p>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto"
            >
              {[
                { icon: Triangle, text: "Generación de primitivas" },
                { icon: Cpu, text: "Pipeline GPU optimizado" },
                { icon: Sparkles, text: "Geometría procedural" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <feature.icon className="w-6 h-6 mb-3 text-zinc-400" />
                  <p className="text-sm text-zinc-300">{feature.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Section - MOVED UP */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
            >
              Galería Visual
            </motion.h2>

            {/* Two large images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((num, i) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="aspect-square relative">
                      <Image
                        src={`/image${num}.png`}
                        alt={`Geometry Shader - Vista ${num}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Description Section - More Dynamic */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"
            >
              Creación Dinámica de Geometría
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="relative group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 transition-all">
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Triangle className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Geometry Pipeline</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Los geometry shaders procesan primitivas completas, permitiendo generar nueva geometría
                    a partir de puntos, líneas o triángulos de entrada.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.03, rotateY: -5 }}
                className="relative group cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl hover:border-white/20 transition-all">
                  <motion.div 
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Layers className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Generación Procedural</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Creación dinámica de mallas complejas en tiempo real mediante algoritmos procedurales
                    ejecutados directamente en la GPU.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Main description card - More dynamic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.02 }}
              className="relative cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative p-10 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Cpu className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Poder de la GPU en Acción</h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-4">
                      Los geometry shaders amplían el pipeline gráfico permitiendo la transformación y generación
                      de primitivas geométricas. Cada primitiva de entrada puede producir múltiples primitivas
                      de salida, creando efectos visuales complejos sin intervención de la CPU.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      El resultado es una <span className="text-white font-semibold">generación dinámica de mallas</span> que
                      permite efectos como explosiones, fur rendering, y visualización de normales,
                      demostrando el poder del pipeline programable de GPU.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 mb-6"
            >
              <a
                href="https://github.com/AaronCoorahua"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aaron-coorahua"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
            <p className="text-sm text-zinc-500">
              El poder del pipeline programable de GPU
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
