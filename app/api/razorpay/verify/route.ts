import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await request.json()

    // Validate the request
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required payment parameters' },
        { status: 400 }
      )
    }

    // Get the key secret from environment variables
    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'YOUR_TEST_KEY_SECRET'

    // Create the signature
    const body = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body.toString())
      .digest('hex')

    // Verify the signature
    const isAuthentic = expectedSignature === razorpay_signature

    if (isAuthentic) {
      // Payment is verified
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      })
    } else {
      // Payment verification failed
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Error verifying payment:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
