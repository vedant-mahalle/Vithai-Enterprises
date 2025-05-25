import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Clock, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const keyServices = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair services",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Service",
      description: "Fast oil changes and routine maintenance",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Brake Service",
      description: "Professional brake inspection and repair",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <Image
            src="https://img.freepik.com/free-photo/hands-mechanic-servicing-car_1170-1242.jpg?ga=GA1.1.1407686297.1748101516&semt=ais_hybrid&w=740"
            alt="Car repair workshop"
            fill
            className="object-cover opacity-70 "
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Car Repair Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional automotive repair with over years of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-gray-700 hover:bg-white hover:text-gray-900"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive automotive repair services with quality you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About AutoFix Workshop</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in automotive repair, AutoFix Workshop has been serving the community
                with reliable, honest, and professional car repair services.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our certified technicians use state-of-the-art equipment and genuine parts to ensure your vehicle runs
                smoothly and safely.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>

              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative h-96">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipMaWmKPh4udMI94dBcJfywBTN08tiH8dCogrWnB=s398-k-no"
                alt="Workshop interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Car Fixed?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free estimate and experience our professional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-black text-white hover:bg-gray-800 hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-gray-700 hover:bg-white hover:text-blue-600"
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
