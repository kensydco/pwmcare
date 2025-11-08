# Contact Form Setup Guide

Instructions for configuring the contact form to send emails to info@pwmcare.com

---

## 📧 Current Configuration

The contact form on the website uses **Formspree** - a free service that handles form submissions for static websites.

**Form Location:** Contact Us page (`/contact.html`)

**Current Status:** Form configured with placeholder Formspree endpoint

---

## 🚀 Setup Instructions

### Option 1: Formspree (Recommended - FREE)

Formspree is a popular, free service for static site forms. It's already integrated into the website.

#### Step 1: Create Formspree Account

1. Go to https://formspree.io/
2. Click **"Sign Up"** (top right)
3. Create account with info@pwmcare.com (or personal email to manage)

#### Step 2: Create New Form

1. After logging in, click **"+ New Form"**
2. Give it a name: "PWM Contact Form"
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xXXXXXXX`)

#### Step 3: Configure Email Delivery

1. In Formspree dashboard, open your form
2. Go to **Settings** tab
3. Under **"Email"**, add: `info@pwmcare.com`
4. Click **"Save"**

#### Step 4: Update Website Code

1. Open `/home/user/pwmcare/contact.html`
2. Find line 242 (the `<form>` tag)
3. Replace the `action` URL with your new Formspree endpoint:

```html
<form id="contact-form" class="contact-form"
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST" novalidate>
```

4. Save and deploy

#### Step 5: Test the Form

1. Visit your live website
2. Fill out the contact form
3. Submit
4. Check info@pwmcare.com for the email
5. First submission requires email verification

#### Formspree Features (FREE Plan)

- ✅ 50 submissions/month (FREE)
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads
- ✅ Auto-response emails
- ✅ Export submissions

**Cost:** FREE for up to 50 submissions/month

**Upgrade:** $10/month for unlimited submissions (if needed)

---

### Option 2: Cloudflare Pages Functions (Free, More Complex)

If you want to keep everything in Cloudflare:

#### Step 1: Create Cloudflare Function

1. In your project, create `/functions/api/contact.js`:

```javascript
export async function onRequestPost(context) {
  const { request } = context;
  const formData = await request.formData();

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Send email via SendGrid, Mailgun, or AWS SES
  // This requires additional setup and API keys

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

#### Step 2: Set Up Email Service

You'll need to integrate with:
- **SendGrid** (12,000 free emails/month)
- **Mailgun** (5,000 free emails/month)
- **AWS SES** (62,000 free emails/month with AWS account)

This requires:
- API keys
- Environment variables in Cloudflare
- Additional JavaScript code

**Complexity:** Medium to High

**Cost:** FREE (within limits)

---

### Option 3: Basin (Paid, Simple)

Basin is a premium form backend service:

1. Sign up at https://usebasin.com/
2. Create new form
3. Add email: info@pwmcare.com
4. Get form endpoint
5. Update contact.html form action

**Cost:** $10/month

**Features:**
- Unlimited submissions
- File uploads
- Spam protection
- Email notifications
- Exports

---

### Option 4: Email.js (Free)

Email.js sends emails directly from the browser:

1. Sign up at https://www.emailjs.com/
2. Connect email service (Gmail, Outlook, etc.)
3. Create email template
4. Get Service ID, Template ID, Public Key
5. Add EmailJS JavaScript to website
6. Update form handler

**Cost:** FREE (200 emails/month)

**Complexity:** Low to Medium

---

## ✅ Recommended Solution: Formspree

**Why Formspree:**
- ✅ Easiest to set up (5 minutes)
- ✅ Free for typical usage
- ✅ Already integrated in website code
- ✅ Reliable and well-maintained
- ✅ Good spam protection
- ✅ No coding required

**Setup Time:** 5-10 minutes

---

## 📋 Quick Setup Checklist (Formspree)

- [ ] Create Formspree account
- [ ] Create new form in Formspree
- [ ] Set email to info@pwmcare.com
- [ ] Copy form endpoint URL
- [ ] Update contact.html with new endpoint
- [ ] Commit and push changes
- [ ] Deploy to Cloudflare Pages
- [ ] Test form submission
- [ ] Verify email receipt
- [ ] Configure spam settings (optional)

---

## 🔧 Troubleshooting

### Issue: Not Receiving Emails

**Solutions:**
1. Check spam/junk folder
2. Verify email address in Formspree settings
3. Confirm email verification (check inbox)
4. Test with different email address
5. Check Formspree submission dashboard

### Issue: Form Shows Error

**Solutions:**
1. Check browser console for errors
2. Verify Formspree endpoint URL is correct
3. Ensure internet connection
4. Try submitting again
5. Check Formspree account status

### Issue: Too Many Submissions

**Solutions:**
1. Upgrade Formspree plan ($10/month)
2. Add CAPTCHA to form (Formspree supports this)
3. Enable Formspree spam protection
4. Switch to Cloudflare Functions (unlimited)

---

## 📊 Form Analytics

### With Formspree

1. Log into Formspree dashboard
2. View submissions, open rate, response time
3. Export data as CSV

### With Google Analytics (Optional)

Add event tracking to form submission:

```javascript
// In js/main.js, after successful form submission
gtag('event', 'form_submission', {
  'event_category': 'Contact',
  'event_label': 'Contact Form'
});
```

---

## 🔐 Security & HIPAA Compliance

**IMPORTANT:**
- Form is for GENERAL INQUIRIES ONLY
- NO patient health information (PHI)
- NO medical records or sensitive data
- Clear warning on form (already added)

**Form Privacy Notice (already in place):**
> "This form is for general inquiries only. Do not include personal health information."

**Formspree Security:**
- SSL/TLS encryption
- Spam filtering
- reCAPTCHA option
- GDPR compliant

**NOT HIPAA compliant:**
- Do NOT collect PHI via this form
- Do NOT accept patient medical questions
- For patient communications, use secure patient portal (future enhancement)

---

## 💡 Future Enhancements

### Phase 1 (Current)
- Basic contact form with email notification
- Client-side validation
- Success/error messages

### Phase 2 (Optional)
- reCAPTCHA spam protection
- Auto-response email to sender
- File upload capability
- Form submission confirmation page

### Phase 3 (Advanced)
- Secure patient portal integration
- HIPAA-compliant messaging
- Appointment scheduling integration
- CRM integration (if using CRM)

---

## 📞 Support

### Formspree Support
- **Documentation:** https://help.formspree.io/
- **Email:** support@formspree.io
- **Response Time:** 24-48 hours

### Website Form Issues
- Check this guide
- Review browser console
- Test with different browsers
- Verify Formspree account status

---

## 📝 Current Form Configuration

**Form ID:** `contact-form`

**Action:** `https://formspree.io/f/xeojgkdl` (placeholder - needs replacement)

**Method:** POST

**Fields:**
- Name (required)
- Phone (required)
- Email (required)
- Subject (required) - dropdown
- Message (required)

**Validation:** Client-side JavaScript validation

**On Submit:**
- Validates all fields
- Shows loading state
- Submits to Formspree
- Shows success message
- Clears form

---

## ✨ Testing the Form

### Before Going Live

1. **Test Submission:**
   - Fill out form completely
   - Submit
   - Verify success message
   - Check email receipt (info@pwmcare.com)

2. **Test Validation:**
   - Try submitting empty form
   - Try invalid email format
   - Try invalid phone format
   - Verify error messages show

3. **Test on Mobile:**
   - Open on phone
   - Fill out form
   - Submit
   - Check email on phone

### Test Checklist

- [ ] Form loads correctly
- [ ] All fields required
- [ ] Validation works
- [ ] Email format checked
- [ ] Phone format checked
- [ ] Subject dropdown works
- [ ] Submit button works
- [ ] Success message shows
- [ ] Email received
- [ ] Email contains all form data
- [ ] Works on mobile
- [ ] Works on different browsers

---

**Last Updated:** January 2025

**Form Service:** Formspree (recommended)

**Email Destination:** info@pwmcare.com

**Status:** Ready for Formspree account setup
