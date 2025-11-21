# 🎬 MS List — AI-Powered Movie & Show Recommendation Platform

MS List is a MERN-based movie and show recommendation web app that helps users discover content intelligently.  
It includes personalized watchlists, progress tracking, and an AI-enhanced recommendation system powered by text embeddings.

---

## 🚀 Features

### 🔹 User Features
- Browse movies & shows from the database  
- Add items to **MS List (Watchlist)**  
- Track what you're currently watching  
- Get smart AI-based recommendations  
- Explore by genre, popularity & moods  
- Responsive, modern UI built with React

### 🤖 AI Recommendation System
- Generates embeddings for each movie or show  
- Uses cosine similarity to recommend similar content  
- No heavy ML training required  
- Fully works with your own database content  

### 🔹 Admin Panel
- Add, update, and delete movies  
- Manage genres and categories  
- Dashboard for user & content analytics  

---

## 🧠 How AI Recommendation Works
MS List uses **text-embedding vectors** generated from each show's:
- title  
- description  
- summary  
These vectors are compared using cosine similarity to find the closest matches.  
This gives Netflix-style AI recommendations without training a model.

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- React Router  
- Modern UI with custom CSS / Tailwind (optional)

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- OpenAI Embeddings API  

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ms-list.git
cd ms-list
