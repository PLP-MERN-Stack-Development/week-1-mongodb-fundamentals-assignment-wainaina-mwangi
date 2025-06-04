// =======================
// 📚 Basic CRUD Operations
// =======================

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" });


// =======================
// 🔍 Advanced Queries
// =======================

// 6. Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// 7. Projection: Return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 8. Sorting by price ascending
db.books.find().sort({ price: 1 });

// 9. Sorting by price descending
db.books.find().sort({ price: -1 });

// 10. Pagination - Page 1 (5 books)
db.books.find().skip(0).limit(5);

// 11. Pagination - Page 2 (next 5 books)
db.books.find().skip(5).limit(5);


// =======================
// 📊 Aggregation Pipelines
// =======================

// 12. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
]);

// 13. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 14. Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: ["$published_year", 0, 3] },
          "0s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  }
]);


// =======================
// ⚡ Indexing
// =======================

// 15. Create an index on the title field
db.books.createIndex({ title: 1 });

// 16. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 17. Explain query performance with index
db.books.find({ title: "The Alchemist" }).explain("executionStats");
