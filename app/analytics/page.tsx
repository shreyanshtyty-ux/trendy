"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendChart, TrendPieChart } from "@/components/trend-chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingUp, TrendingDown, Users, Eye, Share2, Heart, MessageCircle, BarChart3, PieChart as PieChartIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"

const platformData = [
  { name: "TikTok", value: 45, color: "#000000" },
  { name: "Instagram", value: 25, color: "#E4405F" },
  { name: "YouTube", value: 15, color: "#FF0000" },
  { name: "Twitter", value: 10, color: "#1DA1F2" },
  { name: "LinkedIn", value: 5, color: "#0077B5" },
]

const engagementData = [
  { name: "Mon", likes: 1200, shares: 300, comments: 150 },
  { name: "Tue", likes: 1800, shares: 450, comments: 220 },
  { name: "Wed", likes: 2200, shares: 600, comments: 280 },
  { name: "Thu", likes: 2800, shares: 750, comments: 350 },
  { name: "Fri", likes: 3200, shares: 900, comments: 420 },
  { name: "Sat", likes: 3800, shares: 1100, comments: 500 },
  { name: "Sun", likes: 4200, shares: 1200, comments: 580 },
]

const categoryData = [
  { name: "Technology", value: 35, color: "#3B82F6" },
  { name: "Lifestyle", value: 25, color: "#10B981" },
  { name: "Entertainment", value: 20, color: "#F59E0B" },
  { name: "Business", value: 15, color: "#8B5CF6" },
  { name: "Health", value: 5, color: "#EF4444" },
]

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d")

  const stats = [
    {
      title: "Total Trends Tracked",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Average Viral Score",
      value: "87.3",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Total Engagement",
      value: "2.4M",
      change: "+18%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Alert Triggers",
      value: "156",
      change: "-3%",
      trend: "down",
      icon: TrendingDown,
    },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Comprehensive insights into your trend tracking</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Export Report</Button>
          <Button size="sm">Download PDF</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full ${
                  stat.trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Trend Performance</CardTitle>
                <CardDescription>Viral score and engagement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <TrendChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Distribution</CardTitle>
                <CardDescription>Trends by category</CardDescription>
              </CardHeader>
              <CardContent>
                <TrendPieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Detailed breakdown by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformData.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: platform.color }}
                      />
                      <span className="font-medium">{platform.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">{platform.value}%</div>
                        <div className="text-sm text-muted-foreground">of total trends</div>
                      </div>
                      <Badge variant="outline">{Math.round(platform.value * 12.47)} trends</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Category Analysis</CardTitle>
              <CardDescription>Trends by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Metrics</CardTitle>
              <CardDescription>Likes, shares, and comments over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="likes" fill="#3B82F6" />
                  <Bar dataKey="shares" fill="#10B981" />
                  <Bar dataKey="comments" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common analytics tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              Generate Report
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <PieChartIcon className="h-6 w-6" />
              Custom Analysis
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <TrendingUp className="h-6 w-6" />
              Set Alerts
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
