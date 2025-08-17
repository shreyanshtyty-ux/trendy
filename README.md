# Trendy - Firebase Authentication Setup

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shreyanshtyty-gmailcoms-projects/v0-empty-conversation)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/CBsLLzsjWlI)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Firebase Setup

To fix the "Firebase: Error (auth/invalid-api-key)" error, follow these steps:

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

### 2. Get Your Firebase Configuration
1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Register your app with a nickname
6. Copy the configuration object

### 3. Create Environment Variables
Create a `.env.local` file in the root directory with the following content:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

Replace the values with your actual Firebase project configuration.

### 4. Enable Authentication
1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Enable the authentication methods you want to use (Google, Facebook, GitHub, etc.)

## Deployment

Your project is live at:

**[https://vercel.com/shreyanshtyty-gmailcoms-projects/v0-empty-conversation](https://vercel.com/shreyanshtyty-gmailcoms-projects/v0-empty-conversation)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/CBsLLzsjWlI](https://v0.app/chat/projects/CBsLLzsjWlI)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository