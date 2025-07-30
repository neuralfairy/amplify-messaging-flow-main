import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Calendar,
  Headphones,
  Users,
  Building,
  Zap
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to SalesCentri contact form with pre-filled data
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message
    });
    window.open(`https://salescentri.com/contact/sales-inquiry?${params.toString()}`, "_blank");
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Strategy Call",
      description: "Schedule a 30-minute consultation to discuss your messaging strategy needs",
      action: "Book Now",
      url: "https://salescentri.com/get-started/book-demo",
      highlight: true
    },
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Get instant answers to your questions from our messaging experts",
      action: "Start Chat",
      url: "https://salescentri.com/contact/support-request/live-chat",
      highlight: false
    },
    {
      icon: Headphones,
      title: "Submit a Ticket",
      description: "Send us detailed questions and we'll respond within 24 hours",
      action: "Submit Ticket",
      url: "https://salescentri.com/contact/support-request/submit-ticket",
      highlight: false
    },
    {
      icon: Users,
      title: "Partner Inquiries",
      description: "Interested in becoming a partner? Let's explore opportunities together",
      action: "Learn More",
      url: "https://salescentri.com/contact/partnerships/partner-inquiry",
      highlight: false
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Atlanta Headquarters",
      details: [
        "1234 Peachtree Street NE",
        "Suite 500",
        "Atlanta, GA 30309"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Sales: (555) 123-4567",
        "Support: (555) 123-4568",
        "Partnerships: (555) 123-4569"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "sales@rutherfordbusinessbuilders.com",
        "support@rutherfordbusinessbuilders.com",
        "partners@rutherfordbusinessbuilders.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM EST",
        "Saturday: 9:00 AM - 2:00 PM EST",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Let's Discuss Your
              <span className="block text-primary-glow">Messaging Strategy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Ready to transform your messaging and boost conversions? Our team of experts is here 
              to help you create a strategy that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Multiple Ways to Connect</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need immediate answers or want to schedule a detailed consultation, 
              we have multiple ways to help you get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`border-border hover:shadow-elegant transition-all duration-300 ${
                  method.highlight ? 'border-primary shadow-glow' : ''
                }`}
              >
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                    method.highlight ? 'bg-gradient-primary' : 'bg-muted'
                  }`}>
                    <method.icon className={`w-6 h-6 ${method.highlight ? 'text-white' : 'text-foreground'}`} />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant={method.highlight ? "cta" : "outline"}
                    className="w-full"
                    onClick={() => handleCTAClick(method.url)}
                  >
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Inquiry Type</label>
                    <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategy-consultation">Strategy Consultation</SelectItem>
                        <SelectItem value="pricing-info">Pricing Information</SelectItem>
                        <SelectItem value="demo-request">Demo Request</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your messaging strategy needs and goals..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" variant="cta" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Office Information</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Visit Our Atlanta Office
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Atlanta's business district, our team is always ready 
              to meet with clients and discuss their messaging strategy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeInfo.map((info, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-muted-foreground">
                For urgent inquiries or immediate support, use one of these quick access options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Critical issues affecting your messaging campaigns
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/contact/support-request/submit-ticket")}
                  >
                    Submit Priority Ticket
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <Building className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Enterprise Sales</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Custom solutions for large organizations
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/contact/sales-inquiry")}
                  >
                    Contact Enterprise Team
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Training & Onboarding</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get help with platform setup and training
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/resources/tutorials-webinars")}
                  >
                    Access Training
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;