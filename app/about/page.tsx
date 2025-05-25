import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Clock, Shield } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Quality",
      description: "We use only the best parts and equipment to ensure lasting repairs",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Trust",
      description: "Honest pricing and transparent communication with every customer",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description: "Dependable service you can count on, delivered on time",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AutoFix Workshop</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Your trusted automotive repair partner since 2008
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                AutoFix Workshop was founded in 2008 by Mike Johnson, a passionate automotive technician with a vision
                to provide honest, reliable car repair services to the community. What started as a small garage has
                grown into a full-service automotive repair facility.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've built our reputation on quality workmanship, fair pricing, and exceptional
                customer service. Our team of certified technicians stays up-to-date with the latest automotive
                technology to serve both classic and modern vehicles.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in treating every customer like family and every vehicle with the care it deserves. That's
                why we've become the go-to choice for automotive repair in our community.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Satisfied Customers</div>
                </div>
              </div>
            </div>

            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AutoFix Workshop exterior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified technicians bring years of experience and passion for automotive excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl mb-8 text-blue-100">
            To provide exceptional automotive repair services with integrity, expertise, and a commitment to customer
            satisfaction. We strive to keep your vehicle safe, reliable, and running at its best.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Experience Our Service</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
