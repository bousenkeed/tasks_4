
// //                           Задача: Управление библиотекой

const books = [
    { id: 1, title: "Война и мир", author: "Лев Толстой", isAvailable: true },
    { id: 2, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", isAvailable: false },
    { id: 3, title: "Улисс", author: "Джеймс Джойс", isAvailable: true },
    { id: 4, title: "Анна Каренина", author: "Лев Толстой", isAvailable: true }
];
const requests = [
    { userId: 101, bookId: 1 },
    { userId: 102, bookId: 2 },
    { userId: 103, bookId: 3 },
    { userId: 104, bookId: 4 }
];

// 1: Проверка доступности книги:

function isBookAvailable(books, bookId) {
    const findedBook = books.find(book => book.id === bookId)
    return findedBook ? findedBook.isAvailable : false;
};
console.log(isBookAvailable(books, 4));

// 2: Поиск книги по автору: 

function findBooksByAuthor(books, author) {
    return books
        .filter(book => book.author === author && book.isAvailable)
        .map(book => book.title)
}

console.log(findBooksByAuthor(books, 'Лев Толстой'));
// 3: Обработка запросов на выдачу книг:

function processRequests(books, requests) {
    requests.forEach(request => {
        const newBook = books.find(book => request.bookId === book.id);
        if (newBook && newBook.isAvailable) {
            newBook.isAvailable = false;
            console.log(`Книга выдана пользователю`)
        } else {
            console.log('Занято');
        }
    })
};
processRequests(books, requests);

// 4: Возврат книги:

function returnBook (books, bookId) {
    const availableBook = books.find(book => book.id === bookId);
    if (availableBook) {
        availableBook.isAvailable = true;
    }
}
returnBook(books, 3);

console.log(isBookAvailable(books, 3));