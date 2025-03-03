# Link in Bio Landing Page

A sleek, modern, and animated link in bio landing page similar to Linktree or bio.link. This project features a dark grey theme with subtle green accents, inspired by modern tech UI designs.

## Features

- 🎨 Dark grey theme with subtle green accents for a sophisticated tech aesthetic
- 👤 Animated profile section with space for photo and brief bio
- 🔗 Customizable list of links with icons and smooth animations
- ✨ Modern animations powered by Framer Motion
- 🌙 Dark mode optimized for reduced eye strain
- 🚀 Built with Next.js, React, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### Changing Profile Information

Edit the `src/app/page.tsx` file:

1. Replace the profile image by changing the `src` attribute in the `Image` component
2. Update your name and bio in the corresponding text elements

### Customizing Links

The links are defined in the `links` array in `src/app/page.tsx`. Each link has:

- `id`: A unique identifier
- `title`: The text to display
- `url`: The URL to navigate to when clicked
- `icon`: The icon to display (using react-icons)

To add or modify links, edit the `links` array.

### Animations

This project uses Framer Motion for smooth, modern animations. You can customize the animations by modifying:

- `containerVariants` and `itemVariants` for the staggered link animations
- Individual motion components' props like `whileHover` and `whileTap`
- Transition parameters for timing and easing

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## Deployment

This is a Next.js project, so it can be easily deployed to Vercel or any other platform that supports Next.js:

```bash
npm run build
# or
yarn build
```

## License

This project is open source and available under the MIT License.