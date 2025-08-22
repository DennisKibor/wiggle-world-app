import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Calendar,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Us",
      details: ["info@dovienterprise.com", "support@dovienterprise.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Call Us", 
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Available Monday to Friday, 9 AM to 6 PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Visit Us",
      details: ["123 Business Avenue", "Tech City, TC 12345"],
      description: "Schedule a visit to our modern office space"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      description: "We're here when you need us most"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Avenue, Tech City, NY 12345",
      phone: "+1 (555) 123-4567",
      email: "ny@dovienterprise.com"
    },
    {
      city: "London", 
      address: "45 Innovation Street, London, UK EC1A 1BB",
      phone: "+44 (0) 20 1234 5678",
      email: "london@dovienterprise.com"
    },
    {
      city: "Lagos",
      address: "78 Technology Boulevard, Victoria Island, Lagos",
      phone: "+234 (0) 1 234 5678", 
      email: "lagos@dovienterprise.com"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Most projects range from 2-8 months, with detailed timelines provided during consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-project support including maintenance, updates, and training to ensure continued success."
    },
    {
      question: "What industries do you primarily serve?",
      answer: "We serve diverse industries including education, healthcare, finance, government, and technology sectors with specialized solutions for each."
    },
    {
      question: "Can you work with our existing systems?", 
      answer: "Absolutely! We specialize in integrating with existing systems and can develop solutions that complement your current infrastructure."
    }
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
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how DoviEnterprise can help you achieve your digital goals
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="professional-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="e-solutions">E-Solutions</SelectItem>
                      <SelectItem value="data-entry">Data Entry & Management</SelectItem>
                      <SelectItem value="data-analysis">Data Analysis & Insights</SelectItem>
                      <SelectItem value="research">Research Services</SelectItem>
                      <SelectItem value="digital-literacy">Digital Literacy for Schools</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={5}
                  />
                </div>

                <Button className="w-full accent-gradient text-lg py-6">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="professional-card border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-accent/10 rounded-lg">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                            <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="professional-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Global Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With offices across three continents, we're always close to our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="professional-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{office.address}</p>
                    <p className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-1" />
                      {office.phone}
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {office.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="professional-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button variant="outline">
              Contact Support <Mail className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="professional-card border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Find Us on the Map</h3>
                <p className="text-muted-foreground">Interactive map integration available</p>
              </div>
            </div>
          </Card>
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

export default Contact;