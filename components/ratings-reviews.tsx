"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuthContext } from "@/components/auth-provider"
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Star, ThumbsUp } from "lucide-react"

interface Review {
  id: string
  rating: number
  review: string
  userName: string
  userEmail: string
  userPhoto?: string
  timestamp: any
  helpful: number
}

export function RatingsReviews() {
  const { user } = useAuthContext()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [review, setReview] = useState("")
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviewsData: Review[] = []
      querySnapshot.forEach((doc) => {
        reviewsData.push({ id: doc.id, ...doc.data() } as Review)
      })
      setReviews(reviewsData)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!rating || !review.trim() || !user) return

    setLoading(true)
    try {
      await addDoc(collection(db, "reviews"), {
        rating,
        review: review.trim(),
        userName: user.displayName || "Anonymous User",
        userEmail: user.email,
        userPhoto: user.photoURL,
        timestamp: serverTimestamp(),
        helpful: 0,
      })
      setRating(0)
      setReview("")
      setShowReviewForm(false)
    } catch (error) {
      console.error("Error adding review:", error)
    }
    setLoading(false)
  }

  const averageRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

  const renderStars = (currentRating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`${interactive ? "cursor-pointer" : "cursor-default"} transition-colors`}
            onClick={() => interactive && onRate?.(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            disabled={!interactive}
          >
            <Star
              className={`h-5 w-5 ${
                star <= (interactive ? hoverRating || currentRating : currentRating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="mr-2 h-5 w-5 fill-yellow-400 text-yellow-400" />
            Ratings & Reviews
          </div>
          {user && !showReviewForm && (
            <Button variant="outline" size="sm" onClick={() => setShowReviewForm(true)}>
              Write Review
            </Button>
          )}
        </CardTitle>
        <CardDescription>
          {reviews.length > 0 ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {renderStars(averageRating)}
                <span className="font-medium">{averageRating.toFixed(1)}</span>
              </div>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
          ) : (
            "Be the first to review Trends Observer"
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Review Form */}
        {showReviewForm && user && (
          <form onSubmit={handleSubmitReview} className="space-y-4 p-4 border border-border rounded-lg">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Your Rating</label>
              {renderStars(rating, true, setRating)}
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Your Review</label>
              <Textarea
                placeholder="Share your experience with Trends Observer..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="min-h-[100px]"
                maxLength={1000}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-muted-foreground">{review.length}/1000 characters</span>
                <div className="space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setShowReviewForm(false)
                      setRating(0)
                      setReview("")
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" size="sm" disabled={!rating || !review.trim() || loading}>
                    {loading ? "Submitting..." : "Submit Review"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}

        {!user && (
          <div className="text-center py-6 border border-border rounded-lg">
            <Star className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground mb-4">Sign in to write a review</p>
            <Button asChild variant="outline">
              <a href="/login">Sign In</a>
            </Button>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="text-center py-8">
              <Star className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            reviews.map((reviewItem) => (
              <div key={reviewItem.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={reviewItem.userPhoto || "/placeholder.svg"} />
                    <AvatarFallback>{reviewItem.userName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <p className="font-medium text-foreground">{reviewItem.userName}</p>
                      <Badge variant="secondary" className="text-xs">
                        Verified User
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      {renderStars(reviewItem.rating)}
                      <span className="text-sm text-muted-foreground">
                        {reviewItem.timestamp?.toDate?.()?.toLocaleDateString() || "Just now"}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{reviewItem.review}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="h-3 w-3" />
                        <span>Helpful ({reviewItem.helpful})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
