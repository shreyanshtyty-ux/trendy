"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useAuth } from "@/hooks/use-auth"
import type { User } from "firebase/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithEmail: (email: string, password: string) => Promise<{ user: User | null; error: string | null }>
  signUpWithEmail: (email: string, password: string) => Promise<{ user: User | null; error: string | null }>
  signInWithGoogle: () => Promise<{ user: User | null; error: string | null }>
  signInWithFacebook: () => Promise<{ user: User | null; error: string | null }>
  signInWithGithub: () => Promise<{ user: User | null; error: string | null }>
  logout: () => Promise<{ error: string | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
