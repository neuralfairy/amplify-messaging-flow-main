import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, TrendingUp, Heart, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in B2B sales and marketing strategy. Former VP of Sales at TechScale, where she increased revenue by 400%.",
      expertise: ["Strategic Planning", "Revenue Growth", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Head of Strategy",
      bio: "Former McKinsey consultant with deep expertise in messaging optimization and conversion psychology.",
      expertise: ["Messaging Strategy", "Conversion Psychology", "Data Analytics"]
    },
    {
      name: "Lisa Rodriguez",
      role: "VP of Client Success",
      bio: "Expert in customer success and retention. Previously scaled customer success teams at three high-growth SaaS companies.",
      expertise: ["Client Success", "Process Optimization", "Team Scaling"]
    },
    {
      name: "David Park",
      role: "Lead Data Scientist",
      bio: "PhD in Statistics with 10+ years optimizing messaging performance through advanced analytics and machine learning.",
      expertise: ["Data Science", "AI/ML", "Performance Analytics"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we develop is designed to deliver measurable improvements in conversion rates and revenue growth."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in complete transparency with our clients - clear reporting, honest feedback, and open communication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our methodologies using the latest in conversion psychology and data science."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Your success is our success. We work as an extension of your team to achieve your business objectives."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "150%", label: "Average Conversion Increase" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "50M+", label: "Revenue Generated" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              About Our Company
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We're Messaging Strategy
              <span className="block text-primary-glow">Experts Who Deliver Results</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Founded by sales and marketing veterans who understand what it takes to convert 
              prospects into customers at scale. We've helped hundreds of companies transform 
              their messaging and grow revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              To empower B2B companies with messaging strategies that turn prospects into customers. 
              We believe that the right message, delivered at the right time, can transform any business. 
              Our systematic approach combines proven frameworks with cutting-edge analytics to deliver 
              consistent, measurable results.
            </p>
            
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
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Leadership Team</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Meet the Experts Behind Your Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our team combines decades of experience in sales, marketing, and data science 
              to deliver messaging strategies that consistently outperform industry benchmarks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              What Drives Everything We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide our approach to every client relationship and project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Rutherfordbusinessbuilders Solutions was founded in 2019 when our CEO, Sarah Johnson, 
                recognized a critical gap in the market. While working as VP of Sales at TechScale, 
                she saw firsthand how poor messaging was costing companies millions in lost revenue.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                After successfully implementing a systematic messaging optimization program that 
                increased TechScale's conversion rates by 400%, Sarah knew she had to bring this 
                methodology to other businesses struggling with the same challenges.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Today, we've helped over 500 companies transform their messaging strategies, 
                generating more than $50 million in additional revenue for our clients. Our approach 
                combines proven psychological principles with cutting-edge data analytics to create 
                messaging that consistently converts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Industry Recognition</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Certified Experts You Can Trust
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="font-semibold">Sales Strategy Certified</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="font-semibold">Conversion Optimization</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="font-semibold">Data Privacy Compliant</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-semibold">B2B Sales Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our proven messaging strategies can help you achieve your revenue goals. 
              Schedule a free consultation with our team today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/book-demo")}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => handleCTAClick("https://salescentri.com/company/about-us/leadership-team")}
              >
                Meet the Full Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;