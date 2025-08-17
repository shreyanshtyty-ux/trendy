import { useState, useEffect } from 'react'
import { useAuthContext } from '@/components/auth-provider'

declare global {
  interface Window {
    Razorpay: any
  }
}

interface PaymentPlan {
  id: string
  name: string
  price: number
  currency: string
  features: string[]
  popular?: boolean
}

export const PAYMENT_PLANS: PaymentPlan[] = [
  {
    id: 'pro',
    name: 'Pro',
    price: 999, // ₹999/month
    currency: 'INR',
    features: [
      'All 8 platforms',
      'Unlimited keyword alerts',
      'Advanced analytics & AI insights',
      '90-day data history',
      'Real-time notifications',
      'Export & reporting',
      'Priority support'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 2999, // ₹2999/month
    currency: 'INR',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '12-month data history',
      'Custom integrations',
      'API access',
      'White-label options',
      'Dedicated account manager',
      '24/7 phone support'
    ]
  }
]

export function useRazorpay() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuthContext()

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const createOrder = async (plan: PaymentPlan) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/razorpay/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: plan.id,
          amount: plan.price,
          currency: plan.currency,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to create order')
      }

      return data.order
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to create order'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const verifyPayment = async (paymentData: {
    razorpay_payment_id: string
    razorpay_order_id: string
    razorpay_signature: string
  }) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('/api/razorpay/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Payment verification failed')
      }

      return data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment verification failed'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const initiatePayment = async (plan: PaymentPlan) => {
    try {
      if (!user) {
        throw new Error('Please login to continue')
      }

      // Create order
      const order = await createOrder(plan)

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_YOUR_TEST_KEY_ID',
        amount: order.amount,
        currency: order.currency,
        name: 'Trendy',
        description: `${plan.name} Plan Subscription`,
        image: '/placeholder-logo.png',
        order_id: order.id,
        prefill: {
          name: user.displayName || user.email?.split('@')[0] || '',
          email: user.email || '',
          contact: ''
        },
        notes: {
          plan: plan.id,
          user_id: user.uid
        },
        theme: {
          color: '#3B82F6'
        },
        handler: async function (response: any) {
          try {
            // Verify payment
            await verifyPayment({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            })

            // Payment successful - you can update user subscription here
            console.log('Payment successful:', response)
            
            // Show success message
            alert('Payment successful! Welcome to Trendy Pro!')
            
            // Redirect to dashboard
            window.location.href = '/dashboard'
          } catch (error) {
            console.error('Payment verification failed:', error)
            alert('Payment verification failed. Please contact support.')
          }
        }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment failed'
      setError(errorMessage)
      alert(errorMessage)
    }
  }

  return {
    loading,
    error,
    initiatePayment,
    PAYMENT_PLANS
  }
}
