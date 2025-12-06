# Deployment Guide for Portfolio

## Current Deployment URLs
- **Frontend (Vercel)**: https://my-portfolio-alpha-swart-16.vercel.app/
- **Backend (Render)**: https://my-portfolio-bm62.onrender.com

## Issues Fixed
1. ✅ Added new Vercel URL to CORS configuration
2. ✅ Updated Contact form to use environment variables
3. ✅ Created environment variable examples

## Steps to Deploy

### 1. Backend Deployment (Render.com)

#### Prerequisites
- Make sure your backend code is pushed to GitHub
- Ensure `.env` file is NOT committed (should be in `.gitignore`)

#### Steps:
1. Go to [Render.com](https://render.com) and log in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: my-portfolio-backend (or any name)
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   
5. Add Environment Variables in Render Dashboard:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_FROM="Portfolio Contact" <your-email@gmail.com>
   PORT=5000
   ```

6. Click "Create Web Service"
7. Copy the deployment URL (e.g., `https://your-app-name.onrender.com`)

### 2. Frontend Deployment (Vercel)

#### Prerequisites
- Frontend code pushed to GitHub
- Backend deployed and URL copied

#### Steps:
1. Go to [Vercel](https://vercel.com) and log in
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Add Environment Variables:
   - Go to "Settings" → "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com`
   - Make sure to add it for **Production** environment

6. Click "Deploy"

### 3. Update CORS Configuration (If Needed)

If you get CORS errors after deployment:

1. Update `server/server.js` CORS origins array to include your new Vercel URL:
   ```javascript
   origin: [
     'https://my-portfolio-alpha-swart-16.vercel.app',
     // ... other URLs
   ]
   ```

2. Push the changes to GitHub
3. Render will automatically redeploy

### 4. Redeploy Frontend (If Backend URL Changed)

If you change the backend URL:

1. Update the `VITE_API_URL` environment variable in Vercel
2. Go to Vercel Dashboard → Deployments
3. Click on the latest deployment → "Redeploy"

## Email Configuration (Gmail)

To use Gmail for sending emails:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new App Password for "Mail"
5. Use this 16-character password as `EMAIL_PASSWORD` (no spaces)

## Troubleshooting

### CORS Errors
- Verify the frontend URL is in the backend CORS origins array
- Check browser console for the exact error
- Ensure the backend is running and accessible

### Email Not Sending
- Verify environment variables are set correctly in Render
- Check Render logs for errors: Dashboard → Service → Logs
- Ensure you're using an App Password, not your regular Gmail password
- Check that the backend API endpoint is correct in the frontend

### Frontend Not Connecting to Backend
- Verify `VITE_API_URL` is set in Vercel environment variables
- Make sure to redeploy frontend after changing environment variables
- Check Network tab in browser DevTools to see the actual API URL being called

## Testing

### Test Backend
```bash
curl -X POST https://your-backend-url.onrender.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

### Test Frontend
1. Open your deployed site
2. Fill out the contact form
3. Check browser console for any errors
4. Verify email was received

## Important Notes

- **Free Tier Limitations**: Render free tier spins down after 15 minutes of inactivity. First request may take 30-60 seconds.
- **Environment Variables**: Always set environment variables in the deployment platform, never commit `.env` files.
- **HTTPS**: Both frontend and backend use HTTPS in production for security.

## Next Steps After Fixing

1. ✅ Push the updated `server.js` to GitHub
2. ✅ Render will auto-deploy the updated CORS configuration
3. ✅ Set `VITE_API_URL` in Vercel environment variables
4. ✅ Redeploy frontend in Vercel
5. ✅ Test the contact form on your deployed site
