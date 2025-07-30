import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Clock, TrendingUp, MessageSquare, Target, BarChart3 } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCTAClick = (url: string) => {
    window.open(url, "_blank");
  };

  const featuredPost = {
    title: "The Complete Guide to B2B Messaging Strategy in 2024",
    excerpt: "Discover the latest trends, proven frameworks, and actionable strategies that top-performing B2B companies use to convert more prospects into customers.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Strategy",
    image: "/api/placeholder/600/300"
  };

  const blogPosts = [
    {
      title: "5 Messaging Mistakes That Are Killing Your Conversion Rates",
      excerpt: "Learn about the most common messaging mistakes B2B companies make and how to fix them for immediate results.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Conversion Optimization",
      icon: TrendingUp
    },
    {
      title: "How to Create Customer-Centric Value Propositions That Convert",
      excerpt: "A step-by-step guide to developing value propositions that resonate with your target audience and drive action.",
      author: "Lisa Rodriguez",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Strategy",
      icon: Target
    },
    {
      title: "The Psychology Behind High-Converting Sales Messages",
      excerpt: "Understand the psychological triggers that make prospects take action and how to incorporate them into your messaging.",
      author: "David Park",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Psychology",
      icon: MessageSquare
    },
    {
      title: "Measuring Messaging Performance: KPIs That Actually Matter",
      excerpt: "Discover which metrics to track and how to measure the true impact of your messaging strategy on revenue growth.",
      author: "Sarah Johnson",
      date: "February 22, 2024",
      readTime: "9 min read",
      category: "Analytics",
      icon: BarChart3
    },
    {
      title: "A/B Testing Your Way to Better Messaging: A Complete Framework",
      excerpt: "Learn how to systematically test and optimize your messaging for maximum conversion rates and revenue impact.",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "Testing",
      icon: TrendingUp
    },
    {
      title: "Industry-Specific Messaging Strategies That Work",
      excerpt: "Explore how successful companies in different industries adapt their messaging strategies for maximum effectiveness.",
      author: "Lisa Rodriguez",
      date: "February 8, 2024",
      readTime: "7 min read",
      category: "Industry Insights",
      icon: Target
    }
  ];

  const categories = ["All", "Strategy", "Conversion Optimization", "Psychology", "Analytics", "Testing", "Industry Insights"];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Messaging Strategy Blog
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Expert Insights on
              <span className="block text-primary-glow">Messaging Strategy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90">
              Stay ahead of the curve with actionable strategies, proven frameworks, 
              and expert insights that help you create messaging that converts.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-12 py-3 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-primary"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="mb-4">Featured Article</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Latest from Our Experts
            </h2>
          </div>
          
          <Card className="border-border overflow-hidden hover:shadow-elegant transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-primary flex items-center justify-center">
                  <MessageSquare className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="md:w-1/2">
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl lg:text-3xl mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-muted-foreground mr-2" />
                      <span className="text-foreground font-medium">{featuredPost.author}</span>
                    </div>
                    
                    <Button 
                      variant="cta"
                      onClick={() => handleCTAClick("https://salescentri.com/resources/whitepapers-ebooks")}
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <div className="flex items-center text-muted-foreground text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 leading-tight">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center text-muted-foreground text-xs mb-1">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleCTAClick("https://salescentri.com/resources/whitepapers-ebooks")}
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleCTAClick("https://salescentri.com/resources/whitepapers-ebooks")}
            >
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Updated with Messaging Strategy Insights
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get weekly insights, case studies, and actionable strategies delivered to your inbox. 
              Join 10,000+ marketing and sales professionals who trust our content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button 
                variant="hero"
                className="bg-white text-secondary hover:bg-white/90"
                onClick={() => handleCTAClick("https://salescentri.com/get-started/free-trial")}
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;