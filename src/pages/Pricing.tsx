import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, ArrowRight, Star, Zap, Crown, Users } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for small teams getting started with messaging optimization",
      monthlyPrice: 297,
      yearlyPrice: 2376, // 20% discount
      savings: "Save $564",
      features: [
        "Up to 3 team members",
        "5 messaging campaigns",
        "Basic A/B testing",
        "Email support",
        "Standard integrations",
        "Monthly performance reports",
        "Message template library",
        "Basic analytics dashboard"
      ],
      ctaText: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      popular: false
    },
    {
      name: "Professional",
      icon: Star,
      description: "Advanced features for growing businesses serious about conversion optimization",
      monthlyPrice: 597,
      yearlyPrice: 4776, // 20% discount
      savings: "Save $1,188",
      features: [
        "Up to 10 team members",
        "Unlimited messaging campaigns",
        "Advanced A/B testing & AI optimization",
        "Priority email & chat support",
        "All integrations included",
        "Weekly performance reports",
        "Custom message frameworks",
        "Advanced analytics & attribution",
        "Customer journey mapping",
        "Team training modules",
        "ROI tracking tools"
      ],
      ctaText: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      description: "Complete messaging strategy solution for large organizations",
      monthlyPrice: 1497,
      yearlyPrice: 11976, // 20% discount
      savings: "Save $5,988",
      features: [
        "Unlimited team members",
        "Unlimited campaigns & testing",
        "Dedicated customer success manager",
        "24/7 phone & chat support",
        "Custom integrations",
        "Real-time reporting & alerts",
        "White-label options",
        "Advanced security & compliance",
        "Multi-brand support",
        "Custom training programs",
        "Strategic consulting included",
        "API access",
        "Advanced role permissions"
      ],
      ctaText: "Contact Sales",
      ctaUrl: "https://salescentri.com/contact/sales-inquiry",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "All plans include a 14-day free trial with full access to platform features. No credit card required to start."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely. Our Enterprise plan includes custom features, dedicated support, and strategic consulting tailored to your needs."
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 50+ popular tools including Salesforce, HubSpot, Marketo, Mailchimp, and many more."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We also provide free onboarding and training to get you started quickly."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our clients typically see 30-150% improvement in conversion rates within the first 90 days of implementation."
    }
  ];

  const formatPrice = (monthly: number, yearly: number) => {
    if (isYearly) {
      return Math.floor(yearly / 12);
    }
    return monthly;
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Transparent Pricing
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose the Perfect Plan
              <span className="block text-primary-glow">for Your Business</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Start with a free trial, then choose a plan that scales with your messaging strategy needs. 
              No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-lg font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-primary text-primary-foreground">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-border hover:shadow-elegant transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-6 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed px-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-primary">
                      ${formatPrice(plan.monthlyPrice, plan.yearlyPrice)}
                      <span className="text-lg font-normal text-muted-foreground">/mo</span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-primary font-medium mt-1">
                        {plan.savings}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'variant-cta' : 'variant-default'}`}
                    size="lg"
                    onClick={() => handleCTAClick(plan.ctaUrl)}
                  >
                    {plan.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Enterprise organizations with unique requirements can work with our team to create 
              a custom messaging strategy solution that fits your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="cta"
                onClick={() => handleCTAClick("https://salescentri.com/pricing/enterprise-custom")}
              >
                Explore Enterprise Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleCTAClick("https://salescentri.com/contact/sales-inquiry")}
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Frequently Asked Questions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Got Questions? We Have Answers
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleCTAClick("https://salescentri.com/contact/support-request")}
            >
              Contact Support
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of companies that have transformed their messaging strategy. 
              Start your free trial today - no credit card required.
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
              onClick={() => handleCTAClick("https://salescentri.com/get-started/free-trial")}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;