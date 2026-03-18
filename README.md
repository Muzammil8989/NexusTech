# NexusTech — Agency Landing Page

A modern, fully responsive agency landing page built with **React 18**, **Vite 5**, **Tailwind CSS**, **Framer Motion**, and **GSAP ScrollTrigger**. Features smooth scroll animations, animated number counters, image parallax, a FAQ accordion, and a clean dark/light theme.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Entrance & hover animations |
| [GSAP + ScrollTrigger](https://gsap.com/) | Scroll progress bar, number counters, parallax |
| [shadcn/ui](https://ui.shadcn.com/) | Button & UI primitives (Radix UI) |
| [react-scroll](https://github.com/fisshy/react-scroll) | Smooth section navigation |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | In-view detection |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library |
| [react-animated-cursor](https://github.com/stephenscaff/react-animated-cursor) | Custom cursor |
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | Google Fonts |

---

## Features

- **Scroll progress bar** — 3px gradient line at top of page tracking scroll position
- **Animated counters** — Numbers count up from 0 when scrolled into view (GSAP ScrollTrigger)
- **Image parallax** — Subtle depth effect on About and Product section images
- **Infinite logo marquee** — Seamless auto-scrolling client logo strip
- **Hero carousel** — 3-slide auto-rotating hero with progress bar indicator cards
- **FAQ accordion** — Animated expand/collapse with AnimatePresence
- **Sticky navbar** — Glassmorphism blur effect on scroll
- **Dark mode** — Full dark/light theme via CSS custom properties
- **Fully responsive** — Mobile-first design across all breakpoints

---

## Project Structure

```
src/
├── assets/                  # Images and static files
├── components/
│   ├── my_component/
│   │   ├── Navbar.jsx       # Sticky glassmorphism navbar
│   │   ├── Home.jsx         # Hero section with carousel
│   │   ├── Services.jsx     # Clients + logo marquee + service cards
│   │   ├── About.jsx        # About section with parallax image
│   │   ├── Product.jsx      # Product features + testimonial
│   │   ├── Blog.jsx         # Blog cards grid
│   │   ├── Newsletter.jsx   # FAQ accordion + CTA banner
│   │   └── Fotter.jsx       # Footer with link columns
│   ├── ui/
│   │   ├── button.jsx       # shadcn Button component
│   │   └── CountUp.jsx      # GSAP number counter component
│   └── theme-provider.jsx   # Dark/light theme context
├── App.jsx                  # Root layout + scroll progress bar
├── App.css                  # Marquee keyframes
├── index.css                # CSS custom properties (theme tokens)
└── main.jsx                 # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Muzammil8989/NexusTech.git
cd NexusTech

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

---

## Customization

### Colors
Edit `tailwind.config.js` to change brand colors:
```js
BrandPrimary:  "#2563EB",   // Main blue
BrandSecondary: "#0EA5E9",  // Sky blue
neutralDGrey:  "#1E293B",
neutralGrey:   "#64748B",
neutralSilver: "#F1F5F9",
```

### Content
- **Nav links** → `Navbar.jsx` → `navItems` array
- **Hero slides** → `Home.jsx` → `slides` array
- **Services** → `Services.jsx` → `services` array
- **Stats** → `About.jsx` → `stats` array
- **Blog posts** → `Blog.jsx` → `posts` array
- **FAQ questions** → `Newsletter.jsx` → `faqs` array
- **Footer links** → `Fotter.jsx` → `links` object

---

## License

MIT © [Muzammil](https://github.com/Muzammil8989)
