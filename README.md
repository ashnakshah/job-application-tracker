💼 Job Application Tracker

A full-stack web application that helps users track and manage job applications through different stages of the hiring process.

---

📌 Overview

This project allows users to:

* Add job applications with company and role details
* Track application status (Applied, Interview, Offer, Rejected)
* Update status dynamically without page reload
* Delete applications
* View all applications in a clean, organized UI

---

🧠 Motivation

Managing multiple job applications can get messy quickly.
I built this tool to create a simple, centralized way to track progress and stay organized during the job search process.

---

🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript (Vanilla JS)
* Fetch API

**Backend**

* Python
* Flask

**Database**

* SQLite

---

⚙️ Features

* ✅ Create new job applications
* 🔄 Update application status (using PUT requests)
* ❌ Delete applications
* 📋 Dynamic rendering of job list
* 🔍 (Optional) Search and filter functionality
* 🎯 RESTful API design

---

🧱 Project Structure

job-tracker/
│
├── backend/
│   ├── app.py
│   └── database.db
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

---

🔌 API Endpoints

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| GET    | /jobs     | Get all jobs            |
| POST   | /jobs     | Create a new job        |
| PUT    | /jobs/:id | Update job status/notes |
| DELETE | /jobs/:id | Delete a job            |

---

🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ashnakshah/job-application-tracker.git
cd job-application-tracker
```

### 2. Set up backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # (Mac/Linux)
venv\Scripts\activate     # (Windows)

pip install flask flask-cors
python app.py
```

### 3. Run frontend

* Open `frontend/index.html` in your browser
  OR
* Use a live server (recommended)

---

⚠️ Environment Notes

* Backend runs on: `http://127.0.0.1:5000`
* Make sure CORS is enabled in Flask

---

🚀 Future Improvements

* User authentication (login/signup)
* Persistent user accounts
* Better UI/UX design
* Deploy backend + frontend
* Add notes editing UI
* Pagination for large datasets

---

📚 What I Learned

* Building RESTful APIs with Flask
* Handling frontend-backend communication using `fetch`
* Managing application state without page reload
* Structuring a full-stack project
* Debugging async JavaScript issues

---

🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

📄 License

This project is open source and available under the MIT License.
