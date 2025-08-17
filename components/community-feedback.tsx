"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useFeedback, useReviews } from "@/hooks/use-firebase-data"
import { useAuthContext } from "@/components/auth-provider"
import { MessageSquare, Star, ThumbsUp, ThumbsDown, Clock, CheckCircle, XCircle } from "lucide-react"

export function CommunityFeedback() {
  const { feedback, loading: feedbackLoading, updateFeedback } = useFeedback()
  const { reviews, loading: reviewsLoading } = useReviews()
  const [activeTab, setActiveTab] = useState("reviews")
  const { user } = useAuthContext()

  const handleStatusUpdate = async (feedbackId: string, newStatus: string) => {
    try {
      await updateFeedback(feedbackId, { status: newStatus })
    } catch (error) {
      console.error("Error updating feedback status:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="h-3 w-3" />
      case "in-progress":
        return <Clock className="h-3 w-3" />
      case "pending":
        return <Clock className="h-3 w-3" />
      case "rejected":
        return <XCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Just now"
    
    let date: Date
    if (timestamp.toDate) {
      date = timestamp.toDate()
    } else if (timestamp.seconds) {
      date = new Date(timestamp.seconds * 1000)
    } else if (timestamp instanceof Date) {
      date = timestamp
    } else {
      return "Just now"
    }
    
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 1) {
      return "Just now"
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Community Feedback
        </CardTitle>
        <CardDescription>Recent feedback and reviews from the Trendy community</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-4">
            {reviewsLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading reviews...</p>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-8">
                <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No reviews yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {reviews.slice(0, 5).map((review) => (
                  <div key={review.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={review.userAvatar} />
                          <AvatarFallback>
                            {review.userName?.charAt(0) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{review.userName}</p>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {formatDate(review.createdAt)}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">{review.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {review.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {review.helpful}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          {review.notHelpful}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            {feedbackLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading feedback...</p>
              </div>
            ) : feedback.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No feedback yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {feedback.slice(0, 5).map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={item.userAvatar} />
                          <AvatarFallback>
                            {item.userName?.charAt(0) || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{item.userName}</p>
                          <p className="text-xs text-muted-foreground">{item.userEmail}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </Badge>
                        {user?.email === "admin@trendy.com" ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Badge className={`text-xs ${getStatusColor(item.status)} flex items-center gap-1 cursor-pointer hover:opacity-80`}>
                                {getStatusIcon(item.status)}
                                {item.status}
                              </Badge>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem onClick={() => handleStatusUpdate(item.id!, "pending")}>
                                <Clock className="h-3 w-3 mr-2" />
                                Pending
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusUpdate(item.id!, "in-progress")}>
                                <Clock className="h-3 w-3 mr-2" />
                                In Progress
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusUpdate(item.id!, "resolved")}>
                                <CheckCircle className="h-3 w-3 mr-2" />
                                Resolved
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusUpdate(item.id!, "rejected")}>
                                <XCircle className="h-3 w-3 mr-2" />
                                Rejected
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : (
                          <Badge className={`text-xs ${getStatusColor(item.status)} flex items-center gap-1`}>
                            {getStatusIcon(item.status)}
                            {item.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {formatDate(item.createdAt)}
                        </div>
                        {user?.uid === item.userId && item.status === "pending" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onClick={() => handleStatusUpdate(item.id!, "resolved")}
                          >
                            Mark Resolved
                          </Button>
                        )}
                      </div>
                    </div>

                    {item.adminResponse && (
                      <div className="bg-muted/50 rounded-lg p-3 mt-3">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">Admin Response</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.adminResponse}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
