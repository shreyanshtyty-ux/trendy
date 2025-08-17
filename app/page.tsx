"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeedbackColumn } from "@/components/feedback-column"
import { RatingsReviews } from "@/components/ratings-reviews"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingUp, BarChart3, Bell, Users, Zap, Shield, Star, ArrowRight, Play } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🚀 Now tracking 10M+ trends daily
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Track Viral Trends
              <br />
              <span className="text-primary">Before They Peak</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with real-time social media trend analysis. Monitor viral content, predict
              emerging trends, and make data-driven decisions with our comprehensive analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Real-Time Trend Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant insights into trending topics, viral content, and emerging patterns across all major social
              platforms.
            </p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Trending Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">2,847</div>
                  <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Viral Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">94.2</div>
                  <p className="text-xs text-muted-foreground">Peak engagement detected</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Active monitoring</p>
                </CardContent>
              </Card>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive trend visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Everything You Need to Track Trends</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to help you stay ahead of viral content and emerging trends.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multi-Platform Tracking</CardTitle>
                <CardDescription>
                  Monitor trends across Twitter, Instagram, TikTok, YouTube, and more from a single dashboard.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 rounded-lg p-3 w-fit">
                  <Bell className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Real-Time Alerts</CardTitle>
                <CardDescription>
                  Get instant notifications when content starts trending or reaches viral status.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 rounded-lg p-3 w-fit">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Deep insights into engagement patterns, audience demographics, and trend lifecycle.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Category Insights</CardTitle>
                <CardDescription>
                  Track trends by category: fashion, tech, entertainment, and more for targeted analysis.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 rounded-lg p-3 w-fit">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Predictive AI</CardTitle>
                <CardDescription>
                  Machine learning algorithms predict which content will go viral before it happens.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 rounded-lg p-3 w-fit">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security with OAuth integration and role-based access control.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our customers are saying about Trends Observer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Trends Observer helped us identify viral content 3 days before our competitors. The ROI has been
                  incredible."
                </p>
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The real-time alerts are game-changing. We can now respond to trends as they happen, not after they
                  peak."
                </p>
                <div className="flex items-center">
                  <div className="bg-secondary/10 rounded-full p-2 mr-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Marcus Johnson</p>
                    <p className="text-sm text-muted-foreground">Social Media Manager, BrandCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The analytics depth is unmatched. We finally understand our audience and can predict what content
                  will resonate."
                </p>
                <div className="flex items-center">
                  <div className="bg-accent/10 rounded-full p-2 mr-3">
                    <BarChart3 className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Content Strategist, MediaFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Community & Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of trend trackers and share your experience with Trends Observer.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeedbackColumn />
            <RatingsReviews />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Stay Ahead of the Trends?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of marketers, creators, and brands who trust Trends Observer to keep them ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
