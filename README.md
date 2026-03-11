<div align="center">

<img src="https://img.shields.io/badge/MERN-Stack-00d4aa?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>

# 🌍 SAFARNAMA — Tour & Travel MERN Stack Web Application

> **"Not just scrolling — A journey that flows like your Safarnama."**  
> A modern, fully responsive Tour & Travel management platform built with the MERN Stack.

</div>

---

## � Project Screenshots

### 🏠 Hero / Landing Page
![SAFARNAMA Hero Page](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/hero.png)

> Stunning full-screen hero section with animated typography and seamless navigation.

---

### 🏔️ Explore Travel Packages
![SAFARNAMA Treks Page](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/treks.png)

> Beautifully designed trek cards showcasing India's best destinations — Manali, Rajasthan, Goa, and more. Users can browse and book treks with one click.

---

### 🔐 Login Page
![SAFARNAMA Login](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/login.png)

> Glassmorphism-styled secure login with JWT-based authentication.

---

### 📝 Register Page
![SAFARNAMA Register](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/register.png)

> Clean and intuitive user registration with role-based access (Admin / User).

---

### 🛡️ Admin Dashboard
![SAFARNAMA Admin Dashboard](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/dashboard.png)

> Powerful admin panel with tabbed views to manage **Users**, **Treks**, and **Bookings** in real-time.

---

### ℹ️ About Us Page
![SAFARNAMA About Page](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/about.png)

> Mission, team, and why-choose-us sections with glassmorphism cards.

---

### 🏗️ System Architecture
![SAFARNAMA Architecture](https://raw.githubusercontent.com/alhaj22/Safarnama/main/screenshots/architecture.png)

> Full MERN Stack architecture — React frontend, Node.js/Express REST API, MongoDB via Mongoose, and JWT authentication.

---

## 🚀 Features

### 👤 User Features
- ✅ Register & Login with JWT Authentication
- ✅ Browse all available Travel Packages / Treks
- ✅ Book a Trek with a single click
- ✅ Secure token-based session management
- ✅ Fully responsive design for all devices

### 🛡️ Admin Features
- ✅ Admin Dashboard with tabbed navigation
- ✅ View all registered **Users**
- ✅ **Add**, **Edit**, and **Delete** Trek packages
- ✅ View all **Bookings** with user and trek details
- ✅ Role-based access control (Admin vs User)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js 19, React Router DOM v7, Axios |
| **Styling** | CSS3, GSAP Animations, Lenis Smooth Scroll |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JWT (JSON Web Tokens), bcryptjs |
| **State Management** | React Context API |
| **UI Libraries** | React Icons, Lucide React, React Toastify |
| **Animations** | GSAP v3, @studio-freight/lenis |

---

## 📁 Project Structure

```
Safarnama/
├── backend/
│   ├── index.js              # Express server, API routes, Mongoose models
│   ├── models/               # Mongoose data models
│   ├── routes/               # Express route handlers
│   └── package.json
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx        # Navigation bar
│       │   ├── Hero.jsx          # Landing hero section
│       │   ├── Treks.jsx         # Trek listings with CRUD (Admin)
│       │   ├── Dashboard.jsx     # Admin dashboard
│       │   ├── Footer.jsx        # Footer component
│       │   ├── cards.jsx         # Reusable card component
│       │   └── Horizontal.jsx    # Horizontal scroll section
│       ├── pages/
│       │   ├── Login.jsx         # User login page
│       │   ├── Register.jsx      # User registration page
│       │   └── AboutUs.jsx       # About us page
│       ├── context/
│       │   └── AuthContext.js    # Global auth state (Context API)
│       ├── styles/               # Component CSS files
│       ├── App.js                # Main app with routing
│       └── index.js
│
└── README.md
```

---

## ⚙️ API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login & get JWT token | Public |

### 🏔️ Trek Management
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/treks` | Get all treks | Public |
| `POST` | `/api/treks` | Add a new trek | Admin |
| `PUT` | `/api/treks/:id` | Update a trek | Admin |
| `DELETE` | `/api/treks/:id` | Delete a trek | Admin |

### 📋 Bookings
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/bookings` | Book a trek | User |
| `GET` | `/api/bookings` | Get all bookings | Admin |

### 👥 Users
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/users` | Get all users | Admin |

---

## 🗃️ Database Models

### User Model
```js
{
  name: String,
  email: { type: String, unique: true },
  password: String,           // bcrypt hashed
  role: { type: String, default: "user" }  // "user" | "admin"
}
```

### Trek Model
```js
{
  title: String,    // Trek name
  desc: String,     // Trek description
  img: String       // Image URL
}
```

### Booking Model
```js
{
  userId: String,   // References User._id
  trekId: String,   // References Trek._id
  date: { type: Date, default: Date.now }
}
```

---

## 🔧 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas URI)
- [Git](https://git-scm.com/)

---

### 📥 Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/alhaj22/Safarnama.git
cd Safarnama
```

#### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:
```bash
node index.js
```
> Backend runs on: `http://localhost:5001`

---

#### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file inside the `frontend/` directory:
```env
REACT_APP_API_URL=http://localhost:5001
```

Start the React development server:
```bash
npm start
```
> Frontend runs on: `http://localhost:3000`

---

## 🌐 Deployment

The application is deployed on **Render**:

| Service | Platform | URL |
|---------|----------|-----|
| **Backend API** | Render Web Service | `https://safarnama-backend.onrender.com` |
| **Frontend** | Render Static Site | `https://safarnama-frontend.onrender.com` |

---

## 🔒 Authentication Flow

```
1. User registers → Password hashed with bcryptjs → Saved to MongoDB
2. User logs in → JWT token generated → Stored in localStorage
3. Protected routes → Token sent in Authorization header → Verified by middleware
4. Admin routes → Token role checked → Access granted/denied
```

---

## 🎨 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| **Home / Hero** | `/` | Landing page with animated hero section |
| **Explore Treks** | `/treks` | Browse & book travel packages |
| **About Us** | `/about` | Team info, mission, and project overview |
| **Login** | `/login` | JWT-based user authentication |
| **Register** | `/register` | New user account creation |
| **Admin Dashboard** | `/dashboard` | Manage users, treks & bookings (Admin only) |

---

## 👨‍💻 Developer

**Alhaj** — BCA Student & Full-Stack Developer

> Built with ❤️ as part of an Internship Project on **MERN Stack Backend Development**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/alhaj22/Safarnama?style=social)](https://github.com/alhaj22/Safarnama)
[![GitHub forks](https://img.shields.io/github/forks/alhaj22/Safarnama?style=social)](https://github.com/alhaj22/Safarnama/fork)

</div>
