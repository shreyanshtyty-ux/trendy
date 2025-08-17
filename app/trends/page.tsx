"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, Filter, TrendingDown, Activity, Users, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"

const mockTrends = [
  {
    id: 1,
    title: "AI-Powered Content Creation",
    platform: "TikTok",
    category: "Technology",
    viralScore: 95,
    engagement: 2.4,
    growth: "+156%",
    trending: "up",
    description: "AI tools for creating viral content are gaining massive traction",
  },
  {
    id: 2,
    title: "Sustainable Fashion Movement",
    platform: "Instagram",
    category: "Lifestyle",
    viralScore: 87,
    engagement: 1.8,
    growth: "+89%",
    trending: "up",
    description: "Eco-friendly fashion trends are dominating social media",
  },
  {
    id: 3,
    title: "Remote Work Productivity Hacks",
    platform: "LinkedIn",
    category: "Business",
    viralScore: 78,
    engagement: 1.2,
    growth: "+67%",
    trending: "up",
    description: "Tips and tools for better remote work efficiency",
  },
  {
    id: 4,
    title: "Plant-Based Diet Recipes",
    platform: "YouTube",
    category: "Food",
    viralScore: 82,
    engagement: 1.9,
    growth: "+134%",
    trending: "up",
    description: "Vegan and plant-based cooking content is exploding",
  },
  {
    id: 5,
    title: "Mental Health Awareness",
    platform: "Twitter",
    category: "Health",
    viralScore: 91,
    engagement: 2.1,
    growth: "+203%",
    trending: "up",
    description: "Mental health discussions and support are trending globally",
  },
]

export default function TrendsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const categories = ["all", "Technology", "Lifestyle", "Business", "Food", "Health", "Entertainment"]
  const platforms = ["all", "TikTok", "Instagram", "LinkedIn", "YouTube", "Twitter", "Facebook"]

  const filteredTrends = mockTrends.filter((trend) => {
    const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trend.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || trend.category === selectedCategory
    const matchesPlatform = selectedPlatform === "all" || trend.platform === selectedPlatform
    
    return matchesSearch && matchesCategory && matchesPlatform
  })

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
            <h1 className="text-3xl font-bold">Trends</h1>
            <p className="text-muted-foreground">Track viral trends across all platforms</p>
          </div>
        </div>
        <Button>
          <Activity className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search trends..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-3 py-2 border rounded-md bg-background"
            >
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform === "all" ? "All Platforms" : platform}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Trends Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTrends.map((trend) => (
          <Card key={trend.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{trend.title}</CardTitle>
                  <CardDescription className="mt-2">{trend.description}</CardDescription>
                </div>
                <TrendingUp className={`h-5 w-5 ${
                  trend.trending === "up" ? "text-green-500" : "text-red-500"
                }`} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{trend.platform}</Badge>
                <Badge variant="secondary">{trend.category}</Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-green-600">{trend.viralScore}</div>
                  <div className="text-muted-foreground">Viral Score</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{trend.engagement}M</div>
                  <div className="text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-green-600">{trend.growth}</div>
                  <div className="text-muted-foreground">Growth</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="mr-1 h-3 w-3" />
                  Track
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="mr-1 h-3 w-3" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTrends.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <TrendingDown className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No trends found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
