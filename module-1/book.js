// Create a book object
const book = {
  title: 'My Book',
  author: 'John Doe',
  description: 'A book about the Doe family',
  numPages: 250,
};

// Console log all the book properties
console.log(book.title);
console.log(book.author);
console.log(book.description);
console.log(book.numPages);

console.log(book);

// Change the book description
book.description = 'My new description';
console.log(book.description);

book['description'] = 'Yet another new description';
console.log(book.description);

// Add 5 books to an array
const books = [book, book, book, book, book];
console.log(books);

const books2 = [];
books2.push(book);
books2.push(book);
books2.push(book);
books2.push(book);
books2.push(book);

console.log(books2);

// This is a user object
const user = {
  firstName: 'My Book',
  lastName: 'John Doe',
  email: 'xxx@yyy.com',
  password: '123',
};
