"use client"

import Link from "next/link"
import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AutoFix Workshop</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              Professional automotive repair services with over 15 years of experience. Your trusted partner for
              reliable, honest car repair.
            </p>
            <div className="space-y-2">
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">(555) 123-4567</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">info@autofixworkshop.com</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">123 Main Street, Anytown, ST 12345</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Saturday: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Sunday: Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 dark:text-gray-500">© 2024 AutoFix Workshop. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
