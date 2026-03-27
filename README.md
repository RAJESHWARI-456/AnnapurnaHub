# Smart Food Wastage Management System

A full-stack MERN application designed to reduce food waste in educational institutions (canteens, hostels, and mess halls).

## Features

- **Meal Pre-booking**: Students can pre-register for meals to provide accurate demand data.
- **Demand Forecasting**: Canteen staff can view aggregated booking data to plan preparation quantities.
- **Inventory Management**: Track stock levels with expiry alerts and historical usage.
- **Waste Logging**: Record end-of-day waste with reasons and weight for trend analysis.
- **Surplus Donation**: Easy portal to offer surplus edible food to local NGOs.
- **Analytics Dashboard**: Comprehensive charts for admins to track waste reduction and cost savings.

## Tech Stack

- **Frontend**: React, Recharts, Lucide-react, Framer-motion
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Auth**: JWT (JSON Web Tokens)
- **Styling**: Vanilla CSS (Custom tokens & Glassmorphism)

## Project Structure

```text
smart-food-wastage/
├── backend/
│   ├── src/
│   │   ├── config/ (Database & Auth config)
│   │   ├── models/ (User, Booking, Inventory, WasteLog, Donation)
│   │   ├── routes/ (REST API endpoints)
│   │   ├── middleware/ (Auth & RBAC)
│   │   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/ (Navbar, Sidebar)
│   │   ├── pages/ (Dashboards for each role)
│   │   ├── context/ (Auth state)
│   │   └── App.jsx
└── README.md
```

## Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` with your `MONGO_URI` and `JWT_SECRET`.
4. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`
