# 📘 MongoDB Week 1 Assignment – Bookstore Database

This project demonstrates the use of MongoDB to design and query a bookstore database. The assignment includes basic CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization.

---

## 📂 Project Structure

```plaintext
📁 mongodb-week1-yourname/
├── insert_books.js           # Script to insert 10 book documents into the collection
├── queries.js                # MongoDB queries for all tasks (CRUD, advanced, aggregation, indexing)
├── README.md                 # This file – instructions and project summary
├── compass_screenshot.png    # Screenshot showing the collection and data in MongoDB Compass
🧪 What This Project Does
Creates a MongoDB database named plp_bookstore

Creates a collection named books

Inserts at least 10 sample book documents

Performs various queries, updates, and deletions

Demonstrates aggregation pipelines and indexing

🛠️ How to Run This Project
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR-USERNAME/mongodb-week1-yourname.git
cd mongodb-week1-yourname
2. Insert Book Data
Use the provided insert_books.js script to populate your MongoDB database with sample data:

bash
Copy
Edit
mongosh < insert_books.js
This will:

Use the plp_bookstore database

Insert 10 documents into the books collection

3. Run MongoDB Queries
Open the MongoDB shell (mongosh) or MongoDB Compass and copy-paste the queries from queries.js to test the following:

Basic and advanced find queries

Update and delete operations

Aggregation pipelines

Index creation and performance testing with .explain()

📸 Screenshot of MongoDB Compass
The following screenshot shows my books collection populated with data in MongoDB Compass:


🧾 Summary of Work
Feature	Description
Database Name	plp_bookstore
Collection Name	books
Documents Inserted	10 sample book documents
Script Used	insert_books.js
Queries File	queries.js
Screenshot File	compass_screenshot.png

📌 Notes
The data used for the books includes fields like title, author, genre, published_year, price, in_stock, pages, and publisher.

Indexes were created on the title field and on the compound key (author, published_year) for performance.

Pagination, sorting, projections, and aggregations were tested and verified.

✅ Completed By
Erastus Wainaina
MongoDB Week 1 – PLP Data Layer Fundamentals
Date: June 2025


