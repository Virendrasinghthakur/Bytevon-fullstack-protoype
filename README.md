# Bytevon Full-Stack Developer Assessment

## Developer

**Virendra Singh**

---

## Company

**Bytevon**

---

## Project Overview

This project was developed as part of the Full-Stack Developer assessment for Bytevon.

The objective of the assessment was to build a simple end-to-end feature consisting of:

- Backend API development
- Frontend implementation
- Responsive UI design
- Property investment cards

This implementation is intended as a **prototype application** demonstrating the proposed design and functionality.

---

# Projects Included

This assessment contains two implementations:

## 1. HTML Prototype

A static HTML/CSS prototype was created to demonstrate the initial UI/UX design and layout concepts.

Features:

- Landing page design
- Property showcase section
- Investment sections
- Responsive layout
- Footer and CTA sections

---

## 2. React + FastAPI Application

A complete full-stack implementation using:

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python

Features:

- Property API endpoint
- Dynamic property cards
- Responsive design
- Annual yield display
- Investment section
- Modern landing page UI

---

# API Endpoint

```text
GET /api/properties
```

Returns:

- Property ID
- Name
- Location
- Price
- Image
- Annual Yield

---

# Project Structure

```text
assessment/
│
├── html-prototype/
│
├── frontend/
│
├── backend/
│
└── README.md
```

---

# Running the HTML Prototype

Open the HTML file directly in the browser.

```text
html-prototype/index.html
```

---

# Running the Frontend

```bash
cd frontend

npm install

npm run dev
```

The application will start on:

```text
http://localhost:5173
```

---

# Running the Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend server:

```text
http://127.0.0.1:8000
```

API endpoint:

```text
http://127.0.0.1:8000/api/properties
```

---

# Demo Video

https://drive.google.com/file/d/1nRpmEAHdn81hwucUW_lMApLbqRfaOeIX/view?usp=drive_link

---

# Notes

- This submission is a prototype implementation.
- The UI design was initially explored through the HTML prototype.
- The React application provides the dynamic implementation using data from the FastAPI backend.
- The application is fully responsive and optimized for different screen sizes.

---

## Submitted By

**Virendra Singh**

Full-Stack Developer Assessment Submission

Bytevon