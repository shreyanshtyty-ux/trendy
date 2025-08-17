"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuthContext } from "@/components/auth-provider"
import { DashboardNav } from "@/components/dashboard-nav"
import { Sidebar } from "@/components/sidebar"
import { TrendChart, TrendPieChart } from "@/components/trend-chart"
import { CategoryCard } from "@/components/category-card"
import { NotificationPanel } from "@/components/notification-panel"
import { FeedbackColumn } from "@/components/feedback-column"
import { CommunityFeedback } from "@/components/community-feedback"
import { SubscriptionStatus } from "@/components/subscription-status"
import { initializeSampleFeedback, clearFeedbackData } from "@/lib/firebase-data"

import {
  TrendingUp,
  Eye,
  Heart,
  Bell,
  Settings,
  LogOut,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Users,
  BarChart3,
  Calendar,
} from "lucide-react"

export default function DashboardPage() {
  const { user, logout } = useAuthContext()
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  // Mock data for demonstration
  const overviewStats = [
    {
      title: "Total Trends Tracked",
      value: "2,847",
      change: "+12.5%",
      trend: "up" as const,
      icon: TrendingUp,
    },
    {
      title: "Viral Score",
      value: "94.2",
      change: "+8.1%",
      trend: "up" as const,
      icon: Zap,
    },
    {
      title: "Active Alerts",
      value: "23",
      change: "-2.3%",
      trend: "down" as const,
      icon: Bell,
    },
    {
      title: "Engagement Rate",
      value: "67.8%",
      change: "+15.2%",
      trend: "up" as const,
      icon: Heart,
    },
  ]

  const categories = [
    {
      name: "Fashion & Beauty",
      trends: 342,
      growth: "+18.2%",
      color: "bg-pink-500",
      icon: "👗",
      href: "/categories/fashion-beauty",
    },
    {
      name: "Technology",
      trends: 189,
      growth: "+24.7%",
      color: "bg-blue-500",
      icon: "📱",
      href: "/categories/technology",
    },
    {
      name: "Photography",
      trends: 156,
      growth: "+12.1%",
      color: "bg-purple-500",
      icon: "📸",
      href: "/categories/photography",
    },
    {
      name: "Home & Décor",
      trends: 98,
      growth: "+9.8%",
      color: "bg-green-500",
      icon: "🏠",
      href: "/categories/home-decor",
    },
    {
      name: "Gadgets",
      trends: 234,
      growth: "+31.5%",
      color: "bg-orange-500",
      icon: "🔧",
      href: "/categories/gadgets",
    },
    {
      name: "Skills",
      trends: 167,
      growth: "+22.3%",
      color: "bg-indigo-500",
      icon: "🎯",
      href: "/categories/skills",
    },
    {
      name: "Books",
      trends: 89,
      growth: "+14.7%",
      color: "bg-red-500",
      icon: "📚",
      href: "/categories/books",
    },
    {
      name: "Gifts",
      trends: 145,
      growth: "+19.8%",
      color: "bg-teal-500",
      icon: "🎁",
      href: "/categories/gifts",
    },
  ]

  const recentTrends = [
    {
      title: "Sustainable Fashion Week",
      platform: "Instagram",
      engagement: "2.4M",
      growth: "+156%",
      viralScore: 92,
      category: "Fashion",
    },
    {
      title: "AI Photography Tools",
      platform: "Twitter",
      engagement: "1.8M",
      growth: "+89%",
      viralScore: 87,
      category: "Technology",
    },
    {
      title: "Minimalist Home Design",
      platform: "Pinterest",
      engagement: "3.1M",
      growth: "+234%",
      viralScore: 95,
      category: "Home & Décor",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <DashboardNav />

      <div className="flex">
                <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-serif text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
                  Dashboard Overview
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Track viral trends and monitor your social media analytics in real-time.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Tabs value={selectedTimeRange} onValueChange={setSelectedTimeRange} className="bg-background/50 border border-border/50 rounded-lg p-1">
                  <TabsList className="bg-transparent">
                    <TabsTrigger value="24h" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">24h</TabsTrigger>
                    <TabsTrigger value="7d" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">7d</TabsTrigger>
                    <TabsTrigger value="30d" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white">30d</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button 
                  onClick={initializeSampleFeedback}
                  variant="outline"
                  className="mr-2"
                >
                  Initialize Sample Data
                </Button>
                <Button 
                  onClick={clearFeedbackData}
                  variant="outline"
                  className="mr-2"
                >
                  Clear Data
                </Button>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg dark:from-cyan-400 dark:to-blue-400 dark:hover:from-cyan-500 dark:hover:to-blue-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, index) => (
                <Card key={index} className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">{stat.value}</p>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-3 border border-cyan-500/20 dark:from-cyan-400/30 dark:to-blue-400/30 dark:border-cyan-400/30">
                        <stat.icon className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">vs last period</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Trend Chart */}
              <Card className="lg:col-span-2 border-border">
                <CardHeader>
                  <CardTitle>Trend Performance</CardTitle>
                  <CardDescription>Viral score and engagement over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <TrendChart />
                </CardContent>
              </Card>

                          {/* Category Distribution */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <CardDescription>Trends by category</CardDescription>
              </CardHeader>
              <CardContent>
                <TrendPieChart />
              </CardContent>
            </Card>
          </div>

          {/* Subscription Status and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Access your most used features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="h-20 flex-col">
                      <Link href="/trends">
                        <TrendingUp className="h-6 w-6 mb-2" />
                        <span>View Trends</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-20 flex-col">
                      <Link href="/analytics">
                        <BarChart3 className="h-6 w-6 mb-2" />
                        <span>Analytics</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-20 flex-col">
                      <Link href="/alerts">
                        <Bell className="h-6 w-6 mb-2" />
                        <span>Alerts</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <SubscriptionStatus />
            </div>
          </div>



            {/* Category Performance */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Category Performance</CardTitle>
                <CardDescription>Track trends across different content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Trends Table */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Trending Now</CardTitle>
                <CardDescription>Most viral content across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{trend.title}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{trend.platform}</span>
                            <span>•</span>
                            <Badge variant="secondary">{trend.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <p className="text-sm font-medium text-foreground">{trend.engagement}</p>
                          <p className="text-xs text-muted-foreground">Engagement</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-500">{trend.growth}</p>
                          <p className="text-xs text-muted-foreground">Growth</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <Progress value={trend.viralScore} className="w-16" />
                            <span className="text-sm font-medium">{trend.viralScore}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">Viral Score</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Feedback Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FeedbackColumn />
              <CommunityFeedback />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
