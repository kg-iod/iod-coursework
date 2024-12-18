const book = {
  title: 'My Book',
  author: 'John Doe',
  description: 'A book about the Doe family',
  numPages: 250,
};

console.log(book.title);
console.log(book.author);
console.log(book.description);
console.log(book.numPages);

console.log(book);

book.description = 'My new description';
console.log(book.description);

book['description'] = 'Yet another new description';
console.log(book.description);

const books = [book, book, book, book, book];
console.log(books);

const books2 = [];
books2.push(book);
books2.push(book);
books2.push(book);
books2.push(book);
books2.push(book);

console.log(books2);
