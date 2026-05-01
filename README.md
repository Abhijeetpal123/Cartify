# 🛒 Cartify

A modern e-commerce web application built with React, featuring a product carousel, shimmer loading, category filters, real-time geolocation, global state management, and user authentication.

---

## 🚀 Tech Stack

- **React** – UI library
- **React Router DOM** – Client-side routing
- **Clerk** – Authentication (Sign In / Sign Up / User management)
- **Axios** – HTTP requests
- **Swiper.js** – Carousel / slider
- **Context API** – Global state management
- **Lucide React** – Icons
- **React Icons** – Additional icon sets
- **Tailwind CSS** – Utility-first styling
- **Nominatim (OpenStreetMap)** – Reverse geocoding for location detection

---

## 📁 Project Structure

```
src/
├── App.jsx                      # Root component with routing and layout
├── main.jsx                     # Entry point with ClerkProvider
├── index.css                    # Global styles
├── Components/
│   ├── Navbar.jsx               # Navigation bar with location + auth
│   ├── Carousel.jsx             # Hero product carousel
│   ├── ProductCard.jsx          # Single product card UI
│   ├── FilterSection.jsx        # Sidebar category filter buttons
│   ├── Category.jsx             # Top horizontal category pills
│   └── Shimmer.jsx              # Shimmer loading skeleton
├── Context/
│   └── DataContext.jsx          # Global product data state + API fetch
└── Pages/
    ├── Home.jsx
    ├── Product.jsx              # Product listing with filters + shimmer
    ├── Cart.jsx
    ├── About.jsx
    └── Contact.jsx
```

---

## ✨ Features

- **🎠 Product Carousel** – Auto-sliding hero banner showing top 5 products with title, description, image and Shop Now button
- **✨ Shimmer Loading** – Animated skeleton cards shown while products are being fetched
- **🗂️ Category Filter** – Sidebar filter to browse All, Electronics, Men's Clothing, Women's Clothing, and Jewelery
- **🌐 Global State (Context API)** – Product data is fetched once and shared across all components
- **🔐 Authentication** – Sign in / Sign up via Clerk with conditional UI rendering
- **📍 Geolocation** – Detects user's current location and reverse-geocodes it using OpenStreetMap
- **🧭 Navigation** – Active-state highlighted nav links using React Router's NavLink
- **🛍️ Cart** – Cart icon with item count badge in the navbar

---

## 🎠 Carousel Component

The `Carousel` component uses **Swiper.js** to display a looping hero banner of the first 5 products.

```jsx
import { Carousel } from "./Components/Carousel";
```

**Features:**
- Infinite loop sliding
- Navigation arrows
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Product image, title, description and Shop Now button

---

## ✨ Shimmer Component

Displays animated placeholder cards while products load.

```jsx
import { Shimmer } from "./Components/Shimmer";

<Shimmer count={12} />
```

- Uses Tailwind's `animate-pulse` for smooth animation
- Matches the exact layout of `ProductCard` for a seamless transition

---

## 🗂️ Filter Section

Sidebar category filter with active state highlighting.

```jsx
import { FilterSection } from "./Components/FilterSection";

<FilterSection
  activeCategory={activeCategory}
  setActiveCategory={setActiveCategory}
/>
```

**Available Categories:**
- All
- Electronics
- Men's Clothing
- Women's Clothing
- Jewelery

---

## 🃏 Product Card

Displays individual product with image, title, price and Add to Cart button.

```jsx
import { ProductCard } from "./Components/ProductCard";

<ProductCard product={product} />
```

---

## 🌐 Data Context

The `DataContext` provides global access to product data across the entire app.

### Setup

Wrap your app with `DataProvider` in `main.jsx`:

```jsx
import { DataProvider } from "./Context/DataContext";

<DataProvider>
  <App />
</DataProvider>
```

### Usage in any component

```jsx
import { getData } from "../Context/DataContext";

const { data, fetchAllProduct } = getData();
```

### API Used

```
https://api.escuelajs.co/api/v1/products?limit=200
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js >= 18
- A Clerk account and publishable key

### Installation

```bash
git clone https://github.com/Abhijeetpal123/Cartify.git
cd Cartify
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Run the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🗺️ Routes

| Path       | Page     |
|------------|----------|
| `/`        | Home     |
| `/product` | Products |
| `/cart`    | Cart     |
| `/contact` | Contact  |
| `/about`   | About    |

---

## 📦 Dependencies

```bash
npm install react-router-dom @clerk/react axios swiper lucide-react react-icons
```

---

## 📄 License

This project is for personal/portfolio use.