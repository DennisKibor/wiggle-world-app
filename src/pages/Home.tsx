import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Database, 
  BarChart3, 
  FileSearch, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Lightbulb,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

const Home = () => {
  const coreServices = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "E-Solutions",
      description: "Digital tools and platforms for businesses",
      features: ["Custom Software", "Web Applications", "Digital Transformation"]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Entry & Management",
      description: "Accurate and efficient data handling",
      features: ["Data Processing", "Database Management", "Quality Assurance"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Data Analysis & Insights",
      description: "Turning data into actionable results",
      features: ["Analytics", "Business Intelligence", "Reporting"]
    },
    {
      icon: <FileSearch className="w-12 h-12 text-primary" />,
      title: "Research Services",
      description: "In-depth, reliable research for growth",
      features: ["Market Research", "Academic Research", "Industry Analysis"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Digital Literacy for Schools",
      description: "Training programs for educators and students",
      features: ["Teacher Training", "Student Programs", "Technology Integration"]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Expertise",
      description: "Years of experience in digital transformation"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation", 
      description: "Cutting-edge solutions for modern challenges"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Client-Centric",
      description: "Tailored solutions focused on your success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
            <a href="/" className="text-primary font-medium">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
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
      <section className="hero-gradient text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Businesses & Schools<br />
            <span className="text-accent">with Smart Digital Solutions</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Transform your operations with cutting-edge technology, data-driven insights, 
            and comprehensive digital literacy programs designed for the modern world.
          </p>
          <Button size="lg" className="accent-gradient text-lg px-8 py-6">
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your growth and enhance your capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer">
                <CardHeader>
                  <div className="mb-4 p-4 bg-secondary rounded-full w-fit mx-auto group-hover:bg-accent/10 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DoviEnterprise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose DoviEnterprise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in digital transformation with proven expertise and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="tech-card text-center">
                <CardContent className="pt-8">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Success Story</h2>
            <p className="text-lg text-muted-foreground">
              See how we've helped organizations achieve their digital transformation goals
            </p>
          </div>

          <Card className="professional-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-accent/10 text-accent">Case Study</Badge>
                  <h3 className="text-2xl font-bold mb-4">Digital Transformation for Regional School District</h3>
                  <p className="text-muted-foreground mb-6">
                    We implemented comprehensive digital literacy programs across 15 schools, 
                    training over 200 teachers and 3,000 students in essential digital skills, 
                    resulting in a 40% improvement in technology proficiency scores.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Teachers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Improvement</div>
                    </div>
                  </div>
                  <Button className="accent-gradient">
                    View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-secondary rounded-lg p-8 text-center">
                  <GraduationCap className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-sm italic">
                      "DoviEnterprise transformed our approach to digital education. 
                      The results exceeded our expectations."
                    </blockquote>
                    <p className="text-xs text-muted-foreground">
                      - Dr. Sarah Johnson, Superintendent
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 tech-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses and schools that have already transformed their operations with our solutions
          </p>
          <Button size="lg" className="accent-gradient text-lg px-8 py-6">
            Work With Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
                Empowering businesses and schools with innovative digital solutions, 
                data services, and comprehensive training programs for sustainable growth.
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

export default Home;