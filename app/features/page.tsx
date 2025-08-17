import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  TrendingUp,
  BarChart3,
  Bell,
  Users,
  Zap,
  Globe,
  Filter,
  Download,
  Calendar,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            ✨ Comprehensive Feature Set
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <br />
            <span className="text-primary">Master Social Trends</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the complete suite of tools and features that make Trends Observer the most comprehensive social
            media trend tracking platform.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Core Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for marketers, creators, and brands who need to stay ahead of viral content and emerging trends.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Multi-Platform Monitoring</h3>
                  <p className="text-muted-foreground">
                    Track trends across Twitter, Instagram, TikTok, YouTube, Reddit, and LinkedIn from a unified
                    dashboard. Real-time data synchronization ensures you never miss emerging content.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                  <Bell className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Smart Alert System</h3>
                  <p className="text-muted-foreground">
                    Customizable notifications for trending keywords, viral thresholds, and competitor activity. Get
                    alerts via email, Slack, or mobile push notifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground">
                    Deep dive into engagement metrics, audience demographics, sentiment analysis, and trend lifecycle
                    patterns with interactive visualizations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Live Platform Dashboard</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <p className="text-xs text-muted-foreground">Platforms</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <p className="text-xs text-muted-foreground">Monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10M+</div>
                  <p className="text-xs text-muted-foreground">Daily Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Specialized Tools & Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Category-Specific Tracking</CardTitle>
                <CardDescription>
                  Monitor trends in fashion, technology, entertainment, sports, and more with specialized filters and
                  insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Fashion & Beauty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Technology & Gadgets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Entertainment & Media
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="bg-secondary/10 rounded-lg p-3 w-fit">
                  <Zap className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>AI-Powered Predictions</CardTitle>
                <CardDescription>
                  Machine learning algorithms analyze patterns to predict viral potential before content peaks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Viral Score Calculation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Trend Lifecycle Prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Audience Behavior Analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="bg-accent/10 rounded-lg p-3 w-fit">
                  <Filter className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Advanced Filtering</CardTitle>
                <CardDescription>
                  Powerful search and filtering capabilities to find exactly what you're looking for in the noise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Keyword & Hashtag Filters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Geographic Targeting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Engagement Thresholds
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg p-3 w-fit">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Export & Reporting</CardTitle>
                <CardDescription>
                  Generate comprehensive reports and export data in multiple formats for presentations and analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    PDF & Excel Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Custom Dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    API Access
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="bg-secondary/10 rounded-lg p-3 w-fit">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Historical Analysis</CardTitle>
                <CardDescription>
                  Access historical trend data to understand patterns and make informed predictions about future
                  content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    12-Month Data History
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Seasonal Trend Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Comparative Studies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="bg-accent/10 rounded-lg p-3 w-fit">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Mobile & Integrations</CardTitle>
                <CardDescription>
                  Native mobile apps and seamless integrations with your existing marketing and analytics tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    iOS & Android Apps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Slack & Teams Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-accent mr-2" />
                    Zapier Connectivity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">What's Coming Next</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're constantly innovating and adding new features based on user feedback and industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Q1 2024
                </Badge>
                <CardTitle className="text-lg">Video Trend Analysis</CardTitle>
                <CardDescription>
                  Advanced video content analysis with scene recognition and audio trend detection.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Q2 2024
                </Badge>
                <CardTitle className="text-lg">Competitor Intelligence</CardTitle>
                <CardDescription>
                  Track competitor content performance and benchmark your trends against industry leaders.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Q3 2024
                </Badge>
                <CardTitle className="text-lg">Content Recommendations</CardTitle>
                <CardDescription>
                  AI-powered content suggestions based on trending topics and your audience preferences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Q4 2024
                </Badge>
                <CardTitle className="text-lg">Global Expansion</CardTitle>
                <CardDescription>
                  Support for international platforms like WeChat, Weibo, and regional social networks.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Explore All Features?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial today and discover how Trends Observer can transform your social media strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
