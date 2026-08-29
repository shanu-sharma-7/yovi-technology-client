# YoVi Technologies — Corporate Website

A modern, responsive corporate website built for **YoVi Technologies** to present its technology services, business capabilities, and provide a direct channel for potential clients to get in touch.

## 🚀 Overview

The website provides a professional digital presence for YoVi Technologies, focusing on:

* Company introduction
* Technology services
* Industries served
* Technologies & expertise
* Development process
* Contact and project enquiry
* Responsive experience across devices

The design follows a modern, premium dark-themed aesthetic with smooth animations and interactive UI elements.

## ✨ Features

* Modern responsive UI
* Premium dark-themed design
* Animated sections and interactions
* Responsive navigation
* Services showcase
* Industries section
* Technologies section
* Process overview
* Contact / project enquiry form
* Backend-integrated contact submissions
* Admin dashboard for managing enquiries
* Mobile-friendly navigation
* Form validation and submission states

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API

### Admin

* React.js
* Tailwind CSS
* React Router
* REST API integration

## 📂 Project Structure

```text
YoVi/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── admin/
    ├── src/
    ├── public/
    ├── package.json
    └── .gitignore
```

## 📩 Contact Enquiry System

Visitors can submit a project enquiry through the website by providing information such as:

* Name
* Email
* Phone
* Company
* Required service
* Project description

The submitted enquiry is sent to the backend API and can be viewed from the admin dashboard.

## 🔐 Admin Dashboard

The admin panel provides a centralized workspace for managing website enquiries.

Current sections include:

* Dashboard
* Contacts
* Users
* Settings

Admin authentication and protected access can be used to keep the management area separate from the public website.

## ⚙️ Environment Variables

Create a `.env` file in the required project directory.

Example:

```env
VITE_API_URL=your_backend_api_url
```

For the backend, add the required environment variables such as:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> Never commit your `.env` file or real API keys, database credentials, or secrets to GitHub.

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Install dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd backend
npm install
```

For the admin panel:

```bash
cd admin
npm install
```

### 3. Configure environment variables

Create the required `.env` files and add your local configuration.

### 4. Start the development servers

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

Admin:

```bash
npm run dev
```

## 🌐 Deployment

The application can be deployed using services such as:

* Vercel for frontend/admin
* Render or similar platforms for the backend
* MongoDB Atlas for database hosting

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## 🎯 Project Goal

The goal of this project is to create a professional technology-company website that communicates YoVi Technologies' capabilities while providing potential clients with a simple way to start a project conversation.

## 📌 Status

**Project Status:** Development / Deployment Ready

## 👨‍💻 Developer

Developed using the MERN stack with a focus on modern UI, responsive design, API integration, and scalable project architecture.
