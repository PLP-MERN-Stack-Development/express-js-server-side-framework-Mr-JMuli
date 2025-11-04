# 🛒 Express.js RESTful API — Week 2 Assignment (PLP Full Stack MERN)

An **Express.js-based RESTful API** for managing a **Products** resource.  
This project demonstrates CRUD operations, routing, middleware, authentication, environment variables, and structured API documentation.

Developed as part of the **PLP Academy Full Stack MERN Program (Week 2 Assignment)**.

---

## ⚙️ Setup & Run Instructions

### Step 1: Clone the repository

```bash
git clone <your-repository-url>
cd <repository-folder>
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Set environment variables

Create a `.env` file in your project root with the following contents:

```env
PORT=5000
AUTH_TOKEN=mysecrettoken
```

### Step 4: Run the server

To start the server, use:

```bash
npm start
```

Or for development (auto restart):

```bash
npx nodemon server.js
```

The server should display:

```
Server running on http://localhost:5000
```

---

## 🌐 Base URL

```
http://localhost:5000/api
```

---

## 📘 API Endpoints Documentation

| Method | Endpoint           | Description               | Auth Required |
|--------|--------------------|---------------------------|----------------|
| GET    | `/api/products`     | Get all products          | ❌ No |
| GET    | `/api/products/:id` | Get a single product by ID| ❌ No |
| POST   | `/api/products`     | Create a new product      | ✅ Yes |
| PUT    | `/api/products/:id` | Update a product by ID    | ✅ Yes |
| DELETE | `/api/products/:id` | Delete a product by ID    | ✅ Yes |

**Authentication:**  
Protected routes require the header:  
```
Authorization: Bearer mysecrettoken
```

---

## 📊 Example Requests & Responses

### ✅ 1. Get All Products

**Request**
```bash
GET /api/products
```

**Response**
```json
[
  {
    "id": 1,
    "name": "Panadol",
    "price": 100,
    "description": "Pain relief tablet"
  }
]
```

---

### ✅ 2. Get Product by ID

**Request**
```bash
GET /api/products/1
```

**Response**
```json
{
  "id": 1,
  "name": "Panadol",
  "price": 100,
  "description": "Pain relief tablet"
}
```

---

### ✅ 3. Create Product

**Request**
```bash
POST /api/products
Authorization: Bearer mysecrettoken
Content-Type: application/json
```

**Body**
```json
{
  "name": "Aspirin",
  "price": 150,
  "description": "Used for pain and inflammation"
}
```

**Response**
```json
{
  "message": "Product created successfully",
  "product": {
    "id": 2,
    "name": "Aspirin",
    "price": 150,
    "description": "Used for pain and inflammation"
  }
}
```

---

### ✅ 4. Update Product

**Request**
```bash
PUT /api/products/1
Authorization: Bearer mysecrettoken
Content-Type: application/json
```

**Body**
```json
{
  "price": 120
}
```

**Response**
```json
{
  "message": "Product updated successfully",
  "product": {
    "id": 1,
    "name": "Panadol",
    "price": 120,
    "description": "Pain relief tablet"
  }
}
```

---

### ✅ 5. Delete Product

**Request**
```bash
DELETE /api/products/1
Authorization: Bearer mysecrettoken
```

**Response**
```json
{
  "message": "Product deleted successfully"
}
```

---

## 🧪 Testing the API

You can test the API using **Postman**, **Insomnia**, or the **curl** command-line tool.

### 🔹 Using Postman

1. Open Postman and create a new request.  
2. Enter the request URL (e.g. `http://localhost:5000/api/products`).  
3. Choose the HTTP method (GET, POST, PUT, DELETE).  
4. For protected routes (POST, PUT, DELETE), go to the **Headers** tab and add:
   ```
   Key: Authorization
   Value: Bearer mysecrettoken
   ```
5. For POST and PUT requests, set the **Body** to “raw” and select “JSON” type.
6. Click **Send** and check the response.

### 🔹 Using curl

**Get all products**
```bash
curl http://localhost:5000/api/products
```

**Create a product**
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Authorization: Bearer mysecrettoken" \
  -H "Content-Type: application/json" \
  -d '{"name":"Vitamin C","price":250,"description":"Boosts immunity"}'
```

**Update a product**
```bash
curl -X PUT http://localhost:5000/api/products/1 \
  -H "Authorization: Bearer mysecrettoken" \
  -H "Content-Type: application/json" \
  -d '{"price":300}'
```

**Delete a product**
```bash
curl -X DELETE http://localhost:5000/api/products/1 \
  -H "Authorization: Bearer mysecrettoken"
```

---

## 📁 Folder Structure

```
project/
├── server.js
├── routes/
│   └── productRoutes.js
├── controllers/
│   └── productController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── .env
├── package.json
└── README.md
```

---

## 🧠 Author

**John Muli**  
🎓 PLP Full Stack MERN Program  
💼 GitHub: [your-github-link]  
📧 Email: [your-email]
