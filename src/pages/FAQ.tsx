import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, HelpCircle, MessageSquare, Target, BarChart3, Users, Zap, Shield } from "lucide-react";

const FAQ = () => {
  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      faqs: [
        {
          question: "What is messaging strategy and why do I need it?",
          answer: "Messaging strategy is the systematic approach to crafting and delivering communication that resonates with your target audience and drives them to take action. It's essential because unclear or inconsistent messaging can cost you up to 70% of potential conversions. Our strategies help you create clear, compelling messages that turn prospects into customers."
        },
        {
          question: "How quickly can I see results from messaging optimization?",
          answer: "Most clients see initial improvements within 2-4 weeks of implementation. Significant results typically occur within 30-90 days. Our fastest client achieved a 47% increase in conversion rates within just 3 weeks of deploying their new messaging strategy."
        },
        {
          question: "Do you work with businesses in my industry?",
          answer: "We work with B2B companies across all industries including technology, healthcare, financial services, manufacturing, and professional services. Our frameworks are adaptable to any industry, and we customize our approach based on your specific market dynamics and customer behavior."
        },
        {
          question: "What's the difference between messaging strategy and copywriting?",
          answer: "Copywriting focuses on the actual words and content, while messaging strategy is the strategic foundation that guides what to say, when to say it, and to whom. Think of messaging strategy as the blueprint and copywriting as the construction. We provide the strategic framework that makes copywriting more effective."
        }
      ]
    },
    {
      title: "Platform & Features",
      icon: Target,
      faqs: [
        {
          question: "What features are included in the messaging strategy platform?",
          answer: "Our platform includes message testing tools, performance analytics, team collaboration features, CRM integrations, A/B testing capabilities, customer journey mapping, ROI tracking, and a comprehensive message library. We also provide strategic consulting and training to maximize your results."
        },
        {
          question: "How does the AI-powered message testing work?",
          answer: "Our AI analyzes multiple variables including sentiment, emotional triggers, clarity, and persuasion factors to predict message performance. It can test thousands of message variations simultaneously and provide optimization suggestions based on your specific audience and conversion goals."
        },
        {
          question: "Can I integrate the platform with my existing tools?",
          answer: "Yes, we integrate with 50+ popular tools including Salesforce, HubSpot, Marketo, Pipedrive, Mailchimp, Slack, and many others. Our API also allows for custom integrations if you have specific requirements not covered by our standard integrations."
        },
        {
          question: "Is training provided for my team?",
          answer: "Absolutely. All plans include comprehensive onboarding and training. This includes platform training, messaging strategy workshops, best practices sessions, and ongoing support. Enterprise clients receive custom training programs tailored to their specific needs and goals."
        }
      ]
    },
    {
      title: "Results & ROI",
      icon: BarChart3,
      faqs: [
        {
          question: "What kind of results can I expect?",
          answer: "Our clients typically see 30-150% improvement in conversion rates within 90 days. Average email open rates increase by 40-60%, and sales cycle length often decreases by 20-35%. However, results vary based on your starting point, industry, and implementation consistency."
        },
        {
          question: "How do you measure messaging strategy success?",
          answer: "We track multiple KPIs including conversion rates, engagement metrics, sales cycle length, deal size, customer acquisition cost, and revenue attribution. Our analytics dashboard provides real-time visibility into how messaging changes impact your bottom line."
        },
        {
          question: "What's the typical ROI for messaging strategy optimization?",
          answer: "Most clients see 300-800% ROI within the first year. For example, a $10,000 monthly investment typically generates $30,000-$80,000 in additional revenue. We provide ROI calculators and regular reports to track your investment performance."
        },
        {
          question: "How long does it take to implement a messaging strategy?",
          answer: "Initial implementation typically takes 2-4 weeks, depending on complexity. Full deployment across all channels usually takes 6-8 weeks. We provide a detailed timeline and milestone tracking to ensure smooth implementation without disrupting your current operations."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: Shield,
      faqs: [
        {
          question: "What's included in the free trial?",
          answer: "The 14-day free trial includes full access to our platform features, one messaging strategy consultation, basic analytics, and email support. No credit card required to start, and you can upgrade anytime during or after the trial period."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing. If you need to pause your account temporarily, we offer flexible options to accommodate your business needs."
        },
        {
          question: "Are there any setup fees or hidden costs?",
          answer: "No setup fees or hidden costs. The price you see is what you pay. All plans include onboarding, training, and basic integrations. Custom integrations and advanced consulting may have additional fees, which are always disclosed upfront."
        },
        {
          question: "Do you offer custom enterprise solutions?",
          answer: "Yes, our Enterprise plan includes custom features, dedicated account management, advanced security, white-label options, and strategic consulting. We work with you to create a solution that fits your specific requirements and budget."
        }
      ]
    },
    {
      title: "Support & Training",
      icon: Users,
      faqs: [
        {
          question: "What kind of support do you provide?",
          answer: "We offer multiple support channels: email support (all plans), live chat (Professional and Enterprise), phone support (Enterprise), and dedicated account management (Enterprise). Our average response time is under 4 hours for all inquiries."
        },
        {
          question: "Do you provide strategic consulting?",
          answer: "Yes, all plans include some level of strategic guidance. Professional plans include monthly strategy sessions, while Enterprise plans include weekly consulting calls and dedicated strategic account management. We also offer custom consulting projects for specific initiatives."
        },
        {
          question: "How do you help with team adoption?",
          answer: "We provide comprehensive change management support including team workshops, best practices training, adoption tracking, and ongoing coaching. Our success team works with you to ensure high adoption rates and maximum value realization."
        },
        {
          question: "What happens if I'm not satisfied with the results?",
          answer: "We offer a 30-day money-back guarantee for all new customers. If you're not satisfied with the results or platform experience within the first 30 days, we'll provide a full refund. We're confident in our ability to deliver value and stand behind our service."
        }
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
              Frequently Asked Questions
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Everything You Need to Know
              <span className="block text-primary-glow">About Messaging Strategy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Get answers to the most common questions about our messaging strategy platform, 
              implementation process, and expected results.
            </p>
            
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4 bg-white text-secondary hover:bg-white/90"
              onClick={() => handleCTAClick("https://salescentri.com/contact/support-request")}
            >
              Can't Find Your Answer? Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers organized by topic to quickly get the information you need.
            </p>
          </div>
          
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our messaging strategy experts are here to help. Get personalized answers 
              to your specific questions and learn how we can help your business grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <MessageSquare className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get instant answers from our support team
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/contact/support-request/live-chat")}
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Book a strategy session with our experts
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/get-started/book-demo")}
                  >
                    Book Call
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-border text-center">
                <CardContent className="p-6">
                  <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Support Center</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Browse our knowledge base and tutorials
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleCTAClick("https://salescentri.com/docs/user-guide")}
                  >
                    Visit Center
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => handleCTAClick("https://salescentri.com/get-started/free-trial")}
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;