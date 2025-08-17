"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Users, Share2 } from "lucide-react"
import Link from "next/link"

const giftsTrends = [
  {
    id: 1,
    title: "Personalized Gifts",
    platform: "Instagram",
    engagement: "2.8M",
    growth: "+189%",
    viralScore: 93,
    description: "Custom and personalized gift ideas",
    hashtags: ["#PersonalizedGifts", "#CustomGifts", "#GiftIdeas"],
  },
  {
    id: 2,
    title: "Eco-Friendly Gifts",
    platform: "TikTok",
    engagement: "3.2M",
    growth: "+234%",
    viralScore: 95,
    description: "Sustainable and environmentally friendly gifts",
    hashtags: ["#EcoFriendlyGifts", "#SustainableGifts", "#GreenGifts"],
  },
  {
    id: 3,
    title: "Tech Gadgets as Gifts",
    platform: "YouTube",
    engagement: "2.4M",
    growth: "+167%",
    viralScore: 89,
    description: "Latest technology gifts and reviews",
    hashtags: ["#TechGifts", "#GadgetGifts", "#TechReviews"],
  },
  {
    id: 4,
    title: "Handmade Gifts",
    platform: "Pinterest",
    engagement: "2.1M",
    growth: "+145%",
    viralScore: 87,
    description: "DIY and handmade gift tutorials",
    hashtags: ["#HandmadeGifts", "#DIYGifts", "#CraftGifts"],
  },
  {
    id: 5,
    title: "Subscription Boxes",
    platform: "Twitter",
    engagement: "1.7M",
    growth: "+123%",
    viralScore: 84,
    description: "Monthly subscription gift services",
    hashtags: ["#SubscriptionBoxes", "#MonthlyGifts", "#GiftSubscriptions"],
  },
  {
    id: 6,
    title: "Experience Gifts",
    platform: "Instagram",
    engagement: "2.6M",
    growth: "+178%",
    viralScore: 91,
    description: "Adventure and experience-based gifts",
    hashtags: ["#ExperienceGifts", "#AdventureGifts", "#MemoryGifts"],
  },
]

export default function GiftsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const filteredTrends = selectedPlatform === "all" 
    ? giftsTrends 
    : giftsTrends.filter(trend => trend.platform === selectedPlatform)

  const platforms = ["all", ...Array.from(new Set(giftsTrends.map(trend => trend.platform)))]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Gifts</h1>
          <p className="text-muted-foreground">Top trending gifts and gift ideas</p>
        </div>
      </div>

      {/* Platform Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filter by Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            {platforms.map((platform) => (
              <Button
                key={platform}
                variant={selectedPlatform === platform ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform === "all" ? "All Platforms" : platform}
              </Button>
            ))}
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
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{trend.platform}</Badge>
                <Badge variant="secondary" className="text-green-600">
                  {trend.growth}
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-green-600">{trend.viralScore}</div>
                  <div className="text-muted-foreground">Viral Score</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{trend.engagement}</div>
                  <div className="text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-green-600">{trend.growth}</div>
                  <div className="text-muted-foreground">Growth</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {trend.hashtags.map((hashtag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {hashtag}
                  </Badge>
                ))}
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
            <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No trends found</h3>
            <p className="text-muted-foreground">Try adjusting your platform filter</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

