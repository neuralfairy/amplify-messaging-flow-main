import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  BarChart3, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Brain,
  TrendingUp,
  Globe,
  Settings,
  Lightbulb,
  FileText
} from "lucide-react";

const Features = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "Strategic Message Architecture",
      description: "Build compelling narratives that resonate with your target audience and drive decision-making.",
      features: [
        "Value proposition optimization",
        "Pain point identification and targeting",
        "Competitive differentiation messaging",
        "Audience-specific message tailoring"
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Message Testing",
      description: "Leverage artificial intelligence to test and optimize your messaging for maximum impact.",
      features: [
        "A/B testing automation",
        "Sentiment analysis",
        "Conversion prediction modeling",
        "Real-time optimization suggestions"
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track, measure, and optimize your messaging performance across all channels and touchpoints.",
      features: [
        "Multi-channel attribution",
        "Conversion funnel analysis",
        "ROI tracking and reporting",
        "Predictive performance insights"
      ]
    },
    {
      icon: Users,
      title: "Team Enablement Platform",
      description: "Empower your entire team with consistent, high-converting messaging frameworks and training.",
      features: [
        "Centralized message library",
        "Team training modules",
        "Performance coaching tools",
        "Collaboration workflows"
      ]
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Systematically improve conversion rates through data-driven messaging strategies.",
      features: [
        "Customer journey mapping",
        "Objection handling frameworks",
        "Call-to-action optimization",
        "Landing page message testing"
      ]
    },
    {
      icon: Globe,
      title: "Multi-Channel Integration",
      description: "Deploy consistent messaging across all your marketing and sales channels seamlessly.",
      features: [
        "CRM integration",
        "Email marketing platforms",
        "Social media channels",
        "Sales enablement tools"
      ]
    }
  ];

  const platformFeatures = [
    {
      category: "Strategy Development",
      icon: Lightbulb,
      features: [
        "Customer persona analysis",
        "Competitive intelligence gathering",
        "Message positioning framework",
        "Value proposition development",
        "Stakeholder alignment tools"
      ]
    },
    {
      category: "Implementation & Testing",
      icon: Settings,
      features: [
        "Campaign message deployment",
        "Multi-variant testing platform",
        "Performance monitoring dashboard",
        "Real-time optimization alerts",
        "Integration management"
      ]
    },
    {
      category: "Analytics & Reporting",
      icon: TrendingUp,
      features: [
        "Custom analytics dashboards",
        "Conversion attribution modeling",
        "ROI calculation tools",
        "Performance benchmarking",
        "Executive reporting suite"
      ]
    },
    {
      category: "Team Collaboration",
      icon: Users,
      features: [
        "Message approval workflows",
        "Team performance tracking",
        "Training and certification",
        "Knowledge base management",
        "Cross-team communication tools"
      ]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Pipedrive", "Marketo", "Pardot", 
    "Mailchimp", "ConvertKit", "LinkedIn Sales Navigator", 
    "Outreach", "SalesLoft", "Slack", "Microsoft Teams"
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Platform Features
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Everything You Need to
              <span className="block text-primary-glow">Master Messaging Strategy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Our comprehensive platform combines strategic expertise with cutting-edge technology 
              to deliver messaging that converts prospects into customers.
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
              onClick={() => handleCTAClick("https://salescentri.com/solutions/use-case-navigator/demo")}
            >
              Explore Interactive Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Capabilities</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Comprehensive Messaging Strategy Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy development to performance optimization, our platform provides everything 
              you need to create and deploy high-converting messaging campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Complete Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organized workflows and tools that support every stage of your messaging strategy lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((category, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Seamless Integrations</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Works with Your Existing Tech Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the tools you already use. Our platform integrates seamlessly with leading 
              CRM, marketing automation, and sales enablement platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-border text-center p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="font-semibold text-foreground">{integration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleCTAClick("https://salescentri.com/solutions/psa-suite/integrations")}
            >
              View All Integrations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Calculate Your Messaging ROI
            </h2>
            <p className="text-xl mb-8 text-white/90">
              See how much revenue you could generate with optimized messaging strategies. 
              Our ROI calculator shows potential impact based on your current metrics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
                onClick={() => handleCTAClick("https://salescentri.com/solutions/use-case-navigator/recommendations")}
              >
                Calculate Your ROI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/book-demo")}
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;