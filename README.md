# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your projects, CV, and connecting with potential employers.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-first approach
- 🎨 Beautiful gradient UI with Tailwind CSS
- 📄 CV/Resume section
- 🚀 Project showcase
- 💬 Contact form
- ⚡ Optimized for performance
- 🔍 SEO-friendly
- 📦 Ready for GitHub Pages deployment

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. Edit [src/components/Hero.tsx](src/components/Hero.tsx) - Update your name and tagline
2. Edit [src/components/About.tsx](src/components/About.tsx) - Add your bio and skills
3. Edit [src/components/Projects.tsx](src/components/Projects.tsx) - Add your projects
4. Edit [src/components/CV.tsx](src/components/CV.tsx) - Add your experience and education
5. Edit [src/components/Contact.tsx](src/components/Contact.tsx) - Update contact information

### Add Your CV/Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. Update the download link in [src/components/CV.tsx](src/components/CV.tsx)

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0F172A',      // Main background
      secondary: '#1E293B',    // Secondary background
      accent: '#3B82F6',       // Accent color
    },
  },
}
```

## Building for Production

### Local Build

```bash
npm run build
npm start
```

### Deploy to GitHub Pages

1. Update `next.config.js` with your repository name:
```javascript
basePath: '/your-repo-name',
```

2. Build for export:
```bash
npm run export
```

3. Push the `out` folder to your GitHub Pages branch

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Navigation.tsx  # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── CV.tsx          # CV/Resume section
│   │   └── Contact.tsx     # Contact form
│   └── public/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── .eslintrc.json
```

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or feedback!
