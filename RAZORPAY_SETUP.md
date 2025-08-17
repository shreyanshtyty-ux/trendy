# Razorpay Integration Setup Guide

## 🚀 Quick Start

### 1. Get Razorpay API Keys

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to Settings → API Keys
3. Generate a new key pair
4. Copy your **Key ID** and **Key Secret**

### 2. Environment Variables

Create a `.env.local` file in your project root and add:

```bash
# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_TEST_KEY_SECRET
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YOUR_TEST_KEY_ID
```

### 3. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/pricing` page
3. Click on "Start Pro Plan" or "Start Enterprise Plan"
4. Complete the test payment using Razorpay test cards

## 💳 Test Cards

Use these test cards for development:

| Card Type | Card Number | Expiry | CVV |
|-----------|-------------|---------|-----|
| Visa | 4111 1111 1111 1111 | Any future date | Any 3 digits |
| Mastercard | 5555 5555 5555 4444 | Any future date | Any 3 digits |
| RuPay | 6073 8400 0000 0000 | Any future date | Any 3 digits |

## 🔧 Features Implemented

### ✅ Payment Plans
- **Pro Plan**: ₹999/month
- **Enterprise Plan**: ₹2,999/month
- **Free Plan**: $0/month (existing)

### ✅ Payment Flow
1. User selects a plan on `/pricing`
2. Server creates Razorpay order
3. Client opens Razorpay checkout
4. Payment verification on server
5. Success/failure handling

### ✅ Dashboard Integration
- Subscription status component
- Upgrade prompts for free users
- Payment management interface

### ✅ Security Features
- Server-side order creation
- Payment signature verification
- Environment variable protection
- CORS protection

## 🛠️ API Endpoints

### Create Order
```
POST /api/razorpay/order
Body: { plan: string, amount: number, currency: string }
```

### Verify Payment
```
POST /api/razorpay/verify
Body: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
```

## 📁 Files Added/Modified

### New Files
- `app/api/razorpay/order/route.ts` - Order creation API
- `app/api/razorpay/verify/route.ts` - Payment verification API
- `hooks/use-razorpay.ts` - React hook for payments
- `components/subscription-status.tsx` - Subscription management UI

### Modified Files
- `app/pricing/page.tsx` - Integrated payment buttons
- `app/dashboard/page.tsx` - Added subscription status

## 🔒 Security Notes

1. **Never expose your Key Secret** on the client-side
2. **Always verify payments** on the server-side
3. **Use environment variables** for sensitive data
4. **Test thoroughly** before going live

## 🚀 Going Live

1. Replace test keys with live keys in `.env.local`
2. Update `NEXT_PUBLIC_RAZORPAY_KEY_ID` with live key
3. Test with real payment methods
4. Monitor payments in Razorpay Dashboard

## 📞 Support

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🎯 Next Steps

1. **Subscription Management**: Add recurring billing
2. **Invoice Generation**: Create invoice PDFs
3. **Payment History**: Store payment records in Firebase
4. **Webhook Integration**: Handle payment events
5. **Refund Management**: Add refund capabilities
