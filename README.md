# Food Ordering Platform

## Overview

Food Ordering Platform is a comprehensive web application that allows users to order food online. This platform provides a seamless experience with features like user authentication, menus, a shopping cart, secure checkout, a stripe payment gateway, and an admin panel for managing orders and menu items.

## Table of Contents

- Features
- Technology Stack
- Installation Guide
- Usage
- Project Structure

## Features

- **Sign In / Sign Up**: Secure user authentication and account management.
- **Menu**: Display of available food items with different categories.
- **Categories**: Organized categorization of food items for easy navigation.
- **Cart**: Add and remove items in the shopping cart.
- **Checkout Page**: Secure the checkout process with an integrated payment gateway.
- **Payment Gateway Integration**: Process payments securely through a payment gateway.
- **My Orders Page**: Track order history and status.
- **Admin Panel**: Fully dedicated admin panel for managing menu items, categories, and orders.

## Technology Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react) ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)

## Installation Guide

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Food-Ordering-Platform.git
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
4. Install admin dependencies:
   ```bash
   cd admin
   npm install
5. Set up environment variables:\
&nbsp;To properly run the application, you must set up environment variables. Follow these steps:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Create a file named `.env` in the root directory of the backend.\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Add the following environment variables to the `.env` file:

   ```plaintext
   MONGO_URL=<your-mongodb-url>
   JWT_SECRET=<any random secret>
   STRIPE_SECRET_KEY=<your-secret-stripe-key>
   FIREBASE_API_KEY=<your-firebase-api-key>
   FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
   FIREBASE_PROJECT_ID=<your-firebase-project-id>
   FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
   FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
   FIREBASE_APP_ID=<your-firebase-app-id>
   PORT=<port-number>
```
6. Connect backend to frontend and admin:\
&nbsp;Change the BACKEND_URL in frontend/src/utils/Constant.js and admin/src/utils/Constant.js to your backend URL.

## Usage

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
2. Start the frontend server:
   ```bash
   cd frontend
   npm run dev
2. Start the admin server:
   ```bash
   cd admin
   npm run dev
Make sure both the frontend and backend servers are running to access the full functionality of the application.

## Project Structure
```bash
├── Food-Ordering-Platform/
├── admin/             # admin code
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
├── backend/            # backend code
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env            # Environment variables
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
├── frontend/           # frontend code
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
├── README.md
