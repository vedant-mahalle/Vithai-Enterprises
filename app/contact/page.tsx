"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Get in touch with us for all your automotive repair needs
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-4"
                      >
                        <div>
                          <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Label htmlFor="service" className="text-gray-700 dark:text-gray-300">
                          Service Needed
                        </Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="">Select a service</option>
                          <option value="engine-repair">Engine Repair</option>
                          <option value="brake-service">Brake Service</option>
                          <option value="oil-change">Oil Change</option>
                          <option value="diagnostics">Diagnostics</option>
                          <option value="electrical">Electrical Service</option>
                          <option value="ac-heating">AC & Heating</option>
                          <option value="transmission">Transmission</option>
                          <option value="suspension">Suspension</option>
                          <option value="maintenance">General Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="Please describe your vehicle issue or service needs..."
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Main Street
                          <br />
                          Anytown, ST 12345
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">(555) 123-4567</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">info@autofixworkshop.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Hours</h3>
                        <div className="text-gray-600 dark:text-gray-300">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 8:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <MessageCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Need Immediate Help?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Chat with us directly on WhatsApp for quick assistance
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            className="bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                          >
                            <a
                              href="https://wa.me/1234567890?text=Hi, I need help with my car repair"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              WhatsApp Us
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">Find Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                          <MapPin className="h-12 w-12 mx-auto mb-2" />
                        </motion.div>
                        <p>Interactive Map</p>
                        <p className="text-sm">123 Main Street, Anytown, ST 12345</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
