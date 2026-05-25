# Impulse Group - HTML to Next.js Conversion Guide

## Overview

Your Impulse Group static HTML website has been successfully converted to a modern, production-ready Next.js application. All original styling, color schemes, fonts, and design elements have been preserved and enhanced.

## What Was Converted

### Original HTML Files
- `index.html` → `/src/app/page.tsx` (Homepage)
- `about_us.html` → `/src/app/about/page.tsx`
- `brands.html` → `/src/app/brands/page.tsx`
- `products.html` → `/src/app/products/page.tsx`
- `media.html` → `/src/app/gallery/page.tsx`
- `football_team.html` → `/src/app/football-team/page.tsx`
- `contact_us.html` → `/src/app/contact/page.tsx`

### Design System Preserved

**Colors:**
- Primary: `#1b9883` (Teal)
- Accent Gold: `#D1BC94`
- Background Light: `#ffffff`
- Background Dark: `#1a1a1a`
- Surface Light: `#f8f8f8`
- Surface Dark: `#262626`

**Typography:**
- Font Family: Manrope (weights: 400, 500, 700, 800)
- Icons: Material Symbols Outlined

## New Next.js Structure

### Key Improvements

1. **Reusable Components**
   - `Header.tsx` - Sticky navigation with responsive menu
   - `Footer.tsx` - Comprehensive footer with all links
   - `StatCard.tsx` - Stat display with trends
   - `BrandCard.tsx` - Brand showcase with overlay options
   - `SectionHeader.tsx` - Section titles with optional styling

2. **Modern Architecture**
   - TypeScript for type safety
   - App Router (Next.js 16)
   - Server-side rendering support
   - Automatic code splitting
   - Image optimization ready

3. **Enhanced Features**
   - Dark mode support (built into Tailwind)
   - Responsive design (mobile-first)
   - SEO optimization (metadata in each page)
   - Smooth animations and transitions
   - Better accessibility (semantic HTML, ARIA labels)

## File Structure

```
impulse-group/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles
│   │   ├── about/page.tsx          # About page
│   │   ├── brands/page.tsx         # Brands page
│   │   ├── products/page.tsx       # Products page
│   │   ├── gallery/page.tsx        # Gallery page
│   │   ├── football-team/page.tsx  # Football team page
│   │   └── contact/page.tsx        # Contact page
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── StatCard.tsx
│       ├── BrandCard.tsx
│       └── SectionHeader.tsx
├── public/                          # Static assets (images, etc.)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── postcss.config.js
└── README.md
```

## Component Usage Examples

### StatCard Component
Used for displaying statistics with optional trend indicators.

```tsx
<StatCard
  label="Years of Excellence"
  value="25+"
  description="Founded on principles of sustainability and ethical growth."
  trend="+5% YoY"
/>
```

### BrandCard Component
Displays brand information with image, description, and link.

```tsx
<BrandCard
  title="Just Natural"
  description="Sustainable organic products..."
  imageUrl="https://..."
  imageAlt="Brand image"
  overlayColor="primary"
  href="/brands"
/>
```

### SectionHeader Component
Reusable heading for sections with optional styling.

```tsx
<SectionHeader
  title="Our Values"
  description="Core principles guiding our work"
  centered
  showUnderline
/>
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  'primary': '#1b9883',
  'accent-gold': '#D1BC94',
  // Add your custom colors here
}
```

### Adding New Pages

1. Create a new directory in `src/app/`: `src/app/new-page/`
2. Create `page.tsx` inside it:

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Title | Impulse Group',
  description: 'Page description...',
};

export default function Page() {
  return (
    <>
      <Header />
      <main>{/* Your content */}</main>
      <Footer />
    </>
  );
}
```

### Updating Navigation Links

Edit the navigation in `/src/components/Header.tsx`:

```tsx
<Link href="/your-page" className="...">
  Your Page
</Link>
```

### Changing Fonts

1. Import new font in `src/app/layout.tsx`
2. Update `tailwind.config.ts` fontFamily
3. Use `font-display` class in components

## Performance Optimization

The Next.js version includes:

- **Automatic code splitting** - Each page loads only required code
- **Image optimization** - Use `<Image>` component for optimized images
- **CSS optimization** - Tailwind purges unused styles
- **Font optimization** - Google Fonts loaded efficiently

### For Images

Replace background-image with Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect your repo to Vercel at vercel.com
# Vercel auto-detects Next.js and deploys!
```

### Environment Variables

Create `.env.local` for local variables:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Migrating Content from Old Files

All HTML content has been converted to TSX components. To make changes:

1. Find the content in the relevant `src/app/*/page.tsx` file
2. Update the text, images, or links
3. Changes auto-reload in development

### Common Edits

**Update image:**
```tsx
imageUrl="https://new-image-url.jpg"
```

**Change button text:**
```tsx
<button>New Button Text</button>
```

**Update links:**
```tsx
href="/new-path"
```

## Dark Mode

Dark mode is built-in via Tailwind CSS classes:

```tsx
<div className="bg-background-light dark:bg-background-dark">
  Content
</div>
```

Toggle dark mode by adding `dark` class to `<html>` tag.

## Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## Troubleshooting

### Dev server not starting
```bash
rm -rf .next
npm run dev
```

### Module not found error
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Styles not applying
- Check that Tailwind classes are in `content` array in `tailwind.config.ts`
- Ensure CSS file is imported in `layout.tsx`

## Best Practices Going Forward

1. **Use components** - Extract repeating UI into components
2. **Type everything** - Use TypeScript interfaces
3. **Optimize images** - Use Next.js Image component
4. **SEO** - Update metadata for each page
5. **Dark mode** - Always include dark mode classes
6. **Responsive** - Test on mobile devices
7. **Accessibility** - Add alt text and ARIA labels

## Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## Support & Questions

For questions about the conversion:
1. Check the README.md
2. Review component examples in `src/components/`
3. Check Next.js documentation

---

**Conversion completed**: May 25, 2024
**Next.js Version**: 16.2.6
**React Version**: 19.0.0
**Tailwind CSS**: 3.4.1
