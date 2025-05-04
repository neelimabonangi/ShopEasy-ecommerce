# ShopEase E-commerce Search

A modern e-commerce platform built with React, TypeScript, and Tailwind CSS, featuring product search and detailed product views.

## Features

- 🔍 Real-time product search with partial matching
- 📱 Responsive design that works on all devices
- 🎨 Modern UI with smooth transitions
- 🛍️ Detailed product views
- 🔄 Loading states and error handling
- 📣 Toast notifications for user feedback

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React Context providers
├── data/            # Mock data and constants
├── pages/           # Page components
└── types/           # TypeScript type definitions
```

### Key Components

- `ProductsPage`: Main product listing and search page
- `ProductDetailPage`: Detailed view of individual products
- `SearchBar`: Search input with real-time filtering
- `ProductGrid`: Responsive grid layout for product cards
- `ProductCard`: Individual product display component

## Built With

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Lucide React Icons
- React Hot Toast

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Code Style

The project uses ESLint and TypeScript for code quality and type safety. Configuration can be found in:
- `eslint.config.js`
- `tsconfig.json`

## Features

### Product Search
- Real-time search functionality
- Partial matching on product names and brands
- Loading states during search
- URL-based search parameters

### Product Details
- Comprehensive product information
- High-resolution product images
- Related specifications and features
- Back navigation to search results

### UI/UX
- Responsive grid layouts
- Loading skeletons
- Error handling with toast notifications
- Smooth page transitions