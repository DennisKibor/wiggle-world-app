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
  Building2,
  School,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Code,
  Cloud,
  Smartphone,
  FileSpreadsheet,
  Shield,
  Clock,
  TrendingUp,
  PieChart,
  Users,
  BookOpen,
  Computer
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "E-Solutions",
      description: "Comprehensive digital tools and platforms designed to transform your business operations and enhance productivity.",
      features: [
        "Custom Software Development",
        "Web Application Design",
        "Mobile App Development", 
        "Digital Transformation Consulting",
        "Cloud Migration Services",
        "API Development & Integration"
      ],
      benefits: [
        "Streamlined Operations",
        "Enhanced Productivity", 
        "Scalable Architecture",
        "Improved User Experience"
      ],
      industries: ["Healthcare", "Finance", "Retail", "Manufacturing"]
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Data Entry & Management", 
      description: "Professional data handling services ensuring accuracy, security, and efficiency in all your data operations.",
      features: [
        "High-Volume Data Processing",
        "Database Design & Management",
        "Data Cleaning & Validation",
        "Document Digitization",
        "Quality Assurance Programs",
        "Secure Data Storage Solutions"
      ],
      benefits: [
        "99.9% Accuracy Guarantee",
        "Fast Turnaround Times",
        "Secure Processing",
        "Cost-Effective Solutions"
      ],
      industries: ["Government", "Healthcare", "Education", "Legal"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Data Analysis & Insights",
      description: "Transform your raw data into actionable business intelligence with our advanced analytics and reporting solutions.",
      features: [
        "Statistical Analysis & Modeling",
        "Business Intelligence Dashboards",
        "Predictive Analytics",
        "Custom Reporting Solutions",
        "Data Visualization",
        "Performance Monitoring"
      ],
      benefits: [
        "Data-Driven Decisions",
        "Improved ROI",
        "Risk Assessment",
        "Market Insights"
      ],
      industries: ["Marketing", "Sales", "Operations", "Strategy"]
    },
    {
      icon: <FileSearch className="w-12 h-12 text-primary" />,
      title: "Research Services",
      description: "Comprehensive research solutions providing deep insights and reliable data to support your strategic decisions.",
      features: [
        "Market Research & Analysis",
        "Academic Research Support",
        "Competitive Intelligence",
        "Industry Reports",
        "Survey Design & Implementation",
        "Literature Reviews"
      ],
      benefits: [
        "Evidence-Based Insights",
        "Competitive Advantage",
        "Risk Mitigation",
        "Strategic Planning"
      ],
      industries: ["Academia", "Consulting", "Healthcare", "Technology"]
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Digital Literacy for Schools",
      description: "Empowering educational institutions with comprehensive digital skills training and technology integration programs.",
      features: [
        "Teacher Training Programs",
        "Student Digital Skills Courses",
        "Curriculum Development",
        "Technology Integration Planning",
        "E-Learning Platform Setup",
        "Digital Assessment Tools"
      ],
      benefits: [
        "21st Century Skills",
        "Enhanced Learning",
        "Technology Proficiency",
        "Future-Ready Students"
      ],
      industries: ["K-12 Schools", "Universities", "Training Centers", "NGOs"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with a comprehensive consultation to understand your unique needs and objectives."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "Our experts develop a customized strategy tailored to your specific requirements and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, maintaining clear communication throughout the process."
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and monitoring ensure continued success and optimal performance."
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
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your growth and enhance your capabilities across all sectors
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Key Features</h3>
                      <div className="grid gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Industries Served</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, idx) => (
                          <Badge key={idx} variant="secondary">{industry}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className={`professional-card border-0 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-center">Key Benefits</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-accent-foreground" />
                          </div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 accent-gradient">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="professional-card border-0 text-center relative">
                <CardContent className="pt-8">
                  <div className="text-4xl font-bold text-accent mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized solutions across diverse sectors and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Building2 className="w-8 h-8" />, name: "Corporate" },
              { icon: <School className="w-8 h-8" />, name: "Education" },
              { icon: <Briefcase className="w-8 h-8" />, name: "Government" },
              { icon: <Users className="w-8 h-8" />, name: "Non-Profit" },
              { icon: <Code className="w-8 h-8" />, name: "Technology" },
              { icon: <Shield className="w-8 h-8" />, name: "Healthcare" },
              { icon: <TrendingUp className="w-8 h-8" />, name: "Finance" },
              { icon: <BookOpen className="w-8 h-8" />, name: "Research" }
            ].map((industry, index) => (
              <Card key={index} className="professional-card border-0 text-center group cursor-pointer">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-accent/10 transition-colors">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help transform your business and achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="accent-gradient text-lg px-8">
                Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Download Brochure
              </Button>
            </div>
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

export default Services;