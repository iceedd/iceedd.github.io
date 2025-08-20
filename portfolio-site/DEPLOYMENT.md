# Deployment Guide

This guide provides step-by-step instructions for deploying your Microsoft 365 Engineer portfolio website to GitHub Pages.

## 🚀 Quick Deployment

### Prerequisites
- GitHub account
- Git installed locally
- Node.js 16+ installed

### Step 1: Repository Setup

1. **Create a new GitHub repository**:
   - Go to GitHub and create a new repository
   - Name it `portfolio-site` or your preferred name
   - Make it public (required for free GitHub Pages)

2. **Clone and setup**:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   npm install
   ```

### Step 2: Configure for Your Repository

1. **Update Vite configuration** (`vite.config.js`):
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repository-name/', // Replace with your repo name
     build: {
       outDir: 'dist',
       assetsDir: 'assets',
     }
   })
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repository-name"
   }
   ```

3. **Personalize content** in `src/content.js`:
   - Replace all placeholder information with your details
   - Update contact information
   - Add your projects and experience
   - Customize skills and certifications

### Step 3: Deploy Using npm Script

1. **Build and deploy**:
   ```bash
   npm run deploy
   ```

   This command will:
   - Build the production version
   - Create a `gh-pages` branch
   - Push the built files to GitHub Pages

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Choose the `gh-pages` branch
   - Your site will be available at `https://yourusername.github.io/repository-name`

## 🤖 Automated Deployment with GitHub Actions

For a more robust deployment setup, use GitHub Actions for automatic deployments.

### Create Workflow File

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build project
      run: npm run build

    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    
    steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v3
```

### Configure GitHub Pages for Actions

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Commit and push the workflow file
4. The site will automatically deploy on every push to main

## 🔧 Environment-Specific Configuration

### Development
```bash
npm run dev
# Available at http://localhost:3000
```

### Production Build Testing
```bash
npm run build
npm run preview
# Test production build locally
```

### Custom Domain Setup

1. **Add CNAME file** to `/public/CNAME`:
   ```
   yourdomain.com
   ```

2. **Configure DNS** (with your domain provider):
   - Add CNAME record pointing to `yourusername.github.io`
   - Or add A records for GitHub Pages IPs

3. **Update GitHub Pages settings**:
   - Go to Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 📊 Post-Deployment Checklist

### ✅ Verify Deployment
- [ ] Site loads correctly at GitHub Pages URL
- [ ] All sections display properly
- [ ] Dark/light mode toggle works
- [ ] Mobile responsiveness is maintained
- [ ] Contact form functions correctly
- [ ] All links work (internal and external)

### ✅ SEO & Performance
- [ ] Meta tags are properly set
- [ ] Open Graph images display correctly
- [ ] Site loads quickly (check with Lighthouse)
- [ ] Images are optimized and loading
- [ ] Structured data is valid (test with Google's tool)

### ✅ Content Verification  
- [ ] Personal information is accurate
- [ ] Contact details are up to date
- [ ] Project descriptions are complete
- [ ] Skills reflect current expertise
- [ ] Resume/CV link works

## 🐛 Common Deployment Issues

### Issue: 404 Error on Page Refresh
**Solution**: This is normal with HashRouter. GitHub Pages serves the site correctly.

### Issue: Assets Not Loading
**Solution**: 
1. Verify `base` path in `vite.config.js` matches repository name
2. Ensure assets are in `/public` directory
3. Check case sensitivity in file paths

### Issue: Build Fails
**Solution**:
1. Run `npm run build` locally to debug
2. Check Node.js version (16+ required)  
3. Clear `node_modules` and reinstall

### Issue: Styles Not Applied
**Solution**:
1. Verify TailwindCSS configuration
2. Check that CSS files are properly imported
3. Ensure build process includes CSS processing

## 🔄 Updates and Maintenance

### Regular Updates
1. **Content Updates**: Edit `src/content.js` and redeploy
2. **Design Changes**: Modify components and styles
3. **Dependency Updates**: Keep packages current with `npm update`

### Version Control Best Practices
```bash
# Create feature branch
git checkout -b feature/update-content

# Make changes and commit
git add .
git commit -m "Update project portfolio and skills"

# Push and create PR
git push origin feature/update-content
# Create pull request on GitHub

# Merge to main triggers auto-deployment (with Actions)
```

## 📈 Analytics and Monitoring

### Add Google Analytics
1. Get GA4 tracking ID
2. Add tracking code to `index.html`
3. Monitor traffic and user behavior

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Check loading times from different locations

### SEO Tracking
- Submit sitemap to Google Search Console  
- Monitor search rankings
- Track backlinks and mentions

## 🆘 Getting Help

### Resources
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

### Support Channels
- GitHub Issues for technical problems
- Stack Overflow for development questions
- GitHub Discussions for feature requests

---

**Successfully deployed?** 🎉 Your Microsoft 365 Engineer portfolio is now live and ready to showcase your expertise to the world!