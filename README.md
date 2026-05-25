# Impulse Group - Next.js Website

A modern, fully responsive Next.js website for Impulse Group with reusable components, dark mode support, and Tailwind CSS styling.

## Features

- ✅ **Modern Next.js** - Built with Next.js 16 and React 19
- ✅ **TypeScript** - Full type safety across the codebase
- ✅ **Tailwind CSS** - Utility-first styling with custom color scheme
- ✅ **Reusable Components** - Header, Footer, StatCard, BrandCard, SectionHeader
- ✅ **Responsive Design** - Mobile-first approach with full responsiveness
- ✅ **Dark Mode Support** - Built-in dark mode with smooth transitions
- ✅ **Custom Fonts** - Manrope font family for consistent typography
- ✅ **SEO Optimized** - Metadata configuration for all pages
- ✅ **Material Icons** - Google Material Symbols for consistent iconography

## Color Scheme

- **Primary**: `#1b9883` (Teal)
- **Accent Gold**: `#D1BC94` (Gold)
- **Background Light**: `#ffffff` (White)
- **Background Dark**: `#1a1a1a` (Dark Gray)
- **Surface Light**: `#f8f8f8` (Light Gray)
- **Surface Dark**: `#262626` (Dark Surface)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── globals.css         # Global styles and animations
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About Us page
│   ├── brands/page.tsx     # Brands page
│   ├── products/page.tsx   # Products page
│   ├── gallery/page.tsx    # Gallery page
│   ├── football-team/page.tsx # Football Team page
│   └── contact/page.tsx    # Contact Us page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links and info
│   ├── StatCard.tsx        # Reusable stat card component
│   ├── BrandCard.tsx       # Brand showcase card
│   └── SectionHeader.tsx   # Section heading component
```

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Components Guide

### Header
Sticky navigation bar with logo, navigation links, and action buttons.

```tsx
import Header from '@/components/Header';

export default function Page() {
  return <Header />;
}
```

### Footer
Comprehensive footer with brand info, links, and contact details.

```tsx
import Footer from '@/components/Footer';

export default function Page() {
  return <Footer />;
}
```

### StatCard
Display statistics with trending information.

```tsx
import StatCard from '@/components/StatCard';

<StatCard
  label="Years of Excellence"
  value="25+"
  description="Founded on principles of sustainability"
  trend="+5% YoY"
/>
```

### BrandCard
Showcase brand with image, description, and link.

```tsx
import BrandCard from '@/components/BrandCard';

<BrandCard
  title="Just Natural"
  description="Sustainable organic products..."
  imageUrl="https://..."
  imageAlt="Brand image"
  overlayColor="primary"
  href="/brands"
/>
```

### SectionHeader
Reusable section heading with optional underline.

```tsx
import SectionHeader from '@/components/SectionHeader';

<SectionHeader
  title="Our Values"
  description="Core principles guiding our work"
  centered
  showUnderline
/>
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  'primary': '#1b9883',
  'accent-gold': '#D1BC94',
  // ... other colors
}
```

### Fonts
The project uses Manrope font from Google Fonts. To change fonts:

1. Edit `src/app/layout.tsx`
2. Import your preferred font from `next/font/google`
3. Update `tailwind.config.ts` fontFamily configuration

### Content
All pages are in `src/app/` directory. Edit the TSX files to update content, images, and links.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Optimized Images** - Next.js Image optimization
- **Code Splitting** - Automatic route-based code splitting
- **CSS Optimization** - Tailwind CSS purging unused styles
- **SEO** - Metadata configuration for all pages

## License

© 2024 Impulse Group. All Rights Reserved.

## Support

For questions or issues, please contact:
- Email: hello@imperialgroup.com
- Phone: +1 (555) 000-1234
