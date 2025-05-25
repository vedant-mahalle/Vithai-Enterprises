import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Gauge, Zap, Shield, Cog, Droplets, Thermometer, Car, Settings, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Engine Repair",
      description:
        "Complete engine diagnostics, repair, and rebuilding services. We handle everything from minor tune-ups to major engine overhauls.",
      features: ["Engine diagnostics", "Timing belt replacement", "Engine rebuilding", "Performance tuning"],
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Brake Service",
      description: "Professional brake inspection, repair, and replacement to ensure your safety on the road.",
      features: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid service", "ABS diagnostics"],
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Oil Change",
      description:
        "Quick and efficient oil change service using high-quality oils and filters to keep your engine running smoothly.",
      features: ["Conventional oil", "Synthetic oil", "Filter replacement", "Fluid top-off"],
    },
    {
      icon: <Gauge className="h-12 w-12 text-blue-600" />,
      title: "Diagnostics",
      description:
        "Advanced computer diagnostics to identify and resolve complex automotive issues quickly and accurately.",
      features: ["Check engine light", "Computer scanning", "Electrical diagnostics", "Performance analysis"],
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Electrical Service",
      description: "Complete electrical system repair including battery, alternator, starter, and wiring issues.",
      features: ["Battery testing", "Alternator repair", "Starter replacement", "Wiring repair"],
    },
    {
      icon: <Thermometer className="h-12 w-12 text-blue-600" />,
      title: "AC & Heating",
      description: "Air conditioning and heating system repair to keep you comfortable in any weather.",
      features: ["AC recharge", "Heater core repair", "Thermostat replacement", "Climate control"],
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: "Transmission",
      description: "Transmission service and repair for both automatic and manual transmissions.",
      features: ["Transmission flush", "Clutch replacement", "Gear repair", "Transmission rebuild"],
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: "Suspension",
      description: "Suspension system repair and maintenance for a smooth and safe ride.",
      features: ["Shock replacement", "Strut repair", "Alignment service", "Spring replacement"],
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: "General Maintenance",
      description: "Comprehensive maintenance services to keep your vehicle in optimal condition.",
      features: ["Tune-ups", "Filter replacement", "Fluid services", "Preventive maintenance"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive automotive repair and maintenance services to keep your vehicle running at its best
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need a Service Not Listed?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We handle a wide range of automotive repairs. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
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
