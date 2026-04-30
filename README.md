# 🛒 Amazon Clone (Frontend)

A responsive Amazon-inspired e-commerce web application built using HTML, CSS, and JavaScript.
This project demonstrates multi-page navigation, dynamic product rendering, and a persistent cart system.

---

## 🚀 Live Demo

👉 https://princemuchhal1.github.io/Amazon-Clone/

---

## 📌 Features

* 🏠 **Homepage with categories**
* 📦 **Category page with product listings**
* 🔍 **Search functionality**

  * Real-time filtering on category page
  * Cross-page search using URL parameters
* 🛍️ **Product page**

  * Dynamic content rendering based on selected product
* 🛒 **Cart system**

  * Add to cart
  * Persistent cart using `localStorage`
* 📱 **Responsive design**

  * Works across mobile, tablet, and desktop

---

## 🧠 Key Concepts Used

* DOM Manipulation
* Event Handling (`addEventListener`)
* Local Storage (for cart persistence)
* URL Parameters (`URLSearchParams`)
* Responsive Design (Flexbox + CSS Grid)

---

## 🏗️ Project Structure

```text
Amazon-Clone/
│
├── index.html        # Homepage
├── category.html     # Product listing page
├── product.html      # Product details page
├── design.css        # Styling
├── script.js         # All JavaScript logic
├── images/           # Product & UI images
```

---

## ⚙️ How It Works

### 🔹 Search System

* User enters search query
* Redirects to category page with query
* Products are filtered dynamically

### 🔹 Cart System

* Items added increase cart count
* Cart data stored using `localStorage`
* Data persists across page reloads

### 🔹 Dynamic Product Page

* Product ID passed via URL
* JavaScript updates content based on selection

---

## 📷 Screenshots

*(Add screenshots here for better presentation)*

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📈 Future Improvements

* Add full cart page with item details
* Store multiple products in cart (not just count)
* Add sorting (price low → high)
* Improve UI animations and transitions
* Convert to React for scalability

---

## ⭐ Notes

This project was built to strengthen frontend fundamentals and understand real-world application flow in e-commerce websites.
