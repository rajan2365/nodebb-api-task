# User Management REST API

## 📌 Description
This project is a RESTful User Management API built using Node.js, Express.js, and MongoDB. It supports CRUD operations for managing users and follows MVC architecture. Mongoose is used for schema validation and database interaction. All APIs were tested using Postman.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- Postman

---

## 📁 Project Structure
project-root/
├── models/
│ └── User.js
├── controllers/
│ └── userController.js
├── routes/
│ └── userRoutes.js
├── config/
│ └── db.js
├── app.js
├── server.js
├── .env
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

1. Clone the repository
```bash
git clone <your-github-repo-link>
Install dependencies

bash
Copy code
npm install
Create .env file

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/userDB
Run the server

bash
Copy code
npm run dev
🔗 Base URL
bash
Copy code
http://localhost:5000/api/users
📌 API Endpoints
➕ Create User
POST /

json
Copy code
{
  "name": "Rajan Tripathi",
  "email": "rajan@gmail.com"
}
📄 Get All Users
GET /

🔍 Get User by ID
GET /:id

✏️ Update User
PUT /:id

json
Copy code
{
  "role": "developer"
}
❌ Delete User
DELETE /:id

🧪 API Testing
All endpoints were tested using Postman.
Requests were verified for correct status codes, validations, and responses.

✅ Features
CRUD operations

MVC architecture

Schema validation

Default values

Error handling

Postman tested APIs

👤 Author
Rajan Tripathi
Node.js Intern Applicant

📌 Notes
This project was developed as part of an internship task to demonstrate backend development skills using Node.js and MongoDB.

yaml
Copy code

---

If you want, I can:
- 🔥 Make it **shorter**
- 🎯 Make it **more technical**
- 🧠 Add **JWT Auth section**
- 📸 Add **Postman screenshots section**

Just tell me 👍






