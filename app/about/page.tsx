"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Clock, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Quality",
      description: "We use only the best parts and equipment to ensure lasting repairs",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Trust",
      description: "Honest pricing and transparent communication with every customer",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Reliability",
      description: "Dependable service you can count on, delivered on time",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Excellence",
      description: "Committed to exceeding expectations in every repair",
    },
  ]

  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "Owner & Master Technician",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Davis",
      role: "Lead Mechanic",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Tom Wilson",
      role: "Diagnostic Specialist",
      experience: "8+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const workshopTools = [
    {
      name: "Diagnostic Scanner",
      description: "Advanced OBD-II diagnostic tool for accurate vehicle diagnostics",
      category: "Diagnostics Equipment",
      image: "https://img.freepik.com/free-photo/car-diagnostic-equipment_1170-1573.jpg?w=740&t=st=1711005433~exp=1711006033~hmac=6a2e4f4f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f",
    },
    {
      name: "Alignment System",
      description: "3D wheel alignment system for precise wheel balancing and alignment",
      category: "Alignment Tools",
      image: "https://img.freepik.com/free-photo/wheel-alignment-check-car-service_1303-26941.jpg?w=740&t=st=1711005461~exp=1711006061~hmac=6a2e4f4f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f",
    },
    {
      name: "Engine Analyzer",
      description: "High-tech engine analysis system for comprehensive engine diagnostics",
      category: "Engine Tools",
      image: "https://img.freepik.com/free-photo/mechanic-using-diagnostic-tool-car-engine_1170-1611.jpg?w=740&t=st=1711005486~exp=1711006086~hmac=6a2e4f4f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f9f",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      <section className="relative py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-950 dark:to-gray-800 text-white">
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
            About AutoFix Workshop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Your trusted automotive repair partner since 2008
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                AutoFix Workshop was founded in 2008 by Mike Johnson, a passionate automotive technician with a vision
                to provide honest, reliable car repair services to the community. What started as a small garage has
                grown into a full-service automotive repair facility.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Over the years, we've built our reputation on quality workmanship, fair pricing, and exceptional
                customer service. Our team of certified technicians stays up-to-date with the latest automotive
                technology to serve both classic and modern vehicles.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We believe in treating every customer like family and every vehicle with the care it deserves. That's
                why we've become the go-to choice for automotive repair in our community.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years in Business</div>
                </motion.div>
                <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Satisfied Customers</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-full">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="AutoFix Workshop exterior"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <CardContent className="p-8">
                      <motion.div
                        className="flex justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our certified technicians bring years of experience and passion for automotive excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-8">
                      <motion.div
                        className="relative w-32 h-32 mx-auto mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-300">{member.experience} experience</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Tools & Equipment
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We invest in state-of-the-art equipment to provide accurate diagnostics and reliable repairs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {workshopTools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                    <CardContent className="p-6">
                      <motion.div
                        className="relative w-full h-48 mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{tool.category}</p>
                      <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-blue-600 dark:bg-blue-700 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            To provide exceptional automotive repair services with integrity, expertise, and a commitment to customer
            satisfaction. We strive to keep your vehicle safe, reliable, and running at its best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Experience Our Service</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
