# TriGarden
A frontend application for the TriGarden platform — built with React, Vite, Tailwind CSS & DaisyUI, and powered by React Router DOM for routing.

## 🚀 Project Overview  
This is the client-side of the TriGarden project, which aims to provide users with an engaging gardening marketplace / informational hub (adjust this description to your actual goal).  
Key features include:  
- Homepage with responsive layout  
- Category, Featured, Popular, Blog, and Product pages  
- Shared UI components (buttons, cards, layouts)  
- Dynamic routing (via React Router) for product and blog detail pages  
- Mobile-first, fully responsive design  
- Carousel components implemented with Swiper.js  
- Tailwind CSS + DaisyUI for rapid UI building

## 🧰 Getting Started  
### Prerequisites  
Make sure you have Node.js (version 14+ recommended) and npm installed.

### Installation  
```bash
# Clone the repository
git clone https://github.com/kazisadman/trigarden-client.git  
cd trigarden-client  

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build  

# Preview the production build locally
npm run preview
```

## 🔧 Features & Usage

- Dynamic Routing with layouts (Product, Blog)

- Reusable Components: ProductCard, BlogCard, CategoryCard, SectionTitle

- Responsive Design using Tailwind utilities

- Carousel/Swipe: Swiper.js for featured/popular product sections

- Shared UI: DaisyUI + Tailwind for consistent design

# URL Structure

- /                         → MainLayout → Home
- /product/:category        → ProductMainLayout → ProductPage
- /product/:category/:name  → ProductMainLayout → ProductDetailPage
- /blog                     → BlogMainLayout → BlogPage
- /blog/:id                 → BlogMainLayout → BlogDetailPage


