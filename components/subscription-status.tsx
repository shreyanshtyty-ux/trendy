"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useAuthContext } from "@/components/auth-provider"
import { Crown, CreditCard, Calendar, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

interface SubscriptionStatusProps {
  subscription?: {
    plan: string
    status: 'active' | 'inactive' | 'cancelled' | 'expired'
    startDate: string
    endDate: string
    amount: number
    currency: string
  }
}

export function SubscriptionStatus({ subscription }: SubscriptionStatusProps) {
  const { user } = useAuthContext()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
      case 'cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'expired':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4" />
      case 'inactive':
        return <XCircle className="h-4 w-4" />
      case 'cancelled':
        return <XCircle className="h-4 w-4" />
      case 'expired':
        return <XCircle className="h-4 w-4" />
      default:
        return <XCircle className="h-4 w-4" />
    }
  }

  if (!subscription) {
    return (
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            Subscription Status
          </CardTitle>
          <CardDescription>
            You're currently on the free plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Current Plan:</span>
              <Badge variant="secondary">Free</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Status:</span>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
            <div className="pt-4">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Link href="/pricing">
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade to Pro
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-primary" />
          Subscription Status
        </CardTitle>
        <CardDescription>
          Manage your {subscription.plan} subscription
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Current Plan:</span>
            <Badge className="bg-primary text-primary-foreground">
              {subscription.plan}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status:</span>
            <Badge className={getStatusColor(subscription.status)}>
              {getStatusIcon(subscription.status)}
              <span className="ml-1 capitalize">{subscription.status}</span>
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Amount:</span>
            <span className="text-sm font-medium">
              ₹{subscription.amount}/{subscription.currency === 'INR' ? 'month' : subscription.currency}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Start Date:</span>
            <span className="text-sm">{new Date(subscription.startDate).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">End Date:</span>
            <span className="text-sm">{new Date(subscription.endDate).toLocaleDateString()}</span>
          </div>

          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full">
              <CreditCard className="h-4 w-4 mr-2" />
              Manage Billing
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              View Invoice
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
