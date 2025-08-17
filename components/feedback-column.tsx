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
import { MessageSquare, Send, Heart } from "lucide-react"
import { FEEDBACK_COLLECTION } from "@/lib/firebase-data"

interface Feedback {
  id: string
  content: string
  userName: string
  userEmail: string
  userAvatar?: string
  title: string
  category: string
  priority: string
  status: string
  createdAt: any
  likes: number
}

export function FeedbackColumn() {
  const { user } = useAuthContext()
  const [feedback, setFeedback] = useState("")
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const q = query(collection(db, FEEDBACK_COLLECTION), orderBy("createdAt", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const feedbackData: Feedback[] = []
      querySnapshot.forEach((doc) => {
        feedbackData.push({ id: doc.id, ...doc.data() } as Feedback)
      })
      setFeedbackList(feedbackData)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim() || !user) return

    setLoading(true)
    try {
      await addDoc(collection(db, FEEDBACK_COLLECTION), {
        userId: user.uid,
        content: feedback.trim(),
        title: "Community Feedback",
        userName: user.displayName || "Anonymous User",
        userEmail: user.email,
        userAvatar: user.photoURL,
        category: "general",
        priority: "medium",
        status: "pending",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        likes: 0,
      })
      setFeedback("")
    } catch (error) {
      console.error("Error adding feedback:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5" />
            Community Feedback
          </CardTitle>
          <CardDescription>Sign in to share your thoughts and feedback with the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">Join the conversation</p>
            <Button asChild>
              <a href="/login">Sign In to Comment</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Community Feedback
        </CardTitle>
        <CardDescription>Share your thoughts about Trendy with the community</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Feedback Form */}
        <form onSubmit={handleSubmitFeedback} className="space-y-4">
          <Textarea
            placeholder="Share your experience, suggestions, or feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[100px]"
            maxLength={500}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{feedback.length}/500 characters</span>
            <Button type="submit" disabled={!feedback.trim() || loading}>
              <Send className="mr-2 h-4 w-4" />
              {loading ? "Posting..." : "Post Feedback"}
            </Button>
          </div>
        </form>

        {/* Feedback List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {feedbackList.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No feedback yet. Be the first to share!</p>
            </div>
          ) : (
            feedbackList.map((item) => (
              <div key={item.id} className="flex space-x-3 p-3 border border-border rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={item.userAvatar || "/placeholder.svg"} />
                  <AvatarFallback>{item.userName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-foreground">{item.userName}</p>
                    <Badge variant="secondary" className="text-xs">
                      Community
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>
                      {item.createdAt?.toDate ? 
                        item.createdAt.toDate().toLocaleDateString() : 
                        item.createdAt?.seconds ? 
                          new Date(item.createdAt.seconds * 1000).toLocaleDateString() : 
                          "Just now"
                      }
                    </span>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </button>
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
