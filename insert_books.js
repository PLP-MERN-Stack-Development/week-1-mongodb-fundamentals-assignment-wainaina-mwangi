// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 12.99,
    in_stock: true,
    pages: 197,
    publisher: "HarperCollins"
  },
  {
     title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 16.00,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 18.50,
    in_stock: false,
    pages: 443,
    publisher: "Harper"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    published_year: 1960,
    price: 10.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.99,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
     title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 14.95,
    in_stock: false,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 8.50,
    in_stock: true,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 19.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown Publishing Group"
  },
  {
   title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Spirituality",
    published_year: 1997,
    price: 11.00,
    in_stock: true,
    pages: 229,
    publisher: "New World Library"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 17.00,
    in_stock: false,
    pages: 336,
    publisher: "Crown Business"
  },
 
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 