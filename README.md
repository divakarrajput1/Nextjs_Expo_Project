# Next.js + Expo with Firebase Cloud Messaging

A monorepo containing:
- Next.js web app with Google Sign-In
- Expo mobile app with WebView integration
- Firebase Cloud Messaging (FCM) for push notifications

## 🚀 Setup

### Prerequisites
- Node.js 18+
- Firebase project with:
  - Google Auth enabled
  - Android app configured for FCM
- Expo CLI (`npm install -g expo-cli`)

### Installation
```bash
# Clone the repo
git clone https://github.com/yourusername/next-expo-fcm.git
cd expo-app

# Install dependencies
cd nextjs-web && npm install
cd expo-app && npm install
```

## ⚡ Running the Projects

### Next.js Web App
```bash
cd nextjs-web
npm run dev
```
- Access at: `http://localhost:3000/login`

### Expo Mobile App
```bash
cd expo-app
npx expo start
```
- Scan QR code with Expo Go app (Android)
- For FCM testing: Build APK with `npx expo run:android`

## 🔐 Firebase Configuration

1. Add these files:
   - `web/.env.local` (Next.js):
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain.firebaseapp.com
     ```
   - `mobile/google-services.json` (from Firebase Console)

2. Enable Google Sign-In in Firebase Authentication

## 📱 Testing FCM Notifications
1. Get device token from app logs
2. Send test notification via:
   ```bash
   curl -X POST \
     -H "Authorization: key=YOUR_SERVER_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "to": "DEVICE_TOKEN",
       "notification": {
         "title": "Test",
         "body": "This is a test message"
       }
     }' \
     "https://fcm.googleapis.com/fcm/send"
   ```
