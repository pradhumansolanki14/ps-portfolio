# 🚀 Full Stack Portfolio Platform (MERN)

A production-ready **full-stack portfolio platform** built with the MERN stack, featuring a powerful admin dashboard, project management system, client/lead tracking, and review moderation.

Designed with scalability, clean architecture, and real-world use cases in mind.

---

## 🌐 Live Links

* Frontend: *(add after deployment)*
* Backend API: *(add after deployment)*

---

## 🧠 Overview

This application serves as a **developer portfolio system** where:

* Admin can manage projects, clients, and reviews
* Visitors can view projects and submit inquiries
* Leads are tracked and converted into clients
* Reviews are moderated before public display

---

## 🛠 Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS
* Framer Motion
* Axios

### 🔹 Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

### 🔹 Integrations

* Cloudinary → Image storage & optimization
* Nodemailer → Email notifications

---

## ⚙️ Key Features

### 🔐 Authentication

* Secure admin login using JWT
* Protected routes for admin panel

### 📁 Project Management

* Create, update, delete projects
* Upload images via Cloudinary
* Categorize projects (Frontend / Backend / Fullstack)

### 👨‍💼 Client & Lead System

* Contact form → stored as leads
* Lead lifecycle:

  * `lead → ongoing → completed`
* Link clients to projects

### ⭐ Review System

* Public users submit reviews
* Admin approval workflow
* Only approved reviews are visible

### 📊 Dashboard

* Real-time stats:

  * Total projects
  * Leads / ongoing / completed clients
  * Reviews
* Activity tracking

### ☁️ Cloudinary Integration

* Image upload + deletion
* Organized folder structure
* Public URL storage in DB

### 🧹 Automation

* Auto-cleanup of old leads using cron jobs

---

## 📁 Project Structure

```id="pf9k3n"
portfolio/
  ├── frontend/        # React client
  ├── backend/         # Node + Express API
  ├── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** directory:

```id="z5k4l1"
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

CLOUD_NAME=<your_cloudinary_name>
CLOUD_API_KEY=<your_api_key>
CLOUD_API_SECRET=<your_api_secret>

EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>
```

⚠️ Never commit `.env` to GitHub.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```id="r8dp8m"
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

---

### 2️⃣ Install dependencies

#### Backend

```id="b5c3k9"
cd backend
npm install
```

#### Frontend

```id="x7d2qm"
cd frontend
npm install
```

---

### 3️⃣ Run the application

#### Start backend server

```id="t1y3n2"
npm run dev
```

#### Start frontend

```id="m8s2l9"
npm run dev
```

---

## 🔐 Admin Setup

Admin is not created automatically.

You can:

* Insert manually via MongoDB Atlas
* OR use a local script (recommended for development only)

👉 Password must be **hashed using bcrypt**

---

## 📦 API Structure (Sample)

```id="f2k1jd"
/api/auth
/api/projects
/api/contacts
/api/reviews
/api/dashboard
```

---

## 📌 Important Notes

* MongoDB Atlas is used for production database
* Images are stored on Cloudinary (no local uploads)
* `.env` file is excluded for security
* Designed for real-world portfolio + freelance usage

---

## 🎯 Future Improvements

* Role-based access control
* Image optimization pipelines
* Analytics enhancements
* Dark/light theme persistence

---

## 📄 License

This project is intended for **personal portfolio and demonstration purposes**.

---

## 🙌 Author

Developed by **Pradhuman Solanki**
