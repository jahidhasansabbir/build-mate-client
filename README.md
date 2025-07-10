# 🏢 BuildMate - Apartment Management Platform

🔗 **Live Site**: [https://your-buildmate-site.web.app/](https://your-buildmate-site.web.app/)

---

## 📜 Project Purpose

**BuildMate** is a role-based apartment management web application designed for property owners and residents. It simplifies the process of apartment agreements, rent payments, and community announcements. Built using **React**, **Firebase**, **Node.js**, and **MongoDB**, it features secure JWT-based authentication, role-specific dashboards, and payment integration via Stripe.

---

## 🧩 Features Implemented

### 🔐 Authentication (Firebase):

- Email/Password login with validation
- Google login
- Password rules enforced (uppercase, lowercase, 6+ chars)
- Logout & user profile shown in navbar
- Redirects to login if not authenticated
- Firebase config secured with `.env`

### 🖥️ Pages & Routing:

* **Home Page**:

  * Image slider with AOS animations that loop on every scroll.
  * About the Building section
  * Active Coupons section showing discount codes in card layout 
  * Apartment Location map using react-leaflet for interactive maps and a fallback image.
* **Apartment Page**:

  * Paginated listing (6 per page)
  * Two input fields allow users to enter a minimum and maximum rent amount
  * Agreement button for logged-in users only
* **Agreement**:

  * Only one agreement allowed per user

---

## 🧑‍💼 Role-Based Dashboards

### 👤 User Dashboard:

* My Profile (basic info, no apartment)
* Announcements

### 👥 Member Dashboard:

* My Profile (with apartment info)
* Make Payment With Stripe (coupon applicable)
* Payment History (table)
* Announcements

### 🛠️ Admin Dashboard:

* Admin Profile (stats on rooms, users)
* Manage Members (remove member role)
* Make Announcement 
* Agreement Requests (accept/reject with role change)
* Manage Coupons (add, delete, toggle availability)

---

## 💳 Stripe Integration

* Make Payment form with rent info
* Apply coupon (validates and updates amount)
* Stripe PaymentIntent used
* Payment info stored in DB (with status & month)

---

## 🛡️ Security

* Firebase Admin SDK for JWT verification
* Protected routes (only accessible by role)

---

## 🧪 Extra Features

* AOS animations triggered on every scroll
* Custom loading indicators
* SweetAlert for success/error messages
* Responsive UI with Tailwind CSS & DaisyUI
* Pagination & search implemented for apartments

---

## 🛠️ Tech Stack

### Frontend

* React 
* Tailwind CSS + DaisyUI
* Firebase Auth
* React Router
* Axios 
* TanStack Query

### Backend

* Node.js
* Express.js
* MongoDB
* Firebase Admin SDK
* Stripe
* JWT
* Dotenv 
* CORS

---

## 📦 Dependencies

This project uses the following core libraries and tools:

| Package                      | Version     | Description                                                                 |
|-----------------------------|-------------|-----------------------------------------------------------------------------|
| `@stripe/react-stripe-js`   | ^3.7.0      | React components for integrating Stripe Elements                           |
| `@stripe/stripe-js`         | ^7.4.0      | Stripe.js library for handling payment flows                               |
| `@tailwindcss/vite`         | ^4.1.11     | Tailwind CSS integration for Vite projects                                 |
| `@tanstack/react-query`     | ^5.81.5     | Powerful data fetching & caching for React apps                            |
| `aos`                       | ^2.3.4      | Animate on Scroll library for triggering animations on scroll              |
| `axios`                     | ^1.10.0     | Promise-based HTTP client for API requests                                 |
| `date-fns`                  | ^4.1.0      | Modern date utility library for formatting and manipulating dates          |
| `firebase`                  | ^11.10.0    | Firebase SDK for authentication and other services                         |
| `leaflet`                   | ^1.9.4      | Mobile-friendly interactive maps library                                   |
| `react`                     | ^19.1.0     | Core React library for building UIs                                        |
| `react-dom`                 | ^19.1.0     | React DOM renderer                                                          |
| `react-icons`               | ^5.5.0      | Popular icons as React components                                          |
| `react-leaflet`             | ^5.0.0      | React wrapper for Leaflet maps                                             |
| `react-loading-indicators` | ^1.0.1      | Beautiful loading animations for React                                     |
| `react-router`              | ^7.6.3      | Declarative routing for React apps                                         |
| `sweetalert2`               | ^11.22.2    | Responsive, customizable popup alerts                                      |
| `swiper`                    | ^11.2.10    | Modern touch slider/swiper component                                       |
| `tailwindcss`               | ^4.1.11     | Utility-first CSS framework for styling                                    |

---

<!-- ## 📦 Installation & Setup Guide

### 1. Clone the Repositories

```bash
# Frontend
https://github.com/your-username/buildmate-client

# Backend
https://github.com/your-username/buildmate-server
```

### 2. Install Frontend Dependencies

```bash
cd buildmate-client
npm install
```

### 3. Setup Frontend `.env`

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

### 4. Install Backend Dependencies

```bash
cd buildmate-server
npm install
```

### 5. Setup Backend `.env`

```env
URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

### 6. Run Locally

```bash
# Start backend
nodemon index.js

# Start frontend
npm run dev
```

--- -->

## 🔚 Final Notes

* Role-based dashboards are strictly enforced via middleware
* JWT issues fixed using Firebase Admin SDK
* All data validated before submission

---

> 🎉 Thank you for visiting 
