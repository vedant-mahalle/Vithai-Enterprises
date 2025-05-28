"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Gauge, Zap, Shield, Cog, Droplets, Thermometer, Car, Settings, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Engine Repair",
      description:
        "Complete engine diagnostics, repair, and rebuilding services. We handle everything from minor tune-ups to major engine overhauls.",
      features: ["Engine diagnostics", "Timing belt replacement", "Engine rebuilding", "Performance tuning"],
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Brake Service",
      description: "Professional brake inspection, repair, and replacement to ensure your safety on the road.",
      features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid service", "ABS diagnostics"],
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Oil Change",
      description:
        "Quick and efficient oil change service using high-quality oils and filters to keep your engine running smoothly.",
      features: ["Conventional oil", "Synthetic oil", "Filter replacement", "Fluid top-off"],
    },
    {
      icon: <Gauge className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Diagnostics",
      description:
        "Advanced computer diagnostics to identify and resolve complex automotive issues quickly and accurately.",
      features: ["Check engine light", "Computer scanning", "Electrical diagnostics", "Performance analysis"],
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Electrical Service",
      description: "Complete electrical system repair including battery, alternator, starter, and wiring issues.",
      features: ["Battery testing", "Alternator repair", "Starter replacement", "Wiring repair"],
    },
    {
      icon: <Thermometer className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "AC & Heating",
      description: "Air conditioning and heating system repair to keep you comfortable in any weather.",
      features: ["AC recharge", "Heater core repair", "Thermostat replacement", "Climate control"],
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Transmission",
      description: "Transmission service and repair for both automatic and manual transmissions.",
      features: ["Transmission flush", "Clutch replacement", "Gear repair", "Transmission rebuild"],
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Suspension",
      description: "Suspension system repair and maintenance for a smooth and safe ride.",
      features: ["Shock replacement", "Strut repair", "Alignment service", "Spring replacement"],
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "General Maintenance",
      description: "Comprehensive maintenance services to keep your vehicle in optimal condition.",
      features: ["Tune-ups", "Filter replacement", "Fluid services", "Preventive maintenance"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive automotive repair and maintenance services to keep your vehicle running at its best
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
                  <Card className="hover:shadow-lg transition-shadow h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className="flex justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Need a Service Not Listed?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            We handle a wide range of automotive repairs. Contact us to discuss your specific needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
