"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CheckCircle, ArrowRight, Star, Zap, Loader2 } from "lucide-react"
import { useRazorpay, PAYMENT_PLANS } from "@/hooks/use-razorpay"
import { useAuthContext } from "@/components/auth-provider"

export default function PricingPage() {
  const { initiatePayment, loading } = useRazorpay()
  const { user } = useAuthContext()

  const handlePayment = async (plan: any) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = '/login?redirect=/pricing'
      return
    }
    
    try {
      await initiatePayment(plan)
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {user && (
            <div className="mb-6 flex justify-center">
              <Button asChild variant="outline" size="sm">
                <Link href="/dashboard">
                  ← Back to Dashboard
                </Link>
              </Button>
            </div>
          )}
          <Badge variant="secondary" className="mb-4">
            💰 Simple, Transparent Pricing
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose the Perfect Plan
            <br />
            <span className="text-primary">for Your Needs</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-border relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect for individuals getting started with trend tracking</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-transparent" variant="outline" asChild>
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Up to 3 platforms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">5 keyword alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">7-day data history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary relative shadow-lg">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Ideal for creators, marketers, and small businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full" 
                  onClick={() => handlePayment(PAYMENT_PLANS[0])}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Start Pro Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">All 8 platforms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Unlimited keyword alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Advanced analytics & AI insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">90-day data history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Real-time notifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Export & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">
                  <Zap className="h-3 w-3 mr-1" />
                  Enterprise
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large teams and organizations with advanced needs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹2,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-transparent" 
                  variant="outline"
                  onClick={() => handlePayment(PAYMENT_PLANS[1])}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Start Enterprise Plan'
                  )}
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">12-month data history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">API access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">White-label options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3" />
                    <span className="text-sm">24/7 phone support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our pricing and plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Can I change plans anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and
                we'll prorate any charges.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground text-sm">
                Our Free plan is available forever with no time limit. Pro and Enterprise plans come with a 14-day free
                trial.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, debit cards, UPI, net banking, and digital wallets through Razorpay. All payments are
                processed securely with bank-grade encryption.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Do you offer discounts for nonprofits?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! We offer 50% discounts for verified nonprofits and educational institutions. Contact us for more
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Start Tracking Trends?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of creators and marketers who trust Trendy to stay ahead of viral content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start Free Today
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
