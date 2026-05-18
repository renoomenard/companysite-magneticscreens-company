=======================================================
MAGNETIC SCREENS COMPANY — STATIC SITE UPLOAD GUIDE
=======================================================

SITE SUMMARY
------------
- Homepage:        index.html
- Blog archive:    blog/index.html
- Blog posts:      244 individual posts (each in /post-slug/index.html)
- Legal pages:     /privacy-policy/ | /terms-conditions/ | /shipping-returns/
- Sitemap:         sitemap.xml (249 URLs)
- Robots:          robots.txt
- CNAME:           magneticscreens.company
- Shared CSS:      assets/style.css
- Homepage CSS:    style.css
- JavaScript:      assets/site.js
- Hero image:      assets/hero.png

URL STRUCTURE
-------------
All blog posts use /post-slug/ format (no .html in public URLs).
Each post is stored as /post-slug/index.html.

GOOGLE ANALYTICS
----------------
Analytics code (G-76QHDFX9DV) is already included on all pages.
To update, search-and-replace "G-76QHDFX9DV" site-wide.

UPLOAD TO GITHUB PAGES
-----------------------
1. Create a GitHub repository named magneticscreens.company (or your username.github.io)
2. Upload all files from this folder to the repository root.
3. Go to Settings > Pages and set Source to: main branch, / (root).
4. Add a custom domain in Settings > Pages and enter: magneticscreens.company
5. In your DNS provider, add a CNAME record pointing magneticscreens.company to your-username.github.io

UPLOAD TO CLOUDFLARE PAGES
---------------------------
1. Log in to Cloudflare Dashboard > Pages > Create a project.
2. Connect to GitHub repo or upload folder directly using Direct Upload.
3. Set build output directory to: / (the folder root).
4. Add custom domain: magneticscreens.company in the Pages domain settings.

UPLOAD TO VERCEL
----------------
1. Install Vercel CLI: npm install -g vercel
2. In this folder, run: vercel --prod
3. Follow prompts and add custom domain in Vercel dashboard.

POST COUNT CONFIRMATION
-----------------------
Total published WordPress posts converted: 244
All post slugs are clean (no URL-encoded characters).
Duplicate slugs are disambiguated with a numeric suffix.

SITEMAP CONFIRMATION
--------------------
sitemap.xml includes:
- Homepage
- Blog archive
- All 244 blog post URLs
- 3 legal pages
Total: 249 URLs

=======================================================
