# 3D Printing Database

A comprehensive backend database system for managing 3D printing services, including user management, product catalog, shopping cart, and order processing.

## 🚀 Features

- **User Management**: User registration and authentication with secure password hashing
- **Product Catalog**: Support for both pre-designed and custom 3D printing products
- **Shopping Cart**: Add products to cart with quantity management
- **Order Processing**: Complete order workflow from pending to delivery
- **Billing System**: Address management and order tracking
- **RESTful API**: Clean and organized API endpoints

## 🏗️ Architecture

This project uses a modern Node.js backend with MongoDB for data persistence:

- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Environment**: ES6 modules with modern JavaScript features
- **Development**: Nodemon for hot reloading

## 📊 Database Schema

### Models Overview

1. **User Model**

   - User authentication and profile management
   - Fields: firstName, lastName, email, hashedPassword

2. **Product Model**

   - 3D printing product catalog
   - Fields: name, type (Pre-designed/Custom), price, description, driveLink

3. **Cart Model**

   - Shopping cart functionality
   - Fields: userId, productId, quantity

4. **Order Model**

   - Order management and tracking
   - Fields: userId, billingAddress, status, total, shippingFees
   - Status: Pending → Printing → Shipping → Delivered

5. **BillingAddress Model**

   - Customer billing information
   - Fields: userId, name, phoneNumber, address

6. **OrderSummary Model**
   - Detailed order breakdown
   - Fields: orderId, productId, quantity

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/mostafa3ssa/3D_Printing_DB.git
   cd 3D_Printing_DB
   ```

2. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:

   ```env
   MONGO_URI=your_mongo_uri
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000` (or your specified PORT).

## 📁 Project Structure

```
3D_Printing_DB/
├── backend/
│   ├── models/                 # Database models
│   │   ├── user.model.js
│   │   ├── product.model.js
│   │   ├── cart.model.js
│   │   ├── order.model.js
│   │   ├── billingAddress.model.js
│   │   └── orderSummary.model.js
│   ├── db.js                  # Database connection
│   ├── server.js              # Main server file
│   ├── package.json           # Dependencies and scripts
│   └── .env                   # Environment variables
└── README.md                  # Project documentation
```

## 🔧 API Endpoints

### Base URL

```
http://localhost:5000
```

### Available Endpoints

- `GET /` - Health check endpoint
- Additional endpoints can be added for CRUD operations on each model

## 🗄️ Database Operations

### User Management

- Create user accounts with secure password hashing
- Unique email validation
- User profile management

### Product Management

- Add pre-designed and custom 3D printing products
- Product catalog with pricing and descriptions
- Google Drive integration for file storage

### Order Processing

- Complete order lifecycle management
- Status tracking from pending to delivery
- Billing address integration
- Order summary with detailed breakdowns

## 🚀 Development

### Running in Development Mode

```bash
npm start
```

This uses nodemon for automatic server restarts on file changes.

### Production Deployment

```bash
npm run start:prod
```

## 🔒 Security Features

- Password hashing for secure user authentication
- Input validation through Mongoose schemas
- Environment variable protection for sensitive data

## 📝 Environment Variables

| Variable    | Description               | Default  |
| ----------- | ------------------------- | -------- |
| `MONGO_URI` | MongoDB connection string | Required |
| `PORT`      | Server port               | 5000     |

**Note**: This is a backend-only project. Frontend implementation would be needed for a complete 3D printing service application.
