"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, Users, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { gadgetsTrends } from "@/lib/category-data"

export default function GadgetsPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const filteredTrends = selectedPlatform === "all" 
    ? gadgetsTrends 
    : gadgetsTrends.filter(trend => trend.platform === selectedPlatform)

  const platforms = ["all", ...Array.from(new Set(gadgetsTrends.map(trend => trend.platform)))]

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
          <h1 className="text-3xl font-bold">Gadgets</h1>
          <p className="text-muted-foreground">Top trending gadgets and tech accessories</p>
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
          <Card key={trend.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={trend.image}
                alt={trend.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-2 right-2">
                <TrendingUp className="h-5 w-5 text-white drop-shadow-lg" />
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{trend.title}</CardTitle>
                  <CardDescription className="mt-2">{trend.description}</CardDescription>
                </div>
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

