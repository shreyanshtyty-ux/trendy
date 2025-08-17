import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'

// Initialize Razorpay with your key ID and secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YOUR_TEST_KEY_ID',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'YOUR_TEST_KEY_SECRET',
})

export async function POST(request: NextRequest) {
  try {
    const { plan, amount, currency = 'INR' } = await request.json()

    // Validate the request
    if (!plan || !amount) {
      return NextResponse.json(
        { error: 'Plan and amount are required' },
        { status: 400 }
      )
    }

    // Create order options
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise (smallest currency unit)
      currency: currency,
      receipt: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      notes: {
        plan: plan,
        description: `Trendy ${plan} Plan Subscription`
      }
    }

    // Create the order
    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt
      }
    })

  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
