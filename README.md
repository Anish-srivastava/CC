# Ticket Management System

A web-based ticket management system with separate portals for customers and companies.

## Features
- Customer Portal for raising complaints
- Company Portal for managing tickets
- Real-time ticket tracking
- Firebase Firestore integration

## Files Structure
- `index.html` - Main landing page
- `a.html` - Customer portal
- `Company.html` - Company dashboard
- `access.js` - Firebase configuration and functions
- `nested-structure.html` - Additional features

## Deployment Instructions

### For Render.com:
1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist` (or leave empty for root)
3. **Start Command**: `npm start`

### For AWS Amplify/Netlify:
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Start File**: `index.html`

### For local development:
```bash
# Install dependencies
npm install

# Run locally
npm start

# Development server
npm run dev
```

## Repository Information
- **Correct Repository**: https://github.com/Anish-srivastava/CC.git
- **Branch**: main
- **Node Version**: 20.x

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Firebase Firestore
- Static Web Hosting