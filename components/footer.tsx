import Link from "next/link"
import { Wrench, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">AutoFix Workshop</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional automotive repair services with over 10+ years of experience. Your trusted partner for
              reliable, honest car repair.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  <a href="tel:8329234454" target="_blank" rel="noopener noreferrer">8329234454</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vedantmahalle39@gmail.com" target="_blank" rel="noopener noreferrer">vedantmahalle39@gmail.com</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Vithai Enterprises, near hotel shorywada, Kunjirwadi, Loni Kalbhor, Maharashtra 412201</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Mon - Fri: 9:30 AM - 7:30 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Saturday-Sunday: 9:30 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 AutoFix Workshop. All rights reserved.</p>
          <p className="text-gray-400">Contact the developer <a href="https://" className="text-blue-400 hover:text-white transition-colors">Vedant Mahalle</a></p>
        </div>
      </div>
    </footer>
  )
}
