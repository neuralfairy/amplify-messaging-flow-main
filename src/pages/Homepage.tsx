import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, Users, MessageSquare, Target, Star, Quote, BarChart3, Zap, Shield, Award } from "lucide-react";

const Homepage = () => {
  const [email, setEmail] = useState("");

  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Strategic Messaging",
      description: "Craft compelling messages that resonate with your target audience and drive action."
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Transform prospects into customers with data-driven messaging strategies."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track and measure the impact of your messaging across all channels."
    },
    {
      icon: Users,
      title: "Team Enablement",
      description: "Empower your sales team with consistent, high-converting messaging frameworks."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Deploy optimized messaging strategies in weeks, not months."
    },
    {
      icon: Shield,
      title: "Proven Results",
      description: "Backed by case studies showing 30-150% improvement in conversion rates."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechScale Inc.",
      content: "Rutherford's messaging strategy increased our conversion rates by 127% in just 3 months. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCorp",
      content: "Their systematic approach to messaging transformed how our team communicates with prospects. We're closing more deals faster.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "CEO",
      company: "InnovateLabs",
      content: "The messaging framework they developed became the foundation of our entire go-to-market strategy. Exceptional results.",
      rating: 5
    }
  ];

  const stats = [
    { number: "150%", label: "Average Conversion Increase" },
    { number: "500+", label: "Successful Campaigns" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "30", label: "Days to See Results" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              #1 Messaging Strategy Platform
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Sales with
              <span className="block text-primary-glow">High-Converting Messaging</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              We craft data-driven messaging strategies that turn prospects into customers. 
              Boost your conversion rates by up to 150% with proven frameworks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/book-demo")}
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => handleCTAClick("https://salescentri.com/solutions/use-case-navigator/demo")}
              >
                View Interactive Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-glow" />
                Free Strategy Consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-glow" />
                30-Day Results Guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-primary-glow" />
                No Setup Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-lg">Trusted by leading companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center text-2xl font-bold text-foreground">TechScale</div>
            <div className="text-center text-2xl font-bold text-foreground">GrowthCorp</div>
            <div className="text-center text-2xl font-bold text-foreground">InnovateLabs</div>
            <div className="text-center text-2xl font-bold text-foreground">SalesForce Pro</div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our messaging strategies consistently deliver measurable improvements in conversion rates and revenue growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Capabilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Everything You Need to Win More Deals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive messaging strategy platform combines proven frameworks with cutting-edge analytics 
              to optimize every customer touchpoint.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See how we've helped companies transform their messaging and grow revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                    <div className="text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Messaging Strategy?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of companies that have boosted their conversion rates with our proven messaging frameworks. 
              Get started with a free strategy consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/book-demo")}
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/free-trial")}
              >
                Start Free Trial
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 mr-2 text-primary-glow" />
                Industry-Leading Results
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2 text-primary-glow" />
                30-Day Money-Back Guarantee
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2 text-primary-glow" />
                Quick Implementation
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;