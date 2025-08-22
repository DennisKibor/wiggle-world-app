import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "Continuously pushing boundaries to deliver cutting-edge solutions that drive progress."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Integrity", 
      description: "Building trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Impact",
      description: "Creating meaningful change that transforms businesses and empowers communities."
    }
  ];

  const team = [
    {
      name: "David Okoye",
      role: "Chief Executive Officer",
      description: "Visionary leader with 15+ years in digital transformation",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Data Analytics",
      description: "Expert in turning complex data into actionable business insights",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Director of E-Solutions",
      description: "Technology architect specializing in custom digital platforms",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Education Solutions Lead",
      description: "Educational technology specialist with PhD in Digital Learning",
      image: "/api/placeholder/300/300"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Schools Transformed" },
    { number: "10+", label: "Years of Excellence" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">DE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">DoviEnterprise</h1>
              <p className="text-xs text-muted-foreground">Quality. Value. Trust.</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Get Quote</Button>
            <Button size="sm" className="accent-gradient">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About DoviEnterprise</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Pioneering digital transformation since 2014, we've been the trusted partner for businesses 
            and educational institutions seeking innovative solutions and sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 accent-gradient">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Simplifying Digital Transformation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                To simplify digital transformation for businesses and empower schools with 21st-century skills, 
                making advanced technology accessible and practical for sustainable success.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="w-12 h-12 text-accent" />
                <div>
                  <h3 className="font-semibold text-lg">Vision Statement</h3>
                  <p className="text-muted-foreground">
                    To be the global leader in accessible digital solutions that transform lives and communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="professional-card border-0 text-center">
                <CardContent className="pt-8">
                  <div className="mx-auto mb-6 p-4 bg-accent/10 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="professional-card border-0 text-center overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="professional-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 accent-gradient">Our Journey</Badge>
                  <h2 className="text-3xl font-bold text-primary mb-4">A Decade of Digital Excellence</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Founded with Purpose (2014)</h3>
                      <p className="text-muted-foreground">
                        Started as a small team with big dreams to democratize digital solutions for African businesses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Global Expansion (2018)</h3>
                      <p className="text-muted-foreground">
                        Extended services internationally, establishing partnerships across three continents.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Innovation Focus (2022)</h3>
                      <p className="text-muted-foreground">
                        Launched advanced AI-driven solutions and expanded into educational technology sector.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing family of satisfied clients and experience the DoviEnterprise difference
            </p>
            <Button size="lg" className="accent-gradient text-lg px-8">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">DE</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary">DoviEnterprise</h3>
                  <p className="text-xs text-muted-foreground">Quality. Value. Trust.</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering businesses and schools with innovative digital solutions, data services, 
                and comprehensive training programs for sustainable growth.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/services" className="hover:text-primary">E-Solutions</a></li>
                <li><a href="/services" className="hover:text-primary">Data Entry</a></li>
                <li><a href="/services" className="hover:text-primary">Data Analysis</a></li>
                <li><a href="/services" className="hover:text-primary">Research</a></li>
                <li><a href="/services" className="hover:text-primary">Digital Literacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@dovienterprise.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  123 Business Ave, Tech City
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DoviEnterprise. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;