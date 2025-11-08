# Image Guide for Precision Wound Management Website

Complete guide for adding and managing images on the pwmcare.com website.

---

## 📁 Image Directory Structure

```
/images/
├── hero/              # Hero/banner images
├── placeholders/      # Team headshots and general photos
├── icons/             # Service and feature icons (SVG)
├── office/            # Office and facility photos
└── logo/              # Practice logo files
```

---

## 🖼️ Required Images with Dimensions

### 1. Hero Images

**Location:** `/images/hero/`

#### Main Hero Image (Homepage)
- **Filename:** `hero-main.jpg` or `hero-main.webp`
- **Dimensions:** 1920px × 800px (minimum)
- **Aspect Ratio:** 2.4:1 (landscape)
- **File Size:** Under 500KB (optimized)
- **Format:** WebP (with JPG fallback)
- **Usage:** Homepage hero section background
- **Content:** Professional medical/office environment, blurred or abstract
- **Color Tone:** Blues, teals, professional

**Example HTML:**
```html
<section class="hero" style="background-image: url('/images/hero/hero-main.jpg');">
```

---

### 2. Team Headshots

**Location:** `/images/placeholders/` or `/images/team/`

#### Individual Team Photos
- **Dimensions:** 400px × 500px
- **Aspect Ratio:** 4:5 (portrait)
- **File Size:** Under 150KB each
- **Format:** WebP with JPG fallback
- **Background:** Professional, solid or subtle gradient

**Required Photos:**
1. `dr-carter-headshot.jpg` - Dr. April Carter
2. `np-westrich-headshot.jpg` - Aldridge Westrich, NP
3. `kenneth-burnett-headshot.jpg` - Kenneth Burnett, MBA

**Photography Guidelines:**
- Professional business attire
- Solid or blurred background
- Good lighting (no harsh shadows)
- Friendly, approachable expression
- Eye level or slightly below eye level angle
- High resolution (at least 800px × 1000px, will be resized)

**Example HTML:**
```html
<img src="/images/team/dr-carter-headshot.jpg"
     alt="Dr. April Carter, MD, JM, MHA, FACP at Precision Wound Management">
```

---

### 3. Team Group Photo

**Location:** `/images/placeholders/` or `/images/team/`

#### Team Photo
- **Filename:** `team-photo.jpg`
- **Dimensions:** 800px × 600px
- **Aspect Ratio:** 4:3 (landscape)
- **File Size:** Under 200KB
- **Format:** WebP with JPG fallback
- **Content:** All three team members together in professional setting

**Example HTML:**
```html
<img src="/images/team/team-photo.jpg"
     alt="Precision Wound Management clinical team">
```

---

### 4. Office & Facility Photos

**Location:** `/images/office/`

#### Office Exterior
- **Filename:** `office-exterior.jpg`
- **Dimensions:** 1200px × 800px
- **Aspect Ratio:** 3:2 (landscape)
- **File Size:** Under 300KB
- **Content:** Building exterior, signage visible

#### Office Interior/Waiting Room
- **Filename:** `waiting-room.jpg`
- **Dimensions:** 1200px × 800px
- **Aspect Ratio:** 3:2
- **File Size:** Under 300KB
- **Content:** Clean, professional waiting area

#### Treatment Room
- **Filename:** `treatment-room.jpg`
- **Dimensions:** 1200px × 800px
- **Aspect Ratio:** 3:2
- **File Size:** Under 300KB
- **Content:** Clean, well-lit treatment space (no patients)

---

### 5. Patient Care Images (Generic/Stock)

**Location:** `/images/placeholders/` or `/images/care/`

#### Generic Care Photos
- **Dimensions:** 800px × 600px
- **Aspect Ratio:** 4:3
- **File Size:** Under 200KB each
- **Content:** Generic stock photos showing:
  - Healthcare provider with patient (faces optional/blurred)
  - Wound care supplies/equipment
  - Hand hygiene/PPE demonstration
  - Patient education scenarios

**IMPORTANT - HIPAA Compliance:**
- NO real patients without signed consent
- NO identifiable patient information
- NO actual wounds or medical conditions visible
- Use stock photos or generic illustrations
- Keep images professional and non-graphic

**Example Filenames:**
- `patient-care.jpg` (already created as placeholder)
- `wound-care-services.jpg` (already created as placeholder)
- `consultation.jpg`
- `equipment.jpg`

---

### 6. Logo Files

**Location:** `/images/logo/`

#### Practice Logo (if applicable)
- **Full Logo:** `pwm-logo-full.png` or `.svg`
  - Dimensions: 400px × 100px (horizontal layout)
  - Format: SVG preferred, PNG with transparency
  - Usage: Header, footer, print materials

- **Logo Icon:** `pwm-logo-icon.png` or `.svg`
  - Dimensions: 200px × 200px (square)
  - Format: SVG preferred, PNG with transparency
  - Usage: Favicon, app icons

- **Favicon:** `favicon.ico`
  - Dimensions: 32px × 32px, 16px × 16px (multi-size .ico)
  - Format: ICO file
  - Usage: Browser tab icon

**If using text-only logo (current):**
- No additional files needed
- Logo is pure CSS/HTML text

---

## 📐 Image Optimization Guidelines

### File Size Targets
- **Hero images:** < 500KB
- **Team headshots:** < 150KB
- **Office photos:** < 300KB
- **General images:** < 200KB
- **Icons (SVG):** < 5KB

### Recommended Tools
- **Online:** TinyPNG, Squoosh.app, Cloudinary
- **Desktop:** Adobe Photoshop, GIMP, ImageOptim
- **Command Line:** ImageMagick, cwebp

### WebP Conversion
```bash
# Convert JPG to WebP
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in folder
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

---

## 🎨 Photography & Design Guidelines

### Color Palette
Match website colors when possible:
- **Primary Blue:** #2E5B8A
- **Teal:** #4A9B9B
- **Green:** #6B8E5A
- **Neutral Gray:** #6C757D
- **Light Background:** #F8F9FA

### Lighting
- Bright, natural lighting preferred
- Avoid harsh shadows
- Consistent lighting across all photos
- No yellow/warm tones (keep neutral/cool)

### Composition
- Rule of thirds
- Clean, uncluttered backgrounds
- Professional medical environment
- Minimal distractions
- Focus on people and care

### Branding Consistency
- Professional medical aesthetic
- Clean, modern feel
- Approachable but expert
- Trust and competence
- Match website design style

---

## 📦 How to Add Images to Website

### Step 1: Prepare Images

1. **Resize to correct dimensions** (see above)
2. **Optimize file size** (compress)
3. **Convert to WebP** (with JPG fallback)
4. **Name files appropriately** (descriptive, lowercase, hyphens)

### Step 2: Upload to Correct Folder

```
/images/
  /hero/        → hero-main.jpg, hero-main.webp
  /team/        → dr-carter-headshot.jpg, etc.
  /office/      → office-exterior.jpg, etc.
  /care/        → patient-care.jpg, etc.
  /logo/        → pwm-logo-full.svg, etc.
```

### Step 3: Update HTML (if needed)

**For hero image:**
```html
<section class="hero" style="background-image: url('/images/hero/hero-main.jpg');">
```

**For team headshots:**
```html
<img src="/images/team/dr-carter-headshot.jpg"
     alt="Dr. April Carter, MD, JM, MHA, FACP">
```

**For responsive images with WebP:**
```html
<picture>
  <source srcset="/images/team/dr-carter-headshot.webp" type="image/webp">
  <img src="/images/team/dr-carter-headshot.jpg"
       alt="Dr. April Carter, MD, JM, MHA, FACP"
       loading="lazy">
</picture>
```

### Step 4: Deploy Changes

1. Upload images to repository
2. Commit changes
3. Push to GitHub
4. Cloudflare Pages will auto-deploy

---

## ✅ Image Checklist

Before uploading any image, verify:

- [ ] Correct dimensions
- [ ] File size under target (see above)
- [ ] Optimized/compressed
- [ ] Appropriate filename (descriptive, lowercase, hyphens)
- [ ] Correct folder location
- [ ] Alt text written (if updating HTML)
- [ ] No patient PHI or identifiable information
- [ ] Professional quality
- [ ] Matches website aesthetic
- [ ] WebP format created (for photos)
- [ ] JPG fallback exists (for WebP)

---

## 🔄 Replacing Placeholder Images

Current placeholder images to replace:

1. **Hero Image** (`/images/hero/hero-main.jpg`)
   - Replace with professional photo of office, team, or medical environment

2. **Team Headshots** (all 3 in `/images/placeholders/`)
   - `dr-carter-headshot.jpg` → Professional headshot of Dr. Carter
   - `np-westrich-headshot.jpg` → Professional headshot of Aldridge Westrich
   - `kenneth-burnett-headshot.jpg` → Professional headshot of Kenneth Burnett

3. **Team Photo** (`/images/placeholders/team-photo.jpg`)
   - Replace with actual group photo of all three team members

4. **Office Photos** (not yet added)
   - Add `office-exterior.jpg` - Building exterior
   - Add `waiting-room.jpg` - Waiting area
   - Add `treatment-room.jpg` - Treatment space

### Quick Replacement Steps

1. Save new image with **exact same filename** as placeholder
2. Upload to **same folder** as placeholder
3. Deploy to Cloudflare Pages
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**No HTML changes needed if using same filename!**

---

## 📊 Current Image Inventory

### Existing Placeholder Images

| Image | Location | Dimensions | Status |
|-------|----------|------------|--------|
| hero-main.jpg | /images/hero/ | 1920×800 | Placeholder SVG |
| hero-background.jpg | /images/hero/ | 1920×1080 | Placeholder SVG |
| dr-carter-headshot.jpg | /images/placeholders/ | 400×500 | Placeholder SVG |
| np-westrich-headshot.jpg | /images/placeholders/ | 400×500 | Placeholder SVG |
| kenneth-burnett-headshot.jpg | /images/placeholders/ | 400×500 | Placeholder SVG |
| team-photo.jpg | /images/placeholders/ | 800×600 | Placeholder SVG |
| office-exterior.jpg | /images/placeholders/ | 1200×800 | Placeholder SVG |
| patient-care.jpg | /images/placeholders/ | 800×600 | Placeholder SVG |
| wound-care-services.jpg | /images/placeholders/ | 800×600 | Placeholder SVG |

---

## 🎯 Priority Image Replacements

### Phase 1 (Immediate)
1. **Team headshots** - All 3 professional photos
2. **Hero image** - Main homepage background

### Phase 2 (Soon)
3. **Team photo** - Group photo
4. **Office exterior** - Building photo

### Phase 3 (When Available)
5. **Office interior** - Waiting room
6. **Treatment room** - Clean clinical space
7. **Logo** (if creating a graphical logo)

---

## 💡 Tips for Best Results

### Photography
- Hire professional photographer for team headshots
- Schedule photo shoot during practice hours for authentic environment
- Get signed releases for any staff in photos
- Take multiple shots to have options

### Editing
- Keep editing minimal and natural
- Match website color scheme when possible
- Maintain consistent brightness/contrast across all photos
- Crop to exact dimensions (don't stretch/distort)

### Mobile Optimization
- All images should look good on mobile devices
- Test on actual phones, not just browser resize
- Ensure text in images is readable on small screens
- Consider mobile-specific crops for important images

---

## 📞 Questions?

If you need help with images:
1. Check this guide first
2. Review example placeholders in `/images/placeholders/`
3. Test images in staging environment before production
4. Verify file sizes are optimized

---

**Last Updated:** January 2025
**Version:** 1.0
**Website:** pwmcare.com
