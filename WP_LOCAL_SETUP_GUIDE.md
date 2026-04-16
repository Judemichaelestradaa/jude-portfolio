# WP Local (LocalWP) Setup Guide for Jude Portfolio

## Understanding WP Local Import

The confusion about "wp-content" is because WP Local expects **WordPress site files**, not static HTML. Your portfolio is a static site, so you need to either:

1. **Convert it to a WordPress theme** (RECOMMENDED - what we prepared)
2. Upload as static files using a plugin
3. Create a fresh WordPress site and add your files

We prepared Option 1 for you - a complete WordPress theme!

---

## What's Already Created For You

### WordPress Theme Structure (`jude-portfolio-theme/`)

```
jude-portfolio-theme/
├── style.css              ← Theme stylesheet + WordPress header
├── index.php              ← Main template with your portfolio
├── functions.php          ← WordPress functions & script loading
├── header.php             ← Site header with navigation
├── footer.php             ← Site footer
├── screenshot.png         ← Theme preview (you should create this)
└── assets/
    ├── js/
    │   └── portfolio.js   ← All animations & interactivity
    ├── images/            ← Copy your images folder here
    │   ├── Logo.png
    │   ├── Judes.jpg
    │   ├── Judes2.jpg
    │   ├── thesis.jpg
    │   ├── Catfish.png
    │   └── icons/
    │       ├── javascript.png
    │       ├── firebase.png
    │       ├── php.png
    │       ├── mysql.png
    │       ├── html.png
    │       ├── css.png
    │       ├── python.png
    │       └── flutter.png
    └── resume/
        └── Estrada,Jude Michael A. 's CV.pdf
```

---

## Step-by-Step: Upload to WP Local

### Step 1: Copy Your Assets

**Before uploading to WP Local, you need to copy your images and resume:**

1. Copy your `images/` folder to `jude-portfolio-theme/assets/images/`
2. Copy your `resume/` folder to `jude-portfolio-theme/assets/resume/`

**Quick Commands (if using terminal):**
```bash
# Navigate to your project folder
cd "C:\Users\Hp\JudePorfolio"

# Copy images folder
xcopy "images" "jude-portfolio-theme\assets\images" /E /I /Y

# Copy resume folder
xcopy "resume" "jude-portfolio-theme\assets\resume" /E /I /Y
```

Or just **drag and drop** the folders in File Explorer.

---

### Step 2: Create Theme Screenshot (Optional but Recommended)

Create a 1200x900px screenshot of your portfolio and save it as:
```
jude-portfolio-theme/screenshot.png
```

This shows up in WordPress theme selector.

---

### Step 3: Create a New Site in WP Local

1. **Open LocalWP** application
2. Click **"Create a new site"**
3. Choose **"Preferred"** environment (PHP 8.0+, nginx, MySQL 8)
4. Set site name: **"jude-portfolio"**
5. WordPress Username/Password: Choose what you want (you'll use this to login)
6. Click **"Create Site"**
7. Wait for the site to finish creating

---

### Step 4: Copy Theme to WP Local

#### Option A: Direct Copy (Easiest)

1. In LocalWP, click on your site
2. Click **"Go to site folder"** button (or "Open Site Shell")
3. Navigate to: `app > public > wp-content > themes`
4. **Copy your entire `jude-portfolio-theme` folder** into the `themes` folder
5. The path should look like:
   ```
   Local Sites/jude-portfolio/app/public/wp-content/themes/jude-portfolio-theme/
   ```

#### Option B: Using ZIP File

1. **ZIP the `jude-portfolio-theme` folder**
2. In WordPress admin (visit your local site and login)
3. Go to **Appearance > Themes > Add New > Upload Theme**
4. Upload the ZIP file
5. Activate the theme

---

### Step 5: Activate the Theme

1. **Visit your local site URL** (shown in LocalWP, usually `http://jude-portfolio.local`)
2. Click **"Admin"** or **"WP Admin"** in LocalWP
3. Login with credentials you set in Step 3
4. Go to **Appearance > Themes**
5. Find **"Jude Portfolio"** theme
6. Click **"Activate"**

---

### Step 6: Set Homepage

1. In WordPress admin, go to **Settings > Reading**
2. Under **"Your homepage displays"**, select:
   - **Your latest posts** (since this is a one-page theme)
3. Click **"Save Changes"**

---

### Step 7: View Your Site

1. Click **"Open Site"** in LocalWP
2. Your portfolio should load with all animations working!

---

## Troubleshooting

### Issue: "wp-content folder" error when importing

**Problem:** You tried to import a ZIP through LocalWP's import feature.

**Solution:** Don't use the import feature. Instead:
1. Create a blank WordPress site in LocalWP
2. Manually copy the theme folder to `wp-content/themes/`
3. Activate in WordPress admin

---

### Issue: Images not showing

**Problem:** Images folder wasn't copied to the right location.

**Solution:**
1. Check that `jude-portfolio-theme/assets/images/` exists
2. Verify all images are there (Logo.png, Judes.jpg, etc.)
3. If missing, copy them again from your original folder

---

### Issue: Styles not loading

**Problem:** WordPress can't find the stylesheet.

**Solution:**
1. Check that `style.css` is in the theme root (not in a subfolder)
2. Verify the theme header comment at the top of style.css is intact
3. Clear browser cache (Ctrl+F5)

---

### Issue: JavaScript animations not working

**Problem:** Script not loading or JS errors.

**Solution:**
1. Check browser console (F12 > Console) for errors
2. Verify `portfolio.js` is in `assets/js/` folder
3. Make sure all assets were copied properly

---

### Issue: "This theme is broken" message

**Problem:** Missing required files.

**Solution:** Ensure these files exist:
- `style.css` (with WordPress header comment)
- `index.php`
- `functions.php`

---

## How to Make It Live (Hosting)

When ready to go live:

### Option 1: Export from WP Local

1. In LocalWP, click your site
2. Click **"Export"** button
3. Choose **"Export site as ZIP"**
4. Upload this ZIP to your web host
5. Extract and configure database

### Option 2: Manual WordPress Migration

1. Install WordPress on your hosting
2. Copy the `jude-portfolio-theme` folder to `wp-content/themes/`
3. Activate theme in WordPress admin
4. Done!

### Option 3: Use WP Local Connect (Flywheel/WordPress.com)

If hosting with Flywheel or WordPress.com:
1. Click **"Connect"** in LocalWP
2. Login to your account
3. Push site live directly

---

## Quick Reference: File Paths

### In WP Local (your computer):
```
%LocalAppData%\Local Sites\jude-portfolio\app\public\wp-content\themes\jude-portfolio-theme\
```

Or access via:
- LocalWP > Your Site > "Go to site folder" button

### Theme structure:
```
wp-content/themes/jude-portfolio-theme/
├── style.css
├── index.php
├── functions.php
├── header.php
├── footer.php
├── screenshot.png (optional)
└── assets/
    ├── js/portfolio.js
    ├── images/
    └── resume/
```

---

## Alternative: Static File Upload (No WordPress Needed)

If you just want to host the HTML files without WordPress:

1. Use LocalWP's **"Create a site from local files"** option
2. Point it to your original `JudePorfolio` folder
3. Or use a simple static host like:
   - Netlify (drag & drop)
   - GitHub Pages
   - Vercel
   - Any web host with FTP

---

## Need Help?

### Check These First:
1. ✅ Images copied to `assets/images/`
2. ✅ Resume copied to `assets/resume/`
3. ✅ Theme folder in `wp-content/themes/`
4. ✅ Theme activated in WordPress admin

### Common Mistakes to Avoid:
- ❌ Don't upload through LocalWP's import feature (it's for full site backups)
- ❌ Don't put theme files inside another folder
- ❌ Don't forget to copy images and assets
- ❌ Don't use spaces in folder names (use hyphens)

---

## Summary

**To get your portfolio in WP Local:**
1. Copy images to `jude-portfolio-theme/assets/images/`
2. Copy resume to `jude-portfolio-theme/assets/resume/`
3. Create new site in LocalWP
4. Copy theme folder to `wp-content/themes/`
5. Activate in WordPress admin
6. View your site!

**Your portfolio is now a proper WordPress theme ready for WP Local and live hosting!**
