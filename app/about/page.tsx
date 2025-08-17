import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingUp, Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Our Story
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Empowering Creators with
            <br />
            <span className="text-primary">Trend Intelligence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We believe that understanding trends shouldn't be reserved for big corporations. Our mission is to
            democratize trend intelligence and help everyone stay ahead of the curve.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">The Story Behind Trends Observer</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2023, our founders were working at a digital marketing agency when they realized a critical gap in
                  the market. While large corporations had access to expensive trend analysis tools, smaller creators,
                  brands, and marketers were left to manually track social media trends—often missing opportunities by
                  days or weeks.
                </p>
                <p>
                  This frustration led to late nights building the first version of Trends Observer in a small apartment
                  in San Francisco. What started as a simple Twitter trend tracker quickly evolved into a comprehensive
                  platform monitoring multiple social media platforms with AI-powered predictions.
                </p>
                <p>
                  Today, Trends Observer serves thousands of users worldwide, from individual content creators to
                  Fortune 500 companies, all united by the goal of staying ahead of viral content and emerging trends.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <p className="text-sm text-muted-foreground">Posts Analyzed Daily</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Platforms Monitored</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core mission and values that put our users first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize trend intelligence and empower creators, marketers, and brands of all sizes to stay
                  ahead of viral content and emerging social media trends.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <div className="bg-secondary/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible with AI and machine learning to provide the
                  most accurate trend predictions and insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="pt-8">
                <div className="bg-accent/10 rounded-lg p-4 w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">User-Centric</h3>
                <p className="text-muted-foreground">
                  Every feature we build is designed with our users in mind. We listen to feedback and iterate quickly
                  to solve real problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Trends Observer, working to make trend intelligence accessible to
              everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Alex Chen</h3>
                <p className="text-muted-foreground mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Former product manager at Meta with 8+ years in social media analytics. Passionate about making data
                  accessible to creators.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="bg-secondary/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Sarah Rodriguez</h3>
                <p className="text-muted-foreground mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-muted-foreground mb-4">
                  AI/ML engineer with expertise in natural language processing and social media data analysis.
                  Previously at Google Research.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Marcus Johnson</h3>
                <p className="text-muted-foreground mb-3">Head of Product</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Product strategist with a background in user experience design. Focused on making complex data simple
                  and actionable.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to be part of the trend intelligence revolution? Start your journey with Trends Observer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
