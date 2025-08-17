import { useState, useEffect } from "react"
import { useAuthContext } from "@/components/auth-provider"
import { 
  trendsService, 
  analyticsService, 
  alertsService, 
  userService,
  feedbackService,
  reviewsService,
  type Trend,
  type AnalyticsData,
  type Alert,
  type Feedback,
  type Review
} from "@/lib/firebase-data"

export function useTrends() {
  const [trends, setTrends] = useState<Trend[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user?.uid) {
      setTrends([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const unsubscribe = trendsService.subscribeToTrends(user.uid, (data) => {
      setTrends(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user?.uid])

  const addTrend = async (trendData: Omit<Trend, "id" | "createdAt" | "updatedAt" | "userId">) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await trendsService.addTrend({
        ...trendData,
        userId: user.uid
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add trend")
      throw err
    }
  }

  const updateTrend = async (id: string, updates: Partial<Trend>) => {
    try {
      await trendsService.updateTrend(id, updates)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update trend")
      throw err
    }
  }

  const deleteTrend = async (id: string) => {
    try {
      await trendsService.deleteTrend(id)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete trend")
      throw err
    }
  }

  return {
    trends,
    loading,
    error,
    addTrend,
    updateTrend,
    deleteTrend
  }
}

export function useAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user?.uid) {
      setAnalytics([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const unsubscribe = analyticsService.subscribeToAnalytics(user.uid, (data) => {
      setAnalytics(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user?.uid])

  const addAnalytics = async (analyticsData: Omit<AnalyticsData, "id">) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await analyticsService.addAnalytics({
        ...analyticsData,
        userId: user.uid
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add analytics")
      throw err
    }
  }

  const updateAnalytics = async (id: string, updates: Partial<AnalyticsData>) => {
    try {
      await analyticsService.updateAnalytics(id, updates)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update analytics")
      throw err
    }
  }

  return {
    analytics,
    loading,
    error,
    addAnalytics,
    updateAnalytics
  }
}

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user?.uid) {
      setAlerts([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const unsubscribe = alertsService.subscribeToAlerts(user.uid, (data) => {
      setAlerts(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user?.uid])

  const addAlert = async (alertData: Omit<Alert, "id" | "createdAt">) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await alertsService.addAlert({
        ...alertData,
        userId: user.uid
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add alert")
      throw err
    }
  }

  const updateAlertStatus = async (id: string, status: Alert["status"]) => {
    try {
      await alertsService.updateAlertStatus(id, status)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update alert")
      throw err
    }
  }

  const deleteAlert = async (id: string) => {
    try {
      await alertsService.deleteAlert(id)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete alert")
      throw err
    }
  }

  return {
    alerts,
    loading,
    error,
    addAlert,
    updateAlertStatus,
    deleteAlert
  }
}

export function useFeedback() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    setLoading(true)
    setError(null)

    const unsubscribe = feedbackService.subscribeToFeedback((data) => {
      setFeedback(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const addFeedback = async (feedbackData: Omit<Feedback, "id" | "createdAt" | "updatedAt">) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await feedbackService.addFeedback({
        ...feedbackData,
        userId: user.uid,
        userName: user.displayName || "Anonymous",
        userEmail: user.email || "",
        userAvatar: user.photoURL || undefined
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add feedback")
      throw err
    }
  }

  const updateFeedback = async (id: string, updates: Partial<Feedback>) => {
    try {
      await feedbackService.updateFeedback(id, updates)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update feedback")
      throw err
    }
  }

  const deleteFeedback = async (id: string) => {
    try {
      await feedbackService.deleteFeedback(id)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete feedback")
      throw err
    }
  }

  return {
    feedback,
    loading,
    error,
    addFeedback,
    updateFeedback,
    deleteFeedback
  }
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    setLoading(true)
    setError(null)

    const unsubscribe = reviewsService.subscribeToReviews((data) => {
      setReviews(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const addReview = async (reviewData: Omit<Review, "id" | "createdAt" | "updatedAt">) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await reviewsService.addReview({
        ...reviewData,
        userId: user.uid,
        userName: user.displayName || "Anonymous",
        userEmail: user.email || "",
        userAvatar: user.photoURL || undefined
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add review")
      throw err
    }
  }

  const updateReview = async (id: string, updates: Partial<Review>) => {
    try {
      await reviewsService.updateReview(id, updates)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update review")
      throw err
    }
  }

  const deleteReview = async (id: string) => {
    try {
      await reviewsService.deleteReview(id)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete review")
      throw err
    }
  }

  const updateReviewVotes = async (id: string, helpful: number, notHelpful: number) => {
    try {
      await reviewsService.updateReviewVotes(id, helpful, notHelpful)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update review votes")
      throw err
    }
  }

  return {
    reviews,
    loading,
    error,
    addReview,
    updateReview,
    deleteReview,
    updateReviewVotes
  }
}

export function useUserProfile() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    if (!user?.uid) {
      setProfile(null)
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    const fetchProfile = async () => {
      try {
        const userProfile = await userService.getUserProfile(user.uid)
        setProfile(userProfile)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch profile")
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [user?.uid])

  const updateProfile = async (updates: any) => {
    if (!user?.uid) throw new Error("User not authenticated")
    
    try {
      await userService.updateUserProfile(user.uid, updates)
      setProfile((prev: any) => ({ ...prev, ...updates }))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile")
      throw err
    }
  }

  return {
    profile,
    loading,
    error,
    updateProfile
  }
}
