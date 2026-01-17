# ForEver - Full Stack E-Commerce Platform

A modern, feature-rich full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS. ForEver provides a seamless shopping experience with an intuitive user interface, comprehensive admin dashboard, and robust backend infrastructure.

## 🌐 Live Preview

Visit the live application: [https://froever-forntend.vercel.app/](https://froever-forntend.vercel.app/)

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Components](#frontend-components)
- [Admin Dashboard](#admin-dashboard)
- [Payment Integration](#payment-integration)
- [Database Schema](#database-schema)
- [Contributing](#contributing)

## 📱 Project Overview

ForEver is a complete e-commerce solution designed for fashion retailers. It includes three main applications:

1. **Frontend** - Customer-facing shopping platform
2. **Backend** - RESTful API and business logic
3. **Admin Dashboard** - Product and order management interface

The platform supports user authentication, product catalog management, shopping cart functionality, order placement, and secure payment processing.

## ✨ Features

### Frontend Features

- **User Authentication** - Secure login and registration system with JWT tokens
- **Product Catalog** - Browse and search products with advanced filtering
- **Product Details** - Comprehensive product information with multiple images
- **Shopping Cart** - Add/remove products, manage quantities, and real-time updates
- **Wishlist & Search** - Search functionality and product recommendations
- **Order Management** - View order history and tracking
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **User Dashboard** - Manage profile and view order status
- **Payment Integration** - Support for multiple payment methods
- **Notifications** - Real-time toast notifications for user feedback

### Backend Features

- **RESTful API** - Complete REST API for all operations
- **User Management** - Registration, authentication, and profile management
- **Product Management** - CRUD operations for product inventory
- **Cart Management** - Persistent cart storage with MongoDB
- **Order Processing** - Complete order lifecycle management
- **Payment Gateway Integration** - Stripe and cod payment processing
- **Admin Authentication** - Secure admin-only endpoints
- **Cloud Storage** - Cloudinary integration for image uploads
- **Data Validation** - Input validation and error handling
- **CORS Support** - Cross-origin requests handling

### Admin Dashboard Features

- **Product Management** - Add, update, delete, and list products
- **Order Tracking** - View and manage customer orders
- **Image Upload** - Multiple image upload with Cloudinary integration
- **User Management** - Monitor user accounts and activity
- **Loading States** - Visual feedback during operations
- **Authentication** - Secure admin login with token verification

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library with hooks and context API
- **React Router DOM v7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications
- **Lucide React** - Icon library
- **Vite** - Build tool and development server

### Backend

- **Node.js** - JavaScript runtime
- **Express.js v5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Cloud image storage
- **Stripe** - Payment processing
- **Razorpay** - Payment gateway
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Admin Dashboard

- **React 19** - UI library
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - API communication
- **React Loader Spinner** - Loading indicators
- **React Toastify** - Notifications
- **Lucide React** - Icons

## 📁 Project Structure

```
Full-Stack-Ecommerce-Website/
├── frontend/                          # Customer-facing application
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── Navbar.jsx            # Navigation header
│   │   │   ├── Footer.jsx            # Footer component
│   │   │   ├── Hero.jsx              # Hero section
│   │   │   ├── BestSeller.jsx        # Best sellers display
│   │   │   ├── LatestCollection.jsx  # Latest products section
│   │   │   ├── ProductItem.jsx       # Product card component
│   │   │   ├── SearchBar.jsx         # Product search functionality
│   │   │   ├── CartItem.jsx          # Cart item component
│   │   │   └── RelatedProduct.jsx    # Related products suggestion
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx              # Homepage
│   │   │   ├── Collection.jsx        # Products collection page
│   │   │   ├── Product.jsx           # Individual product page
│   │   │   ├── Cart.jsx              # Shopping cart page
│   │   │   ├── PlaceOrder.jsx        # Checkout page
│   │   │   ├── Orders.jsx            # Order history
│   │   │   ├── Verify.jsx            # Payment verification
│   │   │   ├── Login.jsx             # Login/Register page
│   │   │   ├── About.jsx             # About us page
│   │   │   ├── Contact.jsx           # Contact page
│   │   │   └── CartTotal.jsx         # Cart summary component
│   │   ├── context/
│   │   │   └── ShopContext.jsx       # Global state management
│   │   ├── assets/
│   │   │   └── frontend_assets/      # Static assets
│   │   ├── App.jsx                   # Main app component
│   │   └── main.jsx                  # React entry point
│   ├── public/                       # Static files
│   ├── package.json                  # Dependencies
│   ├── vite.config.js               # Vite configuration
│   └── tailwind.config.js           # Tailwind CSS config
│
├── admin/                             # Admin dashboard application
│   ├── src/
│   │   ├── components/               # Admin components
│   │   │   ├── Navbar.jsx            # Admin header
│   │   │   ├── Sidebar.jsx           # Navigation sidebar
│   │   │   ├── Login.jsx             # Admin login
│   │   │   └── LoadingOverlay.jsx    # Loading indicator
│   │   ├── pages/                    # Admin pages
│   │   │   ├── Add.jsx               # Add product page
│   │   │   ├── List.jsx              # Products list page
│   │   │   └── Orders.jsx            # Orders management page
│   │   ├── assets/
│   │   │   └── admin_assets/         # Admin static assets
│   │   ├── App.jsx                   # Admin app component
│   │   └── main.jsx                  # React entry point
│   ├── package.json                  # Dependencies
│   └── vite.config.js               # Vite configuration
│
└── backend/                           # Express.js API server
    ├── config/
    │   ├── mongodb.js                # MongoDB connection
    │   └── cloudinary.js             # Cloudinary setup
    ├── controllers/                  # Business logic
    │   ├── userController.js         # User authentication & profile
    │   ├── productController.js      # Product operations
    │   ├── cartController.js         # Cart management
    │   └── orderController.js        # Order processing & payments
    ├── middlewares/                  # Express middleware
    │   ├── auth.js                   # User authentication
    │   ├── adminAuth.js              # Admin authentication
    │   └── multer.js                 # File upload handling
    ├── model/                        # Database schemas
    │   ├── userModel.js              # User schema
    │   ├── productModel.js           # Product schema
    │   └── orderModel.js             # Order schema
    ├── routes/                       # API routes
    │   ├── userRoutes.js             # User endpoints
    │   ├── productRoutes.js          # Product endpoints
    │   ├── cartRoutes.js             # Cart endpoints
    │   └── orderRoutes.js            # Order endpoints
    ├── server.js                     # Express app setup
    ├── package.json                  # Dependencies
    └── vercel.json                   # Vercel deployment config
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB account (local or Atlas)
- Cloudinary account for image storage
- Stripe and/or Razorpay account for payments

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Full-Stack-Ecommerce-Website
```

### Step 2: Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the required environment variables (see [Environment Variables](#environment-variables) section).

```bash
npm run server  # Start with nodemon for development
# or
npm start      # Start production server
```

The backend server will run on `http://localhost:4000`

### Step 3: Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Step 4: Admin Dashboard Setup

```bash
cd admin
npm install
npm run dev
```

The admin dashboard will be available at `http://localhost:5174` (or another port if 5174 is busy)

## 🔐 Environment Variables

### Backend (.env)

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/forever

# Port
PORT=4000

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Admin Credentials
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=admin_password
```

### Frontend (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

## 🎯 Running the Application

### Development Mode

Open three terminal windows and run:

**Terminal 1 - Backend:**

```bash
cd backend
npm run server
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

**Terminal 3 - Admin:**

```bash
cd admin
npm run dev
```

### Production Build

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

**Admin:**

```bash
cd admin
npm run build
npm run preview
```

## 📡 API Documentation

### Authentication Endpoints

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin-login` - Admin login

### Product Endpoints

- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (Admin only)
- `POST /api/product/remove` - Delete product (Admin only)

### Cart Endpoints

- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart quantity
- `GET /api/cart/get` - Get user cart

### Order Endpoints

- `POST /api/order/place` - Place new order (COD)
- `POST /api/order/stripe` - Place order with Stripe
- `POST /api/order/razorpay` - Place order with Razorpay
- `GET /api/order/userorders` - Get user orders
- `GET /api/order/all` - Get all orders (Admin only)
- `POST /api/order/status` - Update order status (Admin only)

## 🎨 Frontend Components

### Key Components

**ShopContext** - Global state management for:

- User authentication token
- Product list and filtering
- Shopping cart management
- Search functionality
- Currency and delivery charge settings

**Navbar** - Navigation header with:

- Logo and branding
- Product search
- Cart icon with item count
- User account menu

**ProductItem** - Product card displaying:

- Product images
- Name and price
- Add to cart functionality
- Product rating

**Cart** - Shopping cart with:

- Product list with images
- Quantity adjustment
- Price calculation
- Checkout button

**PlaceOrder** - Order checkout with:

- Delivery address form
- Payment method selection
- Order summary
- Payment processing

## 👨‍💼 Admin Dashboard

The admin dashboard provides comprehensive product and order management:

### Admin Functions

- **Product Management** - Add new products with multiple images
- **Inventory Management** - Update product details and prices
- **Order Processing** - View all orders and update status
- **Image Upload** - Upload images to Cloudinary
- **Sales Analytics** - Track order history

### Admin Access

- Secure login with admin credentials
- JWT token-based authentication
- Role-based access control

## 💳 Payment Integration

### Supported Payment Methods

1. **Cash on Delivery (COD)** - Traditional payment on delivery
2. **Stripe** - Credit/debit card payments with Stripe
3. **Razorpay** - Indian payment gateway integration

### Payment Flow

1. User adds items to cart
2. Proceeds to checkout
3. Selects payment method
4. For online payments: redirected to payment gateway
5. Payment verification
6. Order confirmation

## 💾 Database Schema

### User Model

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  address: Object,
  cartData: Object,
  createdAt: Date
}
```

### Product Model

```javascript
{
  name: String,
  description: String,
  price: Number,
  image: Array,
  category: String,
  subCategory: String,
  sizes: Array,
  bestSeller: Boolean,
  date: Date
}
```

### Order Model

```javascript
{
  userId: ObjectId,
  items: Array,
  amount: Number,
  address: Object,
  status: String,
  paymentMethod: String,
  payment: Boolean,
  date: Date
}
```

## 🔄 Workflow

### Customer Workflow

1. **Register/Login** - Create account or log in
2. **Browse** - Explore products in collection
3. **Select** - View product details
4. **Add to Cart** - Select size and quantity
5. **Checkout** - Review cart and proceed
6. **Payment** - Choose and complete payment
7. **Confirm** - Order confirmation and tracking

### Admin Workflow

1. **Login** - Admin authentication
2. **Manage Products** - Add, edit, or remove products
3. **View Orders** - Monitor customer orders
4. **Update Status** - Change order status
5. **Analytics** - Track sales and orders

## 🔒 Security Features

- **Password Hashing** - Bcrypt for secure password storage
- **JWT Authentication** - Token-based user authentication
- **Admin Authorization** - Role-based access control
- **Input Validation** - Data validation on server-side
- **CORS Protection** - Cross-origin request handling
- **Environment Variables** - Sensitive data in .env files
- **Secure Payments** - Integration with trusted payment gateways

## 📦 Dependencies Overview

### Frontend Key Libraries

- React 19 - UI framework
- React Router DOM - Routing
- Tailwind CSS - Styling
- Axios - API requests
- React Toastify - Notifications

### Backend Key Libraries

- Express.js - Web framework
- Mongoose - MongoDB ODM
- JWT - Authentication
- Bcrypt - Password security
- Cloudinary - Image storage
- Stripe - Payment processing

## 🚀 Deployment

The project is configured for deployment on Vercel:

- `frontend/vercel.json` - Frontend deployment config
- `admin/vercel.json` - Admin dashboard deployment config
- `backend/vercel.json` - Backend deployment config

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy with one click

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Ammad** - Full Stack Developer

For more information, visit: [https://froever-forntend.vercel.app/](https://froever-forntend.vercel.app/)

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

---

**Last Updated:** January 2026

**Version:** 1.0.0

**Status:** ✅ Production Ready
