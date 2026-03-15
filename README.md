# 👕 TryNex - Next-Gen AI Virtual Try-On Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC.svg)](https://tailwindcss.com/)
[![Google GenAI](https://img.shields.io/badge/Google_GenAI-Integration-orange.svg)](https://ai.google.dev/)

**TryNex** is an innovative, AI-powered fashion platform built for **Electrothon 8.0**. It revolutionizes the online shopping experience by allowing users to virtually try on clothing with photographic realism, manage their digital wardrobe, and receive occasion-based outfit recommendations before making a purchase.

![TryNex Platform](./public/vite.svg)

## 🎯 **Vision & Mission**

**Vision**: To bridge the gap between digital and physical retail, creating a world where online apparel shopping is highly immersive, confident, and return-rate minimal.

**Mission**: Empowering consumers with highly accurate, AI-generated virtual try-ons and intelligent wardrobe management, backed by the latest Generative AI technologies.

---

## 🚀 **Key Features**

### 🤖 **AI Virtual Try-On**
- **Hyper-Realistic Rendering**: See exactly how apparel fits on your body using cutting-edge Generative AI.
- **Fast Generation**: Average render time of under 15 seconds.
- **Image Uploads**: Easily upload your photo and the garment's image to see an instant match synthesis.

### 👗 **Digital Wardrobe Collection**
- **Inventory Management**: Digitize your existing closet.
- **Mix & Match**: Effortlessly pair different tops and bottoms in your personal collection.
- **Smart Cataloging**: Keep track of what you own to avoid redundant purchases.

### ✨ **Occasion-Based Recommender**
- **AI Stylist**: Not sure what to wear for a wedding, job interview, or casual outing? The AI recommends outfits tailored to the specific occasion.
- **Personalized Options**: Suggestions based on your existing wardrobe and trending fashion.

### 👥 **User Authentication & History**
- **Secure Authentication**: Built-in credential state management using Context API.
- **Try-On History**: Easily view past interactions, compare different fits, and recreate favorites.
- **Persistent Sessions**: Fluid and responsive user experience spanning across the platform.

---

## 🛠️ **Technology Stack**

### **Frontend** (React SPA)
`json
{
  "framework": "React 19.1.1",
  "styling": "Tailwind CSS (v4)",
  "routing": "React Router DOM",
  "state": "Context API",
  "build": "Vite v7",
  "linting": "ESLint"
}
`

### **AI & Cloud Integration**
- **Generative Models**: Built directly on Google Gemini via @google/genai.
- **Dynamic Processing**: Facilitates the natural language prompting, hyper-realistic generation parameters, and logic essential to our occasion recommendations and virtual try-ons.
`

---

## 🏗️ **Project Architecture**

Our repository leverages an isolated and domain-driven frontend structural pattern suitable for React Single Page Applications:

- **/src/pages/**: Holds core operational components and major application views (e.g., TryOn.jsx, WardrobeCollection.jsx).
- **/src/components/**: Houses heavily reusable functional UI components such as navigation loops, input masks, and the UserMenu auth component.
- **/src/context/**: Manages global persistent states. Our built-in AuthContext provides login distribution app-wide contextually.
- **App.jsx + main.jsx**: Dictate strict system routing patterns mapping specific states mapped over the Vite environment.

---

## ⚡ **Quick Start**

### **Prerequisites**
- **Node.js** 18+ and npm
- **Git** for version control

### **1. Clone Repository**
`ash
git clone https://github.com/yourusername/trynex-electrothon-8.0.git
cd "trynex-electrothon-8.0"
`

### **2. Install Dependencies**
`ash
npm install
`

### **3. Start Development Server**
`ash
npm run dev
`

### **4. Access Demo Accounts**
`javascript
// Built-in demo accounts for testing:
const demoAccounts = {
  user: { email: "demo@trynex.com", password: "any" }
};
`

---

## 🎯 **User Workflows**

### **👤 The Trying-on Journey**
1. **Explore Landing Page** → Check out features and click "Try It Now".
2. **Account Sign In** → Global sign-in state activates to manage your session.
3. **Upload Photos** → On the Try-On page, supply a base photo of the user and the garment.
4. **AI Generation** → Evaluates draping, physics, and lighting to merge inputs.
5. **View Results** → Save the photo, add it to your collection, or try another item.
6. **Revisit History** → Access your TryOnHistory to examine past choices.

### **👗 Styling & Recommendations**
1. **Access Wardrobe** → Navigate to your Collection to view previously uploaded apparel.
2. **Select Occasion** → Head to Occasion-Based Outfit Recommender and input an upcoming event.
3. **AI Pairings** → The system returns customized pairings dynamically.

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### **Experience the Future of Fashion** ✨

**Built with ❤️ for Electrothon 8.0**

</div>



