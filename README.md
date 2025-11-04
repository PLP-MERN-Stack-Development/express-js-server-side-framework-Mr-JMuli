🛒 Express.js RESTful API — Week 2 Assignment (PLP Full Stack MERN)

An Express.js-based RESTful API that manages a products resource through CRUD operations.
This project demonstrates routing, middleware, environment variables, authentication, error handling, and advanced API features such as filtering, pagination, and search.

Developed as part of the PLP Academy MERN Full Stack Program (Week 2 Assignment).

✨ Features

CRUD Operations — Create, Read, Update, and Delete products

Middleware Integration — Logging, Authentication, and Error Handling

Filtering, Search & Pagination — Retrieve products based on category, price range, or keyword

Environment Variables — Secure and configurable runtime setup

Structured Routing — Organized RESTful API design following best practices

Postman-ready Endpoints — Easy to test using Postman, curl, or Insomnia

🛠️ Setup Instructions
Prerequisites

Node.js v18+

Git

VS Code

API testing tool (Postman, Insomnia, or curl)

Step 1: Clone the repository
git clone <your-github-repository-url>
cd <repository-folder>

Step 2: Install dependencies
npm install

Step 3: Set environment variables

Create a .env file in your project root with the following contents:

PORT=5000
AUTH_TOKEN=mysecrettoken

Step 4: Run the server

To start the server, use:

npm start


Or for development (auto restart):

npx nodemon server.js


The server should display:

Server running on http://localhost:5000

🌐 Base URL

http://localhost:5000/api/products

📘 API Endpoints
Method	Endpoint	Description	Authentication
GET	/api/products	Get all products (supports filtering, pagination, and search)	❌
GET	/api/products/:id	Retrieve a single product by ID	❌
POST	/api/products	Create a new product	✅
PUT	/api/products/:id	Update an existing product	✅
DELETE	/api/products/:id	Delete a product	✅
🔐 Authentication

Protected routes require a Bearer token in the request header.

Example:

Authorization: Bearer mysecrettoken


If missing or invalid, the API returns:

{ "error": "Unauthorized: Invalid or missing token" }

🔎 Filtering, Search, and Pagination

You can use query parameters to refine your results.

Parameter	Type	Description	Example
search	String	Search by product name	/api/products?search=laptop
category	String	Filter by category	/api/products?category=Pharmacy
minPrice	Number	Minimum price filter	/api/products?minPrice=100
maxPrice	Number	Maximum price filter	/api/products?maxPrice=1000
page	Number	Page number (default: 1)	/api/products?page=2
limit	Number	Items per page (default: 5)	/api/products?limit=10

Example combined request:

GET /api/products?category=Electronics&minPrice=500&page=1&limit=5

📊 Example Requests and Responses
1️⃣ Get All Products

Request

GET http://localhost:5000/api/products


Response

{
  "total": 2,
  "page": 1,
  "limit": 5,
  "data": [
    { "id": 1, "name": "Laptop", "price": 85000, "category": "Electronics" },
    { "id": 2, "name": "Paracetamol", "price": 100, "category": "Pharmacy" }
  ]
}

2️⃣ Get Single Product

Request

GET http://localhost:5000/api/products/1


Response

{
  "id": 1,
  "name": "Laptop",
  "price": 85000,
  "category": "Electronics"
}

3️⃣ Create Product

Request

POST http://localhost:5000/api/products
Authorization: Bearer mysecrettoken
Content-Type: application/json


Body

{
  "name": "Vitamin C",
  "price": 250,
  "category": "Pharmacy"
}


Response

{
  "id": 3,
  "name": "Vitamin C",
  "price": 250,
  "category": "Pharmacy"
}

4️⃣ Update Product

Request

PUT http://localhost:5000/api/products/1
Authorization: Bearer mysecrettoken
Content-Type: application/json


Body

{
  "price": 90000
}


Response

{
  "id": 1,
  "name": "Laptop",
  "price": 90000,
  "category": "Electronics"
}

5️⃣ Delete Product

Request

DELETE http://localhost:5000/api/products/3
Authorization: Bearer mysecrettoken


Response

{ "message": "Product deleted successfully" }

⚠️ Error Handling
Status Code	Example Response	Description
400	{ "error": "Invalid input data" }	Bad request or missing fields
401	{ "error": "Unauthorized: Invalid or missing token" }	Token not provided
404	{ "error": "Product not found" }	Product ID doesn’t exist
500	{ "error": "Server error" }	Internal server issue
🧩 Environment Variables

The API uses the following environment variables:

Variable	Description	Example
PORT	Defines the port where the server runs	5000
AUTH_TOKEN	API access token for protected routes	mysecrettoken
🌱 Future Improvements

Add MongoDB integration for persistent storage

Add input validation using Joi or Express Validator

Implement Swagger API documentation

Include user authentication and role-based access

👤 Author

John Muli
PLP Full Stack MERN — Week 2 Assignment
November 2025

📜 License

MIT License – Free to use, modify, and distribute.