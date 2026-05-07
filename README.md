# Essenza Luxury Perfume Shop

Essenza is a premium MERN stack e-commerce platform designed for a luxury perfume brand. It features a minimalist black-and-gold aesthetic, dynamic product filtering, and a smooth user experience.

**Live Demo:** [essenza-shop.vercel.app](https://essenza-shop.vercel.app/)

## Tech Stack
- **Frontend:** React (Vite), Framer Motion, Lucide Icons
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Styling:** Vanilla CSS

## Features
- **Royal Collections:** Categorized perfume gallery with smooth animations.
- **Product Details:** In-depth product information and customer reviews.
- **Responsive Design:** Optimized for all screen sizes from mobile to desktop.
- **Contact & About:** Information about the brand's heritage and contact forms.

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd purfume-shop
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` folder:
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```
Seed the database:
```bash
npm run seed
```
Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```
Create a `.env` file in the `client` folder:
```env
VITE_API_URL=http://localhost:5000/api
```
Start the frontend:
```bash
npm run dev
```

## Deployment
- **Backend:** Hosted on Render (Root: `server`)
- **Frontend:** Hosted on Vercel (Root: `client`)

## Author
Developed by Bharathi
