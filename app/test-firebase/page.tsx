"use client"

import { useState, useEffect } from "react"
import { auth, db } from "@/lib/firebase"
import { collection, getDocs } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

export default function TestFirebasePage() {
  const [authStatus, setAuthStatus] = useState("Checking...")
  const [firestoreStatus, setFirestoreStatus] = useState("Checking...")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Test Auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthStatus("✅ Connected")
        setUser(user)
      } else {
        setAuthStatus("❌ Not authenticated")
        setUser(null)
      }
    })

    // Test Firestore
    const testFirestore = async () => {
      try {
        const testCollection = collection(db, "test")
        await getDocs(testCollection)
        setFirestoreStatus("✅ Connected")
      } catch (error: any) {
        setFirestoreStatus(`❌ Error: ${error.message}`)
      }
    }

    testFirestore()

    return () => unsubscribe()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Firebase Connection Test</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Authentication Status</h2>
          <p>{authStatus}</p>
          {user && (
            <div className="mt-2 text-sm text-gray-600">
              <p>User ID: {user.uid}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Firestore Status</h2>
          <p>{firestoreStatus}</p>
        </div>
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Project Configuration</h2>
          <p>Project ID: trendy-12925</p>
          <p>Auth Domain: trendy-12925.firebaseapp.com</p>
        </div>
      </div>
    </div>
  )
}