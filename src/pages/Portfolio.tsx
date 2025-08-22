import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Building2,
  School,
  BarChart3,
  Database,
  Monitor,
  FileSearch,
  GraduationCap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SpringField School District Digital Transformation",
      category: "Digital Literacy",
      client: "SpringField School District",
      duration: "6 months",
      year: "2024",
      description: "Comprehensive digital literacy program implementation across 25 schools, training 200+ educators and reaching 5,000+ students.",
      challenge: "The district needed to modernize their teaching methods and prepare students for digital careers while ensuring all teachers could effectively integrate technology.",
      solution: "Developed a phased training program with hands-on workshops, created custom curriculum materials, and established ongoing support systems.",
      results: [
        "200+ teachers successfully trained",
        "5,000+ students gained digital skills", 
        "95% satisfaction rate from educators",
        "30% improvement in student engagement"
      ],
      technologies: ["Learning Management Systems", "Digital Assessment Tools", "Interactive Platforms"],
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "HealthCorp Patient Data Management System",
      category: "E-Solutions",
      client: "HealthCorp Medical Center",
      duration: "8 months", 
      year: "2023",
      description: "Custom-built patient management system streamlining operations across 3 medical facilities with integrated analytics dashboard.",
      challenge: "Managing patient records across multiple locations was inefficient, leading to delays and potential data inconsistencies.",
      solution: "Developed a centralized cloud-based system with real-time synchronization, automated workflows, and comprehensive reporting.",
      results: [
        "50% reduction in administrative time",
        "99.9% data accuracy achieved",
        "Improved patient satisfaction scores",
        "Enhanced regulatory compliance"
      ],
      technologies: ["Cloud Infrastructure", "React.js", "Node.js", "PostgreSQL"],
      icon: <Monitor className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "RetailMax Sales Analytics Platform",
      category: "Data Analysis",
      client: "RetailMax Corporation",
      duration: "4 months",
      year: "2023", 
      description: "Advanced analytics platform providing real-time insights into sales performance, customer behavior, and inventory optimization.",
      challenge: "The client had massive amounts of sales data but lacked the tools to extract actionable insights for strategic decision-making.",
      solution: "Built a comprehensive analytics dashboard with predictive modeling, automated reporting, and interactive visualizations.",
      results: [
        "25% increase in sales efficiency",
        "40% improvement in inventory turnover",
        "Real-time decision making capability",
        "ROI improvement of 35%"
      ],
      technologies: ["Python", "Tableau", "Machine Learning", "AWS"],
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Legal Firm Document Digitization Project",
      category: "Data Entry",
      client: "Morrison & Associates Law Firm",
      duration: "3 months",
      year: "2024",
      description: "Complete digitization of 50,000+ legal documents with OCR processing, metadata extraction, and searchable database creation.",
      challenge: "The firm had decades of paper documents that were difficult to search and access, impacting case preparation efficiency.",
      solution: "Implemented systematic digitization workflow with quality control, OCR technology, and comprehensive indexing system.",
      results: [
        "50,000+ documents digitized",
        "99.8% OCR accuracy rate", 
        "75% faster document retrieval",
        "Significant office space optimization"
      ],
      technologies: ["OCR Technology", "Document Management Systems", "Quality Assurance Tools"],
      icon: <Database className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Market Entry Research for TechStart",
      category: "Research", 
      client: "TechStart Innovations",
      duration: "2 months",
      year: "2024",
      description: "Comprehensive market analysis for African tech market entry, including competitor analysis, consumer behavior study, and strategic recommendations.",
      challenge: "The startup needed detailed market intelligence to successfully enter three African markets with their fintech solution.",
      solution: "Conducted extensive primary and secondary research, including surveys, interviews, and competitive analysis across target markets.",
      results: [
        "Detailed market entry strategy",
        "Identification of key opportunities",
        "Risk mitigation recommendations", 
        "Successful market penetration achieved"
      ],
      technologies: ["Survey Tools", "Statistical Analysis", "Market Intelligence Platforms"],
      icon: <FileSearch className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "University Research Data Platform",
      category: "E-Solutions",
      client: "Metropolitan University",
      duration: "10 months",
      year: "2023",
      description: "Collaborative research platform connecting researchers, managing projects, and facilitating data sharing across departments.",
      challenge: "Researchers worked in silos with limited collaboration tools and no centralized system for project management and data sharing.",
      solution: "Created an integrated platform with project management tools, secure data sharing, and collaboration features.",
      results: [
        "300+ researchers onboarded",
        "150+ active research projects",
        "60% increase in collaboration",
        "Streamlined grant application process"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Docker"],
      icon: <Users className="w-8 h-8 text-accent" />,
      image: "/api/placeholder/600/400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Satisfied Clients" },
    { number: "50+", label: "Schools Transformed" },
    { number: "99.8%", label: "Client Retention Rate" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Superintendent, Springfield School District", 
      comment: "DoviEnterprise transformed our entire educational approach. The digital literacy program exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "CTO, HealthCorp Medical Center",
      comment: "Their technical expertise and project management skills delivered a solution that revolutionized our operations.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Operations Director, RetailMax",
      comment: "The analytics platform provided insights we never knew were possible. ROI was evident within the first quarter.",
      rating: 5
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
            <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover how we've helped organizations across various industries achieve their digital transformation goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="professional-card border-0 text-center">
                <CardContent className="pt-8">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real projects that showcase our expertise and the transformative impact of our solutions
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="professional-card border-0 overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <Badge className="mb-2 accent-gradient">{project.category}</Badge>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </span>
                          <span className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            {project.client}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button className="mt-6 accent-gradient">
                      View Case Study <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>

                  <div className={`bg-gradient-to-br from-primary/10 to-accent/10 p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h4 className="font-semibold mb-4 text-center">Key Results</h4>
                    <div className="space-y-3">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-background/80 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
                      <TrendingUp className="w-12 h-12 text-accent mx-auto mb-2" />
                      <p className="text-sm font-medium text-accent">Project Success Rate: 100%</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the leaders who have experienced the DoviEnterprise difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="professional-card border-0">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our portfolio of successful projects and let us help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="accent-gradient text-lg px-8">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Download Portfolio
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

export default Portfolio;