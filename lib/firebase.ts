import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyBho-0gkSehcGM_15Hw0sCSEAoYb6WcQQg",
  authDomain: "trendy-12925.firebaseapp.com",
  projectId: "trendy-12925",
  storageBucket: "trendy-12925.firebasestorage.app",
  messagingSenderId: "81933445665",
  appId: "1:81933445665:web:6f1e8bb51f1f4dd10e5160",
  measurementId: "G-MCTHXDJZPM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics (only in browser environment)
let analytics = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Export analytics
export { analytics }

// OAuth providers
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()
export const githubProvider = new GithubAuthProvider()

export default app
