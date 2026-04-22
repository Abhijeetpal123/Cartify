# 🛒 Cartify

A modern e-commerce web application built with React, featuring real-time geolocation, user authentication, and a clean shopping experience.

---

## 🚀 Tech Stack

- **React** – UI library
- **React Router DOM** – Client-side routing
- **Clerk** – Authentication (Sign In / Sign Up / User management) Clerk is a ready made authentication service or web apps. It handles  evrything related to  user login  so you don't  have to build it form  scratch.
- **Axios** – HTTP requests Axios is a popular javascript library used to make http request (like fetching data from an API or sending data to a server  ) 
- **Lucide React** – Icons
- **React Icons** – Additional icon sets
- **Tailwind CSS** – Utility-first styling
- **Nominatim (OpenStreetMap)** – Reverse geocoding for location detection

---

## 📁 Project Structure

```
src/
├── App.jsx              # Root component with routing and layout
├── main.jsx             # Entry point with ClerkProvider
├── index.css            # Global styles
├── Components/
│   └── Navbar.jsx       # Navigation bar with location + auth
└── Pages/
    ├── Home.jsx
    ├── Product.jsx
    ├── Cart.jsx
    ├── About.jsx
    └── Contact.jsx
```

---

## ✨ Features

- **🔐 Authentication** – Sign in / Sign up via Clerk with conditional UI rendering
- **📍 Geolocation** – Detects user's current location using the browser's Geolocation API and reverse-geocodes it using OpenStreetMap's Nominatim service
- **🧭 Navigation** – Active-state highlighted nav links using React Router's `NavLink`
- **🛍️ Cart** – Cart icon with item count badge in the navbar
- **📦 Pages** – Home, Products, Cart, Contact, and About

---

## ⚙️ Getting Started

### Prerequisites

- Node.js ≥ 18
- A [Clerk](https://clerk.com) account and publishable key

### Installation

```bash
git clone https://github.com/your-username/cartify.git
cd cartify
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

## 📍 Location Detection

On load, the app automatically requests the user's geolocation. If granted, it reverse-geocodes the coordinates using:

```
https://nominatim.openstreetmap.org/reverse?lat=...&lon=...&format=json
```

The city and state are then displayed in the navbar. Users can also manually trigger location detection via the dropdown.

---

## 🔒 Authentication

Authentication is handled by [Clerk](https://clerk.com). The `<Show>` component conditionally renders:

- **Signed out** → `<SignInButton />`
- **Signed in** → `<UserButton />` (avatar + account menu)

---

## 📦 Dependencies

```bash
npm install react-router-dom @clerk/react axios lucide-react react-icons
```

---

