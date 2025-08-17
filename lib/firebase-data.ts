import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  onSnapshot
} from "firebase/firestore"
import { db } from "./firebase"

// Types
export interface Trend {
  id?: string
  userId: string
  title: string
  platform: string
  category: string
  viralScore: number
  engagement: number
  growth: string
  trending: "up" | "down"
  description: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface AnalyticsData {
  id?: string
  userId: string
  totalTrends: number
  averageViralScore: number
  totalEngagement: number
  alertTriggers: number
  platformData: Array<{
    name: string
    value: number
    color: string
  }>
  categoryData: Array<{
    name: string
    value: number
    color: string
  }>
  date: Timestamp
}

export interface Alert {
  id?: string
  userId: string
  title: string
  description: string
  type: "trend" | "engagement" | "viral"
  status: "active" | "resolved" | "dismissed"
  createdAt: Timestamp
  triggeredAt?: Timestamp
}

export interface Feedback {
  id?: string
  userId: string
  userName: string
  userEmail: string
  userAvatar?: string
  title: string
  content: string
  category: "bug" | "feature" | "improvement" | "general"
  priority: "low" | "medium" | "high" | "critical"
  status: "pending" | "in-progress" | "resolved" | "rejected"
  rating?: number
  tags: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
  adminResponse?: string
  adminResponseAt?: Timestamp
}

export interface Review {
  id?: string
  userId: string
  userName: string
  userEmail: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  helpful: number
  notHelpful: number
  verified: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Collections
export const TRENDS_COLLECTION = "trends"
export const ANALYTICS_COLLECTION = "analytics"
export const ALERTS_COLLECTION = "alerts"
export const USERS_COLLECTION = "users"
export const FEEDBACK_COLLECTION = "feedback"
export const REVIEWS_COLLECTION = "reviews"

// Trends Service
export const trendsService = {
  // Get all trends
  async getAllTrends(): Promise<Trend[]> {
    const querySnapshot = await getDocs(collection(db, TRENDS_COLLECTION))
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Trend[]
  },

  // Get trends by user
  async getTrendsByUser(userId: string): Promise<Trend[]> {
    const q = query(
      collection(db, TRENDS_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Trend[]
  },

  // Add new trend
  async addTrend(trend: Omit<Trend, "id" | "createdAt" | "updatedAt">): Promise<string> {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, TRENDS_COLLECTION), {
      ...trend,
      createdAt: now,
      updatedAt: now
    })
    return docRef.id
  },

  // Update trend
  async updateTrend(id: string, updates: Partial<Trend>): Promise<void> {
    const docRef = doc(db, TRENDS_COLLECTION, id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    })
  },

  // Delete trend
  async deleteTrend(id: string): Promise<void> {
    const docRef = doc(db, TRENDS_COLLECTION, id)
    await deleteDoc(docRef)
  },

  // Real-time trends subscription
  subscribeToTrends(userId: string, callback: (trends: Trend[]) => void) {
    const q = query(
      collection(db, TRENDS_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    return onSnapshot(q, (querySnapshot) => {
      const trends = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Trend[]
      callback(trends)
    })
  }
}

// Analytics Service
export const analyticsService = {
  // Get analytics for user
  async getAnalyticsByUser(userId: string): Promise<AnalyticsData[]> {
    const q = query(
      collection(db, ANALYTICS_COLLECTION),
      where("userId", "==", userId),
      orderBy("date", "desc"),
      limit(30) // Last 30 days
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as AnalyticsData[]
  },

  // Add analytics data
  async addAnalytics(analytics: Omit<AnalyticsData, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, ANALYTICS_COLLECTION), analytics)
    return docRef.id
  },

  // Update analytics
  async updateAnalytics(id: string, updates: Partial<AnalyticsData>): Promise<void> {
    const docRef = doc(db, ANALYTICS_COLLECTION, id)
    await updateDoc(docRef, updates)
  },

  // Real-time analytics subscription
  subscribeToAnalytics(userId: string, callback: (analytics: AnalyticsData[]) => void) {
    const q = query(
      collection(db, ANALYTICS_COLLECTION),
      where("userId", "==", userId),
      orderBy("date", "desc"),
      limit(30)
    )
    return onSnapshot(q, (querySnapshot) => {
      const analytics = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as AnalyticsData[]
      callback(analytics)
    })
  }
}

// Alerts Service
export const alertsService = {
  // Get alerts by user
  async getAlertsByUser(userId: string): Promise<Alert[]> {
    const q = query(
      collection(db, ALERTS_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Alert[]
  },

  // Add new alert
  async addAlert(alert: Omit<Alert, "id" | "createdAt">): Promise<string> {
    const docRef = await addDoc(collection(db, ALERTS_COLLECTION), {
      ...alert,
      createdAt: Timestamp.now()
    })
    return docRef.id
  },

  // Update alert status
  async updateAlertStatus(id: string, status: Alert["status"]): Promise<void> {
    const docRef = doc(db, ALERTS_COLLECTION, id)
    await updateDoc(docRef, { status })
  },

  // Delete alert
  async deleteAlert(id: string): Promise<void> {
    const docRef = doc(db, ALERTS_COLLECTION, id)
    await deleteDoc(docRef)
  },

  // Real-time alerts subscription
  subscribeToAlerts(userId: string, callback: (alerts: Alert[]) => void) {
    const q = query(
      collection(db, ALERTS_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    return onSnapshot(q, (querySnapshot) => {
      const alerts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Alert[]
      callback(alerts)
    })
  }
}

// Feedback Service
export const feedbackService = {
  // Get all feedback (for admin)
  async getAllFeedback(): Promise<Feedback[]> {
    const q = query(
      collection(db, FEEDBACK_COLLECTION),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Feedback[]
  },

  // Get feedback by user
  async getFeedbackByUser(userId: string): Promise<Feedback[]> {
    const q = query(
      collection(db, FEEDBACK_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Feedback[]
  },

  // Add new feedback
  async addFeedback(feedback: Omit<Feedback, "id" | "createdAt" | "updatedAt">): Promise<string> {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, FEEDBACK_COLLECTION), {
      ...feedback,
      createdAt: now,
      updatedAt: now
    })
    return docRef.id
  },

  // Update feedback
  async updateFeedback(id: string, updates: Partial<Feedback>): Promise<void> {
    const docRef = doc(db, FEEDBACK_COLLECTION, id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    })
  },

  // Delete feedback
  async deleteFeedback(id: string): Promise<void> {
    const docRef = doc(db, FEEDBACK_COLLECTION, id)
    await deleteDoc(docRef)
  },

  // Real-time feedback subscription
  subscribeToFeedback(callback: (feedback: Feedback[]) => void) {
    const q = query(
      collection(db, FEEDBACK_COLLECTION),
      orderBy("createdAt", "desc"),
      limit(50)
    )
    return onSnapshot(q, (querySnapshot) => {
      const feedback = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Feedback[]
      callback(feedback)
    })
  }
}

// Reviews Service
export const reviewsService = {
  // Get all reviews
  async getAllReviews(): Promise<Review[]> {
    const q = query(
      collection(db, REVIEWS_COLLECTION),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Review[]
  },

  // Get reviews by user
  async getReviewsByUser(userId: string): Promise<Review[]> {
    const q = query(
      collection(db, REVIEWS_COLLECTION),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    )
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Review[]
  },

  // Add new review
  async addReview(review: Omit<Review, "id" | "createdAt" | "updatedAt">): Promise<string> {
    const now = Timestamp.now()
    const docRef = await addDoc(collection(db, REVIEWS_COLLECTION), {
      ...review,
      createdAt: now,
      updatedAt: now
    })
    return docRef.id
  },

  // Update review
  async updateReview(id: string, updates: Partial<Review>): Promise<void> {
    const docRef = doc(db, REVIEWS_COLLECTION, id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    })
  },

  // Delete review
  async deleteReview(id: string): Promise<void> {
    const docRef = doc(db, REVIEWS_COLLECTION, id)
    await deleteDoc(docRef)
  },

  // Update review helpful/not helpful counts
  async updateReviewVotes(id: string, helpful: number, notHelpful: number): Promise<void> {
    const docRef = doc(db, REVIEWS_COLLECTION, id)
    await updateDoc(docRef, { helpful, notHelpful })
  },

  // Real-time reviews subscription
  subscribeToReviews(callback: (reviews: Review[]) => void) {
    const q = query(
      collection(db, REVIEWS_COLLECTION),
      orderBy("createdAt", "desc"),
      limit(50)
    )
    return onSnapshot(q, (querySnapshot) => {
      const reviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[]
      callback(reviews)
    })
  }
}

// User Service
export const userService = {
  // Get user profile
  async getUserProfile(userId: string) {
    const docRef = doc(db, USERS_COLLECTION, userId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
    return null
  },

  // Update user profile
  async updateUserProfile(userId: string, updates: any): Promise<void> {
    const docRef = doc(db, USERS_COLLECTION, userId)
    await updateDoc(docRef, updates)
  }
}

// Initialize sample feedback data
export const initializeSampleFeedback = async () => {
  try {
    // Add sample feedback
    await addDoc(collection(db, FEEDBACK_COLLECTION), {
      userId: "sample-user",
      userName: "John Doe",
      userEmail: "john@example.com",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      title: "Great Platform!",
      content: "I love how easy it is to track trends across different platforms. The analytics are really helpful for my business.",
      category: "general",
      priority: "medium",
      status: "pending",
      rating: 5,
      tags: ["user-friendly", "analytics"],
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })

    // Add sample review
    await addDoc(collection(db, REVIEWS_COLLECTION), {
      userId: "sample-user",
      userName: "Sarah Wilson",
      userEmail: "sarah@example.com",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
      rating: 5,
      title: "Excellent Trend Tracking",
      content: "This platform has revolutionized how I track social media trends. The real-time alerts are incredibly useful!",
      helpful: 12,
      notHelpful: 1,
      verified: true,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })

    console.log("Sample feedback data initialized successfully")
  } catch (error) {
    console.error("Error initializing sample feedback:", error)
  }
}

// Clear all feedback data (for testing)
export const clearFeedbackData = async () => {
  try {
    const feedbackSnapshot = await getDocs(collection(db, FEEDBACK_COLLECTION))
    const reviewSnapshot = await getDocs(collection(db, REVIEWS_COLLECTION))
    
    // Delete all feedback
    const feedbackPromises = feedbackSnapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(feedbackPromises)
    
    // Delete all reviews
    const reviewPromises = reviewSnapshot.docs.map(doc => deleteDoc(doc.ref))
    await Promise.all(reviewPromises)
    
    console.log("All feedback data cleared successfully")
  } catch (error) {
    console.error("Error clearing feedback data:", error)
  }
}
