"use client"

import { useState, useEffect } from "react"
import {
  type User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { auth, googleProvider, facebookProvider, githubProvider } from "@/lib/firebase"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { user: result.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return { user: result.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      return { user: result.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider)
      return { user: result.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider)
      return { user: result.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  return {
    user,
    loading,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    logout,
  }
}
