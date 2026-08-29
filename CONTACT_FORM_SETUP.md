# Contact Form Setup Guide

Your contact form is now fully functional with:
- ✅ Form validation using Zod & React Hook Form
- ✅ Real-time error messages for each field
- ✅ Loading state while submitting
- ✅ Success feedback to users
- ✅ Form reset after successful submission

## What You Need to Do: Setup Formspree

To complete the setup, you need to create a free Formspree account and get your form endpoint:

### Steps:

1. **Go to Formspree**: https://formspree.io/
2. **Create a free account** (you can sign up with email)
3. **Create a new form** and select these options:
   - Form name: "Contact Form" (or whatever you prefer)
   - Email address: Your email (where you want to receive submissions)
4. **Copy the form endpoint** - It will look like: `https://formspree.io/f/YOUR_CODE_HERE`

### Update Your Code:

In `src/components/portfolio/Contact.tsx`, find this line (around line 50):

```javascript
const response = await fetch("https://formspree.io/f/mllejqqq", {
```

Replace `mllejqqq` with your actual Formspree form code:

```javascript
const response = await fetch("https://formspree.io/f/YOUR_CODE_HERE", {
```

### Optional: Use Environment Variables (Recommended for Production)

For better security and flexibility, create a `.env.local` file in your project root:

```
VITE_FORMSPREE_ID=YOUR_CODE_HERE
```

Then update your form submission code to:

```javascript
const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
```

## Features Implemented

### Form Validation
- **Name**: Minimum 2 characters required
- **Email**: Valid email format required
- **Project Type**: Must select an option
- **Budget Range**: Must select an option  
- **Message**: Minimum 10 characters required

### User Experience
- Real-time validation errors shown below each field
- Spinner animation while sending
- Button disabled during submission to prevent double-submission
- Success message displays for 5 seconds
- Error messages if submission fails
- Form automatically resets after successful submission

### Styling
- Error messages in red with AlertCircle icon
- Success message in primary color with CheckCircle icon
- Loading spinner on submit button
- All styling matches your existing design system

## Testing

1. Try submitting with incomplete fields - you'll see validation errors
2. Try submitting with invalid email - you'll see format error
3. Submit a complete form - you should see the success message
4. Check your email for the submission details

That's it! Your contact form is production-ready.
